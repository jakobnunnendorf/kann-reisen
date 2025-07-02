"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var readline_1 = require("readline");
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function deleteJsDuplicates(rootDir) {
    return __awaiter(this, void 0, void 0, function () {
        // Traverse directory recursively and group files by extension
        function traverse(dir) {
            var files = fs_1.default.readdirSync(dir, { withFileTypes: true, recursive: true });
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var fullPath = path_1.default.join(dir, file.name);
                if (file.isDirectory()) {
                    traverse(fullPath);
                }
                else {
                    var ext = path_1.default.extname(fullPath);
                    var dirPath = path_1.default.dirname(fullPath);
                    var baseName = path_1.default.basename(fullPath, ext);
                    if ([".js", ".jsx"].includes(ext)) {
                        jsFiles.set(dirPath, __spreadArray(__spreadArray([], (jsFiles.get(dirPath) || []), true), [baseName], false));
                    }
                    else if ([".ts", ".tsx"].includes(ext)) {
                        tsFiles.set(dirPath, __spreadArray(__spreadArray([], (tsFiles.get(dirPath) || []), true), [baseName], false));
                    }
                }
            }
        }
        var jsFiles, tsFiles, toDelete, _loop_1, _i, jsFiles_1, _a, dir, jsBaseNames;
        return __generator(this, function (_b) {
            jsFiles = new Map();
            tsFiles = new Map();
            traverse(rootDir);
            toDelete = [];
            _loop_1 = function (dir, jsBaseNames) {
                var tsBaseNames = tsFiles.get(dir) || [];
                jsBaseNames.forEach(function (base) {
                    if (tsBaseNames.includes(base)) {
                        var jsPath = path_1.default.join(dir, "".concat(base, ".js"));
                        var jsxPath = path_1.default.join(dir, "".concat(base, ".jsx"));
                        if (fs_1.default.existsSync(jsPath))
                            toDelete.push(jsPath);
                        if (fs_1.default.existsSync(jsxPath))
                            toDelete.push(jsxPath);
                    }
                });
            };
            for (_i = 0, jsFiles_1 = jsFiles; _i < jsFiles_1.length; _i++) {
                _a = jsFiles_1[_i], dir = _a[0], jsBaseNames = _a[1];
                _loop_1(dir, jsBaseNames);
            }
            if (toDelete.length === 0) {
                console.log("No duplicate JS/JSX files found");
                process.exit(0);
            }
            // Confirm deletion
            console.log("Found ".concat(toDelete.length, " JS/JSX files with TS equivalents:\n"));
            console.log(toDelete.join("\n"));
            rl.question("\nDelete these files? (y/N) ", function (answer) {
                if (answer.toLowerCase() === "y") {
                    toDelete.forEach(function (file) {
                        try {
                            fs_1.default.unlinkSync(file);
                            console.log("Deleted: ".concat(file));
                        }
                        catch (err) {
                            console.error("Error deleting ".concat(file, ":"), err);
                        }
                    });
                    console.log("Cleanup complete");
                }
                else {
                    console.log("Aborted deletion");
                }
                rl.close();
            });
            return [2 /*return*/];
        });
    });
}
// Usage: node file-cleaner.ts ./src
var rootDir = process.argv[2] || ".";
deleteJsDuplicates(rootDir);
