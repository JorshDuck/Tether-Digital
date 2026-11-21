import React from 'react'
import { MessageSquare, FileText, Code2, Rocket } from 'lucide-react'
import type { TranslationDictionary } from '../../types/i18n'

interface HowItWorksProps {
  t: TranslationDictionary['howItWorks']
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ t }) => {
  const steps = [
    { icon: MessageSquare, title: t.step1Title, desc: t.step1Desc },
    { icon: FileText, title: t.step2Title, desc: t.step2Desc },
    { icon: Code2, title: t.step3Title, desc: t.step3Desc },
    { icon: Rocket, title: t.step4Title, desc: t.step4Desc },
  ]

  return (
    <section className="content-deferred space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[var(--accent-badge-bg)] text-[var(--accent-badge-text)] border border-[var(--accent-badge-border)]">
          {t.badge}
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={step.title}
              className="relative rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 shadow-sm hover:border-[var(--border-accent)] transition-colors"
            >
              <span className="absolute top-5 right-5 text-3xl font-black text-[var(--text-muted)] opacity-20 select-none">
                {index + 1}
              </span>
              <div className="w-11 h-11 rounded-2xl bg-[var(--accent-badge-bg)] border border-[var(--accent-badge-border)] flex items-center justify-center text-[var(--accent-primary)] mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] mt-1.5 leading-relaxed">
                {step.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
