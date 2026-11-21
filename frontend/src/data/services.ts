import type { CategoryOption, Service } from '../types/service'
import type { Language } from '../types/i18n'

export function getCategories(lang: Language): CategoryOption[] {
  if (lang === 'en') {
    return [
      {
        id: 'all',
        label: 'All Services',
        iconName: 'Layers',
      },
      {
        id: 'web-development',
        label: 'Websites & Systems',
        iconName: 'Globe',
        description: 'High-impact websites, web stores, and custom platforms built to generate sales',
      },
      {
        id: 'redesign-migration',
        label: 'Redesigns & Migrations',
        iconName: 'RefreshCw',
        description: 'We modernize your current website without losing your content or Google ranking',
      },
      {
        id: 'optimization',
        label: 'Web Optimization',
        iconName: 'Gauge',
        description: 'Faster, easier-to-use websites designed to convert more visitors',
      },
      {
        id: 'meta-ads',
        label: 'Ads on Facebook & Instagram',
        iconName: 'Megaphone',
        description: 'We put your offers in front of paying customers ready to buy',
      },
      {
        id: 'google-tiktok-ads',
        label: 'Google Ads & TikTok Ads',
        iconName: 'Target',
        description: 'Reach customers searching on Google or discovering brands on TikTok',
      },
      {
        id: 'automation-chatbots',
        label: 'WhatsApp & DM Chatbots',
        iconName: 'Bot',
        description: 'Automated 24/7 customer service and instant lead-capture bots',
      },
    ]
  }

  // Spanish (default)
  return [
    {
      id: 'all',
      label: 'Todos los Servicios',
      iconName: 'Layers',
    },
    {
      id: 'web-development',
      label: 'Páginas Web & Sistemas',
      iconName: 'Globe',
      description: 'Sitios web modernos, tiendas y plataformas diseñadas para vender y organizar tu negocio',
    },
    {
      id: 'redesign-migration',
      label: 'Rediseños & Migraciones',
      iconName: 'RefreshCw',
      description: 'Modernizamos tu web actual sin perder tu contenido ni tu posición en Google',
    },
    {
      id: 'optimization',
      label: 'Optimización Web',
      iconName: 'Gauge',
      description: 'Sitios más rápidos, fáciles de usar y preparados para convertir más visitas',
    },
    {
      id: 'meta-ads',
      label: 'Publicidad en Redes',
      iconName: 'Megaphone',
      description: 'Llevamos personas interesadas directamente a tu negocio mediante anuncios efectivos',
    },
    {
      id: 'google-tiktok-ads',
      label: 'Google Ads & TikTok Ads',
      iconName: 'Target',
      description: 'Llega a clientes que buscan en Google o descubren marcas en TikTok',
    },
    {
      id: 'automation-chatbots',
      label: 'Bots de WhatsApp & Redes',
      iconName: 'Bot',
      description: 'Respuestas automáticas e instantáneas 24/7 para que nunca pierdas una venta',
    },
  ]
}

export function getServices(lang: Language): Service[] {
  if (lang === 'en') {
    return [
      {
        id: 'web-landing-page',
        name: 'Single-Page Sales Website (Landing Page)',
        category: 'web-development',
        tier: 'Basic',
        badge: 'Fast Delivery',
        summary: 'A modern, fast page that turns visitors into customers.',
        description: 'Perfect for business owners, consultants, or creators who do not need a massive complex website, but want a modern, lightning-fast presentation page to convert social media visitors into paying clients. A direct website focused on explaining your offer clearly and getting customers to message you on WhatsApp right away.',
        basePriceUsd: 300,
        prices: { BOB: 800, USD: 300, EUR: 275 },
        deliveryTime: '3 to 5 business days',
        includes: [
          '100% adapted for mobile phones (where 85%+ of your customers visit from)',
          'Direct floating WhatsApp button for instant contact',
          'Lead form to capture names and phone numbers easily',
          'Clear layout designed to build immediate trust and explain your offer',
          'Domain (.com) connection and cloud publishing included'
        ],
        ctaText: 'Quote Sales Website',
        whatsappPrefill: 'Hi Tether Digital, I would like to quote a Single-Page Sales Website (Landing Page).'
      },
      {
        id: 'web-full-stack-app',
        name: 'Web Platform with Admin Dashboard & User Accounts',
        category: 'web-development',
        tier: 'Professional',
        badge: 'Most Popular',
        isPopular: true,
        summary: 'A platform with a private dashboard to manage clients, orders, and data.',
        description: 'For growing companies that have outgrown basic websites and need custom functionality: customer logins, order tracking, bookings, internal dashboard, and secure databases. A complete custom web system where clients or staff can log in, view catalogs, submit bookings, and manage data from a private portal.',
        basePriceUsd: 1200,
        prices: { BOB: 3500, USD: 1200, EUR: 1100 },
        deliveryTime: '2 to 3 weeks',
        includes: [
          'Password-protected private Admin Dashboard to manage your operations',
          'Secure database to store customers, inquiries, or product data',
          'User authentication with role-based access (admin, client, staff)',
          'Custom tailored interface matched to your exact business branding',
          'Fast and secure cloud infrastructure deployment'
        ],
        ctaText: 'Quote Web Platform',
        whatsappPrefill: 'Hi Tether Digital, I am interested in quoting a Web Platform with Admin Dashboard.'
      },
      {
        id: 'web-enterprise-cms',
        name: 'Custom Enterprise Software & Internal Management System',
        category: 'web-development',
        tier: 'Advanced',
        badge: 'Enterprise',
        summary: 'Custom software to centralize and automate your business.',
        description: 'Comprehensive digital solution for established businesses with complex workflows. Connect sales, inventory, invoicing, and team members into one unified, secure platform. Tailor-made corporate software to coordinate different departments, automate repetitive tasks, and centralize operations.',
        basePriceUsd: 3000,
        prices: { BOB: 6800, USD: 3000, EUR: 2800 },
        deliveryTime: '4 to 6 weeks',
        includes: [
          'Robust, scalable architecture built to support high transaction volumes',
          'Easy-to-use content & operations manager so your team can edit info effortlessly',
          'Seamless connection with existing tools you already use (ERP, CRM, billing)',
          'Automated data backups and enterprise-grade security protocols',
          'Hands-on staff training and comprehensive user guides',
          'Dedicated priority technical support'
        ],
        ctaText: 'Consult Custom System',
        whatsappPrefill: 'Hi Tether Digital, I require a proposal for Custom Enterprise Software.'
      },
      {
        id: 'e-invoicing-bolivia',
        name: 'Electronic Invoicing for Your Business',
        category: 'web-development',
        tier: 'Specialized',
        badge: 'SIN Compliant',
        summary: 'Legally valid SIN electronic invoicing, integrated into your system.',
        description: 'We integrate electronic invoicing into your business so you can issue valid invoices, send them to your customers, and track your sales without manual work. Includes digital signature and certificate setup, plus connection to the SIN electronic invoicing services. Issue and send legally valid electronic invoices to the SIN directly from your system, website, or dashboard, with your digital signature configured.',
        basePriceUsd: 1000,
        setupPrices: { BOB: 2500, USD: 1000, EUR: 900 },
        monthlyPrices: { BOB: 200, USD: 80, EUR: 75 },
        deliveryTime: '1 to 2 weeks',
        includes: [
          'Digital signature and certificate setup for valid invoicing',
          'Electronic invoice issuing from your system, website, or dashboard',
          'Automatic invoice delivery to your customer by email or WhatsApp',
          'Issued-invoice tracking in a simple dashboard',
          'Testing and validation in the SIN invoicing environment'
        ],
        ctaText: 'Quote Electronic Invoicing',
        whatsappPrefill: 'Hi Tether Digital, I am interested in implementing Electronic Invoicing for my business.'
      },
      {
        id: 'web-redesign-migration',
        name: 'Website Redesign & Migration',
        category: 'redesign-migration',
        tier: 'Professional',
        badge: 'Keep Your Ranking',
        summary: 'A modern new version of your site without losing content or Google position.',
        description: 'We rebuild outdated websites with a fresh, fast, mobile-first design and move your existing content, pages and URLs safely. Your visitors keep finding you on Google and get a much better experience when they arrive.',
        basePriceUsd: 350,
        prices: { BOB: 1000, USD: 350, EUR: 320 },
        deliveryTime: '2 to 3 weeks',
        includes: [
          'Audit of your current site and a clear migration plan',
          'Modern, mobile-first redesign using your brand identity',
          'Content and page migration with redirect rules to protect SEO',
          'Floating WhatsApp button and clear calls to action',
          'Domain, hosting setup and publishing included'
        ],
        ctaText: 'Quote Redesign',
        whatsappPrefill: 'Hi Tether Digital, I would like to quote a Website Redesign & Migration.'
      },
      {
        id: 'web-optimization',
        name: 'Website Speed & Conversion Optimization',
        category: 'optimization',
        tier: 'Basic',
        badge: 'Fast & Convert',
        summary: 'A faster, easier website that turns more visitors into inquiries.',
        description: 'We improve your current website so it loads quickly on mobile, is easy to navigate and guides visitors to contact you. Ideal if you already have a site but it is slow, confusing, or not generating inquiries.',
        basePriceUsd: 500,
        prices: { BOB: 1500, USD: 500, EUR: 460 },
        deliveryTime: '5 to 8 business days',
        includes: [
          'Speed audit and image/code optimization',
          'Mobile usability and navigation improvements',
          'Clearer calls to action and WhatsApp contact buttons',
          'Basic on-page SEO fixes (titles, descriptions, headings)',
          'Before and after performance summary'
        ],
        ctaText: 'Quote Optimization',
        whatsappPrefill: 'Hi Tether Digital, I want to optimize my website for speed and conversions.'
      },
      {
        id: 'meta-ads-campaign-setup',
        name: 'Facebook & Instagram Ad Campaigns (Meta Ads)',
        category: 'meta-ads',
        tier: 'Professional',
        badge: 'Sales & Traffic',
        summary: 'Facebook & Instagram ads in front of customers ready to buy.',
        description: 'We take care of all the technical and strategic heavy lifting: configuring your business accounts, targeting your dream customers, installing conversion tracking, and properly assembling your campaigns so you stop wasting advertising money. We set up and launch your ads on Facebook and Instagram to appear directly in front of people ready to purchase what you sell.',
        basePriceUsd: 150,
        prices: { BOB: 300, USD: 150, EUR: 140 },
        pricePerUnit: 'month',
        deliveryTime: '3 to 5 business days',
        includes: [
          'Technical setup and verification of your Meta Business Manager and Ad Accounts',
          'Meta Pixel & Conversions API setup to track who views your site or buys',
          'Strategic customer targeting by city, age, interests, and buying behaviors',
          'Persuasive, high-converting ad copy and headline writing',
          'Ad assembly and launch using the photos or videos provided by you',
          'Active monitoring and calibration during early ad delivery'
        ],
        ctaText: 'Quote Ad Campaign',
        whatsappPrefill: 'Hi Tether Digital, I want to quote Facebook & Instagram Ad Campaigns.'
      },
      {
        id: 'google-tiktok-ads',
        name: 'Google Ads & TikTok Ads Campaigns',
        category: 'google-tiktok-ads',
        tier: 'Professional',
        badge: 'Search & Discovery',
        summary: 'Appear on Google searches and TikTok feeds in front of people ready to buy.',
        description: 'We build and manage your campaigns on Google and TikTok: keyword and audience research, ad setup, conversion tracking and ongoing calibration so your budget goes to the people most likely to become customers.',
        basePriceUsd: 200,
        prices: { BOB: 500, USD: 200, EUR: 190 },
        pricePerUnit: 'month',
        deliveryTime: '3 to 5 business days',
        includes: [
          'Keyword and audience research for Google and TikTok',
          'Campaign, ad group and creative setup',
          'Conversion tracking and pixel configuration',
          'Persuasive ad copy and headline writing',
          'Monthly monitoring and calibration of budget and targeting'
        ],
        ctaText: 'Quote Google & TikTok Ads',
        whatsappPrefill: 'Hi Tether Digital, I want to quote Google Ads & TikTok Ads campaigns.'
      },
      {
        id: 'auto-whatsapp-business-api',
        name: '24/7 Automated WhatsApp Sales Bot',
        category: 'automation-chatbots',
        tier: 'Specialized',
        badge: 'High Demand',
        isPopular: true,
        summary: 'Automated 24/7 WhatsApp support with menus and human handoff.',
        description: 'Turn your WhatsApp into an automatic sales and customer service assistant. Filter out repetitive questions so you only spend time talking to truly qualified buyers. Your business answering WhatsApp inquiries day and night, replying to frequent questions, displaying clickable button menus, and transferring to human staff.',
        basePriceUsd: 200,
        setupPrices: { BOB: 500, USD: 200, EUR: 190 },
        monthlyPrices: { BOB: 'quote', USD: 'quote', EUR: 'quote' },
        deliveryTime: '4 to 7 business days',
        includes: [
          'Interactive menus with clickable buttons so clients easily pick what they need',
          'Automated welcome greeting and after-hours away messages',
          'Instant delivery of pricing, catalog links, locations, and frequently asked info',
          'Smart handoff to a live representative when the customer asks for a human',
          'Automatic prospect recording directly into a Google Sheets spreadsheet'
        ],
        ctaText: 'Automate WhatsApp',
        whatsappPrefill: 'Hi Tether Digital, I want to implement the 24/7 Automated WhatsApp Sales Bot.'
      },
      {
        id: 'auto-dm-instagram-messenger',
        name: 'Instant Automated DM Replies (Instagram & Facebook Chat)',
        category: 'automation-chatbots',
        tier: 'Professional',
        badge: 'Instant Response',
        summary: 'Instant automated replies to your Instagram and Facebook DMs.',
        description: 'Customers want instant replies. When prospects reach out via Direct Message, the bot greets them in seconds, provides product details, and collects their phone number. Anyone sending a message to your Instagram or Facebook gets an immediate answer with the info they need, so you never lose a sale due to slow replies.',
        basePriceUsd: 200,
        setupPrices: { BOB: 500, USD: 200, EUR: 190 },
        monthlyPrices: { BOB: 300, USD: 150, EUR: 140 },
        deliveryTime: '3 to 5 business days',
        includes: [
          'Official setup across both Instagram Direct and Facebook Messenger',
          'Automatic triggers when clients type words like "price", "info", or "location"',
          'Frequently Asked Questions (FAQ) guide with interactive button options',
          'Captures prospect names and phone numbers directly in the chat window',
          'Real-time spreadsheet sync so your team can follow up quickly'
        ],
        ctaText: 'Automate DMs',
        whatsappPrefill: 'Hi Tether Digital, I want to automate Instagram & Facebook Messenger DMs.'
      },
      {
        id: 'auto-comment-replies',
        name: 'Instant Comment Auto-Reply on Posts & Reels',
        category: 'automation-chatbots',
        tier: 'Professional',
        badge: 'Organic Growth',
        summary: 'Auto-reply to comments on Reels and posts, then send the link by DM.',
        description: 'Supercharge the reach of your videos. The Meta algorithm loves posts with lots of comments, and your potential buyers receive their checkout or info link in their private inbox immediately. When someone comments (e.g. "price" or "info"), the bot answers publicly and sends a private DM with the link.',
        basePriceUsd: 200,
        setupPrices: { BOB: 500, USD: 200, EUR: 190 },
        monthlyPrices: { BOB: 300, USD: 150, EUR: 140 },
        deliveryTime: '3 to 5 business days',
        includes: [
          'Keyword detection on Instagram Reels, Carousel posts, and Facebook posts',
          'Varied public replies so comments look authentic and avoid spam flags',
          'Instant private Direct Message (DM) sent with your offer, pricing, or catalog link',
          'Multiplies social media algorithm reach by creating rapid comment interaction',
          'Configured for both Facebook and Instagram'
        ],
        ctaText: 'Automate Comments',
        whatsappPrefill: 'Hi Tether Digital, I want to activate Instant Comment Auto-Replies on Posts & Reels.'
      }
    ]
  }

  // --- SPANISH (DEFAULT) ---
  return [
    {
      id: 'web-landing-page',
      name: 'Página Web de Presentación y Ventas (Landing Page)',
      category: 'web-development',
      tier: 'Básico',
      badge: 'Rápida Entrega',
      summary: 'Página moderna y rápida para convertir visitas en clientes.',
      description: 'Ideal para negocios, profesionales o marcas que no necesitan una web gigante y costosa, sino una página moderna, ultrarrápida y atractiva para recibir visitas de redes sociales y convertirlas en ventas reales. Una página web directa y enfocada en explicar lo que ofreces de forma clara y lograr que los clientes te escriban de inmediato a WhatsApp.',
      basePriceUsd: 300,
      prices: { BOB: 800, USD: 300, EUR: 275 },
      deliveryTime: '3 a 5 días hábiles',
      includes: [
        'Adaptada 100% para celulares (donde entra más del 85% de tus clientes)',
        'Botón flotante directo a tu WhatsApp para contacto instantáneo',
        'Formulario sencillo para recibir nombres y teléfonos de personas interesadas',
        'Estructura clara organizada para convencer y generar confianza en segundos',
        'Conexión de tu nombre de dominio (.com) y publicación en internet lista'
      ],
      ctaText: 'Cotizar Página Web',
      whatsappPrefill: 'Hola Tether Digital, me interesa cotizar una Página Web de Presentación y Ventas (Landing Page).'
    },
    {
      id: 'web-full-stack-app',
      name: 'Plataforma Web con Panel de Control y Usuarios',
      category: 'web-development',
      tier: 'Profesional',
      badge: 'Más Solicitado',
      isPopular: true,
      summary: 'Plataforma con panel privado para gestionar clientes, pedidos y datos.',
      description: 'Para empresas que necesitan algo más que una web informativa: una herramienta de trabajo con cuentas de usuario, panel administrativo interno para gestionar la información, reservas, pedidos y base de datos propia. Un sistema web completo donde tus clientes o tu equipo pueden iniciar sesión, ver catálogos, hacer pedidos o gestionar datos desde un panel privado.',
      basePriceUsd: 1200,
      prices: { BOB: 3500, USD: 1200, EUR: 1100 },
      deliveryTime: '2 a 3 semanas',
      includes: [
        'Panel de control administrativo privado con contraseña para tu negocio',
        'Base de datos segura para guardar clientes, pedidos o información',
        'Cuentas de usuario con diferentes niveles de acceso (administrador, empleado, cliente)',
        'Diseño a la medida con la identidad visual y colores de tu marca',
        'Servidores de alta velocidad configurados y listos en la nube'
      ],
      ctaText: 'Cotizar Plataforma Web',
      whatsappPrefill: 'Hola Tether Digital, quiero cotizar el desarrollo de una Plataforma Web con Panel de Control.'
    },
    {
      id: 'web-enterprise-cms',
      name: 'Software a Medida para Gestión Empresarial',
      category: 'web-development',
      tier: 'Avanzado',
      badge: 'Empresarial',
      summary: 'Software a medida para centralizar y automatizar tu empresa.',
      description: 'Solución integral para empresas con procesos complejos que buscan dejar el desorden de hojas sueltas. Conectamos inventarios, clientes, personal y facturación en un sistema centralizado, seguro y fácil de usar. Desarrollo de software a gran escala para coordinar distintas áreas de tu empresa, automatizar tareas repetitivas y centralizar tu información.',
      basePriceUsd: 3000,
      prices: { BOB: 6800, USD: 3000, EUR: 2800 },
      deliveryTime: '4 a 6 semanas',
      includes: [
        'Arquitectura robusta diseñada para manejar gran volumen de datos sin ponerse lenta',
        'Gestor de contenidos sencillo para que tu equipo edite información sin saber programar',
        'Conexión con otros programas que ya uses en tu empresa (ERP, CRM, facturación)',
        'Copias de seguridad automáticas y altos estándares de seguridad de datos',
        'Capacitación paso a paso para tu equipo y manual de uso',
        'Soporte técnico prioritario post-entrega'
      ],
      ctaText: 'Consultar Software a Medida',
      whatsappPrefill: 'Hola Tether Digital, requiero una propuesta para un Software a Medida de Gestión Empresarial.'
    },
    {
      id: 'e-invoicing-bolivia',
      name: 'Facturación Electrónica para tu Negocio',
      category: 'web-development',
      tier: 'Especializado',
      badge: 'Cumplimiento SIN',
      summary: 'Facturación electrónica válida ante el SIN, integrada a tu sistema.',
      description: 'Integramos la facturación electrónica en tu negocio para que emitas facturas válidas, las envíes a tus clientes y lleves el control de tus ventas sin procesos manuales. Incluye configuración de firma digital y certificado, además de la conexión con los servicios de facturación electrónica del SIN. Emite y envía facturas electrónicas válidas ante el SIN directamente desde tu sistema, web o panel, con tu firma digital configurada.',
      basePriceUsd: 1000,
      setupPrices: { BOB: 2500, USD: 1000, EUR: 900 },
      monthlyPrices: { BOB: 200, USD: 80, EUR: 75 },
      deliveryTime: '1 a 2 semanas',
      includes: [
        'Configuración de firma digital y certificado para facturación válida',
        'Emisión de facturas electrónicas desde tu sistema, web o panel',
        'Envío automático de la factura al cliente por correo o WhatsApp',
        'Control y registro de facturas emitidas en un panel simple',
        'Pruebas y validación en el ambiente de facturación del SIN'
      ],
      ctaText: 'Cotizar Facturación Electrónica',
        whatsappPrefill: 'Hola Tether Digital, me interesa implementar Facturación Electrónica en mi negocio.'
      },
      {
        id: 'web-redesign-migration',
        name: 'Rediseño y Migración Web',
        category: 'redesign-migration',
        tier: 'Profesional',
        badge: 'Sin Perder tu Posición',
        summary: 'Una versión moderna de tu web sin perder contenido ni tu lugar en Google.',
        description: 'Reconstruimos tu sitio actual con un diseño moderno, rápido y adaptado a celulares, y migramos todo tu contenido, páginas y enlaces de forma segura. Tus clientes siguen encontrándote en Google y tienen una mucho mejor experiencia al entrar.',
        basePriceUsd: 350,
        prices: { BOB: 1000, USD: 350, EUR: 320 },
        deliveryTime: '2 a 3 semanas',
        includes: [
          'Auditoría de tu sitio actual y plan de migración claro',
          'Rediseño moderno adaptado a celular con tu identidad de marca',
          'Migración de contenido y páginas con redirecciones para cuidar el SEO',
          'Botón flotante a WhatsApp y llamadas a la acción claras',
          'Conexión de dominio, hosting y publicación incluidos'
        ],
        ctaText: 'Cotizar Rediseño',
        whatsappPrefill: 'Hola Tether Digital, me interesa cotizar un Rediseño y Migración Web.'
      },
      {
        id: 'web-optimization',
        name: 'Optimización Web de Velocidad y Conversiones',
        category: 'optimization',
        tier: 'Básico',
        badge: 'Rápida y que Convierte',
        summary: 'Una web más rápida y fácil de usar que convierte más visitas en consultas.',
        description: 'Mejoramos tu sitio actual para que cargue rápido en celular, sea fácil de navegar y guíe a las personas a contactarte. Ideal si ya tienes una web, pero es lenta, confusa o no te trae consultas.',
        basePriceUsd: 500,
        prices: { BOB: 1500, USD: 500, EUR: 460 },
        deliveryTime: '5 a 8 días hábiles',
        includes: [
          'Auditoría de velocidad y optimización de imágenes y código',
          'Mejoras de navegación y experiencia en celular',
          'Botones de contacto y llamadas a la acción más claras',
          'Ajustes básicos de SEO en la página (títulos, descripciones, encabezados)',
          'Resumen de resultados antes y después'
        ],
        ctaText: 'Cotizar Optimización',
        whatsappPrefill: 'Hola Tether Digital, quiero optimizar mi web para que cargue más rápido y convierta más.'
      },
      {
        id: 'meta-ads-campaign-setup',
      name: 'Campañas de Publicidad en Facebook e Instagram (Meta Ads)',
      category: 'meta-ads',
      tier: 'Profesional',
      badge: 'Tráfico & Ventas',
      summary: 'Anuncios en Facebook e Instagram frente a clientes listos para comprar.',
      description: 'Nos encargamos de toda la parte técnica y estratégica: segmentar el público ideal, instalar los códigos de rastreo (Píxel) y montar las campañas con estructura profesional para que dejes de perder dinero en botones promocionales que no traen resultados. Configuramos tus anuncios para que aparezcan en Facebook e Instagram exactamente frente a personas con alta intención de comprar lo que ofreces.',
      basePriceUsd: 150,
      prices: { BOB: 300, USD: 150, EUR: 140 },
      pricePerUnit: 'mes',
      deliveryTime: '3 a 5 días hábiles',
      includes: [
        'Configuración técnica y verificación de tu Administrador Comercial y Cuentas Publicitarias',
        'Instalación del Píxel de Meta para rastrear quién visita tu web o se interesa',
        'Segmentación del público por ciudades, edades, intereses y comportamientos de compra',
        'Redacción persuasiva de los textos y títulos de los anuncios (copywriting)',
        'Montaje y activación de los anuncios con las fotos y videos que nos proporciones',
        'Supervisión y calibración técnica durante los primeros días de pauta'
      ],
      ctaText: 'Cotizar Campañas en Redes',
        whatsappPrefill: 'Hola Tether Digital, me interesa el servicio de Campañas de Publicidad en Facebook e Instagram.'
      },
      {
        id: 'google-tiktok-ads',
        name: 'Campañas de Google Ads y TikTok Ads',
        category: 'google-tiktok-ads',
        tier: 'Profesional',
        badge: 'Búsqueda & Descubrimiento',
        summary: 'Aparece en búsquedas de Google y en el feed de TikTok frente a personas listas para comprar.',
        description: 'Creamos y gestionamos tus campañas en Google y TikTok: investigación de palabras clave y audiencias, configuración de anuncios, medición de conversiones y ajustes constantes para que tu presupuesto llegue a quienes tienen más chances de comprarte.',
        basePriceUsd: 200,
        prices: { BOB: 500, USD: 200, EUR: 190 },
        pricePerUnit: 'mes',
        deliveryTime: '3 a 5 días hábiles',
        includes: [
          'Investigación de palabras clave y audiencias para Google y TikTok',
          'Configuración de campañas, grupos de anuncios y creatividades',
          'Instalación de píxeles y medición de conversiones',
          'Redacción de textos y títulos de anuncios persuasivos',
          'Supervisión y ajustes mensuales de presupuesto y segmentación'
        ],
        ctaText: 'Cotizar Google & TikTok Ads',
        whatsappPrefill: 'Hola Tether Digital, quiero cotizar campañas de Google Ads y TikTok Ads.'
      },
      {
        id: 'auto-whatsapp-business-api',
      name: 'Respuestas Automáticas para WhatsApp (Bot de Ventas 24/7)',
      category: 'automation-chatbots',
      tier: 'Especializado',
      badge: 'Más Solicitado',
      isPopular: true,
      summary: 'Atención automática en WhatsApp 24/7 con menús y paso a asesor.',
      description: 'Convierte tu WhatsApp en un asistente que nunca duerme. Filtra consultas repetitivas (horarios, precios, ubicación, catálogo) para que tú y tu equipo solo gasten tiempo hablando con clientes realmente listos para comprar. Tu negocio atendiendo a los clientes día y noche: responde preguntas frecuentes, muestra opciones con botones y pasa el cliente a un asesor si es necesario.',
      basePriceUsd: 200,
      setupPrices: { BOB: 500, USD: 200, EUR: 190 },
      monthlyPrices: { BOB: 'quote', USD: 'quote', EUR: 'quote' },
      deliveryTime: '4 a 7 días hábiles',
      includes: [
        'Menús interactivos con botones donde el cliente solo presiona la opción deseada',
        'Saludo automático de bienvenida y mensaje si te escriben fuera de horario laboral',
        'Respuestas inmediatas con información de precios, catálogos o preguntas frecuentes',
        'Pase automático a un asesor humano cuando el cliente requiera atención personalizada',
        'Guardado automático de los números de contacto en una hoja de Google Sheets'
      ],
      ctaText: 'Automatizar WhatsApp',
      whatsappPrefill: 'Hola Tether Digital, quiero implementar el Bot de Respuestas Automáticas para WhatsApp.'
    },
    {
      id: 'auto-dm-instagram-messenger',
      name: 'Respuestas Automáticas a Mensajes Privados (DM en Instagram y Facebook)',
      category: 'automation-chatbots',
      tier: 'Profesional',
      badge: 'Atención Inmediata',
      summary: 'Respuestas automáticas e instantáneas a tus DMs de Instagram y Facebook.',
      description: 'La gente compra donde le responden primero. Cuando te escriban por mensaje directo, el sistema responderá al instante, responderá dudas frecuentes y capturará el teléfono del cliente para tu equipo de ventas. Quien te envíe un mensaje a Instagram o Facebook recibirá respuesta al segundo con la información que necesita, para que no pierdas un cliente por tardar en responder.',
      basePriceUsd: 200,
      setupPrices: { BOB: 500, USD: 200, EUR: 190 },
      monthlyPrices: { BOB: 300, USD: 150, EUR: 140 },
      deliveryTime: '3 a 5 días hábiles',
      includes: [
        'Configuración en tus cuentas oficiales de Instagram y Facebook Messenger',
        'Respuestas automáticas cuando escriban palabras como "precio", "info", "catálogo"',
        'Menú interactivo con tus preguntas más comunes (precios, horarios, envíos)',
        'Captura del número de teléfono o correo del cliente dentro de la conversación',
        'Registro automático en una hoja de cálculo para seguimiento comercial'
      ],
      ctaText: 'Automatizar Mensajes (DM)',
      whatsappPrefill: 'Hola Tether Digital, deseo automatizar las respuestas a mensajes privados de Instagram y Facebook.'
    },
    {
      id: 'auto-comment-replies',
      name: 'Respuesta Automática a Comentarios en Posts y Reels',
      category: 'automation-chatbots',
      tier: 'Profesional',
      badge: 'Crecimiento Viral',
      summary: 'Responde comentarios en Reels y posts y envía el enlace por DM.',
      description: 'Multiplica el impacto de tu contenido. El algoritmo de Instagram premia las publicaciones con muchos comentarios, y las personas interesadas reciben la información o enlace de compra directamente en su buzón privado al instante. Cuando alguien comente (ej. "precio" o "info"), el bot le responderá en público y le enviará un mensaje privado con el enlace.',
      basePriceUsd: 200,
      setupPrices: { BOB: 500, USD: 200, EUR: 190 },
      monthlyPrices: { BOB: 300, USD: 150, EUR: 140 },
      deliveryTime: '3 a 5 días hábiles',
      includes: [
        'Detección de palabras clave en comentarios de Reels y publicaciones',
        'Respuestas públicas variadas para que se vea natural y no parezca robotizado',
        'Envío automático y simultáneo de mensaje privado (DM) con el enlace o precio',
        'Mayor alcance en redes porque el algoritmo detecta alta interacción',
        'Funciona tanto en Facebook como en Instagram'
      ],
      ctaText: 'Automatizar Comentarios',
      whatsappPrefill: 'Hola Tether Digital, me interesa la Respuesta Automática a Comentarios en Posts y Reels.'
    }
  ]
}
