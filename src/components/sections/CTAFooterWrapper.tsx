import { Button } from "@/components/ui/button"
import { LightningBolt, LightningBoltSmall } from "@/components/LightningBolt"

function CTASection() {
  return (
    <section className="relative z-0 py-16 px-6 sm:px-8 lg:px-16 isolate">
      <div className="max-w-4xl mx-auto">
        <div className="liquid-glass rounded-[2rem] p-12 sm:p-20 text-center relative overflow-hidden">
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, hsl(252 100% 15% / 0.3) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10">
            {/* Lightning bolt */}
            <div className="flex justify-center mb-6">
              <LightningBolt size={80} className="opacity-80" />
            </div>

            <h2 className="text-hero-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-4">
              Your Next 1,000 Cold Emails
              <br />
              Write Themselves
            </h2>

            <p className="text-muted-foreground text-base max-w-md mx-auto mb-8">
              Join sales teams already using DraftAI to personalize outreach at scale. Free to
              start. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">Start Drafting Free</Button>
              <Button variant="heroSecondary">Book a Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const footerLinks = {
  Product: ["Features", "Campaigns", "Pricing", "Changelog"],
  Company: ["About", "Twitter/X", "Contact"],
  Resources: ["Docs", "Help", "Status"],
}

function Footer() {
  return (
    <footer className="relative z-0 border-t border-border/30 pt-16 pb-8 px-6 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-primary/30 to-secondary flex items-center justify-center">
                <LightningBoltSmall />
              </div>
              <span className="text-lg font-semibold text-foreground">DraftAI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered cold email personalization for B2B sales teams.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-medium text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-muted-foreground">&copy; 2026 DraftAI</span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function CTAFooterWrapper() {
  return (
    <>
      <CTASection />
      <Footer />
    </>
  )
}
