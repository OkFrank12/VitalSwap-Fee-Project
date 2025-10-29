import CtaSection from "../components/CtaSection";
import FeeCalculator from "../components/FeeCalculator";
import FeesOverview from "../components/FeesOverview";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import TransparencySection from "../components/TransparencySection";

export default function FeePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeesOverview />
        <FeeCalculator />
        <TransparencySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
