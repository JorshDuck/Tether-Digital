import React from 'react'
import { CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react'
import type { TranslationDictionary } from '../../types/i18n'

interface PaymentGuaranteeProps {
  t: TranslationDictionary['trust']
}

export const PaymentGuarantee: React.FC<PaymentGuaranteeProps> = ({ t }) => {
  const payments = [t.payment1, t.payment2, t.payment3, t.payment4]
  const guarantees = [t.guarantee1, t.guarantee2, t.guarantee3, t.guarantee4]

  return (
    <section data-reveal className="content-deferred grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Payment methods */}
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-2xl bg-[var(--accent-badge-bg)] text-[var(--accent-primary)] border border-[var(--accent-badge-border)] shrink-0">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
              {t.paymentsTitle}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">{t.paymentsDesc}</p>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {payments.map((method) => (
            <li
              key={method}
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{method}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Guarantee */}
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
              {t.guaranteeTitle}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">{t.guaranteeDesc}</p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {guarantees.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
