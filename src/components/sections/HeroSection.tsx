import { Button } from "@/components/ui/button"
import { LightningBolt, LightningBoltSmall } from "@/components/LightningBolt"
import { ChevronRight } from "lucide-react"

function Particles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: `${Math.random() * 6}s`,
    duration: `${Math.random() * 4 + 4}s`,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  )
}

const marqueeItems = [
  "GCP Partners",
  "AWS Consultancies",
  "SaaS Startups",
  "SDR Teams",
  "Revenue Orgs",
  "Growth Agencies",
]

export function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col overflow-hidden isolate">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, hsl(252 100% 15% / 0.4) 0%, hsl(240 20% 4%) 70%)",
        }}
      />

      <Particles />

      {/* Lightning bolt background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <LightningBolt
          size={500}
          className="opacity-20 animate-pulse-glow"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex justify-center pt-4 px-6 sm:px-8 lg:px-16">
          <div className="liquid-glass rounded-3xl px-4 py-2.5 flex items-center gap-6 max-w-[850px] w-full">
            {/* Logo */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-primary/30 to-secondary flex items-center justify-center">
                <LightningBoltSmall />
              </div>
              <span className="text-xl font-semibold text-foreground">DraftAI</span>
            </div>

            {/* Nav items - hidden on mobile */}
            <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {["Features", "How It Works", "Pricing", "For Teams"].map((item) => (
                <button
                  key={item}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* CTA */}
            <Button variant="hero" size="sm" className="shrink-0 ml-auto">
              Get Early Access
            </Button>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16 text-center">
          {/* Announcement badge */}
          <div className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 mb-8">
            <span className="text-sm text-muted-foreground">
              Now with AI Pain Point Detection
            </span>
            <span className="bg-primary/20 text-primary text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-0.5">
              New <ChevronRight className="w-3 h-3" />
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-hero-heading text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-5xl">
            Personalized Cold Emails.
            <br />
            At Scale. In Minutes.
          </h1>

          {/* Subheading */}
          <p className="text-hero-sub text-lg max-w-md mt-4 opacity-80">
            Upload your contact list, set your template, and let AI write personalized cold emails
            for every single prospect — then land them straight in Gmail as drafts.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="hero">Start Drafting Free</Button>
            <Button variant="heroSecondary">See How It Works</Button>
          </div>
        </div>

        {/* Social proof bar */}
        <div className="relative z-10 pb-8 px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-5xl mx-auto">
            <span className="text-foreground/50 text-sm whitespace-nowrap shrink-0">
              Trusted by B2B sales teams at
            </span>
            <div className="relative overflow-hidden flex-1 w-full max-w-2xl" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
              <div className="flex animate-marquee gap-3 w-max">
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <span
                    key={i}
                    className="liquid-glass rounded-full px-4 py-1.5 text-sm text-muted-foreground whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
