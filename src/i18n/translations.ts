// src/i18n/translations.ts

export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      donate: 'Donate',
      terms: 'Terms',
      contact: 'Contact',
      downloadApp: 'Download App',
    },
    // Hero Section
    hero: {
      title: 'Your legacy,',
      titleHighlight: 'protected.',
      subtitle: 'L-ark is a digital heritage platform that helps you care for what matters most: your loved ones, your memories, and your peace of mind.',
      subtitleSecondary: 'Because the future also deserves to be in good hands.',
      ctaPrimary: 'Start Your Legacy',
      ctaSecondary: 'Learn How It Works',
    },
    // Mission Section
    mission: {
      title: 'Planning is not fearing, it is loving.',
      text: 'At L-ark, we believe that foresight is not coldness, it is love.\n\nWe created a modern, humane, and secure way to prepare for tomorrow — without taboos, without impossible procedures, and with everything necessary for your wishes and legacy to be fulfilled.\n\nWe want the people you love to be okay, no matter what happens. And for you to live in peace, knowing you have already taken care of their future.',
    },
    // How It Works
    howItWorks: {
      title: 'How L-ark Works',
      step1Title: 'Create Your Legacy',
      step1Text: 'Design a personal campaign to gather support, funds, or donations for your beneficiaries.\n\nWhether you have a diagnosis or not, L-ark allows you to anticipate and build your own wellness and continuity plan.',
      step2Title: 'Store What Matters',
      step2Text: 'Your digital vault stores important documents, memories, photos, and everything you want to preserve.\n\nYou can also receive a physical encrypted SSD, delivered along with the funds when the time comes.',
      step3Title: 'Guaranteed Peace of Mind',
      step3Text: 'Upon a verified cause — death or total disability — L-ark manages the delivery of your funds and vault to designated beneficiaries, fulfilling your will with complete security and confidentiality.',
      closing: 'L-ark combines technology, empathy, and security to transform uncertainty into tranquility.',
    },
    // Why L-ark
    whyLark: {
      title: 'Because love is also shown through planning.',
      point1: '100% digital and secure, with identity verification.',
      point2: 'Encrypted vault + physical SSD delivery.',
      point3: 'Legal and human validation of each case.',
      point4: 'Create, protect, and share your legacy today.',
      closingText: 'We know that talking about the future is not always easy. But doing it on time can change everything.\n\nL-ark accompanies you in taking that step — without fear, with purpose.',
    },
    // Technology
    technology: {
      title: 'Technology created to care.',
      text: 'L-ark uses advanced encryption, KYC validations, and secure storage in the cloud and physical devices.\n\nYour data, your memories, and your funds are protected under the highest security standards.\n\nEach delivery is validated under verified causes and auditable protocols, guaranteeing respect and confidentiality throughout the process.',
    },
    // Final CTA
    finalCta: {
      title: "Don't wait until tomorrow to care for the future.",
      text: 'Start your digital legacy with L-ark today.',
      subtitle: 'Because true peace of mind is knowing you have already left everything in order.',
      button: 'Create My Legacy Today',
    },
    // Footer
    footer: {
      description: 'L-ark is a digital heritage platform that unites technology, empathy, and security to care for what matters most: the people you love and the story you leave behind.',
      copyright: '© 2025 L-ark. All rights reserved.',
      madeWith: 'Made with 💙 for those who think about tomorrow.',
      links: 'Links',
      legal: 'Legal',
      followUs: 'Follow Us',
      privacy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
    // Search/Donate Page
    donate: {
      title: 'Search for a Campaign',
      subtitle: 'Find and support a digital heritage campaign',
      searchPlaceholder: 'Search by campaign title...',
      searchButton: 'Search',
      helpText: 'Enter a campaign title to search',
      minCharsText: 'Enter at least 2 characters to search',
      searching: 'Searching campaigns...',
      noResults: 'No campaigns found with',
      tryAgain: 'Try another search term',
      resultsFound: 'campaign(s) found',
      errorSearching: 'Error searching campaigns. Please try again.',
    },
    terms: {
      pageTitle: 'Terms & Conditions',
      pageDescription: 'Terms and conditions of use for L-ark platform',
      breadcrumbHome: 'Home',
      breadcrumbTerms: 'Terms & Conditions',
      title: 'Terms & Conditions',
      subtitle: 'Please read these terms carefully before using L-ark',
      lastUpdated: 'Last updated',
      downloadPdf: 'Download PDF',
      tableOfContents: 'Table of Contents',

      section1: {
        title: '1. Acceptance of Terms',
        content: `[PLACEHOLDER: Legal text about acceptance of terms]\n\nBy accessing and using L-ark's services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.\n\nYour continued use of the platform constitutes acceptance of these terms and any future modifications.`
      },
      section2: {
        title: '2. Definitions',
        content: `[PLACEHOLDER: Legal definitions]\n\nFor the purposes of these Terms:\n- "Platform" refers to L-ark's mobile application and web services\n- "User" refers to any person who creates an account\n- "Owner" refers to a user who creates a campaign\n- "Beneficiary" refers to a person designated to receive funds\n- "Campaign" refers to a fundraising initiative created on the platform\n- "Causal" refers to the triggering event (death or prolonged inactivity)\n- "Vault" refers to the encrypted document storage service`
      },
      section3: {
        title: '3. Service Description',
        content: `[PLACEHOLDER: Service description]\n\nL-ark is a digital inheritance platform that allows users to:\n- Create fundraising campaigns for their beneficiaries\n- Store encrypted documents in a secure vault\n- Designate beneficiaries and distribution percentages\n- Automatically activate fund distribution upon triggering event\n\nThe platform operates in the United States, Mexico, Colombia, and Chile, with specific features varying by country.`
      },
      section4: {
        title: '4. User Registration and Accounts',
        content: `[PLACEHOLDER: Registration terms]\n\nTo use L-ark, you must:\n- Be at least 18 years of age\n- Provide accurate and complete information\n- Maintain the security of your account credentials\n- Notify us immediately of any unauthorized access\n\nYou are responsible for all activities that occur under your account.`
      },
      section5: {
        title: '5. Subscriptions and Payments',
        content: `[PLACEHOLDER: Payment terms]\n\nL-ark offers:\n- Vault subscription (monthly/annual)\n- Commission fees on donations (percentage to be defined)\n- Payment processing through Stripe\n\nAll payments are processed securely through our payment providers. Subscription fees are non-refundable except as required by law.`
      },
      section6: {
        title: '6. Campaign Creation',
        content: `[PLACEHOLDER: Campaign rules]\n\nAs a campaign owner, you agree to:\n- Provide truthful information about your campaign\n- Use funds only for stated purposes\n- Comply with all applicable laws\n- Not engage in fraudulent activities\n\nL-ark reserves the right to suspend or terminate campaigns that violate these terms.`
      },
      section7: {
        title: '7. Causal Process',
        content: `[PLACEHOLDER: Causal activation terms]\n\nThe causal (triggering event) process includes:\n- Verification of death certificate or prolonged inactivity\n- Identity validation of beneficiaries\n- Automatic fund distribution according to designated percentages\n\nL-ark is not responsible for disputes among beneficiaries or validation of death certificates.`
      },
      section8: {
        title: '8. KYC and Identity Verification',
        content: `[PLACEHOLDER: KYC terms]\n\nAll users must complete Know Your Customer (KYC) verification:\n- Upload government-issued identification\n- Provide proof of address\n- Complete identity verification through our partners\n\nKYC documents are stored securely and retained according to legal requirements.`
      },
      section9: {
        title: '9. Acceptable Use',
        content: `[PLACEHOLDER: Acceptable use policy]\n\nYou agree not to use L-ark for:\n- Illegal activities or money laundering\n- Fraudulent campaigns or misrepresentation\n- Harassment or abuse of other users\n- Circumventing security measures\n\nViolations may result in immediate account termination and legal action.`
      },
      section10: {
        title: '10. Intellectual Property',
        content: `[PLACEHOLDER: IP terms]\n\nAll content, trademarks, and intellectual property on L-ark are owned by the company or its licensors. You may not use, copy, or distribute any content without explicit permission.`
      },
      section11: {
        title: '11. Limitation of Liability',
        content: `[PLACEHOLDER: Liability limitations]\n\nL-ark is provided "as is" without warranties. We are not liable for:\n- Technical failures or service interruptions\n- Loss of data or unauthorized access\n- Disputes between users\n- Third-party actions\n\nOur liability is limited to the amount of fees paid in the last 12 months.`
      },
      section12: {
        title: '12. Indemnification',
        content: `[PLACEHOLDER: Indemnification clause]\n\nYou agree to indemnify and hold L-ark harmless from any claims, damages, or expenses arising from your use of the platform or violation of these terms.`
      },
      section13: {
        title: '13. Termination',
        content: `[PLACEHOLDER: Termination terms]\n\nWe may terminate or suspend your account at any time for:\n- Violation of these terms\n- Fraudulent activity\n- Legal requirements\n- Extended inactivity\n\nUpon termination, you lose access to your account and stored data.`
      },
      section14: {
        title: '14. Privacy and Data Protection',
        content: `[PLACEHOLDER: Privacy reference]\n\nYour use of L-ark is also governed by our Privacy Policy. We comply with applicable data protection laws including GDPR where applicable.\n\nFor details on how we collect, use, and protect your data, please review our Privacy Policy.`
      },
      section15: {
        title: '15. Changes to Terms',
        content: `[PLACEHOLDER: Modification terms]\n\nWe reserve the right to modify these terms at any time. Material changes will be notified via email or platform notification.\n\nYour continued use after changes constitutes acceptance of the modified terms.`
      },
      section16: {
        title: '16. Governing Law',
        content: `[PLACEHOLDER: Jurisdiction]\n\nThese terms are governed by the laws of [United States/Chile - to be specified].\n\nAny disputes will be resolved through [arbitration/courts - to be specified] in [jurisdiction - to be specified].`
      },
      section17: {
        title: '17. Contact',
        content: `[PLACEHOLDER: Contact information]\n\nFor questions about these Terms & Conditions, please contact us:\n\nEmail: legal@lark.app\nAddress: [To be added]\nPhone: [To be added]`
      }
    },
    contact: {
      pageTitle: 'Contact Us',
      pageDescription: 'Get in touch with L-ark team',
      breadcrumbHome: 'Home',
      breadcrumbContact: 'Contact',
      title: "We're here to help",
      subtitle: "Have questions about L-ark? Want to learn more about protecting your digital legacy? We'd love to hear from you.",

      // Contact Info
      infoTitle: 'Contact Information',
      emailLabel: 'Email',
      emailValue: 'dh.lark.25@gmail.com',
      emailButton: 'Send Email',
      whatsappLabel: 'WhatsApp',
      whatsappValue: '+56 9 8701 2347',
      whatsappButton: 'Chat on WhatsApp',

      // Social
      socialTitle: 'Follow Us',
      socialSubtitle: 'Stay connected with L-ark on social media',

      // Form
      formTitle: 'Send us a message',
      formSubtitle: "Fill out the form below and we'll get back to you as soon as possible",
      nameLabel: 'Full Name',
      namePlaceholder: 'John Doe',
      emailLabelForm: 'Email',
      emailPlaceholder: 'john@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Select a topic',
      subjectOptions: {
        general: 'General Inquiry',
        support: 'Technical Support',
        campaign: 'Campaign Help',
        business: 'Business Partnership',
        press: 'Press & Media',
        other: 'Other'
      },
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us how we can help you...',
      submitButton: 'Send Message',
      submitting: 'Sending...',

      // Validation
      nameRequired: 'Please enter your name',
      emailRequired: 'Please enter your email',
      emailInvalid: 'Please enter a valid email',
      subjectRequired: 'Please select a subject',
      messageRequired: 'Please enter your message',
      messageMinLength: 'Message must be at least 10 characters',

      // Success
      successTitle: 'Message sent!',
      successMessage: "Thank you for contacting us. We'll get back to you soon.",
      successButton: 'Send another message'
    },
    privacy: {
      pageTitle: 'Privacy Policy',
      pageDescription: 'Privacy policy and data protection for L-ark platform',
      breadcrumbHome: 'Home',
      breadcrumbPrivacy: 'Privacy Policy',
      title: 'Privacy Policy',
      subtitle: 'How we collect, use, and protect your personal information',
      lastUpdated: 'Last updated',
      downloadPdf: 'Download PDF',
      tableOfContents: 'Table of Contents',

      // Secciones
      section1: {
        title: '1. Information We Collect',
        content: `[PLACEHOLDER: Legal text about data collection]\n\nWe collect information you provide directly to us, including:\n- Personal identification (name, email, phone)\n- Government-issued ID for KYC verification\n- Payment information through Stripe\n- Documents uploaded to your vault\n- Campaign information and beneficiary details`
      },
      section2: {
        title: '2. How We Use Your Information',
        content: `[PLACEHOLDER: Legal text about data usage]\n\nWe use the information we collect to:\n- Provide and maintain L-ark services\n- Process your campaigns and donations\n- Verify your identity (KYC)\n- Communicate with you about your account\n- Comply with legal obligations\n- Improve our services`
      },
      section3: {
        title: '3. Information Sharing and Disclosure',
        content: `[PLACEHOLDER: Legal text about data sharing]\n\nWe may share your information with:\n- Stripe for payment processing and KYC verification\n- Service providers who assist our operations\n- Law enforcement when required by law\n- Your designated beneficiaries (only upon causal activation)\n\nWe do not sell your personal information to third parties.`
      },
      section4: {
        title: '4. Data Security',
        content: `[PLACEHOLDER: Legal text about security measures]\n\nWe implement industry-standard security measures:\n- AES-256 encryption for stored data\n- TLS/SSL for data in transit\n- Secure cloud storage infrastructure\n- Regular security audits\n- Access controls and authentication\n\nHowever, no method of transmission over the internet is 100% secure.`
      },
      section5: {
        title: '5. Data Retention',
        content: `[PLACEHOLDER: Legal text about data retention]\n\nWe retain your personal information for as long as:\n- Your account is active\n- Necessary to provide services\n- Required by law or regulations\n- Needed to resolve disputes\n\nKYC documents are retained according to financial regulations (typically 5-7 years).`
      },
      section6: {
        title: '6. Your Rights',
        content: `[PLACEHOLDER: Legal text about user rights]\n\nYou have the right to:\n- Access your personal data\n- Correct inaccurate information\n- Request deletion of your data\n- Export your data (data portability)\n- Opt-out of marketing communications\n- Lodge a complaint with data protection authorities\n\nTo exercise these rights, contact us at privacy@lark.app`
      },
      section7: {
        title: '7. Cookies and Tracking Technologies',
        content: `[PLACEHOLDER: Legal text about cookies]\n\nWe use cookies and similar technologies to:\n- Maintain your session\n- Remember your preferences\n- Analyze site usage and performance\n- Provide personalized content\n\nYou can control cookies through your browser settings.`
      },
      section8: {
        title: '8. International Data Transfers',
        content: `[PLACEHOLDER: Legal text about data transfers]\n\nYour information may be transferred to and processed in:\n- United States (primary servers)\n- Chile (local operations)\n\nWe ensure appropriate safeguards are in place for international transfers.`
      },
      section9: {
        title: "9. Children's Privacy",
        content: `[PLACEHOLDER: Legal text about minors]\n\nL-ark is not intended for users under 18 years of age. We do not knowingly collect personal information from children.\n\nIf we learn we have collected information from a child under 18, we will delete it promptly.`
      },
      section10: {
        title: '10. Third-Party Services',
        content: `[PLACEHOLDER: Legal text about third parties]\n\nOur service integrates with:\n- Stripe for payments and KYC\n- Cloud storage providers\n- Analytics services\n\nThese third parties have their own privacy policies governing their use of your information.`
      },
      section11: {
        title: '11. Changes to Privacy Policy',
        content: `[PLACEHOLDER: Legal text about policy changes]\n\nWe may update this Privacy Policy from time to time. Material changes will be notified via:\n- Email to your registered address\n- Notice on our website\n- In-app notification\n\nContinued use after changes constitutes acceptance.`
      },
      section12: {
        title: '12. Contact Us',
        content: `[PLACEHOLDER: Contact information]\n\nFor privacy-related questions or requests, contact us:\n\nEmail: privacy@lark.app\nData Protection Officer: [To be added]\nAddress: [To be added]\n\nFor general inquiries: dh.lark.25@gmail.com`
      }
    },
    notFound: {
      pageTitle: '404 - Page Not Found',
      pageDescription: 'The page you are looking for does not exist',
      title: '404',
      subtitle: 'Page Not Found',
      message: "Oops! The page you're looking for seems to have vanished into the digital void.",
      suggestion: "Don't worry, even the best explorers get lost sometimes. Let's get you back on track.",
      homeButton: 'Go Home',
      searchButton: 'Search Campaigns',
      contactButton: 'Contact Us',
      helpfulLinks: 'Helpful Links',
      links: {
        home: 'Home',
        donate: 'Search Campaigns',
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy',
        contact: 'Contact Us'
      }
    },
    campaignDetail: {
      pageTitle: 'Support',
      pageDescription: 'Support this digital legacy campaign',
      breadcrumbHome: 'Home',
      breadcrumbCampaigns: 'Campaigns',

      // Status badges
      statusActive: 'Active',
      statusPaused: 'Paused',
      statusTriggered: 'Causal Triggered',
      statusCompleted: 'Completed',
      statusDraft: 'Draft',

      // Progress section
      raised: 'raised',
      of: 'of',
      goal: 'goal',
      softCap: 'Soft Cap',
      hardCap: 'Hard Cap',
      progress: 'Progress',

      // Donate section
      donateTitle: 'Support This Campaign',
      selectAmount: 'Select an amount',
      customAmount: 'Custom amount',
      customPlaceholder: 'Enter amount',
      donateButton: 'Donate Now',
      minimumDonation: 'Minimum donation: $5',

      // Campaign info
      createdBy: 'Created by',
      country: 'Country',
      createdDate: 'Created',
      startDate: 'Start Date',
      endDate: 'End Date',
      status: 'Status',

      // Sections
      aboutTitle: 'About This Campaign',
      beneficiariesTitle: 'Beneficiaries',
      diagnosisTitle: 'Medical Diagnosis',
      detailsTitle: 'Campaign Details',
      shareTitle: 'Share This Campaign',

      // Beneficiaries
      beneficiariesCount: 'beneficiary/beneficiaries',
      sharePercentage: 'share',
      shareFixed: 'fixed amount',

      // Share buttons
      shareWhatsapp: 'Share on WhatsApp',
      shareTwitter: 'Share on Twitter',
      shareFacebook: 'Share on Facebook',
      copyLink: 'Copy Link',
      linkCopied: 'Link copied!',

      // Gallery
      viewGallery: 'View Gallery',
      campaignImages: 'Campaign Images',
      diagnosisImages: 'Diagnosis Documents',

      // Empty states
      noBeneficiaries: 'No beneficiaries added yet',
      noDiagnosis: 'No diagnosis information available',
      noDescription: 'No description provided',

      // Errors
      loadingError: 'Error loading campaign',
      campaignNotFound: 'Campaign not found',
      tryAgain: 'Try Again',
      goBack: 'Go Back',

      // Loading
      loading: 'Loading campaign...'
    },

  },

  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      donate: 'Donar',
      terms: 'Términos',
      contact: 'Contacto',
      downloadApp: 'Descargar App',
    },
    // Hero Section
    hero: {
      title: 'Tu legado,',
      titleHighlight: 'protegido.',
      subtitle: 'L-ark es una plataforma de herencia digital que te ayuda a cuidar lo que más importa: tus seres queridos, tus recuerdos y tu tranquilidad.',
      subtitleSecondary: 'Porque el futuro también merece estar en buenas manos.',
      ctaPrimary: 'Empieza Tu Legado',
      ctaSecondary: 'Conoce Cómo Funciona',
    },
    // Mission Section
    mission: {
      title: 'Planificar no es temer, es amar.',
      text: 'En L-ark creemos que la previsión no es frialdad, es amor.\n\nCreamos una forma moderna, humana y segura de prepararte para el mañana — sin tabúes, sin trámites imposibles, y con todo lo necesario para que tus deseos y tu legado se cumplan.\n\nQueremos que, pase lo que pase, las personas que amas estén bien. Y que tú vivas en paz, sabiendo que ya cuidaste de su futuro.',
    },
    // How It Works
    howItWorks: {
      title: 'Cómo Funciona L-ark',
      step1Title: 'Crea Tu Legado',
      step1Text: 'Diseña una campaña personal para reunir apoyo, fondos o donaciones destinadas a tus beneficiarios.\n\nTengas o no un diagnóstico, L-ark te permite anticiparte y construir tu propio plan de bienestar y continuidad.',
      step2Title: 'Guarda Lo Esencial',
      step2Text: 'Tu bóveda digital almacena documentos importantes, recuerdos, fotos y todo lo que quieras preservar.\n\nAdemás, podrás recibir un SSD físico cifrado, entregado junto a los fondos cuando llegue el momento indicado.',
      step3Title: 'Tranquilidad Garantizada',
      step3Text: 'Ante una causal verificada —fallecimiento o invalidez total—, L-ark gestiona la entrega de tus fondos y bóveda a los beneficiarios designados, cumpliendo tu voluntad con total seguridad y confidencialidad.',
      closing: 'L-ark combina tecnología, empatía y seguridad para transformar la incertidumbre en tranquilidad.',
    },
    // Why L-ark
    whyLark: {
      title: 'Porque el amor también se demuestra planificando.',
      point1: '100% digital y seguro, con verificación de identidad.',
      point2: 'Bóveda cifrada + entrega física SSD.',
      point3: 'Validación legal y humana de cada caso.',
      point4: 'Crea, protege y comparte tu legado desde hoy.',
      closingText: 'Sabemos que hablar del futuro no siempre es fácil. Pero hacerlo a tiempo puede cambiarlo todo.\n\nL-ark te acompaña a dar ese paso — sin miedo, con propósito.',
    },
    // Technology
    technology: {
      title: 'Tecnología creada para cuidar.',
      text: 'L-ark utiliza encriptación avanzada, validaciones KYC y almacenamiento seguro en la nube y en dispositivos físicos.\n\nTus datos, tus recuerdos y tus fondos están protegidos bajo los más altos estándares de seguridad.\n\nCada entrega se valida bajo causales verificadas y protocolos auditables, garantizando respeto y confidencialidad en todo el proceso.',
    },
    // Final CTA
    finalCta: {
      title: 'No esperes al mañana para cuidar el futuro.',
      text: 'Empieza hoy tu legado digital con L-ark.',
      subtitle: 'Porque la verdadera tranquilidad es saber que ya dejaste todo en orden.',
      button: 'Crear Mi Legado Hoy',
    },
    // Footer
    footer: {
      description: 'L-ark es una plataforma de herencia digital que une tecnología, empatía y seguridad para cuidar lo que más importa: las personas que amas y la historia que dejas.',
      copyright: '© 2025 L-ark. Todos los derechos reservados.',
      madeWith: 'Hecho con 💙 para quienes piensan en el mañana.',
      links: 'Enlaces',
      legal: 'Legal',
      followUs: 'Síguenos',
      privacy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
    },
    // Search/Donate Page
    donate: {
      title: 'Buscar una Campaña',
      subtitle: 'Encuentra y apoya una campaña de herencia digital',
      searchPlaceholder: 'Buscar por título de campaña...',
      searchButton: 'Buscar',
      helpText: 'Ingresa el título de una campaña para buscar',
      minCharsText: 'Ingresa al menos 2 caracteres para buscar',
      searching: 'Buscando campañas...',
      noResults: 'No se encontraron campañas con',
      tryAgain: 'Intenta con otro término de búsqueda',
      resultsFound: 'campaña(s) encontrada(s)',
      errorSearching: 'Error al buscar campañas. Intenta de nuevo.',
    },
    terms: {
      pageTitle: 'Términos y Condiciones',
      pageDescription: 'Términos y condiciones de uso de la plataforma L-ark',
      breadcrumbHome: 'Inicio',
      breadcrumbTerms: 'Términos y Condiciones',
      title: 'Términos y Condiciones',
      subtitle: 'Por favor lee estos términos cuidadosamente antes de usar L-ark',
      lastUpdated: 'Última actualización',
      downloadPdf: 'Descargar PDF',
      tableOfContents: 'Tabla de Contenidos',

      section1: {
        title: '1. Aceptación de Términos',
        content: `[PLACEHOLDER: Texto legal sobre aceptación de términos]\n\nAl acceder y usar los servicios de L-ark, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios.\n\nTu uso continuado de la plataforma constituye la aceptación de estos términos y cualquier modificación futura.`
      },
      section2: {
        title: '2. Definiciones',
        content: `[PLACEHOLDER: Definiciones legales]\n\nPara los propósitos de estos Términos:\n- "Plataforma" se refiere a la aplicación móvil y servicios web de L-ark\n- "Usuario" se refiere a cualquier persona que crea una cuenta\n- "Owner" se refiere a un usuario que crea una campaña\n- "Beneficiario" se refiere a una persona designada para recibir fondos\n- "Campaña" se refiere a una iniciativa de recaudación creada en la plataforma\n- "Causal" se refiere al evento desencadenante (muerte o inactividad prolongada)\n- "Bóveda" se refiere al servicio de almacenamiento encriptado de documentos`
      },
      section3: {
        title: '3. Descripción del Servicio',
        content: `[PLACEHOLDER: Descripción del servicio]\n\nL-ark es una plataforma de herencia digital que permite a los usuarios:\n- Crear campañas de recaudación para sus beneficiarios\n- Almacenar documentos encriptados en una bóveda segura\n- Designar beneficiarios y porcentajes de distribución\n- Activar automáticamente la distribución de fondos al ocurrir el evento desencadenante\n\nLa plataforma opera en Estados Unidos, México, Colombia y Chile, con características específicas que varían por país.`
      },
      section4: {
        title: '4. Registro y Cuentas de Usuario',
        content: `[PLACEHOLDER: Términos de registro]\n\nPara usar L-ark, debes:\n- Tener al menos 18 años de edad\n- Proporcionar información precisa y completa\n- Mantener la seguridad de tus credenciales de cuenta\n- Notificarnos inmediatamente de cualquier acceso no autorizado\n\nEres responsable de todas las actividades que ocurran bajo tu cuenta.`
      },
      section5: {
        title: '5. Suscripciones y Pagos',
        content: `[PLACEHOLDER: Términos de pago]\n\nL-ark ofrece:\n- Suscripción Vault (mensual/anual)\n- Comisiones por donaciones (porcentaje por definir)\n- Procesamiento de pagos a través de Stripe\n\nTodos los pagos se procesan de forma segura a través de nuestros proveedores de pago. Las tarifas de suscripción no son reembolsables excepto según lo requiera la ley.`
      },
      section6: {
        title: '6. Creación de Campañas',
        content: `[PLACEHOLDER: Reglas de campañas]\n\nComo creador de campaña, aceptas:\n- Proporcionar información veraz sobre tu campaña\n- Usar los fondos solo para los propósitos declarados\n- Cumplir con todas las leyes aplicables\n- No participar en actividades fraudulentas\n\nL-ark se reserva el derecho de suspender o terminar campañas que violen estos términos.`
      },
      section7: {
        title: '7. Proceso de Causal',
        content: `[PLACEHOLDER: Términos de activación de causal]\n\nEl proceso de causal (evento desencadenante) incluye:\n- Verificación de certificado de defunción o inactividad prolongada\n- Validación de identidad de beneficiarios\n- Distribución automática de fondos según porcentajes designados\n\nL-ark no es responsable de disputas entre beneficiarios o validación de certificados de defunción.`
      },
      section8: {
        title: '8. KYC y Verificación de Identidad',
        content: `[PLACEHOLDER: Términos de KYC]\n\nTodos los usuarios deben completar la verificación Know Your Customer (KYC):\n- Subir identificación emitida por el gobierno\n- Proporcionar comprobante de domicilio\n- Completar verificación de identidad a través de nuestros socios\n\nLos documentos KYC se almacenan de forma segura y se retienen según los requisitos legales.`
      },
      section9: {
        title: '9. Uso Aceptable',
        content: `[PLACEHOLDER: Política de uso aceptable]\n\nAceptas no usar L-ark para:\n- Actividades ilegales o lavado de dinero\n- Campañas fraudulentas o tergiversación\n- Acoso o abuso de otros usuarios\n- Eludir medidas de seguridad\n\nLas violaciones pueden resultar en terminación inmediata de cuenta y acción legal.`
      },
      section10: {
        title: '10. Propiedad Intelectual',
        content: `[PLACEHOLDER: Términos de PI]\n\nTodo el contenido, marcas comerciales y propiedad intelectual en L-ark son propiedad de la compañía o sus licenciantes. No puedes usar, copiar o distribuir ningún contenido sin permiso explícito.`
      },
      section11: {
        title: '11. Limitación de Responsabilidad',
        content: `[PLACEHOLDER: Limitaciones de responsabilidad]\n\nL-ark se proporciona "tal cual" sin garantías. No somos responsables de:\n- Fallas técnicas o interrupciones del servicio\n- Pérdida de datos o acceso no autorizado\n- Disputas entre usuarios\n- Acciones de terceros\n\nNuestra responsabilidad está limitada a la cantidad de tarifas pagadas en los últimos 12 meses.`
      },
      section12: {
        title: '12. Indemnización',
        content: `[PLACEHOLDER: Cláusula de indemnización]\n\nAceptas indemnizar y mantener indemne a L-ark de cualquier reclamo, daño o gasto que surja de tu uso de la plataforma o violación de estos términos.`
      },
      section13: {
        title: '13. Terminación',
        content: `[PLACEHOLDER: Términos de terminación]\n\nPodemos terminar o suspender tu cuenta en cualquier momento por:\n- Violación de estos términos\n- Actividad fraudulenta\n- Requisitos legales\n- Inactividad extendida\n\nAl terminar, pierdes acceso a tu cuenta y datos almacenados.`
      },
      section14: {
        title: '14. Privacidad y Protección de Datos',
        content: `[PLACEHOLDER: Referencia a privacidad]\n\nTu uso de L-ark también está regido por nuestra Política de Privacidad. Cumplimos con las leyes aplicables de protección de datos incluyendo GDPR donde aplique.\n\nPara detalles sobre cómo recopilamos, usamos y protegemos tus datos, revisa nuestra Política de Privacidad.`
      },
      section15: {
        title: '15. Cambios a los Términos',
        content: `[PLACEHOLDER: Términos de modificación]\n\nNos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios materiales serán notificados por correo electrónico o notificación en la plataforma.\n\nTu uso continuado después de los cambios constituye la aceptación de los términos modificados.`
      },
      section16: {
        title: '16. Ley Aplicable',
        content: `[PLACEHOLDER: Jurisdicción]\n\nEstos términos se rigen por las leyes de [Estados Unidos/Chile - por especificar].\n\nCualquier disputa se resolverá a través de [arbitraje/tribunales - por especificar] en [jurisdicción - por especificar].`
      },
      section17: {
        title: '17. Contacto',
        content: `[PLACEHOLDER: Información de contacto]\n\nPara preguntas sobre estos Términos y Condiciones, contáctanos:\n\nEmail: legal@lark.app\nDirección: [Por agregar]\nTeléfono: [Por agregar]`
      }
    },
    contact: {
      pageTitle: 'Contacto',
      pageDescription: 'Ponte en contacto con el equipo de L-ark',
      breadcrumbHome: 'Inicio',
      breadcrumbContact: 'Contacto',
      title: 'Estamos aquí para ayudarte',
      subtitle: '¿Tienes preguntas sobre L-ark? ¿Quieres saber más sobre cómo proteger tu legado digital? Nos encantaría escucharte.',

      // Contact Info
      infoTitle: 'Información de Contacto',
      emailLabel: 'Email',
      emailValue: 'dh.lark.25@gmail.com',
      emailButton: 'Enviar Email',
      whatsappLabel: 'WhatsApp',
      whatsappValue: '+56 9 8701 2347',
      whatsappButton: 'Chat por WhatsApp',

      // Social
      socialTitle: 'Síguenos',
      socialSubtitle: 'Mantente conectado con L-ark en redes sociales',

      // Form
      formTitle: 'Envíanos un mensaje',
      formSubtitle: 'Completa el formulario y te responderemos lo antes posible',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'Juan Pérez',
      emailLabelForm: 'Email',
      emailPlaceholder: 'juan@ejemplo.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Selecciona un tema',
      subjectOptions: {
        general: 'Consulta General',
        support: 'Soporte Técnico',
        campaign: 'Ayuda con Campaña',
        business: 'Alianza Comercial',
        press: 'Prensa y Medios',
        other: 'Otro'
      },
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
      submitButton: 'Enviar Mensaje',
      submitting: 'Enviando...',

      // Validation
      nameRequired: 'Por favor ingresa tu nombre',
      emailRequired: 'Por favor ingresa tu email',
      emailInvalid: 'Por favor ingresa un email válido',
      subjectRequired: 'Por favor selecciona un asunto',
      messageRequired: 'Por favor ingresa tu mensaje',
      messageMinLength: 'El mensaje debe tener al menos 10 caracteres',

      // Success
      successTitle: '¡Mensaje enviado!',
      successMessage: 'Gracias por contactarnos. Te responderemos pronto.',
      successButton: 'Enviar otro mensaje'
    },
    privacy: {
      pageTitle: 'Política de Privacidad',
      pageDescription: 'Política de privacidad y protección de datos de la plataforma L-ark',
      breadcrumbHome: 'Inicio',
      breadcrumbPrivacy: 'Política de Privacidad',
      title: 'Política de Privacidad',
      subtitle: 'Cómo recopilamos, usamos y protegemos tu información personal',
      lastUpdated: 'Última actualización',
      downloadPdf: 'Descargar PDF',
      tableOfContents: 'Tabla de Contenidos',

      // Secciones
      section1: {
        title: '1. Información que Recopilamos',
        content: `[PLACEHOLDER: Texto legal sobre recopilación de datos]\n\nRecopilamos información que nos proporcionas directamente, incluyendo:\n- Identificación personal (nombre, email, teléfono)\n- Identificación oficial para verificación KYC\n- Información de pago a través de Stripe\n- Documentos subidos a tu bóveda\n- Información de campañas y beneficiarios`
      },
      section2: {
        title: '2. Cómo Usamos tu Información',
        content: `[PLACEHOLDER: Texto legal sobre uso de datos]\n\nUsamos la información que recopilamos para:\n- Proporcionar y mantener los servicios de L-ark\n- Procesar tus campañas y donaciones\n- Verificar tu identidad (KYC)\n- Comunicarnos contigo sobre tu cuenta\n- Cumplir con obligaciones legales\n- Mejorar nuestros servicios`
      },
      section3: {
        title: '3. Compartir y Divulgación de Información',
        content: `[PLACEHOLDER: Texto legal sobre compartir datos]\n\nPodemos compartir tu información con:\n- Stripe para procesamiento de pagos y verificación KYC\n- Proveedores de servicios que asisten nuestras operaciones\n- Autoridades cuando sea requerido por ley\n- Tus beneficiarios designados (solo al activarse la causal)\n\nNo vendemos tu información personal a terceros.`
      },
      section4: {
        title: '4. Seguridad de Datos',
        content: `[PLACEHOLDER: Texto legal sobre medidas de seguridad]\n\nImplementamos medidas de seguridad estándar de la industria:\n- Encriptación AES-256 para datos almacenados\n- TLS/SSL para datos en tránsito\n- Infraestructura de almacenamiento en nube segura\n- Auditorías de seguridad regulares\n- Controles de acceso y autenticación\n\nSin embargo, ningún método de transmisión por internet es 100% seguro.`
      },
      section5: {
        title: '5. Retención de Datos',
        content: `[PLACEHOLDER: Texto legal sobre retención de datos]\n\nRetenemos tu información personal mientras:\n- Tu cuenta esté activa\n- Sea necesario para proporcionar servicios\n- Lo requieran las leyes o regulaciones\n- Sea necesario para resolver disputas\n\nLos documentos KYC se retienen según regulaciones financieras (típicamente 5-7 años).`
      },
      section6: {
        title: '6. Tus Derechos',
        content: `[PLACEHOLDER: Texto legal sobre derechos del usuario]\n\nTienes derecho a:\n- Acceder a tus datos personales\n- Corregir información inexacta\n- Solicitar la eliminación de tus datos\n- Exportar tus datos (portabilidad de datos)\n- Optar por no recibir comunicaciones de marketing\n- Presentar una queja ante autoridades de protección de datos\n\nPara ejercer estos derechos, contáctanos en privacy@lark.app`
      },
      section7: {
        title: '7. Cookies y Tecnologías de Seguimiento',
        content: `[PLACEHOLDER: Texto legal sobre cookies]\n\nUsamos cookies y tecnologías similares para:\n- Mantener tu sesión\n- Recordar tus preferencias\n- Analizar el uso y rendimiento del sitio\n- Proporcionar contenido personalizado\n\nPuedes controlar las cookies a través de la configuración de tu navegador.`
      },
      section8: {
        title: '8. Transferencias Internacionales de Datos',
        content: `[PLACEHOLDER: Texto legal sobre transferencias de datos]\n\nTu información puede ser transferida y procesada en:\n- Estados Unidos (servidores principales)\n- Chile (operaciones locales)\n\nNos aseguramos de que existan salvaguardias apropiadas para las transferencias internacionales.`
      },
      section9: {
        title: '9. Privacidad de Menores',
        content: `[PLACEHOLDER: Texto legal sobre menores]\n\nL-ark no está destinado a usuarios menores de 18 años. No recopilamos información personal de menores a sabiendas.\n\nSi descubrimos que hemos recopilado información de un menor de 18 años, la eliminaremos de inmediato.`
      },
      section10: {
        title: '10. Servicios de Terceros',
        content: `[PLACEHOLDER: Texto legal sobre terceros]\n\nNuestro servicio se integra con:\n- Stripe para pagos y KYC\n- Proveedores de almacenamiento en nube\n- Servicios de análisis\n\nEstos terceros tienen sus propias políticas de privacidad que rigen el uso de tu información.`
      },
      section11: {
        title: '11. Cambios a la Política de Privacidad',
        content: `[PLACEHOLDER: Texto legal sobre cambios de política]\n\nPodemos actualizar esta Política de Privacidad ocasionalmente. Los cambios materiales serán notificados mediante:\n- Email a tu dirección registrada\n- Aviso en nuestro sitio web\n- Notificación en la aplicación\n\nEl uso continuado después de los cambios constituye la aceptación.`
      },
      section12: {
        title: '12. Contáctanos',
        content: `[PLACEHOLDER: Información de contacto]\n\nPara preguntas o solicitudes relacionadas con privacidad, contáctanos:\n\nEmail: privacy@lark.app\nOficial de Protección de Datos: [Por agregar]\nDirección: [Por agregar]\n\nPara consultas generales: dh.lark.25@gmail.com`
      }
    },
    notFound: {
      pageTitle: '404 - Página No Encontrada',
      pageDescription: 'La página que buscas no existe',
      title: '404',
      subtitle: 'Página No Encontrada',
      message: '¡Ups! La página que buscas parece haberse desvanecido en el vacío digital.',
      suggestion: 'No te preocupes, incluso los mejores exploradores se pierden a veces. Volvamos al camino.',
      homeButton: 'Ir al Inicio',
      searchButton: 'Buscar Campañas',
      contactButton: 'Contáctanos',
      helpfulLinks: 'Enlaces Útiles',
      links: {
        home: 'Inicio',
        donate: 'Buscar Campañas',
        terms: 'Términos y Condiciones',
        privacy: 'Política de Privacidad',
        contact: 'Contacto'
      }
    },
    campaignDetail: {
      pageTitle: 'Apoyar',
      pageDescription: 'Apoya esta campaña de herencia digital',
      breadcrumbHome: 'Inicio',
      breadcrumbCampaigns: 'Campañas',

      // Status badges
      statusActive: 'Activa',
      statusPaused: 'Pausada',
      statusTriggered: 'Causal Activada',
      statusCompleted: 'Completada',
      statusDraft: 'Borrador',

      // Progress section
      raised: 'recaudado',
      of: 'de',
      goal: 'meta',
      softCap: 'Meta Mínima',
      hardCap: 'Meta Máxima',
      progress: 'Progreso',

      // Donate section
      donateTitle: 'Apoya Esta Campaña',
      selectAmount: 'Selecciona un monto',
      customAmount: 'Monto personalizado',
      customPlaceholder: 'Ingresa el monto',
      donateButton: 'Donar Ahora',
      minimumDonation: 'Donación mínima: $5',

      // Campaign info
      createdBy: 'Creado por',
      country: 'País',
      createdDate: 'Creado',
      startDate: 'Fecha de Inicio',
      endDate: 'Fecha de Fin',
      status: 'Estado',

      // Sections
      aboutTitle: 'Sobre Esta Campaña',
      beneficiariesTitle: 'Beneficiarios',
      diagnosisTitle: 'Diagnóstico Médico',
      detailsTitle: 'Detalles de la Campaña',
      shareTitle: 'Compartir Esta Campaña',

      // Beneficiaries
      beneficiariesCount: 'beneficiario/beneficiarios',
      sharePercentage: 'participación',
      shareFixed: 'monto fijo',

      // Share buttons
      shareWhatsapp: 'Compartir en WhatsApp',
      shareTwitter: 'Compartir en Twitter',
      shareFacebook: 'Compartir en Facebook',
      copyLink: 'Copiar Enlace',
      linkCopied: '¡Enlace copiado!',

      // Gallery
      viewGallery: 'Ver Galería',
      campaignImages: 'Imágenes de la Campaña',
      diagnosisImages: 'Documentos de Diagnóstico',

      // Empty states
      noBeneficiaries: 'Aún no se han agregado beneficiarios',
      noDiagnosis: 'No hay información de diagnóstico disponible',
      noDescription: 'No se proporcionó descripción',

      // Errors
      loadingError: 'Error al cargar la campaña',
      campaignNotFound: 'Campaña no encontrada',
      tryAgain: 'Intentar de Nuevo',
      goBack: 'Volver',

      // Loading
      loading: 'Cargando campaña...'
    },

  },
} as const;

export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}