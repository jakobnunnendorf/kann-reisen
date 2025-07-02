import Banner from "@/components/Desktop/Banner/Banner";
import { DividerA } from "@/components/Desktop/DividerA/DividerA";
import { Gallery } from "@/components/Desktop/Gallery/Gallery";
import { DividerB } from "@/components/Desktop/DividerB/DividerB";
import AboutUs from "@/components/Desktop/AboutUs/AboutUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <DividerA />
      <Gallery />
      <DividerB />
      <AboutUs />
    </div>
  );
}
