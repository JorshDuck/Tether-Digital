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
    openMenu: string
    closeMenu: string
    menuOptions: string
    skipToContent: string
  }
  themes: {
    ember: string
    cyan: string
    light: string
    themeLabel: string
  }
  hero: {
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
    readMore: string
    readLess: string
    categoryWeb: string
    categoryRedesign: string
    categoryOptimization: string
    categoryAds: string
    categoryGoogleAds: string
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
  trust: {
    paymentsTitle: string
    paymentsDesc: string
    payment1: string
    payment2: string
    payment3: string
    payment4: string
    guaranteeTitle: string
    guaranteeDesc: string
    guarantee1: string
    guarantee2: string
    guarantee3: string
    guarantee4: string
  }
  footer: {
    pillar1Title: string
    pillar1Desc: string
    pillar2Title: string
    pillar2Desc: string
    pillar3Title: string
    pillar3Desc: string
    followTitle: string
    visit: string
    whatsappMessage: string
    disclaimer: string
    rights: string
  }
}
