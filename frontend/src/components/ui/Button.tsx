import React from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-page)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

  const variants = {
    primary: 'bg-[var(--btn-primary-bg)] hover:opacity-90 text-[var(--btn-primary-text)] font-semibold shadow-lg shadow-[var(--accent-glow)] focus:ring-[var(--accent-primary)] active:scale-[0.98]',
    secondary: 'bg-[var(--bg-inner)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-card)] focus:ring-slate-500 active:scale-[0.98]',
    outline: 'border border-[var(--border-accent)] text-[var(--accent-primary)] hover:bg-[var(--accent-badge-bg)] focus:ring-[var(--accent-primary)] active:scale-[0.98]',
    ghost: 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] focus:ring-slate-400',
    accent: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/25 focus:ring-emerald-400 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
