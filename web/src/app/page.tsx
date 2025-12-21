import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { Footer } from "@/components/layout/Footer";

// Dynamically import below-the-fold sections with loading optimization
const ProblemSection = dynamic(() => import("@/components/sections/ProblemSection").then(mod => ({ default: mod.ProblemSection })), {
  loading: () => <div className="h-screen animate-pulse bg-sahayak-cream" />
});

const ProductShowcase = dynamic(() => import("@/components/sections/ProductShowcase").then(mod => ({ default: mod.ProductShowcase })), {
  loading: () => <div className="h-screen animate-pulse bg-sahayak-cream" />
});

const SystemFlow = dynamic(() => import("@/components/sections/SystemFlow").then(mod => ({ default: mod.SystemFlow })), {
  loading: () => <div className="h-screen animate-pulse bg-sahayak-cream" />
});

const FeatureDeepDive = dynamic(() => import("@/components/sections/FeatureDeepDive").then(mod => ({ default: mod.FeatureDeepDive })), {
  loading: () => <div className="h-screen animate-pulse bg-sahayak-cream" />
});

const VisualLearning = dynamic(() => import("@/components/sections/VisualLearning").then(mod => ({ default: mod.VisualLearning })), {
  loading: () => <div className="h-screen animate-pulse bg-sahayak-cream" />
});

const TechSpecs = dynamic(() => import("@/components/sections/TechSpecs").then(mod => ({ default: mod.TechSpecs })), {
  loading: () => <div className="h-screen animate-pulse bg-sahayak-cream" />
});

const DownloadSection = dynamic(() => import("@/components/sections/DownloadSection").then(mod => ({ default: mod.DownloadSection })), {
  loading: () => <div className="h-screen animate-pulse bg-sahayak-cream" />
});

export default function Home() {
  return (
    <main className="min-h-screen bg-sahayak-cream font-sans">
      <HeroSection />
      <ProblemSection />
      <ProductShowcase />
      <SystemFlow />
      <FeatureDeepDive />
      <VisualLearning />
      <TechSpecs />
      <DownloadSection />
      <Footer />
    </main>
  );
}
