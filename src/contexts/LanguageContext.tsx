import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.contactUs': 'Contact Us',
    'nav.tagline': "Texas's Premier Mobile Solutions Provider",
    'nav.hours': 'Mon-Sat: 10AM-7PM',
    
    // Hero
    'hero.badge': "TEXAS'S PREMIER MOBILE SOLUTIONS PROVIDER",
    'hero.title1': 'HOUSTON PHONE',
    'hero.title2': 'Enterprise-Grade Mobile',
    'hero.title3': 'Solutions & Services',
    'hero.subtitle': 'Industry-leading mobile device management, repair, and telecommunications services. Trusted by',
    'hero.subtitle2': 'thousands across Texas',
    'hero.subtitle3': 'with certified expertise and guaranteed results.',
    'hero.metric1': 'Devices Serviced',
    'hero.metric2': 'Success Rate',
    'hero.metric3': 'Support Available',
    'hero.viewLocations': 'View Locations',
    'hero.trust1': 'Certified Technicians',
    'hero.trust1sub': 'Factory Trained Experts',
    'hero.trust2': '90-Day Warranty',
    'hero.trust2sub': 'Quality Guaranteed',
    'hero.trust3': '3 Locations',
    'hero.trust3sub': 'El Campo • Houston West • Houston South',
    
    // Services
    'services.badge': 'COMPREHENSIVE SOLUTIONS',
    'services.title': 'Enterprise Service',
    'services.titleAccent': 'Portfolio',
    'services.subtitle': 'Industry-leading mobile device services backed by',
    'services.subtitle2': 'certified technicians',
    'services.subtitle3': ', premium components, and unwavering quality standards.',
    'services.service1': 'Display Technology Services',
    'services.service1desc': 'Precision screen restoration using OEM-grade components. Advanced diagnostics and quality-assured replacements with manufacturer warranties.',
    'services.service2': 'Power Management Solutions',
    'services.service2desc': 'Comprehensive battery and charging system diagnostics. Certified replacement services to optimize device performance and longevity.',
    'services.service3': 'Carrier Network Solutions',
    'services.service3desc': 'Enterprise-level carrier unlocking services. Full compatibility with major telecommunications providers and international networks.',
    'services.service4': 'Payment Processing Center',
    'services.service4desc': 'Streamlined bill payment services for all major carriers. Secure transaction processing with instant confirmation and receipt documentation.',
    'services.service5': 'Premium Accessories',
    'services.service5desc': 'Curated selection of certified mobile accessories. Protection solutions, charging systems, and enhancement products from leading manufacturers.',
    'services.service6': 'Comprehensive Device Repair',
    'services.service6desc': 'Full-spectrum repair services for all mobile device issues. Advanced troubleshooting with industry-leading success rates and turnaround times.',
    'services.feature1': 'Same-day service',
    'services.feature2': '90-day warranty',
    'services.feature3': 'OEM parts',
    'services.feature4': 'Battery health analysis',
    'services.feature5': 'Charging port repair',
    'services.feature6': 'Performance optimization',
    'services.feature7': 'All carriers supported',
    'services.feature8': 'Same-day processing',
    'services.feature9': 'Permanent unlocking',
    'services.feature10': 'All carriers accepted',
    'services.feature11': 'Instant processing',
    'services.feature12': 'Digital receipts',
    'services.feature13': 'Top brands',
    'services.feature14': 'Quality guaranteed',
    'services.feature15': 'Expert guidance',
    'services.feature16': 'Expert diagnostics',
    'services.feature17': 'Complex repairs',
    'services.feature18': 'Parts in stock',
    'services.learnMore': 'Learn More',
    'services.ctaTitle': "Can't Find What You Need?",
    'services.ctaText': 'Our expert team handles specialized requests and custom solutions. Contact us to discuss your specific requirements.',
    'services.ctaButton': 'Speak With a Specialist',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.faq': 'Preguntas',
    'nav.contact': 'Contacto',
    'nav.contactUs': 'Contáctenos',
    'nav.tagline': 'Principal Proveedor de Soluciones Móviles de Texas',
    'nav.hours': 'Lun-Sáb: 10AM-7PM',
    
    // Hero
    'hero.badge': 'PRINCIPAL PROVEEDOR DE SOLUCIONES MÓVILES DE TEXAS',
    'hero.title1': 'HOUSTON PHONE',
    'hero.title2': 'Soluciones Móviles',
    'hero.title3': 'de Nivel Empresarial',
    'hero.subtitle': 'Gestión de dispositivos móviles, reparación y servicios de telecomunicaciones líderes en la industria. Confiado por',
    'hero.subtitle2': 'miles en todo Texas',
    'hero.subtitle3': 'con experiencia certificada y resultados garantizados.',
    'hero.metric1': 'Dispositivos Atendidos',
    'hero.metric2': 'Tasa de Éxito',
    'hero.metric3': 'Soporte Disponible',
    'hero.viewLocations': 'Ver Ubicaciones',
    'hero.trust1': 'Técnicos Certificados',
    'hero.trust1sub': 'Expertos Capacitados en Fábrica',
    'hero.trust2': 'Garantía de 90 Días',
    'hero.trust2sub': 'Calidad Garantizada',
    'hero.trust3': '3 Ubicaciones',
    'hero.trust3sub': 'El Campo • Houston Oeste • Houston Sur',
    
    // Services
    'services.badge': 'SOLUCIONES INTEGRALES',
    'services.title': 'Portafolio de Servicios',
    'services.titleAccent': 'Empresariales',
    'services.subtitle': 'Servicios de dispositivos móviles líderes en la industria respaldados por',
    'services.subtitle2': 'técnicos certificados',
    'services.subtitle3': ', componentes premium y estándares de calidad inquebrantables.',
    'services.service1': 'Servicios de Tecnología de Pantalla',
    'services.service1desc': 'Restauración de pantalla de precisión usando componentes de grado OEM. Diagnósticos avanzados y reemplazos de calidad garantizada con garantías del fabricante.',
    'services.service2': 'Soluciones de Gestión de Energía',
    'services.service2desc': 'Diagnósticos completos de batería y sistema de carga. Servicios de reemplazo certificados para optimizar el rendimiento y longevidad del dispositivo.',
    'services.service3': 'Soluciones de Red de Operador',
    'services.service3desc': 'Servicios de desbloqueo de operador de nivel empresarial. Compatibilidad completa con los principales proveedores de telecomunicaciones y redes internacionales.',
    'services.service4': 'Centro de Procesamiento de Pagos',
    'services.service4desc': 'Servicios de pago de facturas simplificados para todos los operadores principales. Procesamiento de transacciones seguro con confirmación instantánea y documentación de recibo.',
    'services.service5': 'Accesorios Premium',
    'services.service5desc': 'Selección curada de accesorios móviles certificados. Soluciones de protección, sistemas de carga y productos de mejora de los principales fabricantes.',
    'services.service6': 'Reparación Integral de Dispositivos',
    'services.service6desc': 'Servicios de reparación de espectro completo para todos los problemas de dispositivos móviles. Solución de problemas avanzada con tasas de éxito líderes en la industria y tiempos de respuesta.',
    'services.feature1': 'Servicio el mismo día',
    'services.feature2': 'Garantía de 90 días',
    'services.feature3': 'Partes OEM',
    'services.feature4': 'Análisis de salud de batería',
    'services.feature5': 'Reparación de puerto de carga',
    'services.feature6': 'Optimización de rendimiento',
    'services.feature7': 'Todos los operadores soportados',
    'services.feature8': 'Procesamiento el mismo día',
    'services.feature9': 'Desbloqueo permanente',
    'services.feature10': 'Todos los operadores aceptados',
    'services.feature11': 'Procesamiento instantáneo',
    'services.feature12': 'Recibos digitales',
    'services.feature13': 'Mejores marcas',
    'services.feature14': 'Calidad garantizada',
    'services.feature15': 'Orientación experta',
    'services.feature16': 'Diagnósticos expertos',
    'services.feature17': 'Reparaciones complejas',
    'services.feature18': 'Partes en stock',
    'services.learnMore': 'Más Información',
    'services.ctaTitle': '¿No Encuentra Lo Que Necesita?',
    'services.ctaText': 'Nuestro equipo experto maneja solicitudes especializadas y soluciones personalizadas. Contáctenos para discutir sus requisitos específicos.',
    'services.ctaButton': 'Hable con un Especialista',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
