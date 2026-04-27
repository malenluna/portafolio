document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    // 1. MODO NOCTURNO
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = document.getElementById('theme-icon');
    
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        lucide.createIcons();
    });

    // 2. CAMBIO DE IDIOMA
    const langBtn = document.getElementById('lang-btn');
    let currentLang = 'es';

    const texts = {
        es: {
            inicio: "Inicio", skills: "Skills", proyectos: "Proyectos", contacto: "Contacto",
            subtitle: "Diseño que inspira. Código que funciona.",
            heroSub: "Técnica en informática apasionada por el Frontend y el Diseño UI/UX. Transformo ideas en experiencias visualmente impactantes.",
            btnMain: "Descargar CV", labelSkills: "Mi Enfoque Técnico", labelProjects: "Proyectos Seleccionados",
            skill1: "Interfaces pensadas para el usuario final, con balance entre estética y usabilidad.",
            project1Desc: "Web interactiva para consultoría mecánica.",
            viewSite: "Visitar Sitio", comingSoon: "Próximamente", ctaTitle: "¿Trabajamos juntos?"
        },
        en: {
            inicio: "Home", skills: "Skills", proyectos: "Projects", contacto: "Contact",
            subtitle: "Design that inspires. Code that works.",
            heroSub: "IT Technician passionate about Frontend and UI/UX Design. I transform ideas into visually stunning experiences.",
            btnMain: "Download CV", labelSkills: "My Technical Approach", labelProjects: "Selected Projects",
            skill1: "Interfaces designed for the end user, balancing aesthetics and usability.",
            project1Desc: "Interactive web for mechanical consulting.",
            viewSite: "Visit Site", comingSoon: "Coming Soon", ctaTitle: "Let's work together?"
        }
    };

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        langBtn.innerText = currentLang === 'es' ? 'EN' : 'ES';
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (texts[currentLang][key]) el.innerText = texts[currentLang][key];
        });
    });

    // 3. CARRUSEL
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let index = 0;

    const updateCarousel = () => {
        if(!track) return;
        const size = track.parentElement.clientWidth;
        track.style.transform = `translateX(${-index * size}px)`;
    };

    nextBtn?.addEventListener('click', () => {
        index = (index + 1) % track.children.length;
        updateCarousel();
    });

    prevBtn?.addEventListener('click', () => {
        index = (index - 1 + track.children.length) % track.children.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    // 4. SCROLL REVEAL
    const reveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();
});