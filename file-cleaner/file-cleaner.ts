import fs from "fs";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function deleteJsDuplicates(rootDir: string) {
  const jsFiles = new Map<string, string[]>();
  const tsFiles = new Map<string, string[]>();

  // Traverse directory recursively and group files by extension
  function traverse(dir: string) {
    const files = fs.readdirSync(dir, { withFileTypes: true, recursive: true });

    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        traverse(fullPath);
      } else {
        const ext = path.extname(fullPath);
        const dirPath = path.dirname(fullPath);
        const baseName = path.basename(fullPath, ext);

        if ([".js", ".jsx"].includes(ext)) {
          jsFiles.set(dirPath, [...(jsFiles.get(dirPath) || []), baseName]);
        } else if ([".ts", ".tsx"].includes(ext)) {
          tsFiles.set(dirPath, [...(tsFiles.get(dirPath) || []), baseName]);
        }
      }
    }
  }

  traverse(rootDir);

  // Find JS files that have TS equivalents
  const toDelete: string[] = [];
  for (const [dir, jsBaseNames] of jsFiles) {
    const tsBaseNames = tsFiles.get(dir) || [];
    jsBaseNames.forEach((base) => {
      if (tsBaseNames.includes(base)) {
        const jsPath = path.join(dir, `${base}.js`);
        const jsxPath = path.join(dir, `${base}.jsx`);

        if (fs.existsSync(jsPath)) toDelete.push(jsPath);
        if (fs.existsSync(jsxPath)) toDelete.push(jsxPath);
      }
    });
  }

  if (toDelete.length === 0) {
    console.log("No duplicate JS/JSX files found");
    process.exit(0);
  }

  // Confirm deletion
  console.log(`Found ${toDelete.length} JS/JSX files with TS equivalents:\n`);
  console.log(toDelete.join("\n"));

  rl.question("\nDelete these files? (y/N) ", (answer) => {
    if (answer.toLowerCase() === "y") {
      toDelete.forEach((file) => {
        try {
          fs.unlinkSync(file);
          console.log(`Deleted: ${file}`);
        } catch (err) {
          console.error(`Error deleting ${file}:`, err);
        }
      });
      console.log("Cleanup complete");
    } else {
      console.log("Aborted deletion");
    }
    rl.close();
  });
}

// Usage: node file-cleaner.ts ./src
const rootDir = process.argv[2] || ".";
deleteJsDuplicates(rootDir);
