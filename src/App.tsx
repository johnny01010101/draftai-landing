import { HeroSection } from "@/components/sections/HeroSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { FeatureDeepDive } from "@/components/sections/FeatureDeepDive"
import { CampaignsShowcase } from "@/components/sections/CampaignsShowcase"
import { NumbersSection } from "@/components/sections/NumbersSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { PricingTeaser } from "@/components/sections/PricingTeaser"
import { CTAFooterWrapper } from "@/components/sections/CTAFooterWrapper"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <HowItWorksSection />
      <FeatureDeepDive />
      <CampaignsShowcase />
      <NumbersSection />
      <TestimonialsSection />
      <PricingTeaser />
      <CTAFooterWrapper />
    </main>
  )
}

export default App
