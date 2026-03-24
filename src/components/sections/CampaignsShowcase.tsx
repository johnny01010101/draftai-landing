import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const campaigns = [
  {
    name: "Q1 APAC Outreach",
    ae: "Sarah",
    aeColor: "bg-violet-500/20 text-violet-400",
    contacts: 120,
    done: 87,
    status: "In Progress",
    statusColor: "bg-amber-500/20 text-amber-400",
  },
  {
    name: "SaaS Founders — Series A",
    ae: "Michael",
    aeColor: "bg-blue-500/20 text-blue-400",
    contacts: 200,
    done: 200,
    status: "Ready",
    statusColor: "bg-green-500/20 text-green-400",
  },
  {
    name: "AWS Partner Program",
    ae: "Gerard",
    aeColor: "bg-orange-500/20 text-orange-400",
    contacts: 85,
    done: 22,
    status: "In Progress",
    statusColor: "bg-amber-500/20 text-amber-400",
  },
]

function MockCampaignsUI() {
  return (
    <div className="liquid-glass rounded-3xl aspect-[4/3] overflow-hidden p-6 flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">Campaigns</span>
        </div>
        <div className="text-xs text-primary">3 active</div>
      </div>

      {/* Campaign cards */}
      <div className="flex-1 space-y-3 overflow-hidden">
        {campaigns.map((c, i) => (
          <div
            key={i}
            className="bg-white/[0.02] rounded-xl p-4 border border-border/20 hover:border-border/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{c.name}</span>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${c.statusColor}`}>
                {c.status}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${c.aeColor}`}>
                {c.ae}
              </span>
              <span className="text-xs text-muted-foreground">
                {c.done}/{c.contacts} contacts
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary/60 rounded-full transition-all"
                style={{ width: `${(c.done / c.contacts) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const stats = [
  { value: "8+", label: "campaigns simultaneously" },
  { value: "1,285", label: "drafts in one run" },
  { value: "~$0.02", label: "per 50 contacts" },
  { value: "100%", label: "Gmail native" },
]

export function CampaignsShowcase() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Visual */}
        <MockCampaignsUI />

        {/* Right — Content */}
        <div>
          <div className="liquid-glass rounded-full px-4 py-1.5 inline-flex items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">Campaign Manager</span>
            <span className="bg-primary/20 text-primary text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-0.5">
              Built In <ChevronRight className="w-3 h-3" />
            </span>
          </div>

          <h2 className="text-hero-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
            Juggle 8 Campaigns
            <br />
            Without Losing Your Mind
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
            Track every campaign across your entire team. See who's drafting what, how many contacts
            are done, and which campaigns need attention — all in one view.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="liquid-glass rounded-2xl p-4">
                <div className="text-2xl font-semibold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <Button variant="hero">See Campaigns Tab</Button>
        </div>
      </div>
    </section>
  )
}
