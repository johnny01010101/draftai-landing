import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

function MockEmailUI() {
  return (
    <div className="liquid-glass rounded-3xl aspect-[4/3] overflow-hidden p-6 flex flex-col">
      {/* Mock toolbar */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <span className="text-xs text-muted-foreground ml-2">New Draft — AI Personalization</span>
      </div>

      {/* Email fields */}
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex gap-2">
          <span className="text-muted-foreground w-10 shrink-0">To:</span>
          <span className="text-foreground">sarah.chen@acmecloud.io</span>
        </div>
        <div className="flex gap-2">
          <span className="text-muted-foreground w-10 shrink-0">Subj:</span>
          <span className="text-foreground">Quick thought on Acme Cloud's outbound</span>
        </div>
      </div>

      {/* Email body */}
      <div className="flex-1 text-sm leading-relaxed space-y-3">
        <p className="text-muted-foreground">Hi Sarah,</p>
        <p className="text-muted-foreground">
          I noticed Acme Cloud recently expanded into the APAC market —
        </p>
        <div className="relative">
          <p className="text-primary font-medium border-l-2 border-primary/50 pl-3 py-1 bg-primary/5 rounded-r-lg">
            <span className="overflow-hidden whitespace-nowrap inline-block animate-typing">
              scaling outbound across new regions is exactly where teams like yours
            </span>
            <span className="animate-blink text-primary ml-0.5">|</span>
          </p>
          <span className="absolute -top-2 right-2 text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full font-medium">
            AI-written
          </span>
        </div>
        <p className="text-muted-foreground opacity-50">
          feel the most friction with personalization at scale...
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500/80" />
          <span className="text-xs text-muted-foreground">Claude AI — Full Rewrite Mode</span>
        </div>
        <span className="text-xs text-primary">1 of 50 contacts</span>
      </div>
    </div>
  )
}

export function FeatureDeepDive() {
  return (
    <section className="relative z-0 py-32 px-6 sm:px-8 lg:px-16 isolate">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Content */}
        <div>
          <div className="liquid-glass rounded-full px-4 py-1.5 inline-flex items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">AI Personalization</span>
            <span className="bg-primary/20 text-primary text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-0.5">
              Core Feature <ChevronRight className="w-3 h-3" />
            </span>
          </div>

          <h2 className="text-hero-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
            Every Email Feels
            <br />
            Like It Was Written
            <br />
            Just for Them
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-lg">
            DraftAI uses Claude AI to read your template and rewrite it uniquely for each contact —
            referencing their company, role, and pain points. A/B test up to 3 variants
            simultaneously.
          </p>

          {/* Bullet list */}
          <ul className="space-y-3 mb-8">
            {[
              "Full Rewrite, Partial Edit, or No AI modes",
              "Spintax support {word1|word2|word3}",
              "A/B/C variant testing per campaign",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="hero">Try It Free</Button>
            <Button variant="heroSecondary">See Example Emails</Button>
          </div>
        </div>

        {/* Right — Visual */}
        <MockEmailUI />
      </div>
    </section>
  )
}
