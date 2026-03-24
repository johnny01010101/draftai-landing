export function NumbersSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(252 100% 15% / 0.3) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Hero metric */}
        <div className="text-center mb-24">
          <div className="text-7xl sm:text-[8rem] lg:text-[10rem] font-semibold tracking-tighter text-hero-heading leading-none">
            10,000+
          </div>
          <div className="text-xl font-medium text-foreground mt-4">Drafts created</div>
          <div className="text-muted-foreground mt-2">
            and counting, across B2B sales teams.
          </div>
        </div>

        {/* Bottom metrics */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-0">
            <div className="text-center md:border-r md:border-border/30 md:pr-12">
              <div className="text-4xl sm:text-5xl font-semibold text-hero-heading tracking-tight">
                ~$0.001
              </div>
              <div className="text-muted-foreground mt-2">cost per personalized email</div>
            </div>
            <div className="text-center md:pl-12">
              <div className="text-4xl sm:text-5xl font-semibold text-hero-heading tracking-tight">
                &lt; 10 min
              </div>
              <div className="text-muted-foreground mt-2">from upload to 50 Gmail drafts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
