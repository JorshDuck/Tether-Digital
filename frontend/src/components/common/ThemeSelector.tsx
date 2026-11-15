import React from 'react'
import { Flame, Sparkles, Sun } from 'lucide-react'
import type { ThemeMode } from '../../types/theme'
import { cn } from '../../lib/utils'

interface ThemeSelectorProps {
  currentTheme: ThemeMode
  onThemeChange: (theme: ThemeMode) => void
  labels: {
    ember: string
    cyan: string
    light: string
  }
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
  labels,
}) => {
  const themes: Array<{
    id: ThemeMode
    label: string
    icon: React.ReactNode
  }> = [
    {
      id: 'dark-orange',
      label: labels.ember,
      icon: <Flame className="w-3.5 h-3.5 text-orange-400" />,
    },
    {
      id: 'dark-cyan',
      label: labels.cyan,
      icon: <Sparkles className="w-3.5 h-3.5 text-cyan-400" />,
    },
    {
      id: 'light',
      label: labels.light,
      icon: <Sun className="w-3.5 h-3.5 text-amber-500" />,
    },
  ]

  return (
    <div className="flex items-center gap-0.5 p-1 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-card)] shadow-inner">
      {themes.map((t) => {
        const isActive = currentTheme === t.id
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onThemeChange(t.id)}
            title={`Tema ${t.label}`}
            className={cn(
              'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer select-none',
              isActive
                ? 'bg-[var(--bg-card-hover)] text-[var(--text-primary)] shadow-sm border border-[var(--border-accent)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-badge-bg)]'
            )}
          >
            {t.icon}
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        )
      })}
    </div>
  )
}
