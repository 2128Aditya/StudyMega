import HeroSection from "./sections/HeroSection";
import CategoriesSection from "./sections/CategoriesSection";
import TrendingSection from "./sections/TrendingSection";
import LatestUploadsSection from "./sections/LatestUploadsSection";
import AiPlannerPromo from "./sections/AiPlannerPromo";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <CategoriesSection />
      <TrendingSection />
      <LatestUploadsSection />
      <AiPlannerPromo />
      <WhyChooseUs />
    </main>
  );
}
