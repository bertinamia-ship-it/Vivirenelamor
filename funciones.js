// Sistema de traducción bilingüe COMPLETO
const translations = {
    es: {
        // Título de la página
        pageTitle: "Vivir en el Amor | Sanación Amorosa Holística",
        
        // Header y menú
        menuHome: "Inicio",
        menuBenefits: "Beneficios",
        menuServices: "Servicios",
        menuTestimonials: "Testimonios",
        menuAbout: "Sobre mí",
        menuContact: "Contacto",
        
        // Hero section
        heroTitle: "Vive feliz en una relación estable y exitosa en la que te sientas amada, deseada y valorada",
        heroSubtitle: "Transforma tu vida amorosa desde la raíz con nuestro método holístico de sanación emocional",
        heroSubtitle2: "Descubre el amor consciente que nutre tu alma y te hace crecer cada día",
        heroSubtitle3: "Crea conexiones profundas y duraderas desde el amor propio y el respeto mutuo",
        heroSubtitle4: "Encuentra la paz interior y el equilibrio emocional que te mereces",
        heroSubtitle5: "Transforma tus relaciones y descubre el verdadero significado del amor",
        heroSubtitle6: "Vive cada momento con plenitud y alegría junto a quien amas",
        heroSubtitle7: "Construye un futuro lleno de amor, comprensión y felicidad compartida",
        heroCta: "Comienza tu transformación",
        heroCtaSecondary: "Ver servicios",
        scrollText: "Descubre más",
        
        // Beneficios section
        benefitsTitle: "Transforma tu vida amorosa",
        benefitsSubtitle: "Descubre cómo podemos ayudarte a crear relaciones más sanas y conscientes",
        benefitCard1Title: "Sanación emocional",
        benefitCard1Text: "Libera heridas del pasado y abre tu corazón al amor verdadero.",
        benefitCard2Title: "Comunicación efectiva",
        benefitCard2Text: "Aprende a expresar tus necesidades y escuchar con empatía.",
        benefitCard3Title: "Conexión profunda",
        benefitCard3Text: "Crea vínculos auténticos que nutran tu alma y te hagan crecer.",
        benefitCard4Title: "Límites saludables",
        benefitCard4Text: "Establece límites desde el amor propio y el respeto mutuo.",
        benefitsCta: "Descubre todos los beneficios",
        
        // Servicios section
        servicesTitle: "Nuestros servicios",
        servicesSubtitle: "Encuentra el camino perfecto para tu transformación personal",
        service1Title: "Terapia Individual",
        service1Text: "Sesiones personalizadas para sanar heridas emocionales y prepararte para relaciones saludables.",
        service1Feature1: "Sanación personalizada",
        service1Feature2: "Herramientas prácticas",
        service1Feature3: "Seguimiento constante",
        service2Title: "Terapia de Pareja",
        service2Text: "Espacio seguro para mejorar comunicación, resolver conflictos y reconectar emocionalmente.",
        service2Feature1: "Mediación profesional",
        service2Feature2: "Técnicas de reconexión",
        service2Feature3: "Enfoque sistémico",
        service3Title: "Cursos Online",
        service3Text: "Programas accesibles desde cualquier lugar para trabajar en tu crecimiento personal y amoroso.",
        service3Feature1: "Acceso 24/7",
        service3Feature2: "Comunidad de apoyo",
        service3Feature3: "Contenido descargable",
        serviceButton: "Más información",
        
        // Sobre mí section
        aboutTitle: "Sobre mí",
        aboutText1: "Soy Michelle, y durante más de 20 años he acompañado a cientos de personas en su camino hacia relaciones más sanas y conscientes.",
        aboutText2: "Mi enfoque integra psicología, espiritualidad y técnicas de sanación energética para ofrecer un acompañamiento holístico que transforma vidas desde la raíz.",
        stat1: "personas acompañadas",
        stat2: "países",
        stat3: "satisfacción",
        aboutCta: "Conectar conmigo",
        experienceYears: "años de experiencia",
        
        // Team section
        menuTeam: "Equipo",
        teamTitle: "Nuestro Equipo",
        teamSubtitle: "Profesionales comprometidos con tu bienestar emocional",
        
        // Team Page
        teamPageTitle: "Equipo de Trabajo | Vivir en el Amor",
        teamPageHeroTitle: "Nuestro Equipo",
        teamPageHeroSubtitle: "Profesionales dedicados a tu transformación y bienestar emocional",
        
        // Michelle Robles
        teamMichelleName: "Michelle Robles",
        teamMichelleRole: "Fundadora & Terapeuta Principal",
        teamMichelleDesc1: "Con más de 20 años de experiencia acompañando a personas en su camino hacia el amor sano, Michelle ha desarrollado un método único que integra psicología transpersonal, terapias energéticas y prácticas de mindfulness.",
        teamMichelleDesc2: "Su enfoque holístico ha ayudado a cientos de personas a sanar sus heridas emocionales y crear relaciones basadas en el amor verdadero y el respeto mutuo.",
        teamMichelleEducationTitle: "Formación y Certificaciones:",
        teamMichelleEdu1: "Máster en Psicología Transpersonal",
        teamMichelleEdu2: "Certificación en Terapias Energéticas",
        teamMichelleEdu3: "Especialista en Constelaciones Fluviales",
        teamMichelleEdu4: "Formación en Sanación Emocional y Relaciones Conscientes",
        teamMichelleSpecialtiesTitle: "Áreas de Especialización:",
        teamMichelleSpec1: "Sanación de heridas emocionales",
        teamMichelleSpec2: "Terapia de pareja y relaciones conscientes",
        teamMichelleSpec3: "Constelaciones familiares y fluviales",
        teamMichelleSpec4: "Desarrollo de autoestima y amor propio",
        
        // Rocío Contreras
        teamRocioName: "Rocío Contreras",
        teamRocioRole: "Administradora del Proyecto",
        teamRocioDesc1: "Es el pilar fundamental que sostiene la energía de Vivir en el Amor, es la administradora del proyecto y se encarga de que las cosas funcionen en orden para que el amor fluya.",
        teamRocioDesc2: "Canaliza el conocimiento para gestionar las energías materiales y hacerlas prosperar para todos.",
        
        // Team CTA
        teamCTATitle: "¿Lista para comenzar tu transformación?",
        teamCTASubtitle: "Nuestro equipo está aquí para acompañarte en cada paso del camino",
        teamCTAButton: "Contactar",
        
        // Testimonios section - 8 testimonios
        testimonialsTitle: "Historias de transformación",
        testimonialsSubtitle: "Lo que dicen quienes han recorrido este camino",
        watchVideoTestimonials: "Ver Testimonios en Video",
        testimonial1Text: "\"Después de años en relaciones tóxicas, finalmente encontré el camino hacia el amor sano. Michelle me guió con paciencia y sabiduría.\"",
        testimonial1Name: "Ana G.",
        testimonial1Role: "Terapia individual",
        testimonial2Text: "\"Nuestra relación estaba al borde del colapso. Gracias a la terapia de pareja, hoy estamos más unidos y felices que nunca.\"",
        testimonial2Name: "Laura y Miguel",
        testimonial2Role: "Terapia de pareja",
        testimonial3Text: "\"El curso online me dio las herramientas para sanar mi autoestima. Hoy me siento completa y lista para el amor verdadero.\"",
        testimonial3Name: "María S.",
        testimonial3Role: "Curso online",
        testimonial4Text: "\"Aprendí a poner límites saludables y a valorarme. Ahora tengo una relación donde me siento respetada y amada profundamente.\"",
        testimonial4Name: "Carolina R.",
        testimonial4Role: "Coaching individual",
        testimonial5Text: "\"El proceso de sanación fue transformador. Hoy veo la vida con otros ojos y atraigo relaciones mucho más saludables.\"",
        testimonial5Name: "Sofía M.",
        testimonial5Role: "Terapia energética",
        testimonial6Text: "\"Gracias a Michelle, pude sanar heridas de mi infancia que afectaban todas mis relaciones. Hoy tengo una pareja maravillosa.\"",
        testimonial6Name: "Elena V.",
        testimonial6Role: "Sanación emocional",
        testimonial7Text: "\"Después de mi divorcio, pensé que nunca volvería a amar. El proceso de sanación me devolvió la esperanza y hoy estoy en una relación sana.\"",
        testimonial7Name: "Patricia L.",
        testimonial7Role: "Recuperación post-divorcio",
        testimonial8Text: "\"La terapia de pareja nos enseñó a comunicarnos sin herirnos. Hoy tenemos herramientas para resolver cualquier conflicto con amor.\"",
        testimonial8Name: "Carlos y Marta",
        testimonial8Role: "Terapia de comunicación",
        
        // Contacto section
        contactTitle: "¿Lista para transformar tu vida amorosa?",
        contactSubtitle: "Da el primer paso hacia la relación que mereces",
        contactInfo1Title: "Sesión exploratoria gratuita",
        contactInfo1Text: "30 minutos para conocernos y definir tu camino",
        contactInfo2Title: "Atención personalizada",
        contactInfo2Text: "Cada proceso es único y diseñado para ti",
        contactInfo3Title: "Enfoque amoroso",
        contactInfo3Text: "Te acompañamos desde la compasión y el respeto",
        
        formTitle: "Agenda tu sesión gratuita",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "Tu email",
        servicePlaceholder: "Selecciona un servicio",
        option1: "Terapia individual",
        option2: "Terapia de pareja",
        option3: "Cursos online",
        messagePlaceholder: "Cuéntame brevemente lo que estás buscando",
        formButton: "Enviar solicitud",
        
        // Footer
        footerTagline: "Sanando corazones, transformando relaciones",
        footerLinksTitle: "Enlaces",
        footerContactTitle: "Contacto",
        footerFollowTitle: "Síguenos",
        footerSocialTitle: "Síguenos",
        footerFollowUs: "Síguenos",
        footerRights: "Todos los derechos reservados.",
        footerPhone: "+34 123 456 789",
        copyright: "© 2023 Vivir en el Amor. Todos los derechos reservados.",
        footerCopyright: "© 2023 Vivir en el Amor. Todos los derechos reservados.",
        footerText: "Transformando vidas a través del amor consciente y la sanación holística.",
        footerQuickLinks: "Enlaces rápidos",
        footerHome: "Inicio",
        footerContact: "Contacto",
        footerPrivacy: "Política de privacidad",
        privacyPolicy: "Política de privacidad",
        termsConditions: "Términos y condiciones",
        
        // TESTIMONIOS-VIDEO.HTML
        videoTestimonialsTitle: "Testimonios en Video",
        videoTestimonialsSubtitle: "Descubre historias reales de mujeres que transformaron sus vidas y encontraron el amor verdadero",
        videoSectionTitle: "Historias de Transformación",
        videoSectionSubtitle: "Escucha directamente de nuestras alumnas cómo han cambiado sus vidas",
        videoTestimonialsCTA: "¿Lista para comenzar tu propia transformación?",
        videoTestimonialsButton: "Agenda tu sesión gratuita",
        
        // CURSOS-ONLINE.HTML
        menuCourses: "Cursos",
        backHome: "Volver al Inicio",
        coursesHeroTitle: "Programas Online de Transformación",
        coursesHeroSubtitle: "Descubre nuestros cursos especializados diseñados para transformar tu vida amorosa desde cualquier lugar del mundo",
        
        // Badges
        badgePopular: "Popular",
        badgeFeatured: "Destacado",
        badgeNew: "Nuevo",
        
        // Curso 1 - Sanación del Abandono
        courseAbandonmentTitle: "Sanación de la Herida del Abandono",
        courseAbandonmentDesc: "Libérate de los patrones de abandono y construye relaciones seguras y duraderas",
        courseAbandonmentFeature1: "8 módulos completos",
        courseAbandonmentFeature2: "6 semanas de duración",
        courseAbandonmentFeature3: "Certificado incluido",
        courseAbandonmentButton: "Lo quiero",
        
        // Curso 2 - Amor Consciente
        courseConscientLoveTitle: "Amor Consciente",
        courseConscientLoveDesc: "Aprende a crear relaciones auténticas, profundas y conscientes",
        courseConscientLoveFeature1: "10 módulos completos",
        courseConscientLoveFeature2: "8 semanas de duración",
        courseConscientLoveFeature3: "Comunidad privada",
        courseConscientLoveButton: "Lo quiero",
        
        // Curso 3 - Autoestima
        courseSelfEsteemTitle: "Autoestima y Amor Propio",
        courseSelfEsteemDesc: "Reconstruye tu confianza y ámate incondicionalmente",
        courseSelfEsteemFeature1: "6 módulos completos",
        courseSelfEsteemFeature2: "4 semanas de duración",
        courseSelfEsteemFeature3: "Workbook incluido",
        courseSelfEsteemButton: "Lo quiero",
        
        // Curso 4 - Comunicación
        courseCommunicationTitle: "Comunicación en Pareja",
        courseCommunicationDesc: "Transforma tus relaciones a través de la comunicación efectiva y empática",
        courseCommunicationFeature1: "7 módulos completos",
        courseCommunicationFeature2: "5 semanas de duración",
        courseCommunicationFeature3: "Soporte directo",
        courseCommunicationButton: "Lo quiero",
        
        // CTA Section
        coursesCtaTitle: "¿No sabes cuál elegir?",
        coursesCtaText: "Agenda una sesión gratuita de 30 minutos y te ayudaré a encontrar el curso perfecto para ti",
        coursesCtaButton: "Agendar consulta",
        
        // TERAPIAS-ONLINE.HTML
        therapiesPageTitle: "Terapias Online | Vivir en el Amor",
        therapiesHeroTitle: "Terapias Online",
        therapiesHeroSubtitle: "Sanación profunda desde la comodidad de tu hogar a través de videoconferencia",
        
        // TERAPIAS-PAREJA.HTML
        therapiesCouplePageTitle: "Terapias de Pareja | Vivir en el Amor",
        therapiesCoupleHeroTitle: "Terapias de Pareja",
        therapiesCoupleHeroSubtitle: "Fortalece tu relación y reconecta emocionalmente desde cualquier lugar del mundo",
        
        // Constelación Fluvial
        therapyFluvialTitle: "Constelación Fluvial",
        therapyFluvialDesc1: "La Constelación Fluvial es una terapia sistémica que se hace de manera individual, está basada en las constelaciones familiares y utiliza el agua como vehículo de comunicación con los campos morfogenéticos; se enfoca en romper las lealtades invisibles que tenemos con nuestros ancestros para liberar programas heredados relacionados con la falta de éxito, dificultad en la pareja, falta de prosperidad, enfermedades, abusos, duelos, ansiedad, adicciones, suicidios, infertilidad, etc.",
        therapyFluvialDesc2: "La duración es de dos horas, tú eliges la necesidad que tengas para resolver.",
        therapyFluvialDesc3: "Modalidad en línea por videoconferencia desde cualquier parte del mundo a través de la plataforma de Zoom de manera simultánea.",
        therapyFluvialPrice: "Precio: $200 USD",
        therapyFluvialDuration: "Duración: 2 horas",
        
        // Psicoterapia Online
        therapyPsychoTitle: "Psicoterapia Online",
        therapyPsychoDesc1: "Terapia psicológica con enfoque familiar sistémico, donde se abordan los problemas generados en el contexto de las relaciones familiares o con personas significativas en la vida de las personas. La terapia sistémica tiene como objetivo encontrar solución a los problemas prácticos y reales. Con este enfoque se trabaja en el reconocimiento de los patrones disfuncionales dentro de la vida de las personas.",
        therapyPsychoObjectivesTitle: "Los objetivos principales son:",
        therapyPsychoObj1: "Restablecer el equilibrio de la persona",
        therapyPsychoObj2: "Aumentar la comprensión de su malestar y problemática",
        therapyPsychoObj3: "Estimular el trabajo emocional y personal para ser protagonista en su transformación y cambio",
        therapyPsychoObj4: "Desarrollar estrategias de afrontamiento y habilidades de resolución de problemas específicos",
        therapyPsychoDesc2: "Modalidad en línea por videoconferencia desde cualquier parte del mundo a través de Zoom de manera simultánea.",
        therapyPsychoPrice: "Precio: $100 USD",
        therapyPsychoDuration: "Duración: 1 hora",
        
        // Constelación de Pareja
        therapyCoupleTitle: "Constelación de Pareja",
        therapyCoupleDesc1: "Es una terapia que usa el método de las constelaciones fluviales y tiene como finalidad diagnosticar y solucionar los conflictos actuales del consultante en la relación de pareja, se trabaja en cada uno de los niveles del amor: material, sexual, emocional, mental, consciente, cósmico, divino.",
        therapyCoupleDesc2: "También se puede hacer de manera individual para diagnosticar cómo está la persona en cada nivel y sanar su vida amorosa aunque no esté en pareja.",
        therapyCoupleDesc3: "Modalidad en línea por Zoom desde cualquier parte del mundo.",
        therapyCouplePrice: "Precio: $200 USD",
        therapyCoupleDuration: "Duración: 2 horas",
        
        // Cierre Amoroso de Parejas Anteriores
        therapyClosureTitle: "Cierre Amoroso de Parejas Anteriores",
        therapyClosureDesc1: "El cierre de parejas se basa en el método de las constelaciones fluviales que usa el agua para accesar la información de los campos morfogenéticos, es una terapia que sirve para cerrar los ciclos que quedaron abiertos con cada una de las parejas, desde el primer amor hasta el último, se hace una conexión de almas integrando el aprendizaje con cada uno a través del agradecimiento y del entendimiento del patrón principal en su forma de relacionarse, el cual está sostenido en lealtades familiares y es la raíz de las relaciones de pareja tóxicas.",
        therapyClosureDesc2: "Modalidad en línea a través de Zoom.",
        therapyClosurePrice: "Precio: $100 USD",
        therapyClosureDuration: "Duración: 1 hora",
        
        // Terapia Fluvial
        therapyRiverTitle: "Terapia Fluvial",
        therapyRiverDesc1: "Se basa en el método de las constelaciones fluviales y utiliza como vehículo el agua y figurines de hule espuma para representar a los miembros de la familia y el tema a trabajar. Se hace de manera online a través de Zoom y su duración es de una hora. La diferencia con una constelación fluvial es que sólo se trabaja uno de los temas a elegir mientras que la constelación incluye todos.",
        therapyRiverTopicsTitle: "Los temas a elegir son:",
        therapyRiverTopic1: "Sanar a tu familia de origen (tus padres y hermanos)",
        therapyRiverTopic2: "Sanar a tu familia actual (tu pareja e hijos)",
        therapyRiverTopic3: "Sanar heridas de la infancia",
        therapyRiverTopic4: "Romper una lealtad",
        therapyRiverDesc2: "Todas las tiradas incluyen trabajo con papá y mamá.",
        therapyRiverPrice: "Precio: $100 USD",
        therapyRiverDuration: "Duración: 1 hora",
        
        // CTA Terapias
        therapiesCTATitle: "¿Lista para comenzar tu transformación?",
        therapiesCTASubtitle: "Agenda tu sesión hoy y da el primer paso hacia la sanación",
        therapiesCTAButton: "Agendar Sesión",
        
        // PÁGINAS DE DETALLE DE CURSOS - GENERAL
        backToCourses: "Volver a cursos",
        moduleLabel: "Módulo 1",
        moduleLabel2: "Módulo 2",
        moduleLabel3: "Módulo 3",
        moduleLabel4: "Módulo 4",
        moduleLabel5: "Módulo 5",
        moduleLabel6: "Módulo 6",
        moduleLabel7: "Módulo 7",
        moduleLabel8: "Módulo 8",
        moduleLabel9: "Módulo 9",
        moduleLabel10: "Módulo 10",
        
        // CURSO ABANDONO - SANACIÓN DEL ABANDONO
        courseAbandonmentHeroTitle: "Sanación de la Herida del Abandono",
        courseAbandonmentHeroSubtitle: "Transforma tus patrones de abandono y construye relaciones seguras, duraderas y llenas de amor",
        courseAbandonmentModules: "8 módulos completos",
        courseAbandonmentAccess: "Acceso de por vida",
        courseAbandonmentCertificate: "Certificado incluido",
        courseAbandonmentSupport: "Soporte de preguntas y respuestas",
        courseAbandonmentDescTitle: "Sobre este curso",
        courseAbandonmentDesc1: "¿Sientes miedo constante al abandono? ¿Repites patrones de elegir personas no disponibles? Este curso te ayudará a sanar la herida del abandono desde la raíz.",
        courseAbandonmentDesc2: "A través de 8 módulos intensivos, explorarás el origen de tus patrones de abandono, aprenderás a crear seguridad emocional y transformarás la forma en que te relacionas con los demás.",
        courseAbandonmentBenefitsTitle: "¿Qué lograrás?",
        courseAbandonmentBenefit1: "Identificar y comprender tus patrones de abandono",
        courseAbandonmentBenefit2: "Sanar heridas de la infancia que afectan tus relaciones",
        courseAbandonmentBenefit3: "Desarrollar seguridad emocional y apego saludable",
        courseAbandonmentBenefit4: "Dejar de atraer personas no disponibles o tóxicas",
        courseAbandonmentBenefit5: "Construir relaciones estables y seguras",
        courseAbandonmentBenefit6: "Recuperar tu confianza en el amor",
        courseAbandonmentCurriculumTitle: "Contenido del curso",
        courseAbandonmentModule1: "Identificando el Patrón",
        courseAbandonmentModule1Duration: "3 lecciones",
        courseAbandonmentModule1L1: "Qué es la herida del abandono",
        courseAbandonmentModule1L2: "Cómo reconocer tu patrón",
        courseAbandonmentModule1L3: "Autoevaluación inicial",
        courseAbandonmentModule2: "El Origen de la Herida",
        courseAbandonmentModule2Duration: "4 lecciones",
        courseAbandonmentModule2L1: "Experiencias de la infancia que crearon la herida",
        courseAbandonmentModule2L2: "Patrones familiares y apego",
        courseAbandonmentModule2L3: "Impacto en tu vida adulta",
        courseAbandonmentModule2L4: "Ejercicio: Tu línea de tiempo emocional",
        courseAbandonmentModule3: "Seguridad Emocional",
        courseAbandonmentModule3Duration: "3 lecciones",
        courseAbandonmentModule3L1: "Construir tu seguridad interna",
        courseAbandonmentModule3L2: "Prácticas de auto-sostenimiento",
        courseAbandonmentModule3L3: "Meditación de reparentación",
        courseAbandonmentModule4: "Cambiando Patrones",
        courseAbandonmentModule4Duration: "4 lecciones",
        courseAbandonmentModule4L1: "Reconocer desencadenantes y reacciones automáticas",
        courseAbandonmentModule4L2: "Crear nuevas respuestas más saludables",
        courseAbandonmentModule4L3: "Práctica de elecciones conscientes",
        courseAbandonmentModule4L4: "Ejercicio: Tu plan de acción",
        courseAbandonmentModule5: "Relaciones Saludables",
        courseAbandonmentModule5Duration: "3 lecciones",
        courseAbandonmentModule5L1: "Qué es una relación segura",
        courseAbandonmentModule5L2: "Identificar personas emocionalmente disponibles",
        courseAbandonmentModule5L3: "Establecer límites saludables",
        courseAbandonmentModule6: "Comunicación Efectiva",
        courseAbandonmentModule6Duration: "3 lecciones",
        courseAbandonmentModule6L1: "Expresar tus necesidades sin miedo",
        courseAbandonmentModule6L2: "Escucha activa y empática",
        courseAbandonmentModule6L3: "Manejar el miedo al abandono en la relación",
        courseAbandonmentModule7: "Sanación Profunda",
        courseAbandonmentModule7Duration: "4 lecciones",
        courseAbandonmentModule7L1: "Trabajo con el niño interior",
        courseAbandonmentModule7L2: "Perdón y liberación",
        courseAbandonmentModule7L3: "Técnicas de sanación energética",
        courseAbandonmentModule7L4: "Meditación de integración",
        courseAbandonmentModule8: "Nuevo Comienzo",
        courseAbandonmentModule8Duration: "3 lecciones",
        courseAbandonmentModule8L1: "Crear tu nueva historia de amor",
        courseAbandonmentModule8L2: "Mantener los cambios a largo plazo",
        courseAbandonmentModule8L3: "Celebración y cierre",
        courseAbandonmentInstructorTitle: "Tu instructora",
        courseAbandonmentInstructorRole: "Terapeuta Holística y Especialista en Trauma",
        courseAbandonmentInstructorBio: "Con más de 20 años de experiencia ayudando a personas a sanar la herida del abandono, Michelle ha desarrollado un método único que combina psicología, terapia energética y prácticas de mindfulness.",
        courseAbandonmentPriceHeader: "Inscríbete ahora",
        courseAbandonmentPriceSubtext: "Pago único - Acceso de por vida",
        courseAbandonmentCTA: "Comenzar Ahora",
        courseAbandonmentFeature1: "Acceso ilimitado de por vida",
        courseAbandonmentFeature2: "Disponible en todos tus dispositivos",
        courseAbandonmentFeature3: "Certificado de finalización",
        courseAbandonmentFeature4: "Comunidad privada de estudiantes",
        courseAbandonmentGuaranteeTitle: "Garantía de 30 días",
        courseAbandonmentGuaranteeText: "Si no estás satisfecha, te devolvemos tu dinero sin preguntas.",
        courseAbandonmentStat1: "estudiantes transformados",
        courseAbandonmentStat2: "valoración promedio",
        courseAbandonmentStat3: "tasa de finalización",
        courseAbandonmentTestimonialsTitle: "Lo que dicen nuestros estudiantes",
        courseAbandonmentTestimonial1: "\"Este curso cambió mi vida. Por fin entendí por qué repetía los mismos patrones y aprendí a romperlos.\"",
        courseAbandonmentTestimonial1Role: "Terapia individual",
        courseAbandonmentTestimonial2: "\"El método de Michelle es profundo y efectivo. Hoy tengo una relación estable y ya no temo el abandono.\"",
        courseAbandonmentTestimonial2Role: "Curso online",
        courseAbandonmentTestimonial3: "\"El trabajo con el niño interior fue transformador. Sané heridas que ni siquiera sabía que tenía.\"",
        courseAbandonmentTestimonial3Role: "Sanación emocional",
        
        // Traducciones adicionales del HTML de curso-abandono
        courseAbandonmentBadge: "Popular",
        courseAbandonmentDuration: "6 semanas de contenido",
        courseAbandonmentModule1Number: "Módulo 1",
        courseAbandonmentModule1Title: "Comprendiendo la Herida del Abandono",
        courseAbandonmentModule1Lesson1: "Introducción al programa",
        courseAbandonmentModule1Lesson2: "¿Qué es la herida del abandono?",
        courseAbandonmentModule1Lesson3: "Orígenes de la herida",
        courseAbandonmentModule1Lesson4: "Cuestionario de autoevaluación",
        courseAbandonmentModule2Number: "Módulo 2",
        courseAbandonmentModule2Title: "Identificando Patrones",
        courseAbandonmentModule2Lesson1: "Patrones de abandono en relaciones",
        courseAbandonmentModule2Lesson2: "El ciclo de dependencia emocional",
        courseAbandonmentModule2Lesson3: "Ejercicio práctico de reconocimiento",
        courseAbandonmentModule3Number: "Módulo 3",
        courseAbandonmentModule3Title: "Sanación del Niño Interior",
        courseAbandonmentModule3Lesson1: "Conectando con tu niño interior",
        courseAbandonmentModule3Lesson2: "Meditación guiada de sanación",
        courseAbandonmentModule3Lesson3: "Carta a tu niño interior",
        courseAbandonmentModule3Lesson4: "Audio de meditación para descargar",
        courseAbandonmentModule4Number: "Módulo 4",
        courseAbandonmentModule4Title: "Construyendo Seguridad Interna",
        courseAbandonmentModule4Lesson1: "El poder del amor propio",
        courseAbandonmentModule4Lesson2: "Ejercicios de autovalidación",
        courseAbandonmentModule4Lesson3: "Creando tu red de seguridad interna",
        courseAbandonmentModules58Number: "Módulos 5-8",
        courseAbandonmentModules58Title: "Transformación y Práctica",
        courseAbandonmentModules58Duration: "4 horas",
        courseAbandonmentModules58Lesson1: "Límites saludables en relaciones",
        courseAbandonmentModules58Lesson2: "Comunicación asertiva",
        courseAbandonmentModules58Lesson3: "Atrayendo relaciones sanas",
        courseAbandonmentModules58Lesson4: "Manteniendo la sanación",
        courseAbandonmentModules58Lesson5: "Workbook completo PDF",
        courseAbandonmentModules58Lesson6: "Certificado de finalización",
        courseAbandonmentInstructorName: "Michelle",
        courseAbandonmentPriceTitle: "Inversión en ti misma",
        courseAbandonmentEnrollButton: "Comenzar Ahora",
        courseAbandonmentFeature5: "Acceso de por vida",
        courseAbandonmentFeature6: "Certificado incluido",
        courseAbandonmentFeature7: "Garantía 30 días",
        courseAbandonmentStudents: "580+",
        courseAbandonmentStudentsLabel: "Estudiantes",
        courseAbandonmentRating: "4.9/5",
        courseAbandonmentRatingLabel: "Valoración",
        courseAbandonmentLanguage: "Español",
        courseAbandonmentLanguageLabel: "Idioma",
        courseAbandonmentTestimonial1Text: "\"Este curso cambió mi vida. Finalmente entendí de dónde venía mi miedo al abandono y pude sanarlo. Ahora tengo una relación increíble y me siento segura.\"",
        courseAbandonmentTestimonial1Author: "Carmen L.",
        courseAbandonmentTestimonial1Location: "Madrid, España",
        courseAbandonmentTestimonial2Text: "\"Los ejercicios son profundos pero muy claros. Michelle tiene un don para explicar conceptos complejos de manera simple. ¡Súper recomendado!\"",
        courseAbandonmentTestimonial2Author: "Patricia M.",
        courseAbandonmentTestimonial2Location: "Buenos Aires, Argentina",
        courseAbandonmentTestimonial3Text: "\"Llevaba años en terapia sin resultados. Este curso fue el punto de inflexión. Las meditaciones son hermosas y realmente efectivas.\"",
        courseAbandonmentTestimonial3Author: "Sofía R.",
        courseAbandonmentTestimonial3Location: "Ciudad de México",
        
        // CURSO AMOR CONSCIENTE
        courseConscientLoveTitlePage: "Amor Consciente | Vivir en el Amor",
        courseConscientLoveHeroTitle: "Amor Consciente: Construye Relaciones Auténticas",
        courseConscientLoveHeroSubtitle: "Aprende a crear y mantener relaciones profundas, conscientes y duraderas basadas en el respeto mutuo y el crecimiento conjunto",
        courseConscientLoveModules: "10 módulos completos",
        courseConscientLoveAccess: "Acceso de por vida",
        courseConscientLoveCertificate: "Certificado incluido",
        courseConscientLoveCommunity: "Comunidad privada",
        courseConscientLoveDescTitle: "Sobre este curso",
        courseConscientLoveDesc1: "¿Sientes que tus relaciones no alcanzan la profundidad que deseas? ¿Te cuesta mantener la conexión emocional a largo plazo? Este curso te enseñará a desarrollar relaciones conscientes, auténticas y transformadoras.",
        courseConscientLoveDesc2: "A través de 10 módulos intensivos, explorarás las bases del amor consciente, aprenderás a comunicarte desde la vulnerabilidad, establecerás límites saludables y crearás una relación que nutra tu crecimiento personal y el de tu pareja.",
        courseConscientLoveBenefitsTitle: "¿Qué lograrás?",
        courseConscientLoveBenefit1: "Comprender los pilares del amor consciente y cómo aplicarlos",
        courseConscientLoveBenefit2: "Desarrollar comunicación auténtica y vulnerable con tu pareja",
        courseConscientLoveBenefit3: "Establecer límites desde el amor y el respeto mutuo",
        courseConscientLoveBenefit4: "Transformar conflictos en oportunidades de crecimiento",
        courseConscientLoveBenefit5: "Mantener la pasión y conexión a largo plazo",
        courseConscientLoveBenefit6: "Crear una relación que apoye tu evolución personal",
        courseConscientLoveCurriculumTitle: "Contenido del curso",
        courseConscientLoveModule1: "Fundamentos del Amor Consciente",
        courseConscientLoveModule1Duration: "4 lecciones",
        courseConscientLoveModule1L1: "Qué es el amor consciente vs. amor inconsciente",
        courseConscientLoveModule1L2: "Los 5 pilares de una relación consciente",
        courseConscientLoveModule1L3: "Autoevaluación: ¿Dónde estás ahora?",
        courseConscientLoveModule1L4: "Ejercicio práctico: Visión de tu relación ideal",
        courseConscientLoveModule2: "Comunicación Auténtica",
        courseConscientLoveModule2Duration: "5 lecciones",
        courseConscientLoveModule2L1: "El arte de la comunicación no violenta",
        courseConscientLoveModule2L2: "Expresar necesidades sin atacar",
        courseConscientLoveModule2L3: "Escucha activa y empática",
        courseConscientLoveModule2L4: "Comunicación en momentos de tensión",
        courseConscientLoveModule2L5: "Práctica: Diálogos conscientes",
        courseConscientLoveModule3: "Vulnerabilidad y Confianza",
        courseConscientLoveModule3Duration: "4 lecciones",
        courseConscientLoveModule3L1: "El poder de mostrarte vulnerable",
        courseConscientLoveModule3L2: "Construir confianza emocional",
        courseConscientLoveModule3L3: "Superar el miedo al rechazo",
        courseConscientLoveModule3L4: "Ejercicio: Compartir tu verdad",
        courseConscientLoveModule4: "Límites Saludables",
        courseConscientLoveModule4Duration: "3 lecciones",
        courseConscientLoveModule4L1: "Por qué los límites son actos de amor",
        courseConscientLoveModule4L2: "Cómo establecer límites sin culpa",
        courseConscientLoveModule4L3: "Respetar los límites de tu pareja",
        courseConscientLoveModule5: "Gestión Consciente de Conflictos",
        courseConscientLoveModule5Duration: "4 lecciones",
        courseConscientLoveModule5L1: "Los conflictos como oportunidades",
        courseConscientLoveModule5L2: "Técnicas de resolución consciente",
        courseConscientLoveModule5L3: "Desactivar discusiones destructivas",
        courseConscientLoveModule5L4: "El arte de perdonar",
        courseConscientLoveModule6: "Intimidad Profunda",
        courseConscientLoveModule6Duration: "4 lecciones",
        courseConscientLoveModule6L1: "Intimidad emocional vs. física",
        courseConscientLoveModule6L2: "Mantener la pasión a largo plazo",
        courseConscientLoveModule6L3: "Explorar nuevas dimensiones juntos",
        courseConscientLoveModule6L4: "Rituales de conexión diaria",
        courseConscientLoveModule7: "Crecimiento Individual en Pareja",
        courseConscientLoveModule7Duration: "3 lecciones",
        courseConscientLoveModule7L1: "Equilibrar independencia y unión",
        courseConscientLoveModule7L2: "Apoyar los sueños de tu pareja",
        courseConscientLoveModule7L3: "Crecer juntos sin perderse a sí mismos",
        courseConscientLoveModule8: "Sanar Juntos",
        courseConscientLoveModule8Duration: "3 lecciones",
        courseConscientLoveModule8L1: "Identificar heridas que afectan la relación",
        courseConscientLoveModule8L2: "Ser espejo y sanador para el otro",
        courseConscientLoveModule8L3: "Técnicas de sanación en pareja",
        courseConscientLoveModule9: "Propósito Compartido",
        courseConscientLoveModule9Duration: "3 lessons",
        courseConscientLoveModule9L1: "Descubrir su misión como pareja",
        courseConscientLoveModule9L2: "Crear visión compartida del futuro",
        courseConscientLoveModule9L3: "Mantener la alineación de valores",
        courseConscientLoveModule10: "Compromiso Consciente",
        courseConscientLoveModule10Duration: "4 lecciones",
        courseConscientLoveModule10L1: "Qué significa el compromiso real",
        courseConscientLoveModule10L2: "Renovar el compromiso continuamente",
        courseConscientLoveModule10L3: "Plan de acción: Los próximos 90 días",
        courseConscientLoveModule10L4: "Celebración y cierre",
        courseConscientLoveInstructorTitle: "Tu instructora",
        courseConscientLoveInstructorRole: "Terapeuta de Relaciones y Coach Holística",
        courseConscientLoveInstructorBio: "Con más de 20 años de experiencia ayudando a parejas a crear relaciones conscientes y duraderas, Michelle ha desarrollado un método único que combina psicología, espiritualidad y prácticas de conexión profunda.",
        courseConscientLovePriceHeader: "Inscríbete ahora",
        courseConscientLovePriceSubtext: "Pago único - Acceso de por vida",
        courseConscientLoveCTA: "Comenzar Ahora",
        courseConscientLoveFeature1: "Acceso ilimitado de por vida",
        courseConscientLoveFeature2: "Disponible en todos tus dispositivos",
        courseConscientLoveFeature3: "Certificado de finalización",
        courseConscientLoveFeature4: "Comunidad privada de estudiantes",
        courseConscientLoveGuaranteeTitle: "Garantía de 30 días",
        courseConscientLoveGuaranteeText: "Si no estás satisfecha, te devolvemos tu dinero sin preguntas.",
        courseConscientLoveStat1: "parejas transformadas",
        courseConscientLoveStat2: "valoración promedio",
        courseConscientLoveStat3: "tasa de finalización",
        courseConscientLoveTestimonialsTitle: "Lo que dicen nuestros estudiantes",
        courseConscientLoveTestimonial1: "\"Este curso salvó nuestra relación. Aprendimos a comunicarnos de verdad y ahora nos sentimos más conectados que nunca.\"",
        courseConscientLoveTestimonial1Role: "Pareja, 8 años juntos",
        courseConscientLoveTestimonial2: "\"Las herramientas de gestión de conflictos cambiaron todo. Ahora las discusiones son oportunidades para crecer juntos.\"",
        courseConscientLoveTestimonial2Role: "Coaching individual",
        courseConscientLoveTestimonial3: "\"Michelle nos enseñó a construir intimidad real. Después de 15 años juntos, volvimos a sentirnos enamorados.\"",
        courseConscientLoveTestimonial3Role: "Pareja, 15 años juntos",
        
        // CURSO AUTOESTIMA Y COMUNICACIÓN - Traducciones adicionales disponibles en traducciones-cursos.js
        // Se cargan dinámicamente cuando sea necesario
        courseSelfEsteemTitlePage: "Autoestima y Amor Propio | Vivir en el Amor",
        courseCommunicationTitlePage: "Comunicación en Pareja | Vivir en el Amor"
    },
    en: {
        // Título de la página
        pageTitle: "Living in Love | Holistic Love Healing",
        
        // Header y menú
        menuHome: "Home",
        menuBenefits: "Benefits",
        menuServices: "Services",
        menuTestimonials: "Testimonials",
        menuAbout: "About me",
        menuContact: "Contact",
        
        // Hero section
        heroTitle: "Live happily in a stable and successful relationship where you feel loved, desired and valued",
        heroSubtitle: "Transform your love life from the root with our holistic emotional healing method",
        heroSubtitle2: "Discover the conscious love that nourishes your soul and helps you grow every day",
        heroSubtitle3: "Create deep and lasting connections from self-love and mutual respect",
        heroSubtitle4: "Find the inner peace and emotional balance you deserve",
        heroSubtitle5: "Transform your relationships and discover the true meaning of love",
        heroSubtitle6: "Live every moment with fullness and joy with the one you love",
        heroSubtitle7: "Build a future full of love, understanding and shared happiness",
        heroCta: "Start your transformation",
        heroCtaSecondary: "View services",
        scrollText: "Discover more",
        
        // Beneficios section
        benefitsTitle: "Transform your love life",
        benefitsSubtitle: "Discover how we can help you create healthier and more conscious relationships",
        benefitCard1Title: "Emotional healing",
        benefitCard1Text: "Release past wounds and open your heart to true love.",
        benefitCard2Title: "Effective communication",
        benefitCard2Text: "Learn to express your needs and listen with empathy.",
        benefitCard3Title: "Deep connection",
        benefitCard3Text: "Create authentic bonds that nourish your soul and help you grow.",
        benefitCard4Title: "Healthy boundaries",
        benefitCard4Text: "Establish boundaries from self-love and mutual respect.",
        benefitsCta: "Discover all benefits",
        
        // Servicios section
        servicesTitle: "Our services",
        servicesSubtitle: "Find the perfect path for your personal transformation",
        service1Title: "Individual Therapy",
        service1Text: "Personalized sessions to heal emotional wounds and prepare you for healthy relationships.",
        service1Feature1: "Personalized healing",
        service1Feature2: "Practical tools",
        service1Feature3: "Constant follow-up",
        service2Title: "Couples Therapy",
        service2Text: "Safe space to improve communication, resolve conflicts and reconnect emotionally.",
        service2Feature1: "Professional mediation",
        service2Feature2: "Reconnection techniques",
        service2Feature3: "Systemic approach",
        service3Title: "Online Courses",
        service3Text: "Programs accessible from anywhere to work on your personal and love growth.",
        service3Feature1: "24/7 access",
        service3Feature2: "Support community",
        service3Feature3: "Downloadable content",
        serviceButton: "More information",
        
        // Sobre mí section
        aboutTitle: "About me",
        aboutText1: "I'm Michelle, and for over 20 years I've accompanied hundreds of people on their journey towards healthier and more conscious relationships.",
        aboutText2: "My approach integrates psychology, spirituality and energy healing techniques to offer holistic support that transforms lives from the root.",
        stat1: "people accompanied",
        stat2: "countries",
        stat3: "satisfaction",
        aboutCta: "Connect with me",
        experienceYears: "years of experience",
        
        // Team section
        menuTeam: "Team",
        teamTitle: "Our Team",
        teamSubtitle: "Professionals committed to your emotional well-being",
        
        // Team Page
        teamPageTitle: "Our Team | Living in Love",
        teamPageHeroTitle: "Our Team",
        teamPageHeroSubtitle: "Professionals dedicated to your transformation and emotional well-being",
        
        // Michelle Robles
        teamMichelleName: "Michelle Robles",
        teamMichelleRole: "Founder & Lead Therapist",
        teamMichelleDesc1: "With over 20 years of experience accompanying people on their journey towards healthy love, Michelle has developed a unique method that integrates transpersonal psychology, energy therapies and mindfulness practices.",
        teamMichelleDesc2: "Her holistic approach has helped hundreds of people heal their emotional wounds and create relationships based on true love and mutual respect.",
        teamMichelleEducationTitle: "Education and Certifications:",
        teamMichelleEdu1: "Master's in Transpersonal Psychology",
        teamMichelleEdu2: "Certification in Energy Therapies",
        teamMichelleEdu3: "Specialist in River Constellations",
        teamMichelleEdu4: "Training in Emotional Healing and Conscious Relationships",
        teamMichelleSpecialtiesTitle: "Areas of Specialization:",
        teamMichelleSpec1: "Emotional wound healing",
        teamMichelleSpec2: "Couple therapy and conscious relationships",
        teamMichelleSpec3: "Family and river constellations",
        teamMichelleSpec4: "Self-esteem and self-love development",
        
        // Rocío Contreras
        teamRocioName: "Rocío Contreras",
        teamRocioRole: "Project Administrator",
        teamRocioDesc1: "She is the fundamental pillar that sustains the energy of Living in Love, the project administrator who ensures that things work in order so that love can flow.",
        teamRocioDesc2: "She channels knowledge to manage material energies and make them prosper for everyone.",
        
        // Team CTA
        teamCTATitle: "Ready to start your transformation?",
        teamCTASubtitle: "Our team is here to accompany you every step of the way",
        teamCTAButton: "Contact Us",
        
        // Testimonios section - 8 testimonios
        testimonialsTitle: "Transformation stories",
        testimonialsSubtitle: "What those who have walked this path say",
        watchVideoTestimonials: "Watch Video Testimonials",
        testimonial1Text: "\"After years in toxic relationships, I finally found the path to healthy love. Michelle guided me with patience and wisdom.\"",
        testimonial1Name: "Ana G.",
        testimonial1Role: "Individual therapy",
        testimonial2Text: "\"Our relationship was on the verge of collapse. Thanks to couples therapy, today we are more united and happy than ever.\"",
        testimonial2Name: "Laura and Miguel",
        testimonial2Role: "Couples therapy",
        testimonial3Text: "\"The online course gave me the tools to heal my self-esteem. Today I feel complete and ready for true love.\"",
        testimonial3Name: "Maria S.",
        testimonial3Role: "Online course",
        testimonial4Text: "\"I learned to set healthy boundaries and value myself. Now I have a relationship where I feel deeply respected and loved.\"",
        testimonial4Name: "Carolina R.",
        testimonial4Role: "Individual coaching",
        testimonial5Text: "\"The healing process was transformative. Today I see life with different eyes and attract much healthier relationships.\"",
        testimonial5Name: "Sofia M.",
        testimonial5Role: "Energy therapy",
        testimonial6Text: "\"Thanks to Michelle, I was able to heal childhood wounds that affected all my relationships. Today I have a wonderful partner.\"",
        testimonial6Name: "Elena V.",
        testimonial6Role: "Emotional healing",
        testimonial7Text: "\"After my divorce, I thought I would never love again. The healing process gave me hope and today I'm in a healthy relationship.\"",
        testimonial7Name: "Patricia L.",
        testimonial7Role: "Post-divorce recovery",
        testimonial8Text: "\"Couples therapy taught us to communicate without hurting each other. Today we have tools to resolve any conflict with love.\"",
        testimonial8Name: "Carlos and Marta",
        testimonial8Role: "Communication therapy",
        
        // Contacto section
        contactTitle: "Ready to transform your love life?",
        contactSubtitle: "Take the first step towards the relationship you deserve",
        contactInfo1Title: "Free exploratory session",
        contactInfo1Text: "30 minutes to get to know each other and define your path",
        contactInfo2Title: "Personalized attention",
        contactInfo2Text: "Each process is unique and designed for you",
        contactInfo3Title: "Loving approach",
        contactInfo3Text: "We accompany you with compassion and respect",
        
        formTitle: "Schedule your free session",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email",
        servicePlaceholder: "Select a service",
        option1: "Individual therapy",
        option2: "Couples therapy",
        option3: "Online courses",
        messagePlaceholder: "Tell me briefly what you're looking for",
        formButton: "Send request",
        
        // Footer
        footerTagline: "Healing hearts, transforming relationships",
        footerLinksTitle: "Links",
        footerContactTitle: "Contact",
        footerFollowTitle: "Follow us",
        footerSocialTitle: "Follow us",
        footerFollowUs: "Follow us",
        footerRights: "All rights reserved.",
        footerPhone: "+34 123 456 789",
        copyright: "© 2023 Living in Love. All rights reserved.",
        footerCopyright: "© 2023 Living in Love. All rights reserved.",
        footerText: "Transforming lives through conscious love and holistic healing.",
        footerQuickLinks: "Quick Links",
        footerHome: "Home",
        footerContact: "Contact",
        footerPrivacy: "Privacy Policy",
        privacyPolicy: "Privacy policy",
        termsConditions: "Terms and conditions",
        
        // TESTIMONIOS-VIDEO.HTML
        videoTestimonialsTitle: "Video Testimonials",
        videoTestimonialsSubtitle: "Discover real stories of women who transformed their lives and found true love",
        videoSectionTitle: "Transformation Stories",
        videoSectionSubtitle: "Hear directly from our students how they have changed their lives",
        videoTestimonialsCTA: "Ready to start your own transformation?",
        videoTestimonialsButton: "Schedule your free session",
        
        privacyPolicy: "Privacy policy",
        termsConditions: "Terms and conditions",
        
        // CURSO-ONLINE.HTML
        menuCourses: "Courses",
        backHome: "Back to Home",
        coursesHeroTitle: "Online Transformation Programs",
        coursesHeroSubtitle: "Discover our specialized courses designed to transform your love life from anywhere in the world",
        
        // Badges
        badgePopular: "Popular",
        badgeFeatured: "Featured",
        badgeNew: "New",
        
        // Course 1 - Abandonment Healing
        courseAbandonmentTitle: "Abandonment Wound Healing",
        courseAbandonmentDesc: "Free yourself from abandonment patterns and build secure, lasting relationships",
        courseAbandonmentFeature1: "8 complete modules",
        courseAbandonmentFeature2: "6-week duration",
        courseAbandonmentFeature3: "Certificate included",
        courseAbandonmentButton: "I want it",
        
        // Course 2 - Conscious Love
        courseConscientLoveTitle: "Conscious Love",
        courseConscientLoveDesc: "Learn to create authentic, profound, and conscious relationships",
        courseConscientLoveFeature1: "10 complete modules",
        courseConscientLoveFeature2: "8-week duration",
        courseConscientLoveFeature3: "Private community",
        courseConscientLoveButton: "I want it",
        
        // Course 3 - Self-esteem
        courseSelfEsteemTitle: "Self-Esteem and Self-Love",
        courseSelfEsteemDesc: "Rebuild your confidence and love yourself unconditionally",
        courseSelfEsteemFeature1: "6 complete modules",
        courseSelfEsteemFeature2: "4-week duration",
        courseSelfEsteemFeature3: "Workbook included",
        courseSelfEsteemButton: "I want it",
        
        // Course 4 - Communication
        courseCommunicationTitle: "Couple Communication",
        courseCommunicationDesc: "Transform your relationships through effective and empathetic communication",
        courseCommunicationFeature1: "7 complete modules",
        courseCommunicationFeature2: "5-week duration",
        courseCommunicationFeature3: "Direct support",
        courseCommunicationButton: "I want it",
        
        // CTA Section
        coursesCtaTitle: "Don't know which one to choose?",
        coursesCtaText: "Schedule a free 30-minute session and I'll help you find the perfect course for you",
        coursesCtaButton: "Schedule consultation",
        
        // TERAPIAS-ONLINE.HTML
        therapiesPageTitle: "Online Therapies | Living in Love",
        therapiesHeroTitle: "Online Therapies",
        therapiesHeroSubtitle: "Deep healing from the comfort of your home through videoconference",
        
        // TERAPIAS-PAREJA.HTML
        therapiesCouplePageTitle: "Couple Therapies | Living in Love",
        therapiesCoupleHeroTitle: "Couple Therapies",
        therapiesCoupleHeroSubtitle: "Strengthen your relationship and reconnect emotionally from anywhere in the world",
        
        // Fluvial Constellation
        therapyFluvialTitle: "Fluvial Constellation",
        therapyFluvialDesc1: "Fluvial Constellation is an individual systemic therapy based on family constellations that uses water as a vehicle for communication with morphogenetic fields; it focuses on breaking invisible loyalties we have with our ancestors to release inherited programs related to lack of success, difficulty in relationships, lack of prosperity, diseases, abuse, grief, anxiety, addictions, suicides, infertility, etc.",
        therapyFluvialDesc2: "Duration is two hours, you choose the need you have to resolve.",
        therapyFluvialDesc3: "Online modality via videoconference from anywhere in the world through Zoom platform simultaneously.",
        therapyFluvialPrice: "Price: $200 USD",
        therapyFluvialDuration: "Duration: 2 hours",
        
        // Online Psychotherapy
        therapyPsychoTitle: "Online Psychotherapy",
        therapyPsychoDesc1: "Psychological therapy with systemic family approach, addressing problems generated in the context of family relationships or significant people in people's lives. Systemic therapy aims to find solutions to practical and real problems. This approach works on recognizing dysfunctional patterns within people's lives.",
        therapyPsychoObjectivesTitle: "The main objectives are:",
        therapyPsychoObj1: "Restore the person's balance",
        therapyPsychoObj2: "Increase understanding of their discomfort and problems",
        therapyPsychoObj3: "Stimulate emotional and personal work to be the protagonist in their transformation and change",
        therapyPsychoObj4: "Develop coping strategies and specific problem-solving skills",
        therapyPsychoDesc2: "Online modality via videoconference from anywhere in the world through Zoom simultaneously.",
        therapyPsychoPrice: "Price: $100 USD",
        therapyPsychoDuration: "Duration: 1 hour",
        
        // Couple Constellation
        therapyCoupleTitle: "Couple Constellation",
        therapyCoupleDesc1: "It is a therapy that uses the fluvial constellations method and aims to diagnose and resolve the consultant's current conflicts in their relationship, working on each level of love: material, sexual, emotional, mental, conscious, cosmic, divine.",
        therapyCoupleDesc2: "It can also be done individually to diagnose how the person is at each level and heal their love life even if they are not in a relationship.",
        therapyCoupleDesc3: "Online modality via Zoom from anywhere in the world.",
        therapyCouplePrice: "Price: $200 USD",
        therapyCoupleDuration: "Duration: 2 hours",
        
        // Loving Closure of Previous Partners
        therapyClosureTitle: "Loving Closure of Previous Partners",
        therapyClosureDesc1: "Partner closure is based on the fluvial constellations method that uses water to access information from morphogenetic fields, it is a therapy that serves to close cycles that remained open with each partner, from first love to the last, creating a soul connection integrating the learning with each one through gratitude and understanding the main pattern in their way of relating, which is sustained by family loyalties and is the root of toxic couple relationships.",
        therapyClosureDesc2: "Online modality via Zoom.",
        therapyClosurePrice: "Price: $100 USD",
        therapyClosureDuration: "Duration: 1 hour",
        
        // Fluvial Therapy
        therapyRiverTitle: "Fluvial Therapy",
        therapyRiverDesc1: "It is based on the fluvial constellations method and uses water and foam rubber figurines as vehicles to represent family members and the topic to be worked on. It is done online through Zoom and its duration is one hour. The difference with a fluvial constellation is that only one of the topics to choose is worked on while the constellation includes all.",
        therapyRiverTopicsTitle: "The topics to choose from are:",
        therapyRiverTopic1: "Heal your family of origin (your parents and siblings)",
        therapyRiverTopic2: "Heal your current family (your partner and children)",
        therapyRiverTopic3: "Heal childhood wounds",
        therapyRiverTopic4: "Break a loyalty",
        therapyRiverDesc2: "All sessions include work with mom and dad.",
        therapyRiverPrice: "Price: $100 USD",
        therapyRiverDuration: "Duration: 1 hour",
        
        // Therapies CTA
        therapiesCTATitle: "Ready to begin your transformation?",
        therapiesCTASubtitle: "Schedule your session today and take the first step toward healing",
        therapiesCTAButton: "Schedule Session",
        
        // COURSE DETAIL PAGES - GENERAL
        backToCourses: "Back to courses",
        moduleLabel: "Module 1",
        moduleLabel2: "Module 2",
        moduleLabel3: "Module 3",
        moduleLabel4: "Module 4",
        moduleLabel5: "Module 5",
        moduleLabel6: "Module 6",
        moduleLabel7: "Module 7",
        moduleLabel8: "Module 8",
        moduleLabel9: "Module 9",
        moduleLabel10: "Module 10",
        
        // CURSO ABANDONO - ABANDONMENT HEALING
        courseAbandonmentHeroTitle: "Abandonment Wound Healing",
        courseAbandonmentHeroSubtitle: "Transform your abandonment patterns and build secure, lasting relationships full of love",
        courseAbandonmentModules: "8 complete modules",
        courseAbandonmentAccess: "Lifetime access",
        courseAbandonmentCertificate: "Certificate included",
        courseAbandonmentSupport: "Q&A support",
        courseAbandonmentDescTitle: "About this course",
        courseAbandonmentDesc1: "Do you constantly fear being abandoned? Do you repeat patterns of choosing unavailable people? This course will help you heal the abandonment wound at its root.",
        courseAbandonmentDesc2: "Through 8 intensive modules, you'll explore the origin of your abandonment patterns, learn to create emotional security, and transform the way you relate to others.",
        courseAbandonmentBenefitsTitle: "What will you achieve?",
        courseAbandonmentBenefit1: "Identify and understand your abandonment patterns",
        courseAbandonmentBenefit2: "Heal childhood wounds affecting your relationships",
        courseAbandonmentBenefit3: "Develop emotional security and healthy attachment",
        courseAbandonmentBenefit4: "Stop attracting unavailable or toxic people",
        courseAbandonmentBenefit5: "Build stable and secure relationships",
        courseAbandonmentBenefit6: "Recover your confidence in love",
        courseAbandonmentCurriculumTitle: "Course content",
        courseAbandonmentModule1: "Identifying the Pattern",
        courseAbandonmentModule1Duration: "3 lessons",
        courseAbandonmentModule1L1: "What is the abandonment wound",
        courseAbandonmentModule1L2: "How to recognize your pattern",
        courseAbandonmentModule1L3: "Initial self-evaluation",
        courseAbandonmentModule2: "The Origin of the Wound",
        courseAbandonmentModule2Duration: "4 lessons",
        courseAbandonmentModule2L1: "Childhood experiences that created the wound",
        courseAbandonmentModule2L2: "Family patterns and attachment",
        courseAbandonmentModule2L3: "Impact on your adult life",
        courseAbandonmentModule2L4: "Exercise: Your emotional timeline",
        courseAbandonmentModule3: "Emotional Security",
        courseAbandonmentModule3Duration: "3 lessons",
        courseAbandonmentModule3L1: "Build your internal security",
        courseAbandonmentModule3L2: "Practices for self-soothing",
        courseAbandonmentModule3L3: "Reparenting meditation",
        courseAbandonmentModule4: "Changing Patterns",
        courseAbandonmentModule4Duration: "4 lessons",
        courseAbandonmentModule4L1: "Recognize triggers and automatic reactions",
        courseAbandonmentModule4L2: "Create new, healthier responses",
        courseAbandonmentModule4L3: "Practice conscious choices",
        courseAbandonmentModule4L4: "Exercise: Your action plan",
        courseAbandonmentModule5: "Healthy Relationships",
        courseAbandonmentModule5Duration: "3 lessons",
        courseAbandonmentModule5L1: "What is a secure relationship",
        courseAbandonmentModule5L2: "Identify emotionally available people",
        courseAbandonmentModule5L3: "Set healthy boundaries",
        courseAbandonmentModule6: "Effective Communication",
        courseAbandonmentModule6Duration: "3 lessons",
        courseAbandonmentModule6L1: "Express your needs without fear",
        courseAbandonmentModule6L2: "Active and empathetic listening",
        courseAbandonmentModule6L3: "Manage abandonment fear in the relationship",
        courseAbandonmentModule7: "Deep Healing",
        courseAbandonmentModule7Duration: "4 lessons",
        courseAbandonmentModule7L1: "Inner child work",
        courseAbandonmentModule7L2: "Forgiveness and release",
        courseAbandonmentModule7L3: "Energy healing techniques",
        courseAbandonmentModule7L4: "Integration meditation",
        courseAbandonmentModule8: "New Beginning",
        courseAbandonmentModule8Duration: "3 lessons",
        courseAbandonmentModule8L1: "Creating your new love story",
        courseAbandonmentModule8L2: "Maintaining changes long-term",
        courseAbandonmentModule8L3: "Celebration and closure",
        courseAbandonmentInstructorTitle: "Your instructor",
        courseAbandonmentInstructorRole: "Holistic Therapist and Trauma Specialist",
        courseAbandonmentInstructorBio: "With over 20 years of experience helping people heal abandonment wounds, Michelle has developed a unique method combining psychology, energy therapy, and mindfulness practices.",
        courseAbandonmentPriceHeader: "Enroll now",
        courseAbandonmentPriceSubtext: "One-time payment - Lifetime access",
        courseAbandonmentCTA: "Start Now",
        courseAbandonmentFeature1: "Unlimited lifetime access",
        courseAbandonmentFeature2: "Available on all your devices",
        courseAbandonmentFeature3: "Completion certificate",
        courseAbandonmentFeature4: "Private student community",
        courseAbandonmentGuaranteeTitle: "30-day guarantee",
        courseAbandonmentGuaranteeText: "If you're not satisfied, we'll refund your money with no questions asked.",
        courseAbandonmentStat1: "students transformed",
        courseAbandonmentStat2: "average rating",
        courseAbandonmentStat3: "completion rate",
        courseAbandonmentTestimonialsTitle: "What our students say",
        courseAbandonmentTestimonial1: "\"This course changed my life. I finally understood why I repeated the same patterns and learned to break them.\"",
        courseAbandonmentTestimonial1Role: "Individual therapy",
        courseAbandonmentTestimonial2: "\"Michelle's method is deep and effective. Today I have a stable relationship and no longer fear abandonment.\"",
        courseAbandonmentTestimonial2Role: "Online course",
        courseAbandonmentTestimonial3: "\"The inner child work was transformative. I healed wounds I didn't even know I had.\"",
        courseAbandonmentTestimonial3Role: "Emotional healing",
        
        // Additional translations from curso-abandono.html
        courseAbandonmentBadge: "Popular",
        courseAbandonmentDuration: "6 weeks of content",
        courseAbandonmentModule1Number: "Module 1",
        courseAbandonmentModule1Title: "Understanding the Abandonment Wound",
        courseAbandonmentModule1Lesson1: "Introduction to the program",
        courseAbandonmentModule1Lesson2: "What is the abandonment wound?",
        courseAbandonmentModule1Lesson3: "Origins of the wound",
        courseAbandonmentModule1Lesson4: "Self-assessment questionnaire",
        courseAbandonmentModule2Number: "Module 2",
        courseAbandonmentModule2Title: "Identifying Patterns",
        courseAbandonmentModule2Lesson1: "Abandonment patterns in relationships",
        courseAbandonmentModule2Lesson2: "The emotional dependency cycle",
        courseAbandonmentModule2Lesson3: "Practical recognition exercise",
        courseAbandonmentModule3Number: "Module 3",
        courseAbandonmentModule3Title: "Inner Child Healing",
        courseAbandonmentModule3Lesson1: "Connecting with your inner child",
        courseAbandonmentModule3Lesson2: "Guided healing meditation",
        courseAbandonmentModule3Lesson3: "Letter to your inner child",
        courseAbandonmentModule3Lesson4: "Downloadable meditation audio",
        courseAbandonmentModule4Number: "Module 4",
        courseAbandonmentModule4Title: "Building Internal Security",
        courseAbandonmentModule4Lesson1: "The power of self-love",
        courseAbandonmentModule4Lesson2: "Self-validation exercises",
        courseAbandonmentModule4Lesson3: "Creating your internal security network",
        courseAbandonmentModules58Number: "Modules 5-8",
        courseAbandonmentModules58Title: "Transformation and Practice",
        courseAbandonmentModules58Duration: "4 hours",
        courseAbandonmentModules58Lesson1: "Healthy boundaries in relationships",
        courseAbandonmentModules58Lesson2: "Assertive communication",
        courseAbandonmentModules58Lesson3: "Attracting healthy relationships",
        courseAbandonmentModules58Lesson4: "Maintaining healing",
        courseAbandonmentModules58Lesson5: "Complete PDF workbook",
        courseAbandonmentModules58Lesson6: "Completion certificate",
        courseAbandonmentInstructorName: "Michelle",
        courseAbandonmentPriceTitle: "Investment in yourself",
        courseAbandonmentEnrollButton: "Start Now",
        courseAbandonmentFeature5: "Lifetime access",
        courseAbandonmentFeature6: "Certificate included",
        courseAbandonmentFeature7: "30-day guarantee",
        courseAbandonmentStudents: "580+",
        courseAbandonmentStudentsLabel: "Students",
        courseAbandonmentRating: "4.9/5",
        courseAbandonmentRatingLabel: "Rating",
        courseAbandonmentLanguage: "Spanish",
        courseAbandonmentLanguageLabel: "Language",
        courseAbandonmentTestimonial1Text: "\"This course changed my life. I finally understood where my fear of abandonment came from and was able to heal it. Now I have an amazing relationship and feel secure.\"",
        courseAbandonmentTestimonial1Author: "Carmen L.",
        courseAbandonmentTestimonial1Location: "Madrid, Spain",
        courseAbandonmentTestimonial2Text: "\"The exercises are deep but very clear. Michelle has a gift for explaining complex concepts in a simple way. Highly recommended!\"",
        courseAbandonmentTestimonial2Author: "Patricia M.",
        courseAbandonmentTestimonial2Location: "Buenos Aires, Argentina",
        courseAbandonmentTestimonial3Text: "\"I had been in therapy for years without results. This course was the turning point. The meditations are beautiful and truly effective.\"",
        courseAbandonmentTestimonial3Author: "Sofía R.",
        courseAbandonmentTestimonial3Location: "Mexico City",
        
        // CURSO AMOR CONSCIENTE - CONSCIOUS LOVE
        courseConscientLoveTitlePage: "Conscious Love | Living in Love",
        courseConscientLoveHeroTitle: "Conscious Love: Build Authentic Relationships",
        courseConscientLoveHeroSubtitle: "Learn to create and maintain deep, conscious, and lasting relationships based on mutual respect and shared growth",
        courseConscientLoveModules: "10 complete modules",
        courseConscientLoveAccess: "Lifetime access",
        courseConscientLoveCertificate: "Certificate included",
        courseConscientLoveCommunity: "Private community",
        courseConscientLoveDescTitle: "About this course",
        courseConscientLoveDesc1: "Do you feel your relationships don't reach the depth you desire? Do you struggle to maintain emotional connection long-term? This course will teach you to develop conscious, authentic, and transformative relationships.",
        courseConscientLoveDesc2: "Through 10 intensive modules, you'll explore the foundations of conscious love, learn to communicate from vulnerability, establish healthy boundaries, and create a relationship that nourishes your personal growth and your partner's.",
        courseConscientLoveBenefitsTitle: "What will you achieve?",
        courseConscientLoveBenefit1: "Understand the pillars of conscious love and how to apply them",
        courseConscientLoveBenefit2: "Develop authentic and vulnerable communication with your partner",
        courseConscientLoveBenefit3: "Establish boundaries from love and mutual respect",
        courseConscientLoveBenefit4: "Transform conflicts into growth opportunities",
        courseConscientLoveBenefit5: "Maintain passion and connection long-term",
        courseConscientLoveBenefit6: "Create a relationship that supports your personal evolution",
        courseConscientLoveCurriculumTitle: "Course content",
        courseConscientLoveModule1: "Foundations of Conscious Love",
        courseConscientLoveModule1Duration: "4 lessons",
        courseConscientLoveModule1L1: "What is conscious vs. unconscious love",
        courseConscientLoveModule1L2: "The 5 pillars of a conscious relationship",
        courseConscientLoveModule1L3: "Self-assessment: Where are you now?",
        courseConscientLoveModule1L4: "Practical exercise: Your ideal relationship vision",
        courseConscientLoveModule2: "Authentic Communication",
        courseConscientLoveModule2Duration: "5 lessons",
        courseConscientLoveModule2L1: "The art of nonviolent communication",
        courseConscientLoveModule2L2: "Expressing needs without attacking",
        courseConscientLoveModule2L3: "Active and empathetic listening",
        courseConscientLoveModule2L4: "Communication in tense moments",
        courseConscientLoveModule2L5: "Practice: Conscious dialogues",
        courseConscientLoveModule3: "Vulnerability and Trust",
        courseConscientLoveModule3Duration: "4 lessons",
        courseConscientLoveModule3L1: "The power of showing yourself vulnerable",
        courseConscientLoveModule3L2: "Building emotional trust",
        courseConscientLoveModule3L3: "Overcoming fear of rejection",
        courseConscientLoveModule3L4: "Exercise: Sharing your truth",
        courseConscientLoveModule4: "Healthy Boundaries",
        courseConscientLoveModule4Duration: "3 lessons",
        courseConscientLoveModule4L1: "Why boundaries are acts of love",
        courseConscientLoveModule4L2: "How to set boundaries without guilt",
        courseConscientLoveModule4L3: "Respecting your partner's boundaries",
        courseConscientLoveModule5: "Conscious Conflict Management",
        courseConscientLoveModule5Duration: "4 lessons",
        courseConscientLoveModule5L1: "Conflicts as opportunities",
        courseConscientLoveModule5L2: "Conscious resolution techniques",
        courseConscientLoveModule5L3: "Deactivating destructive arguments",
        courseConscientLoveModule5L4: "The art of forgiveness",
        courseConscientLoveModule6: "Deep Intimacy",
        courseConscientLoveModule6Duration: "4 lessons",
        courseConscientLoveModule6L1: "Emotional vs. physical intimacy",
        courseConscientLoveModule6L2: "Maintaining passion long-term",
        courseConscientLoveModule6L3: "Exploring new dimensions together",
        courseConscientLoveModule6L4: "Daily connection rituals",
        courseConscientLoveModule7: "Individual Growth as a Couple",
        courseConscientLoveModule7Duration: "3 lessons",
        courseConscientLoveModule7L1: "Balancing independence and union",
        courseConscientLoveModule7L2: "Supporting your partner's dreams",
        courseConscientLoveModule7L3: "Growing together without losing yourselves",
        courseConscientLoveModule8: "Healing Together",
        courseConscientLoveModule8Duration: "3 lessons",
        courseConscientLoveModule8L1: "Identifying wounds affecting the relationship",
        courseConscientLoveModule8L2: "Being a mirror and healer for each other",
        courseConscientLoveModule8L3: "Couple healing techniques",
        courseConscientLoveModule9: "Shared Purpose",
        courseConscientLoveModule9Duration: "3 lessons",
        courseConscientLoveModule9L1: "Discovering your mission as a couple",
        courseConscientLoveModule9L2: "Creating shared future vision",
        courseConscientLoveModule9L3: "Maintaining value alignment",
        courseConscientLoveModule10: "Conscious Commitment",
        courseConscientLoveModule10Duration: "4 lessons",
        courseConscientLoveModule10L1: "What real commitment means",
        courseConscientLoveModule10L2: "Continuously renewing commitment",
        courseConscientLoveModule10L3: "Action plan: The next 90 days",
        courseConscientLoveModule10L4: "Celebration and closure",
        courseConscientLoveInstructorTitle: "Your instructor",
        courseConscientLoveInstructorRole: "Relationship Therapist and Holistic Coach",
        courseConscientLoveInstructorBio: "With over 20 years of experience helping couples create conscious and lasting relationships, Michelle has developed a unique method combining psychology, spirituality, and deep connection practices.",
        courseConscientLovePriceHeader: "Enroll now",
        courseConscientLovePriceSubtext: "One-time payment - Lifetime access",
        courseConscientLoveCTA: "Start Now",
        courseConscientLoveFeature1: "Unlimited lifetime access",
        courseConscientLoveFeature2: "Available on all your devices",
        courseConscientLoveFeature3: "Completion certificate",
        courseConscientLoveFeature4: "Private student community",
        courseConscientLoveGuaranteeTitle: "30-day guarantee",
        courseConscientLoveGuaranteeText: "If you're not satisfied, we'll refund your money with no questions asked.",
        courseConscientLoveStat1: "couples transformed",
        courseConscientLoveStat2: "average rating",
        courseConscientLoveStat3: "completion rate",
        courseConscientLoveTestimonialsTitle: "What our students say",
        courseConscientLoveTestimonial1: "\"This course saved our relationship. We learned to truly communicate and now feel more connected than ever.\"",
        courseConscientLoveTestimonial1Role: "Couple, 8 years together",
        courseConscientLoveTestimonial2: "\"The conflict management tools changed everything. Now arguments are opportunities to grow together.\"",
        courseConscientLoveTestimonial2Role: "Individual coaching",
        courseConscientLoveTestimonial3: "\"Michelle taught us to build real intimacy. After 15 years together, we feel in love again.\"",
        courseConscientLoveTestimonial3Role: "Couple, 15 years together",
        
        // CURSO AUTOESTIMA Y COMUNICACIÓN - Additional translations available in traducciones-cursos.js
        // Loaded dynamically when needed
        courseSelfEsteemTitlePage: "Self-Esteem and Self-Love | Living in Love",
        courseCommunicationTitlePage: "Couple Communication | Living in Love"
    }
};

// Configuración inicial
let currentLanguage = 'es';
let heroCarousel;
let testimonialsCarousel;

// Sistema de Carrusel Hero FUNCIONAL
class HeroCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.hero-carousel .carousel-slide');
        this.dots = document.querySelectorAll('.hero-carousel .dot');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.slideDuration = 3000; // 3 segundos
        
        this.init();
    }
    
    init() {
        // Asegurar que la primera imagen esté visible
        if (this.slides.length > 0) {
            this.slides[0].classList.add('active');
            if (this.dots.length > 0) {
                this.dots[0].classList.add('active');
            }
        }
        
        // Iniciar carrusel automático
        this.startAutoSlide();
        
        // Configurar dots (solo para indicación visual)
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        console.log('Carrusel Hero inicializado con', this.slides.length, 'fotos - Auto-rotación cada 3 segundos');
    }
    
    startAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideDuration);
    }
    
    pauseAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
    
    nextSlide() {
        const nextSlide = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextSlide);
    }
    
    goToSlide(index) {
        // Ocultar slide actual
        this.slides[this.currentSlide].classList.remove('active');
        if (this.dots[this.currentSlide]) {
            this.dots[this.currentSlide].classList.remove('active');
        }
        
        // Mostrar nuevo slide
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
        if (this.dots[this.currentSlide]) {
            this.dots[this.currentSlide].classList.add('active');
        }
    }
}

// Sistema de Carrusel de Testimonios MEJORADO - Cambia cada 3 segundos
class TestimonialsCarousel {
    constructor() {
        this.track = document.querySelector('.testimonials-track');
        this.cards = document.querySelectorAll('.testimonial-card');
        this.dots = document.querySelectorAll('.testimonial-dot');
        this.prevBtn = document.querySelector('.testimonials-prev');
        this.nextBtn = document.querySelector('.testimonials-next');
        this.currentIndex = 0;
        this.totalCards = this.cards.length;
        this.slideInterval = null;
        this.slideDuration = 3000; // 3 segundos
        this.cardsPerView = 1; // Mostrar 1 testimonio a la vez para mejor visualización
        
        this.init();
    }
    
    init() {
        if (this.cards.length === 0) {
            console.warn('No hay testimonios disponibles');
            return;
        }
        
        // Ocultar todas las tarjetas excepto la primera
        this.cards.forEach((card, index) => {
            if (index === 0) {
                card.classList.add('active');
                card.style.display = 'block';
            } else {
                card.classList.remove('active');
                card.style.display = 'none';
            }
        });
        
        // Iniciar carrusel automático
        this.startAutoSlide();
        
        // Configurar controles
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.pauseAutoSlide();
                this.prevSlide();
                this.startAutoSlide();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.pauseAutoSlide();
                this.nextSlide();
                this.startAutoSlide();
            });
        }
        
        // Configurar dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.pauseAutoSlide();
                this.goToSlide(index);
                this.startAutoSlide();
            });
        });
        
        // Pausar carrusel al pasar el mouse
        const carousel = document.querySelector('.testimonials-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoSlide());
            carousel.addEventListener('mouseleave', () => this.startAutoSlide());
        }
        
        console.log('Carrusel Testimonios inicializado con', this.totalCards, 'testimonios');
    }
    
    startAutoSlide() {
        this.pauseAutoSlide(); // Limpiar intervalo previo
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideDuration);
    }
    
    pauseAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
    
    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.totalCards;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
        this.goToSlide(prevIndex);
    }
    
    goToSlide(index) {
        // Ocultar tarjeta actual con animación
        this.cards[this.currentIndex].classList.remove('active');
        this.cards[this.currentIndex].style.opacity = '0';
        
        setTimeout(() => {
            this.cards[this.currentIndex].style.display = 'none';
            
            // Mostrar nueva tarjeta con animación
            this.currentIndex = index;
            this.cards[this.currentIndex].style.display = 'block';
            
            setTimeout(() => {
                this.cards[this.currentIndex].style.opacity = '1';
                this.cards[this.currentIndex].classList.add('active');
            }, 50);
        }, 300);
        
        // Actualizar dots
        this.dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

// Función para cambiar idioma - FUNCIONAL
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Actualizar título de la página
    document.title = translations[lang].pageTitle;
    
    // Actualizar textos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Para elementos input y textarea
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'SELECT') {
                // Para select, actualizar el placeholder si existe
                const firstOption = element.querySelector('option[disabled][selected]');
                if (firstOption && firstOption.hasAttribute('data-i18n')) {
                    const optionKey = firstOption.getAttribute('data-i18n');
                    firstOption.textContent = translations[lang][optionKey];
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Actualizar botones de idioma activo
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active-lang');
        } else {
            btn.classList.remove('active-lang');
        }
    });
    
    // Guardar preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Cerrar menú móvil si está abierto
    const mobileNav = document.getElementById('navMobile');
    const hamburger = document.getElementById('hamburger');
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    console.log(`Idioma cambiado a: ${lang}`);
}

// Función para alternar menú móvil
function toggleMobileMenu() {
    const mobileNav = document.getElementById('navMobile');
    const hamburger = document.getElementById('hamburger');
    
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Prevenir scroll cuando el menú está abierto
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Función para scroll suave
function smoothScroll(e) {
    const targetId = this.getAttribute('href');
    
    // Solo aplicar smooth scroll si es un enlace interno (#)
    if (!targetId || !targetId.startsWith('#')) {
        return; // Dejar que el navegador maneje enlaces externos normalmente
    }
    
    e.preventDefault();
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        // Cerrar menú móvil si está abierto
        const mobileNav = document.getElementById('navMobile');
        const hamburger = document.getElementById('hamburger');
        if (mobileNav && hamburger && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Scroll suave
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth"
        });
    }
}

// Función para manejar scroll del header
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Función para inicializar formulario de contacto
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío exitoso
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Enviando...</span>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Mostrar mensaje de éxito
                alert(currentLanguage === 'es' 
                    ? '¡Mensaje enviado con éxito! Te contactaremos pronto.' 
                    : 'Message sent successfully! We will contact you soon.');
                
                // Restaurar botón
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Resetear formulario
                contactForm.reset();
            }, 1500);
        });
    }
}

// Función para animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observar elementos que queremos animar
    document.querySelectorAll('.benefit-card, .service-card, .info-item').forEach(element => {
        observer.observe(element);
    });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando...');
    
    // Cargar idioma preferido desde localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
        changeLanguage(savedLanguage);
    } else {
        // Por defecto español
        changeLanguage('es');
    }
    
    // Inicializar carruseles
    heroCarousel = new HeroCarousel();
    testimonialsCarousel = new TestimonialsCarousel();
    
    // Configurar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Efecto visual en el botón
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Configurar menú hamburguesa
    document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);
    
    // Configurar scroll suave para enlaces del menú
    document.querySelectorAll('nav a, .nav-link-mobile').forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Cerrar menú móvil al hacer clic fuera
    document.addEventListener('click', (e) => {
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('navMobile');
        
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target) && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Configurar scroll del header
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Inicializar formulario
    initContactForm();
    
    // Inicializar animaciones
    initScrollAnimations();
    
    // Efecto de carga inicial
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Manejar cambios de tamaño de ventana
    window.addEventListener('resize', () => {
        // Cerrar menú móvil en dispositivos más grandes
        const mobileNav = document.getElementById('navMobile');
        const hamburger = document.getElementById('hamburger');
        
        if (window.innerWidth > 992 && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    console.log('Aplicación inicializada correctamente');
});

// Reiniciar carruseles si es necesario
function restartCarousels() {
    if (heroCarousel) {
        heroCarousel.pauseAutoSlide();
        heroCarousel.startAutoSlide();
    }
    
    if (testimonialsCarousel) {
        testimonialsCarousel.pauseAutoSlide();
        testimonialsCarousel.startAutoSlide();
    }
}

// Mostrar información de debug
window.addEventListener('load', () => {
    console.log('Página completamente cargada');
    console.log('Carrusel Hero:', heroCarousel ? 'Funcionando' : 'No inicializado');
    console.log('Carrusel Testimonios:', testimonialsCarousel ? 'Funcionando' : 'No inicializado');
    console.log('Idioma actual:', currentLanguage);
    
    // ===== ANIMACIONES DE SCROLL Y NAVBAR =====
    // Efecto de scroll para el header
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Animación de secciones al hacer scroll (solo si existen)
    const sections = document.querySelectorAll('.benefits, .services, .about, .testimonials, .contact');
    
    if (sections.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            section.classList.add('section-animate');
            sectionObserver.observe(section);
        });
    }
    
    // Agregar animación a las cards (solo si existen)
    const cards = document.querySelectorAll('.benefit-card, .service-card');
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in');
        });
    }
    
    // Navegación activa según scroll
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (navLinks.length > 0 && sections.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    // Smooth scroll para los enlaces del menú
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target && header) {
                        const headerHeight = header.offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Cerrar menú móvil si está abierto
                        const navMobile = document.getElementById('navMobile');
                        const hamburger = document.getElementById('hamburger');
                        if (navMobile && hamburger && navMobile.classList.contains('active')) {
                            navMobile.classList.remove('active');
                            hamburger.classList.remove('active');
                        }
                    }
                }
            });
        });
    }
    
    console.log('Sistema de traducción e interacciones inicializados');
});
