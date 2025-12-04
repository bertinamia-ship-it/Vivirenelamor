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
        
        // Testimonios section - 8 testimonios
        testimonialsTitle: "Historias de transformación",
        testimonialsSubtitle: "Lo que dicen quienes han recorrido este camino",
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
        footerSocialTitle: "Síguenos",
        footerPhone: "+34 123 456 789",
        copyright: "© 2023 Vivir en el Amor. Todos los derechos reservados.",
        privacyPolicy: "Política de privacidad",
        termsConditions: "Términos y condiciones"
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
        
        // Testimonios section - 8 testimonios
        testimonialsTitle: "Transformation stories",
        testimonialsSubtitle: "What those who have walked this path say",
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
        footerSocialTitle: "Follow us",
        footerPhone: "+34 123 456 789",
        copyright: "© 2023 Living in Love. All rights reserved.",
        privacyPolicy: "Privacy policy",
        termsConditions: "Terms and conditions"
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
            // Para elementos input, textarea, select o option
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'SELECT') {
                // Para select, actualizar el placeholder si existe
                const firstOption = element.querySelector('option[disabled][selected]');
                if (firstOption && firstOption.hasAttribute('data-i18n')) {
                    firstOption.textContent = translations[lang][key];
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
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (!targetId.startsWith('#')) return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        // Cerrar menú móvil si está abierto
        const mobileNav = document.getElementById('navMobile');
        const hamburger = document.getElementById('hamburger');
        if (mobileNav.classList.contains('active')) {
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
});
// ===== ANIMACIONES DE SCROLL Y NAVBAR =====
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll para el header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animación de secciones al hacer scroll
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
    
    // Agregar clase de animación a las secciones
    const sections = document.querySelectorAll('.benefits, .services, .about, .testimonials, .contact');
    sections.forEach(section => {
        section.classList.add('section-animate');
        sectionObserver.observe(section);
    });
    
    // Agregar animación a las cards
    const cards = document.querySelectorAll('.benefit-card, .service-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // Navegación activa según scroll
    const navLinks = document.querySelectorAll('.nav-menu a');
    
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
    
    // Smooth scroll para los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Cerrar menú móvil si está abierto
                    const navMobile = document.getElementById('navMobile');
                    const hamburger = document.getElementById('hamburger');
                    if (navMobile.classList.contains('active')) {
                        navMobile.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                }
            }
        });
    });
    
    console.log('Animaciones de scroll y navbar activadas');
});
