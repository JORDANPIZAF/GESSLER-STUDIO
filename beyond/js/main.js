// Configuración global de Toastr
toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-bottom-right',
    timeOut: 5000
};

document.addEventListener("DOMContentLoaded", function() {
    // Inicialización de AOS (Animation On Scroll)
    AOS.init({
        duration: 500,
        easing: 'fade-up',
        once: true,
        mirror: false
    });

    // Preloader con GSAP - Optimizado para no repetirse indefinidamente
    gsap.config({ trialWarn: false });
    gsap.set('svg', { visibility: 'visible' });

    let tl = gsap.timeline({
        repeat: 1, // Solo se repite 1 vez (en lugar de infinito)
        yoyo: true,
        defaults: {
            ease: 'sine.inOut',
            duration: 1.2
        }
    });
    
    tl.fromTo('#gradDot', { x: 90 }, { x: -90 })
      .fromTo('#fillDot', { x: -90 }, { x: 90 }, 0)
      .fromTo('#mainGrad', { attr: { cx: 230, fx: 230 } }, { attr: { cx: 570, fx: 570 } }, 0);

    // Ocultar preloader cuando la página esté cargada
    window.addEventListener("load", function() {
        tl.kill(); // Detiene la animación completamente
        document.getElementById("preloader").style.display = "none";
    });

    // Inicialización del formulario de contacto
    const form = document.querySelector("form");
    if(form) {
        initContactForm(form);
    }

    // Inicialización condicional de jQuery plugins
    if(window.jQuery) {
        initJQueryPlugins();
    }
    
    // Modo oscuro/claro
    initDarkMode();
    
    // Particles.js
    if(typeof particlesJS !== 'undefined') {
        initParticles();
    }

    // Botón de volver arriba
    initScrollToTop();
    
    // Inicialización de contadores mejorada
    initCounters();
});

// Función mejorada para los contadores
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target') || +counter.innerText;
                const duration = 1200;
                const start = performance.now();
                
                // Si ya tiene data-target, significa que ya se animó
                if (counter.hasAttribute('data-target')) return;
                
                counter.setAttribute('data-target', target);
                counter.innerText = '0';

                const animateCount = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const value = Math.floor(progress * target);
                    
                    counter.innerText = value.toLocaleString();
                    
                    if (progress < 1) {
                        requestAnimationFrame(animateCount);
                    } else {
                        counter.innerText = target.toLocaleString();
                        observer.unobserve(counter);
                    }
                };
                
                requestAnimationFrame(animateCount);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Resto de tus funciones permanecen igual...
function initContactForm(form) {
    // ... (mantener igual)
}

function validateForm(form) {
    // ... (mantener igual)
}

function getErrorMessage(input) {
    // ... (mantener igual)
}

function isValidEmail(email) {
    // ... (mantener igual)
}

function showNotification(message, type) {
    // ... (mantener igual)
}

function initJQueryPlugins() {
    // Elimina CounterUp de aquí ya que lo manejamos con initCounters()
    
    // Fancybox
    $("a.gallery-item").fancybox({
        loop: true
    });
    
    // Owl Carousels
    $('.owl-carousel.client').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1200,
        responsive: {
            0: { items: 2 },
            600: { items: 3 },
            1000: { items: 6 }
        }
    });
    
    $('.owl-carousel.testimonial').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive: {
            0: { items: 1 },
            750: { items: 2 },
            1000: { items: 3 }
        }
    });
    
    // Isotope
    const $grid = $('.row.portfolio-row');
    $grid.imagesLoaded(function() {
        $grid.isotope({
            itemSelector: '.col-lg-4',
            layoutMode: 'fitRows'
        });
    });
    
    $('.filters').on('click', 'a', function() {
        const filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    // Sticky navbar
    $(window).scroll(function() {
        if ($(window).scrollTop()) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    
    // Tilt.js
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 20,
            speed: 300,
            glare: true,
            "max-glare": 0.1
        });
    }
}

function initDarkMode() {
    // ... (mantener igual)
}

function initParticles() {
    // ... (mantener igual)
}

function initScrollToTop() {
    // ... (mantener igual)
}

