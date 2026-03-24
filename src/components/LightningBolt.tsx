export function LightningBolt({ className = "", size = 400 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bolt-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="hsl(252 100% 80%)" />
          <stop offset="50%" stopColor="hsl(252 100% 70%)" />
          <stop offset="100%" stopColor="hsl(252 100% 55%)" />
        </linearGradient>
        <filter id="bolt-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bolt-outer-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="30" />
        </filter>
      </defs>
      {/* Outer glow */}
      <polygon
        points="220,40 140,200 195,200 160,360 280,175 220,175 260,40"
        fill="hsl(252 100% 70%)"
        filter="url(#bolt-outer-glow)"
        opacity="0.4"
      />
      {/* Main bolt */}
      <polygon
        points="220,40 140,200 195,200 160,360 280,175 220,175 260,40"
        fill="url(#bolt-gradient)"
        filter="url(#bolt-glow)"
      />
    </svg>
  )
}

export function LightningBoltSmall({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 2L4.09 12.61C3.74 13.05 3.54 13.27 3.53 13.46C3.52 13.63 3.59 13.79 3.72 13.89C3.87 14 4.15 14 4.72 14H12L11 22L19.91 11.39C20.26 10.95 20.46 10.73 20.47 10.54C20.48 10.37 20.41 10.21 20.28 10.11C20.13 10 19.85 10 19.28 10H12L13 2Z"
        fill="hsl(252 100% 70%)"
        stroke="hsl(252 100% 80%)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
