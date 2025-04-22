
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TechnicalPreparation } from "@/components/TechnicalPreparation";
import { DevelopmentPhases } from "@/components/DevelopmentPhases";
import { TokenEconomics } from "@/components/TokenEconomics";
import { PropertyShowcase } from "@/components/PropertyShowcase";
import { SmartContractVisualization } from "@/components/SmartContractVisualization";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TechnicalPreparation />
        <PropertyShowcase />
        <DevelopmentPhases />
        <TokenEconomics />
        <SmartContractVisualization />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
