import { ChevronRight, Upload, Mail, Zap } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Your List",
    description:
      "Drop a CSV or paste a Google Sheets URL. DraftAI reads every contact and gets ready to personalize.",
    statValue: "CSV & Sheets",
    statLabel: "both supported",
  },
  {
    icon: Zap,
    title: "AI Writes Each Email",
    description:
      "Choose Full Rewrite, Partial Edit, or No AI. The model personalizes your template for every single prospect based on their name, company, and role.",
    statValue: "3 AI modes",
    statLabel: "full control",
  },
  {
    icon: Mail,
    title: "Drafts Land in Gmail",
    description:
      "Every email lands as a Gmail draft — you review, you send. DraftAI never sends without you.",
    statValue: "100% review",
    statLabel: "you always approve",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative z-0 py-32 px-6 sm:px-8 lg:px-16 overflow-hidden isolate">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-blob opacity-[0.03]"
          style={{ background: "radial-gradient(circle, hsl(252 100% 50%), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full animate-blob opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, hsl(220 100% 50%), transparent 70%)",
            animationDelay: "-7s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-4 py-1.5 inline-flex items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">Simple Process</span>
            <span className="bg-primary/20 text-primary text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-0.5">
              3 Steps <ChevronRight className="w-3 h-3" />
            </span>
          </div>
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight tracking-tight">
            From Contact List to
            <br />
            Gmail Drafts in Minutes
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-lg mx-auto">
            No coding. No complex setup. Just upload, personalize, and draft.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="liquid-glass rounded-3xl p-8 hover:bg-white/[0.03] transition-colors group"
            >
              {/* Step number */}
              <div className="text-xs text-muted-foreground mb-4 font-medium tracking-wider uppercase">
                Step {i + 1}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Stat */}
              <div className="border-t border-border/50 pt-4">
                <div className="text-lg font-semibold text-foreground">{step.statValue}</div>
                <div className="text-xs text-muted-foreground">{step.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
