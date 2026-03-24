const testimonials = [
  {
    quote:
      "This cut my email prep time from 2 hours to 10 minutes. I just upload the list and the drafts are there.",
    name: "Sarah M.",
    role: "AE at a GCP Consultancy",
    initials: "SM",
  },
  {
    quote:
      "The AI personalization is actually good. It doesn't sound robotic. My reply rates went up noticeably in the first week.",
    name: "Michael T.",
    role: "Senior BDR",
    initials: "MT",
  },
  {
    quote:
      "Finally a tool built for how we actually work — lists, templates, Gmail. No complex CRM integration required.",
    name: "Gerard L.",
    role: "SDR Team Lead",
    initials: "GL",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative z-0 py-32 px-6 sm:px-12 lg:px-24 isolate">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mx-auto mb-16">
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-center mx-auto">
            Built for Sales Teams
            <br />
            That Move Fast
          </h2>
          <p className="text-muted-foreground text-lg mt-4 text-center mx-auto">
            Here's what early users are saying.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`liquid-glass rounded-3xl p-8 flex flex-col justify-between ${
                i === 1 ? "md:-translate-y-6" : ""
              }`}
            >
              <div className="relative z-10">
                {/* Quote */}
                <div>
                  <div className="text-primary text-2xl mb-4">&ldquo;</div>
                  <p className="text-foreground text-base leading-relaxed">{t.quote}</p>
                </div>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-border/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-muted-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
