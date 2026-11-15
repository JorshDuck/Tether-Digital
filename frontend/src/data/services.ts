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
        id: 'meta-ads',
        label: 'Ads on Facebook & Instagram',
        iconName: 'Megaphone',
        description: 'We put your offers in front of paying customers ready to buy',
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
      id: 'meta-ads',
      label: 'Publicidad en Redes',
      iconName: 'Megaphone',
      description: 'Llevamos personas interesadas directamente a tu negocio mediante anuncios efectivos',
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
        summary: 'A direct, focused web page designed to explain your offer in seconds and get leads contacting you directly via WhatsApp.',
        description: 'Perfect for business owners, consultants, or creators who do not need a massive complex website, but want a modern, lightning-fast presentation page to convert social media visitors into paying clients.',
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
        excludes: [
          'This option does not include user login accounts or administrative database',
          'This option does not include a multi-product shopping cart'
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
        summary: 'A complete custom web system where clients or staff can log in, view catalogs, submit bookings, and manage data from a private portal.',
        description: 'For growing companies that have outgrown basic websites and need custom functionality: customer logins, order tracking, bookings, internal dashboard, and secure databases.',
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
        excludes: [
          'This option does not include complex multi-currency banking gateways without prior scoping'
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
        summary: 'Tailor-made corporate software to coordinate different departments, automate repetitive tasks, and centralize operations.',
        description: 'Comprehensive digital solution for established businesses with complex workflows. Connect sales, inventory, invoicing, and team members into one unified, secure platform.',
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
        excludes: [
          'This option does not include external software or third-party API licensing subscriptions selected by the client'
        ],
        ctaText: 'Consult Custom System',
        whatsappPrefill: 'Hi Tether Digital, I require a proposal for Custom Enterprise Software.'
      },
      {
        id: 'meta-ads-campaign-setup',
        name: 'Facebook & Instagram Ad Campaigns (Meta Ads)',
        category: 'meta-ads',
        tier: 'Professional',
        badge: 'Sales & Traffic',
        summary: 'We set up and launch your ads on Facebook and Instagram to appear directly in front of people ready to purchase what you sell.',
        description: 'We take care of all the technical and strategic heavy lifting: configuring your business accounts, targeting your dream customers, installing conversion tracking, and properly assembling your campaigns so you stop wasting advertising money.',
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
        excludes: [
          'IMPORTANT: This option does NOT include graphic design of banners, flyers, or images (client must provide ready assets)',
          'IMPORTANT: This option does NOT include video shooting or video editing (client supplies finished video files)',
          'This option does NOT include the daily ad spend paid directly to Facebook/Instagram'
        ],
        ctaText: 'Quote Ad Campaign',
        whatsappPrefill: 'Hi Tether Digital, I want to quote Facebook & Instagram Ad Campaigns.'
      },
      {
        id: 'auto-whatsapp-business-api',
        name: '24/7 Automated WhatsApp Sales Bot',
        category: 'automation-chatbots',
        tier: 'Specialized',
        badge: 'High Demand',
        isPopular: true,
        summary: 'Your business answering WhatsApp inquiries day and night. Replies to frequent questions, displays clickable button menus, and transfers to human staff.',
        description: 'Turn your WhatsApp into an automatic sales and customer service assistant. Filter out repetitive questions so you only spend time talking to truly qualified buyers.',
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
        excludes: [
          'This option does not include per-conversation messaging fees charged directly by the official WhatsApp API provider'
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
        summary: 'Never lose a sale due to slow replies. Anyone sending a message to your Instagram or Facebook gets an immediate answer with the info they need.',
        description: 'Customers want instant replies. When prospects reach out via Direct Message, the bot greets them in seconds, provides product details, and collects their phone number.',
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
        excludes: [
          'This option does not include story mention replies beyond standard Meta API permissions'
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
        summary: 'Turn your Reels into automated sales machines. When someone comments (e.g. "price" or "info"), the bot answers publicly and sends a private DM with the link.',
        description: 'Supercharge the reach of your videos. The Meta algorithm loves posts with lots of comments, and your potential buyers receive their checkout or info link in their private inbox immediately.',
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
        excludes: [
          'This option does not handle manual customer service disputes outside the configured keyword filters'
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
      summary: 'Una página web directa y enfocada en explicar lo que ofreces de forma clara y lograr que los clientes te escriban de inmediato a WhatsApp.',
      description: 'Ideal para negocios, profesionales o marcas que no necesitan una web gigante y costosa, sino una página moderna, ultrarrápida y atractiva para recibir visitas de redes sociales y convertirlas en ventas reales.',
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
      excludes: [
        'Esta opción no incluye panel para crear usuarios ni base de datos compleja',
        'Esta opción no incluye tienda online con carrito de compras múltiple'
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
      summary: 'Un sistema web completo donde tus clientes o tu equipo pueden iniciar sesión, ver catálogos, hacer pedidos o gestionar datos desde un panel privado.',
      description: 'Para empresas que necesitan algo más que una web informativa: una herramienta de trabajo con cuentas de usuario, panel administrativo interno para gestionar la información, reservas, pedidos y base de datos propia.',
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
      excludes: [
        'Esta opción no incluye pasarelas de pago bancarias internacionales complejas sin cotización previa'
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
      summary: 'Desarrollo de software a gran escala para coordinar distintas áreas de tu empresa, automatizar tareas repetitivas y centralizar tu información.',
      description: 'Solución integral para empresas con procesos complejos que buscan dejar el desorden de hojas sueltas. Conectamos inventarios, clientes, personal y facturación en un sistema centralizado, seguro y fácil de usar.',
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
      excludes: [
        'Esta opción no incluye costos de licencias de software externo o servidores dedicados que el cliente elija contratar'
      ],
      ctaText: 'Consultar Software a Medida',
      whatsappPrefill: 'Hola Tether Digital, requiero una propuesta para un Software a Medida de Gestión Empresarial.'
    },
    {
      id: 'meta-ads-campaign-setup',
      name: 'Campañas de Publicidad en Facebook e Instagram (Meta Ads)',
      category: 'meta-ads',
      tier: 'Profesional',
      badge: 'Tráfico & Ventas',
      summary: 'Configuramos tus anuncios para que aparezcan en Facebook e Instagram exactamente frente a personas con alta intención de comprar lo que ofreces.',
      description: 'Nos encargamos de toda la parte técnica y estratégica: segmentar el público ideal, instalar los códigos de rastreo (Píxel) y montar las campañas con estructura profesional para que dejes de perder dinero en botones promocionales que no traen resultados.',
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
      excludes: [
        'IMPORTANTE: Esta opción NO incluye diseñar imágenes, banners ni piezas gráficas (el cliente entrega el material listo)',
        'IMPORTANTE: Esta opción NO incluye grabar ni editar videos (el cliente entrega los videos listos para subir)',
        'El presupuesto de publicidad que cobra Facebook/Instagram es aparte y lo pagas directamente a Meta'
      ],
      ctaText: 'Cotizar Campañas en Redes',
      whatsappPrefill: 'Hola Tether Digital, me interesa el servicio de Campañas de Publicidad en Facebook e Instagram.'
    },
    {
      id: 'auto-whatsapp-business-api',
      name: 'Respuestas Automáticas para WhatsApp (Bot de Ventas 24/7)',
      category: 'automation-chatbots',
      tier: 'Especializado',
      badge: 'Más Solicitado',
      isPopular: true,
      summary: 'Tu negocio atendiendo a los clientes en WhatsApp día y noche. Responde preguntas frecuentes, muestra opciones con botones y pasa el cliente a un asesor si es necesario.',
      description: 'Convierte tu WhatsApp en un asistente que nunca duerme. Filtra consultas repetitivas (horarios, precios, ubicación, catálogo) para que tú y tu equipo solo gasten tiempo hablando con clientes realmente listos para comprar.',
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
      excludes: [
        'Esta opción no incluye las tarifas por conversación que cobra la empresa proveedora de la API de WhatsApp'
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
      summary: 'Nunca pierdas un cliente por tardar en responder. Quien te envíe un mensaje a Instagram o Facebook recibirá respuesta al segundo con la información que necesita.',
      description: 'La gente compra donde le responden primero. Cuando te escriban por mensaje directo, el sistema responderá al instante, responderá dudas frecuentes y capturará el teléfono del cliente para tu equipo de ventas.',
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
      excludes: [
        'Esta opción no incluye respuestas a menciones complejas en historias fuera de lo permitido por Meta'
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
      summary: 'Haz que tus Reels y publicaciones vendan en automático. Cuando alguien comente (ej. "precio" o "info"), el bot le responderá en público y le enviará un mensaje privado con el enlace.',
      description: 'Multiplica el impacto de tu contenido. El algoritmo de Instagram premia las publicaciones con muchos comentarios, y las personas interesadas reciben la información o enlace de compra directamente en su buzón privado al instante.',
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
      excludes: [
        'Esta opción no resuelve quejas o reclamos específicos que requieran atención manual'
      ],
      ctaText: 'Automatizar Comentarios',
      whatsappPrefill: 'Hola Tether Digital, me interesa la Respuesta Automática a Comentarios en Posts y Reels.'
    }
  ]
}
