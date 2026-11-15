import React from 'react'

interface TetherLogoProps {
  size?: number
  className?: string
  showText?: boolean
}

export const TetherLogo: React.FC<TetherLogoProps> = ({
  size = 50,
  className = '',
  showText = false,
}) => {
  const coreGradId = 'io-core-grad'
  const tetherGradId = 'io-tether-grad'
  const glowFilterId = 'io-glow-filter'

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105 select-none shrink-0 drop-shadow-sm"
      >
        <defs>
          {/* Radial ethereal gradient for Io's celestial core */}
          <radialGradient
            id={coreGradId}
            cx="40%"
            cy="40%"
            r="60%"
            fx="35%"
            fy="35%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="35%" stopColor="var(--accent-hover, #fb923c)" stopOpacity="0.95" />
            <stop offset="75%" stopColor="var(--accent-primary, #f97316)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-gradient-to, #f59e0b)" stopOpacity="0.25" />
          </radialGradient>

          {/* Electric Tether beam gradient */}
          <linearGradient id={tetherGradId} x1="50" y1="50" x2="80" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="40%" stopColor="var(--accent-hover, #fb923c)" stopOpacity="0.9" />
            <stop offset="85%" stopColor="var(--accent-primary, #f97316)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          {/* Soft celestial glow filter */}
          <filter id={glowFilterId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Orbiting Group A: Outer Dashed Energy Ring */}
        <g className="animate-io-orbit-slow">
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="var(--accent-primary, #f97316)"
            strokeOpacity="0.2"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />
        </g>

        {/* 2. Orbiting Group B: Tilted Planetary Ring */}
        <g className="animate-io-orbit-reverse">
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="19"
            transform="rotate(-25 50 50)"
            stroke="var(--accent-primary, #f97316)"
            strokeOpacity="0.28"
            strokeWidth="1.5"
          />
        </g>

        {/* 3. Orbiting Group C: Fast Clockwise Wisps ("Bolitas de Io") */}
        <g className="animate-io-orbit-fast">
          {/* Main Tether Linked Node */}
          <circle
            cx="80"
            cy="28"
            r="6.5"
            fill="var(--accent-hover, #fb923c)"
            filter={`url(#${glowFilterId})`}
          />
          <circle cx="80" cy="28" r="3" fill="#ffffff" />
          
          {/* Trailing micro wisp particle */}
          <circle
            cx="20"
            cy="72"
            r="3.5"
            fill="var(--accent-primary, #f97316)"
            opacity="0.8"
          />
          <circle cx="20" cy="72" r="1.5" fill="#ffffff" />
        </g>

        {/* 4. Orbiting Group D: Reverse Counter-Clockwise Wisps */}
        <g className="animate-io-orbit-reverse">
          <circle
            cx="24"
            cy="30"
            r="4.5"
            fill="var(--accent-hover, #fb923c)"
            opacity="0.75"
          />
          <circle cx="24" cy="30" r="2" fill="#ffffff" />

          <circle
            cx="76"
            cy="70"
            r="3"
            fill="var(--accent-primary, #f97316)"
            opacity="0.6"
          />
        </g>

        {/* 5. The Iconic Io Tether Beam connecting center to the upper right node */}
        <g className="animate-io-tether">
          <path
            d="M 50 50 Q 64 30 80 28"
            stroke={`url(#${tetherGradId})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            filter={`url(#${glowFilterId})`}
          />
          <path
            d="M 50 50 Q 64 30 80 28"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.95"
          />
        </g>

        {/* 6. Central Celestial Core: Io The Wisp with Breathing Glow */}
        <g className="animate-io-core">
          <circle
            cx="50"
            cy="50"
            r="19"
            fill={`url(#${coreGradId})`}
            filter={`url(#${glowFilterId})`}
          />
          <circle
            cx="48"
            cy="48"
            r="9"
            fill="#ffffff"
            opacity="0.9"
          />
          <circle
            cx="47"
            cy="47"
            r="4"
            fill="#ffffff"
            opacity="1"
          />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-black text-xl sm:text-2xl tracking-tight leading-none text-[var(--text-primary)]">
            Tether<span className="text-[var(--accent-primary)]">Digital</span>
          </span>
        </div>
      )}
    </div>
  )
}
