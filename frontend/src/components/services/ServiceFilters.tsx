import React from 'react'
import { Globe, Megaphone, Bot, Layers } from 'lucide-react'
import type { CategoryOption, ServiceCategory } from '../../types/service'
import { cn } from '../../lib/utils'

interface ServiceFiltersProps {
  categories: CategoryOption[]
  selectedCategory: ServiceCategory
  onSelectCategory: (category: ServiceCategory) => void
}

export const ServiceFilters: React.FC<ServiceFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const getIcon = (iconName: CategoryOption['iconName']) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-4 h-4" />
      case 'Megaphone':
        return <Megaphone className="w-4 h-4" />
      case 'Bot':
        return <Bot className="w-4 h-4" />
      case 'Layers':
      default:
        return <Layers className="w-4 h-4" />
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-md shadow-xl max-w-4xl mx-auto transition-colors duration-300">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer select-none',
                isSelected
                  ? 'bg-gradient-to-r from-[var(--accent-gradient-from)] to-[var(--accent-gradient-to)] text-[var(--btn-primary-text)] font-bold shadow-md shadow-[var(--accent-glow)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-inner)]'
              )}
            >
              <span className={cn('shrink-0', isSelected ? 'text-[var(--btn-primary-text)]' : 'text-[var(--text-muted)]')}>
                {getIcon(cat.iconName)}
              </span>
              <span>{cat.label}</span>
            </button>
          )
        })}
      </div>

      {/* Current category description snippet */}
      {categories.find((c) => c.id === selectedCategory)?.description && (
        <p className="text-xs sm:text-sm text-[var(--text-muted)] text-center max-w-xl mx-auto min-h-[20px]">
          {categories.find((c) => c.id === selectedCategory)?.description}
        </p>
      )}
    </div>
  )
}
