export type Language = 'es' | 'en'

export interface TranslationDictionary {
  nav: {
    quickConsult: string
    quoteProject: string
    shortQuote: string
    catalogYear: string
    subtitle: string
    freeAdvisoryBtn: string
    whatsappFloatLabel: string
    whatsappFloatMessage: string
  }
  themes: {
    ember: string
    cyan: string
    light: string
  }
  hero: {
    badge: string
    titleLead: string
    titleAccent: string
    description: string
    chipWeb: string
    chipAds: string
    chipAuto: string
    chipInstallments: string
  }
  catalog: {
    noServicesTitle: string
    noServicesDesc: string
    installments: string
  }
  card: {
    levelPrefix: string
    recommendedBadge: string
    estimatedInvestment: string
    deliveryTime: string
    whatsIncluded: string
    conditionsAndExclusions: string
    categoryWeb: string
    categoryAds: string
    categoryAuto: string
  }
  freeAdvisory: {
    badge: string
    title: string
    description: string
    bullet1: string
    bullet2: string
    bullet3: string
    cta: string
    whatsappPrefill: string
    footnote: string
  }
  customProject: {
    title: string
    description: string
    cta: string
  }
  howItWorks: {
    badge: string
    title: string
    subtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    step4Title: string
    step4Desc: string
  }
  footer: {
    pillar1Title: string
    pillar1Desc: string
    pillar2Title: string
    pillar2Desc: string
    pillar3Title: string
    pillar3Desc: string
    disclaimer: string
    rights: string
  }
}
