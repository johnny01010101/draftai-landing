import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    badge: "Free Forever",
    badgeClass: "bg-white/10 text-foreground",
    features: ["3 testers included", "Up to 50 drafts per session", "All AI modes"],
    cta: "Start Free",
    ctaVariant: "heroSecondary" as const,
    highlighted: false,
  },
  {
    name: "Pro",
    badge: "Coming Soon",
    badgeClass: "bg-primary/20 text-primary",
    features: [
      "Unlimited contacts",
      "Campaign Kanban",
      "Follow-up automation",
      "Priority support",
    ],
    cta: "Join Waitlist",
    ctaVariant: "hero" as const,
    highlighted: true,
  },
]

export function PricingTeaser() {
  return (
    <section className="relative z-0 py-32 px-6 sm:px-8 lg:px-16 isolate">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight tracking-tight">
            Simple Pricing
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Start free. Upgrade when you're ready.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`liquid-glass rounded-3xl p-8 flex flex-col ${
                plan.highlighted
                  ? "ring-1 ring-primary/30 shadow-[0_0_40px_-12px_hsl(252_100%_70%/0.3)]"
                  : ""
              }`}
            >
              {/* Badge */}
              <span
                className={`self-start text-xs font-medium px-3 py-1 rounded-full mb-6 ${plan.badgeClass}`}
              >
                {plan.badge}
              </span>

              {/* Plan name */}
              <h3 className="text-2xl font-semibold text-foreground mb-6">{plan.name}</h3>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant={plan.ctaVariant} className="w-full">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
