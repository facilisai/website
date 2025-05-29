import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { IndustriesSection } from "@/components/industries-section";
import { CompanySection } from "@/components/company-section";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <IndustriesSection />
      <CompanySection />
      <CTASection />
    </main>
  );
}
