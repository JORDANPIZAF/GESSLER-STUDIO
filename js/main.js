/* -------------------------------------------

Name:       Gessler Studio
Version:    1.0
Author:	    bslthemes
Website:    https://bslthemes.com/
Developer:	millerDigitalDesign (https://themeforest.net/user/millerdigitaldesign/)

------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const SITE_THEME_KEY = "site-theme";

    const createPageTransition = () => {
        let transitionOverlay = document.querySelector('.mil-page-transition');

        if (!transitionOverlay) {
            transitionOverlay = document.createElement('div');
            transitionOverlay.className = 'mil-page-transition';
            transitionOverlay.innerHTML = `
                <div class="mil-page-transition-stage" aria-hidden="true">
                    <div class="mil-page-transition-ring">
                        <span class="mil-page-transition-dot mil-orange"></span>
                    </div>
                    <div class="mil-page-transition-ring mil-second">
                        <span class="mil-page-transition-dot mil-blue"></span>
                    </div>
                </div>
            `;
            document.body.prepend(transitionOverlay);
        }

        const hideTransition = () => {
            transitionOverlay.classList.add('mil-hidden');
        };

        const showTransition = () => {
            transitionOverlay.classList.remove('mil-hidden');
        };

        window.addEventListener('load', () => {
            setTimeout(hideTransition, 80);
        });

        setTimeout(() => {
            if (document.readyState === 'complete') {
                hideTransition();
            }
        }, 350);

        setTimeout(hideTransition, 2500);

        document.addEventListener('click', (event) => {
            const link = event.target.closest('a[href]');

            if (!link) {
                return;
            }

            const href = link.getAttribute('href');

            if (!href ||
                href.startsWith('#') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:') ||
                href.startsWith('javascript:') ||
                link.target === '_blank' ||
                link.hasAttribute('download')) {
                return;
            }

            const destination = new URL(href, window.location.href);

            if (destination.origin !== window.location.origin) {
                return;
            }

            if (destination.href === window.location.href) {
                return;
            }

            event.preventDefault();
            showTransition();

            setTimeout(() => {
                window.location.href = destination.href;
            }, 620);
        });
    };

    createPageTransition();

    const createFloatingBackToTop = () => {
        let floatingButton = document.getElementById('mil-btt-floating');

        if (!floatingButton) {
            floatingButton = document.createElement('a');
            floatingButton.href = '#.';
            floatingButton.id = 'mil-btt-floating';
            floatingButton.className = 'mil-c-gone';
            floatingButton.setAttribute('aria-label', 'Back to top');
            floatingButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
            document.body.appendChild(floatingButton);
        }
    };

    createFloatingBackToTop();

    const createFooterLegal = () => {
        document.querySelectorAll('.mil-footer-bottom').forEach((footerBottom) => {
            if (footerBottom.querySelector('.gs-terms-link')) return;
            const copyright = footerBottom.querySelector('.mil-fs14.mil-soft');
            if (!copyright) return;

            const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
            const label = lang === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions';

            const link = document.createElement('a');
            link.href = 'terminos-y-condiciones.html';
            link.className = 'gs-terms-link mil-fs14 mil-c-gone';
            link.setAttribute('aria-label', label);
            link.setAttribute('data-terms-link', '');
            link.textContent = label;
            link.style.cssText = 'display:inline-flex;align-items:center;gap:6px;color:rgba(115,118,123,0.7);text-decoration:none;border-bottom:1px solid rgba(115,118,123,0.25);padding-bottom:1px;transition:color .2s,border-color .2s;margin-top:8px;';
            link.onmouseover = () => { link.style.color = '#F35A38'; link.style.borderColor = 'rgba(243,90,56,0.5)'; };
            link.onmouseout = () => { link.style.color = 'rgba(115,118,123,0.7)'; link.style.borderColor = 'rgba(115,118,123,0.25)'; };

            const icon = document.createElement('i');
            icon.className = 'fas fa-file-alt';
            icon.style.fontSize = '11px';
            link.prepend(icon);

            copyright.parentElement.appendChild(link);
        });
    };

    window.refreshFooterLegalLabel = () => {
        const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
        document.querySelectorAll('[data-terms-link]').forEach((link) => {
            const label = lang === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions';
            link.lastChild.textContent = label;
            link.setAttribute('aria-label', label);
        });
    };

    createFooterLegal();

    const createThemeSwitcher = () => {
        document.querySelectorAll('.mil-buttons-frame').forEach((frame) => {
            let switcher = frame.querySelector('[data-theme-switcher]');

            if (!switcher) {
                switcher = document.createElement('div');
                switcher.className = 'mil-theme-switcher mil-c-gone';
                switcher.setAttribute('data-theme-switcher', '');
                switcher.innerHTML = `
                    <button type="button" class="mil-theme-toggle" data-theme-toggle aria-pressed="false" title="Switch to day mode">
                        <span class="mil-theme-toggle-icon mil-theme-toggle-sun" aria-hidden="true"><i class="fas fa-sun-o"></i></span>
                        <span class="mil-theme-toggle-icon mil-theme-toggle-moon" aria-hidden="true"><i class="fas fa-moon-o"></i></span>
                    </button>
                `;

                const languageSwitcher = frame.querySelector('[data-language-switcher]');
                if (languageSwitcher && languageSwitcher.nextSibling) {
                    frame.insertBefore(switcher, languageSwitcher.nextSibling);
                } else if (languageSwitcher) {
                    frame.appendChild(switcher);
                } else {
                    frame.prepend(switcher);
                }
            }
        });

        const updateThemeSwitcher = () => {
            const currentTheme = document.body.classList.contains('mil-day-mode') ? 'light' : 'dark';
            const nextThemeLabel = currentTheme === 'light' ? 'night' : 'day';
            const currentLanguage = document.documentElement.lang === 'es' ? 'es' : 'en';
            const titleMap = {
                en: {
                    day: 'Switch to day mode',
                    night: 'Switch to night mode'
                },
                es: {
                    day: 'Cambiar a modo día',
                    night: 'Cambiar a modo noche'
                }
            };

            document.querySelectorAll('[data-theme-toggle]').forEach((toggle) => {
                const isLight = currentTheme === 'light';
                toggle.classList.toggle('mil-light-active', isLight);
                toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
                toggle.setAttribute('title', titleMap[currentLanguage][nextThemeLabel]);
            });
        };

        const applyThemePreference = (theme) => {
            const normalizedTheme = theme === 'light' ? 'light' : 'dark';
            localStorage.setItem(SITE_THEME_KEY, normalizedTheme);
            document.body.classList.toggle('mil-day-mode', normalizedTheme === 'light');
            updateThemeSwitcher();
        };

        document.querySelectorAll('[data-theme-toggle]').forEach((toggle) => {
            toggle.addEventListener('click', () => {
                const selectedTheme = document.body.classList.contains('mil-day-mode') ? 'dark' : 'light';
                applyThemePreference(selectedTheme);
            });
        });

        window.initializeThemeSwitcher = updateThemeSwitcher;

        const savedTheme = localStorage.getItem(SITE_THEME_KEY) || 'dark';
        applyThemePreference(savedTheme);
    };

    createThemeSwitcher();

    const initializeNavbarLogoHover = () => {
        const hoverGifPath = 'img/logo-gessler-hover.gif';
        const animationDuration = 2400;

        document.querySelectorAll('.mil-top-panel .mil-logo-image').forEach((logoImage) => {
            if (!logoImage.dataset.logoOriginal) {
                logoImage.dataset.logoOriginal = logoImage.getAttribute('src') || 'img/logo-gessler-studio.svg';
            }

            if (!logoImage.dataset.logoHover) {
                logoImage.dataset.logoHover = hoverGifPath;
            }

            const logoLink = logoImage.closest('.mil-logo');

            if (!logoLink || logoLink.dataset.logoHoverBound === 'true') {
                return;
            }

            logoLink.dataset.logoHoverBound = 'true';

            const resetLogo = () => {
                window.clearTimeout(logoLink.__logoHoverTimer);
                logoLink.classList.remove('mil-logo-playing');
                logoLink.classList.remove('mil-logo-returning');
                logoImage.setAttribute('src', logoImage.dataset.logoOriginal);
                void logoImage.offsetWidth;
                logoLink.classList.add('mil-logo-returning');
            };

            const playLogoAnimation = () => {
                window.clearTimeout(logoLink.__logoHoverTimer);
                logoLink.classList.remove('mil-logo-returning');
                logoLink.classList.add('mil-logo-playing');
                logoImage.setAttribute('src', `${logoImage.dataset.logoHover}?play=${Date.now()}`);
                logoLink.__logoHoverTimer = window.setTimeout(resetLogo, animationDuration);
            };

            logoLink.addEventListener('mouseenter', playLogoAnimation);
            logoLink.addEventListener('focusin', playLogoAnimation);
            logoImage.addEventListener('animationend', (event) => {
                if (event.animationName === 'mil-logo-return') {
                    logoLink.classList.remove('mil-logo-returning');
                }
            });
        });
    };

    initializeNavbarLogoHover();

    const initializeTopPanelGlow = () => {
        document.querySelectorAll('.mil-top-panel').forEach((panel) => {
            if (panel.dataset.panelGlowBound === 'true') {
                return;
            }

            panel.dataset.panelGlowBound = 'true';

            panel.addEventListener('pointerenter', () => {
                const glowTone = Math.random() > 0.5 ? 'blue' : 'orange';
                panel.classList.remove('mil-panel-glow-blue', 'mil-panel-glow-orange');
                panel.classList.add(glowTone === 'blue' ? 'mil-panel-glow-blue' : 'mil-panel-glow-orange');
            });

            panel.addEventListener('pointermove', (event) => {
                const bounds = panel.getBoundingClientRect();
                const x = event.clientX - bounds.left;
                const y = event.clientY - bounds.top;
                panel.style.setProperty('--panel-glow-x', `${x}px`);
                panel.style.setProperty('--panel-glow-y', `${y}px`);
                panel.classList.add('mil-panel-glow-active');
            });

            panel.addEventListener('pointerleave', () => {
                panel.classList.remove('mil-panel-glow-active', 'mil-panel-glow-blue', 'mil-panel-glow-orange');
                panel.style.removeProperty('--panel-glow-x');
                panel.style.removeProperty('--panel-glow-y');
            });
        });
    };

    initializeTopPanelGlow();

    const initializeGlowButtons = (selector = '.mil-glow-follow') => {
        document.querySelectorAll(selector).forEach((button) => {
            if (button.dataset.glowBound === 'true') {
                return;
            }

            button.dataset.glowBound = 'true';

            button.addEventListener('pointermove', (event) => {
                const bounds = button.getBoundingClientRect();
                const x = event.clientX - bounds.left;
                const y = event.clientY - bounds.top;
                button.style.setProperty('--glow-x', `${x}px`);
                button.style.setProperty('--glow-y', `${y}px`);
            });

            button.addEventListener('pointerleave', () => {
                button.style.removeProperty('--glow-x');
                button.style.removeProperty('--glow-y');
            });
        });
    };

    const createFooterContactButtons = () => {
        const footerContactMap = {
            en: {
                title: 'Contact Us',
                whatsapp: 'WhatsApp',
                whatsappMeta: 'Chat with us',
                email: 'Email',
                emailMeta: 'miltimedia@gessler.com',
                location: 'Location',
                locationMeta: 'Open map'
            },
            es: {
                title: 'Cont\u00e1ctanos',
                whatsapp: 'WhatsApp',
                whatsappMeta: 'Escr\u00edbenos',
                email: 'Correo',
                emailMeta: 'miltimedia@gessler.com',
                location: 'Ubicaci\u00f3n',
                locationMeta: 'Abrir mapa'
            }
        };

        const contactLinks = {
            whatsapp: 'https://wa.me/51958237851',
            email: 'mailto:miltimedia@gessler.com',
            location: 'https://maps.google.com/?q=Gessler+Studio'
        };

        const renderFooterContactButtons = () => {
            const currentLanguage = document.documentElement.lang === 'es' ? 'es' : 'en';
            const copy = footerContactMap[currentLanguage];

            document.querySelectorAll('footer .mil-footer-list').forEach((list) => {
                const footerColumn = list.closest('.col-lg-4');
                const title = footerColumn ? footerColumn.querySelector('h5') : null;

                if (title) {
                    title.textContent = copy.title;
                }

                list.classList.add('mil-footer-contact-buttons');
                list.innerHTML = `
                    <li class="mil-up">
                        <a href="${contactLinks.whatsapp}" class="mil-footer-contact-btn mil-footer-contact-btn-whatsapp mil-glow-follow mil-c-gone" target="_blank" rel="noopener noreferrer" aria-label="${copy.whatsapp}">
                            <span class="mil-footer-contact-btn-icon" aria-hidden="true"><i class="fab fa-whatsapp"></i></span>
                            <span class="mil-footer-contact-btn-text">
                                <span class="mil-footer-contact-btn-title">${copy.whatsapp}</span>
                                <span class="mil-footer-contact-btn-meta">${copy.whatsappMeta}</span>
                            </span>
                        </a>
                    </li>
                    <li class="mil-up">
                        <a href="${contactLinks.email}" class="mil-footer-contact-btn mil-footer-contact-btn-email mil-glow-follow mil-c-gone" aria-label="${copy.email}">
                            <span class="mil-footer-contact-btn-icon" aria-hidden="true"><i class="far fa-envelope"></i></span>
                            <span class="mil-footer-contact-btn-text">
                                <span class="mil-footer-contact-btn-title">${copy.email}</span>
                                <span class="mil-footer-contact-btn-meta">${copy.emailMeta}</span>
                            </span>
                        </a>
                    </li>
                    <li class="mil-up">
                        <a href="${contactLinks.location}" class="mil-footer-contact-btn mil-footer-contact-btn-location mil-glow-follow mil-c-gone" target="_blank" rel="noopener noreferrer" aria-label="${copy.location}">
                            <span class="mil-footer-contact-btn-icon" aria-hidden="true"><i class="fas fa-map-marker-alt"></i></span>
                            <span class="mil-footer-contact-btn-text">
                                <span class="mil-footer-contact-btn-title">${copy.location}</span>
                                <span class="mil-footer-contact-btn-meta">${copy.locationMeta}</span>
                            </span>
                        </a>
                    </li>
                `;
            });

            initializeGlowButtons();
        };

        window.initializeFooterContactButtons = renderFooterContactButtons;
        renderFooterContactButtons();
    };

    createFooterContactButtons();
    initializeGlowButtons();

    const initializeMenuLetterHover = () => {
        const iconMap = {
            "index.html": "fa-home",
            "services.html": "fa-briefcase",
            "portfolio-2.html": "fa-images",
            "about.html": "fa-users",
            "contact.html": "fa-paper-plane"
        };
        const labelMap = {
            en: {
                "index.html": "Home",
                "services.html": "Services",
                "portfolio-2.html": "Portfolio",
                "about.html": "About us",
                "contact.html": "Contact"
            },
            es: {
                "index.html": "Inicio",
                "services.html": "Servicios",
                "portfolio-2.html": "Portafolio",
                "about.html": "Sobre nosotros",
                "contact.html": "Contacto"
            }
        };
        const currentLanguage = document.documentElement.lang === 'es' ? 'es' : 'en';
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        const menuLinks = document.querySelectorAll('.mil-main-menu li > a');

        menuLinks.forEach((link) => {
            const href = (link.getAttribute('href') || '').split('#')[0];
            const iconClass = iconMap[href];
            const currentLabel = labelMap[currentLanguage][href] || (link.querySelector('.mil-menu-link-text-original')?.textContent || link.textContent || '').replace(/\s+/g, ' ').trim();

            if (!currentLabel) {
                return;
            }

            if (!link.classList.contains('mil-menu-link')) {
                link.classList.add('mil-menu-link');
            }

            link.classList.toggle('mil-current', href === currentPath);

            link.innerHTML = '';

            const iconWrapper = document.createElement('span');
            iconWrapper.className = 'mil-menu-link-icon';
            iconWrapper.setAttribute('aria-hidden', 'true');

            if (iconClass) {
                const icon = document.createElement('i');
                icon.className = `fas ${iconClass}`;
                iconWrapper.appendChild(icon);
            }

            const textWrapper = document.createElement('span');
            textWrapper.className = 'mil-menu-link-text';

            const originalLayer = document.createElement('span');
            originalLayer.className = 'mil-menu-link-text-original';
            originalLayer.textContent = currentLabel;

            const hoverLayer = document.createElement('span');
            hoverLayer.className = 'mil-menu-link-text-hover';
            hoverLayer.setAttribute('aria-hidden', 'true');
            hoverLayer.textContent = currentLabel;

            textWrapper.appendChild(originalLayer);
            textWrapper.appendChild(hoverLayer);
            link.appendChild(iconWrapper);
            link.appendChild(textWrapper);
        });

        const menuLayers = document.querySelectorAll('.mil-menu-link-text-original, .mil-menu-link-text-hover');

        menuLayers.forEach((layer) => {
            const layerText = (layer.textContent || '').replace(/\s+/g, ' ').trim();

            if (!layerText) {
                return;
            }

            const letters = Array.from(layerText);
            layer.innerHTML = letters.map((character, index) => {
                const safeCharacter = character === ' ' ? '&nbsp;' : character;
                const delay = (index * 0.028).toFixed(3);
                return `<span class="mil-menu-letter" style="transition-delay:${delay}s">${safeCharacter}</span>`;
            }).join('');
        });
    };

    window.initializeMenuLetterHover = initializeMenuLetterHover;
    initializeMenuLetterHover();

    document.querySelectorAll('.mil-menu-window .mil-social.mil-center').forEach((menuSocial) => {
        menuSocial.remove();
    });

    /* -------------------------------------------

    register gsap plugins

    ------------------------------------------- */
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    /* -------------------------------------------

    ScrollSmoother

    ------------------------------------------- */
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 1);
    if (!isTouchDevice) {
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
            smoothTouch: 0,
        });
    }
    /* -------------------------------------------
    
    tabs
    
    ------------------------------------------- */
    var tabs = document.querySelectorAll('ul.mil-tabs li');

    if (tabs.length > 0) {
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                var tab_id = this.getAttribute('data-tab');

                tabs.forEach(function (tab) {
                    tab.classList.remove('mil-current');
                });
                var tabContents = document.querySelectorAll('.mil-tab-content');
                tabContents.forEach(function (content) {
                    content.classList.remove('mil-current');
                });

                this.classList.add('mil-current');
                var tabContentElement = document.getElementById(tab_id);
                if (tabContentElement) {
                    tabContentElement.classList.add('mil-current');
                }

                if (typeof ScrollTrigger !== 'undefined') {
                    ScrollTrigger.refresh();
                }
            });
        });
    }
    /* -------------------------------------------
    
    quantity
    
    ------------------------------------------- */
    var quantityField = document.getElementById('quantity');
    var minusButton = document.querySelector('.mil-minus');
    var plusButton = document.querySelector('.mil-plus');

    if (quantityField && minusButton && plusButton) {
        minusButton.addEventListener('click', function () {
            var currentValue = parseInt(quantityField.value, 10);
            if (currentValue > 0) {
                quantityField.value = currentValue - 1;
            }
        });

        plusButton.addEventListener('click', function () {
            var currentValue = parseInt(quantityField.value, 10);
            quantityField.value = currentValue + 1;
        });
    }
    /* -------------------------------------------

    accordion

    ------------------------------------------- */
    let groups = gsap.utils.toArray(".mil-accordion-group");
    let menus = gsap.utils.toArray(".mil-accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach(menu => {
        menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu) {
        menuToggles.forEach(toggleFn => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
        let menu = element.querySelector(".mil-accordion-menu");
        let box = element.querySelector(".mil-accordion-content");

        gsap.set(box, {
            height: "auto"
        });

        let animation = gsap.from(box, {
            height: 0,
            duration: 0.5,
            ease: "sine",
            onComplete: () => {
                ScrollTrigger.refresh();
            }
        }).reverse();

        let lastActiveMenu = null;

        return function (clickedMenu) {
            if (clickedMenu === menu) {
                let isOpen = animation.reversed();
                animation.reversed(!isOpen);

                if (isOpen) {
                    if (lastActiveMenu && lastActiveMenu !== menu) {
                        lastActiveMenu.classList.remove("mil-active");
                    }
                    menu.classList.add("mil-active");
                    lastActiveMenu = menu;
                } else {
                    menu.classList.remove("mil-active");
                }
            } else {
                animation.reverse();
                if (lastActiveMenu) {
                    lastActiveMenu.classList.remove("mil-active");
                }
                clickedMenu.classList.add("mil-active");
                lastActiveMenu = clickedMenu;
            }
        }
    }
    /* -------------------------------------------

    cursor

    ------------------------------------------- */
    var follower = document.querySelector(".mil-cursor-follower");

    if (isTouchDevice) {
        if (follower) follower.style.display = 'none';
    } else {
        var posX = 0,
            posY = 0;
        var mouseX = 0,
            mouseY = 0;
        var cursorOrbitIdleTimer;

        if (follower && !follower.querySelector('.mil-cursor-orbit')) {
            follower.insertAdjacentHTML('beforeend', `
                <span class="mil-cursor-orbit mil-cursor-orbit-one" aria-hidden="true"></span>
                <span class="mil-cursor-orbit mil-cursor-orbit-two" aria-hidden="true"></span>
            `);
        }

        gsap.ticker.add(function () {
            if (!follower) {
                return;
            }
            posX += (mouseX - posX) / 29;
            posY += (mouseY - posY) / 29;
            gsap.set(follower, {
                css: {
                    left: posX,
                    top: posY
                }
            });
        });

        function addHoverEffect(selector, className) {
            document.querySelectorAll(selector).forEach(function (link) {
                link.addEventListener("mouseenter", function () {
                    follower.classList.add(className);
                });
                link.addEventListener("mouseleave", function () {
                    follower.classList.remove(className);
                });
            });
        }

        addHoverEffect(".mil-c-dark", "mil-dark-active");
        addHoverEffect(".mil-c-gone", "mil-gone-active");
        addHoverEffect(".mil-c-view", "mil-view-active");
        addHoverEffect(".mil-c-next", "mil-next-active");
        addHoverEffect(".mil-c-read", "mil-read-active");
        addHoverEffect(".mil-c-swipe", "mil-swipe-active");

        document.addEventListener("mousemove", function (e) {
            if (!follower) {
                return;
            }
            mouseX = e.clientX;
            mouseY = e.clientY;
            follower.classList.remove("mil-orbit-idle");
            window.clearTimeout(cursorOrbitIdleTimer);
            cursorOrbitIdleTimer = window.setTimeout(function () {
                follower.classList.add("mil-orbit-idle");
            }, 140);
        });
    }

    /* -------------------------------------------

    menu

    ------------------------------------------- */
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('mil-menu-btn')) {
            event.target.classList.toggle('mil-active');
            document.querySelector('.mil-menu-window').classList.toggle('mil-active');
        }
    });
    /* -------------------------------------------

    back to top

    ------------------------------------------- */
    var btn = document.getElementById('mil-btt-floating');

    if (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    /* -------------------------------------------

    scrollbar

    ------------------------------------------- */
    const progressBar = document.querySelector('.mil-progress');
    const progressStartColor = { r: 243, g: 90, b: 56 };
    const progressEndColor = { r: 20, g: 151, b: 224 };

    const updateProgressColor = (progressValue) => {
        if (!progressBar) {
            return;
        }

        const r = Math.round(gsap.utils.interpolate(progressStartColor.r, progressEndColor.r, progressValue));
        const g = Math.round(gsap.utils.interpolate(progressStartColor.g, progressEndColor.g, progressValue));
        const b = Math.round(gsap.utils.interpolate(progressStartColor.b, progressEndColor.b, progressValue));

        progressBar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };

    updateProgressColor(0);

    gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
            scrub: 0.3,
            onUpdate: (self) => {
                updateProgressColor(self.progress);
            }
        }
    });

    /* -------------------------------------------

    scroll animations

    ------------------------------------------- */
    const appearance = document.querySelectorAll(".mil-up");
    appearance.forEach((section) => {
        const staggerDelay = parseFloat(section.getAttribute("data-stagger")) || 0;
        gsap.fromTo(section, {
            opacity: 0,
            y: 60,
            scale: .96,
            ease: 'sine',
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            delay: staggerDelay,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });
    /* -------------------------------------------

    scale animations

    ------------------------------------------- */
    const scaleImage = document.querySelectorAll(".mil-scale-img");

    scaleImage.forEach((section) => {
        var value1 = section.getAttribute("data-value-1");
        var value2 = section.getAttribute("data-value-2");

        if (window.innerWidth < 992) {
            value1 = Math.max(.95, value1);
        }

        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,
        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });
    /* -------------------------------------------

    typing hero

    ------------------------------------------- */
    const runTypingHtml = (element) => {
        const template = document.createElement('template');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const currentLanguage = localStorage.getItem('site-language') || 'en';
        const sourceAttr = currentLanguage === 'es' && element.hasAttribute('data-type-html-es')
            ? 'data-type-html-es'
            : 'data-type-html';

        element.innerHTML = '';
        element.classList.remove('mil-typing-complete');
        template.innerHTML = element.getAttribute(sourceAttr) || '';

        const sourceSpans = Array.from(template.content.querySelectorAll('span'));
        const targetSpans = sourceSpans.map((span) => {
            const target = document.createElement('span');

            target.className = span.className;
            element.appendChild(target);

            return {
                element: target,
                text: span.textContent || ''
            };
        });
        const fullText = targetSpans.map((span) => span.text).join('');
        let index = 0;

        element.setAttribute('aria-label', fullText);

        if (reduceMotion) {
            targetSpans.forEach((span) => {
                span.element.textContent = span.text;
            });
            element.classList.add('mil-typing-complete');
            return;
        }

        const typeNext = () => {
            let remaining = index;

            targetSpans.forEach((span) => {
                const nextLength = Math.max(0, Math.min(span.text.length, remaining));
                span.element.textContent = span.text.slice(0, nextLength);
                remaining -= nextLength;
            });

            index++;

            if (index <= fullText.length) {
                window.setTimeout(typeNext, index < 8 ? 70 : 42);
            } else {
                element.classList.add('mil-typing-complete');
            }
        };

        window.setTimeout(typeNext, 360);
    };

    document.querySelectorAll('[data-type-html]').forEach(runTypingHtml);

    window.initializeTypingHero = () => {
        document.querySelectorAll('[data-type-html]').forEach(runTypingHtml);
    };

    document.querySelectorAll('[data-type-text]').forEach((element) => {
        const text = element.getAttribute('data-type-text') || '';
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let index = 0;

        element.textContent = '';
        element.setAttribute('aria-label', text);

        if (reduceMotion) {
            element.textContent = text;
            element.classList.add('mil-typing-complete');
            return;
        }

        const typeNext = () => {
            element.textContent = text.slice(0, index);
            index++;

            if (index <= text.length) {
                window.setTimeout(typeNext, index < 8 ? 70 : 42);
            } else {
                element.classList.add('mil-typing-complete');
            }
        };

        window.setTimeout(typeNext, 360);
    });
    /* -------------------------------------------

    scroll sequence

    ------------------------------------------- */
    document.querySelectorAll('[data-scroll-sequence]').forEach((sequence) => {
        const stage = sequence.querySelector('.mil-scroll-sequence-stage');
        const frame = sequence.querySelector('.mil-scroll-sequence-frame');
        const canvas = sequence.querySelector('[data-sequence-canvas]');
        const context = canvas ? canvas.getContext('2d') : null;
        const frameCount = parseInt(sequence.getAttribute('data-frame-count'), 10);
        const framePath = sequence.getAttribute('data-frame-path');
        const frameFit = sequence.getAttribute('data-sequence-fit') || 'cover';
        const immersive = sequence.getAttribute('data-sequence-immersive') === 'true';
        const frameImages = [];
        let currentFrame = 0;
        let requestedFrame = 0;
        let canvasWidth = 0;
        let canvasHeight = 0;

        if (!stage || !frame || !canvas || !context || !frameCount || !framePath) {
            return;
        }

        const isMobileDevice = window.matchMedia('(max-width: 767px)').matches ||
            (('ontouchstart' in window) && window.innerWidth < 1024);

        if (isMobileDevice) {
            canvas.style.display = 'none';
            sequence.classList.add('mil-sequence-mobile');
            return;
        }

        const getFrameSrc = (index) => {
            return framePath.replace('{index}', String(index).padStart(3, '0'));
        };

        const isFrameReady = (index) => {
            const frameImage = frameImages[index];
            return frameImage && frameImage.complete && frameImage.naturalWidth > 0;
        };

        const sizeCanvas = () => {
            const rect = frame.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const nextWidth = Math.max(1, Math.round(rect.width * dpr));
            const nextHeight = Math.max(1, Math.round(rect.height * dpr));

            if (canvasWidth !== nextWidth || canvasHeight !== nextHeight) {
                canvasWidth = nextWidth;
                canvasHeight = nextHeight;
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                canvas.style.width = `${rect.width}px`;
                canvas.style.height = `${rect.height}px`;
            }
        };

        const drawFrame = (index) => {
            let drawIndex = index;
            if (!isFrameReady(drawIndex)) {
                let found = false;
                for (let offset = 1; offset <= 20; offset++) {
                    if (isFrameReady(index - offset)) { drawIndex = index - offset; found = true; break; }
                    if (isFrameReady(index + offset)) { drawIndex = index + offset; found = true; break; }
                }
                if (!found) return;
            }

            const frameImage = frameImages[drawIndex];
            const canvasRatio = canvasWidth / canvasHeight;
            const imageRatio = frameImage.naturalWidth / frameImage.naturalHeight;
            let sourceWidth = frameImage.naturalWidth;
            let sourceHeight = frameImage.naturalHeight;
            let sourceX = 0;
            let sourceY = 0;

            if (frameFit === 'contain') {
                if (imageRatio > canvasRatio) {
                    sourceHeight = frameImage.naturalWidth / canvasRatio;
                    sourceY = (frameImage.naturalHeight - sourceHeight) / 2;
                } else {
                    sourceWidth = frameImage.naturalHeight * canvasRatio;
                    sourceX = (frameImage.naturalWidth - sourceWidth) / 2;
                }
            } else if (imageRatio > canvasRatio) {
                sourceWidth = frameImage.naturalHeight * canvasRatio;
                sourceX = (frameImage.naturalWidth - sourceWidth) / 2;
            } else {
                sourceHeight = frameImage.naturalWidth / canvasRatio;
                sourceY = (frameImage.naturalHeight - sourceHeight) / 2;
            }

            context.clearRect(0, 0, canvasWidth, canvasHeight);

            if (frameFit === 'contain') {
                const scale = Math.min(canvasWidth / frameImage.naturalWidth, canvasHeight / frameImage.naturalHeight);
                const drawWidth = frameImage.naturalWidth * scale;
                const drawHeight = frameImage.naturalHeight * scale;
                const drawX = (canvasWidth - drawWidth) / 2;
                const drawY = (canvasHeight - drawHeight) / 2;

                context.drawImage(frameImage, 0, 0, frameImage.naturalWidth, frameImage.naturalHeight, drawX, drawY, drawWidth, drawHeight);
            } else {
                context.drawImage(frameImage, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvasWidth, canvasHeight);
            }
            frame.classList.add('mil-canvas-ready');
            currentFrame = drawIndex;
        };

        const showFrame = (index) => {
            if (index === currentFrame && frame.classList.contains('mil-canvas-ready')) {
                return;
            }

            sizeCanvas();
            drawFrame(index);
        };

        const preloadFrame = (index) => {
            if (index < 0 || index >= frameCount) {
                return null;
            }

            if (frameImages[index]) {
                return frameImages[index];
            }

            const preloadImage = new Image();
            preloadImage.decoding = 'async';
            preloadImage.onload = () => {
                if (Math.abs(index - requestedFrame) <= 10) {
                    showFrame(requestedFrame);
                }
            };
            preloadImage.src = getFrameSrc(index);
            frameImages[index] = preloadImage;

            return preloadImage;
        };

        const requestFrame = (index) => {
            requestedFrame = Math.max(0, Math.min(frameCount - 1, index));
            preloadFrame(requestedFrame);
            showFrame(requestedFrame);

            for (let i = requestedFrame - 4; i <= requestedFrame + 8; i++) {
                preloadFrame(i);
            }
        };

        const startSequencePreload = () => {
            for (let i = 0; i < Math.min(frameCount, 6); i++) {
                preloadFrame(i);
            }
            for (let i = 6; i < frameCount; i++) {
                setTimeout(() => {
                    preloadFrame(i);
                }, (i - 5) * 60);
            }
        };

        const warmupObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startSequencePreload();
                warmupObserver.disconnect();
            }
        }, { rootMargin: '50% 0px' });
        warmupObserver.observe(sequence);

        window.addEventListener('resize', () => {
            canvasWidth = 0;
            canvasHeight = 0;
            showFrame(currentFrame);
        });

        if (typeof ScrollTrigger === 'undefined') {
            return;
        }

        ScrollTrigger.create({
            trigger: sequence,
            start: 'top top',
            end: 'bottom bottom',
            pin: stage,
            pinSpacing: false,
            anticipatePin: 1,
            scrub: 0.5,
            onEnter: () => {
                if (immersive) {
                    document.body.classList.add('mil-sequence-active');
                }
            },
            onEnterBack: () => {
                if (immersive) {
                    document.body.classList.add('mil-sequence-active');
                }
            },
            onLeave: () => {
                if (immersive) {
                    document.body.classList.remove('mil-sequence-active');
                }
            },
            onLeaveBack: () => {
                if (immersive) {
                    document.body.classList.remove('mil-sequence-active');
                }
            },
            onUpdate: (self) => {
                requestFrame(Math.round(self.progress * (frameCount - 1)));
            }
        });
    });
    /* -------------------------------------------

    home video expand on scroll

    ------------------------------------------- */
    (function () {
        const section = document.querySelector('[data-video-expand]');
        if (!section) return;

        const stage = section.querySelector('.mil-home-video-stage');
        const card = section.querySelector('.mil-home-video-card');
        const video = section.querySelector('.mil-home-video-media');

        if (!stage || !card) return;

        const setInitialSize = () => {
            const ratio = (video && video.videoWidth && video.videoHeight)
                ? video.videoHeight / video.videoWidth
                : 9 / 16;
            const availableWidth = stage.clientWidth * 0.95;
            const availableHeight = stage.clientHeight - 120;
            const width = Math.min(availableWidth, availableHeight / ratio);

            card.style.width = `${width}px`;
            card.style.height = `${width * ratio}px`;
        };

        setInitialSize();
        window.addEventListener('resize', setInitialSize);

        if (video) {
            video.addEventListener('loadedmetadata', setInitialSize, { once: true });
        }

        if (typeof ScrollTrigger === 'undefined' || typeof gsap === 'undefined') {
            return;
        }

        gsap.to(card, {
            width: () => window.innerWidth,
            height: () => window.innerHeight,
            borderRadius: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                pin: stage,
                pinSpacing: false,
                scrub: 0.5,
                invalidateOnRefresh: true
            }
        });
    }());
    /* -------------------------------------------

    counters

    ------------------------------------------- */
    const numbers = document.querySelectorAll(".mil-counter");

    numbers.forEach((element) => {
        var zero = {
            val: 0
        };
        var num = parseFloat(element.getAttribute("data-number"));
        var split = (num + "").split("."); // to cover for instances of decimals
        var decimals = split.length > 1 ? split[1].length : 0;

        gsap.to(zero, {
            val: num,
            duration: 2,
            scrollTrigger: {
                trigger: element,
                toggleActions: 'play none none reverse',
            },
            onUpdate: function () {
                element.textContent = zero.val.toFixed(decimals);
            }
        });
    });
    /* -------------------------------------------

    add class

    ------------------------------------------- */
    function addClassToElement(element) {
        if (element) {
            element.classList.add('mil-added');
        }
    }

    function removeClassFromElement(element) {
        if (element) {
            element.classList.remove('mil-added');
        }
    }

    document.querySelectorAll('.mil-add-class').forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            toggleActions: 'play none none reverse',
            onEnter: () => addClassToElement(element),
            onLeaveBack: () => removeClassFromElement(element)
        });
    });
    /* -------------------------------------------

    sliders

    ------------------------------------------- */
    var swiper = new Swiper('.mil-reviews-slider', {
        parallax: true,
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            prevEl: '.mil-reviews-nav .mil-prev',
            nextEl: '.mil-reviews-nav .mil-next',
        },
        on: {
            slideChangeTransitionEnd: function () {
                ScrollTrigger.refresh();
            }
        }
    });

    var swiper = new Swiper('.mil-home-banner-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 900,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3200,
            disableOnInteraction: false
        }
    });


    var swiper = new Swiper('.mil-portfolio-slider', {
        parallax: true,
        autoHeight: true,
        initialSlide: 1,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        scrollbar: {
            el: ".mil-pagination",
        },
        on: {
            slideChangeTransitionEnd: function () {
                ScrollTrigger.refresh();
            }
        }
    });

    var swiper = new Swiper('.mil-portfolio-fs-slider', {
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        breakpoints: {
            992: {

            },
        },
        mousewheel: {
            sensitivity: 1,
        },
    });
    var swiper = new Swiper('.mil-portfolio-fs-slider-2', {
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            prevEl: '.mil-port-nav .mil-prev',
            nextEl: '.mil-port-nav .mil-next',
        },
        breakpoints: {
            992: {

            },
        },
        mousewheel: {
            sensitivity: 1,
        },
    });

    var swiper = new Swiper('.mil-store-slider', {
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        breakpoints: {
            992: {

            },
        },
    });
    /* -------------------------------------------

    progressbar

    ------------------------------------------- */

    const progressBars = document.querySelectorAll('.mil-prog');

    progressBars.forEach(progressBar => {
        const widthPercentage = progressBar.getAttribute('data-number');
        gsap.fromTo(progressBar, {
            ease: 'sine',
            width: '0%'
        }, {
            width: `${widthPercentage}%`,
            scrollTrigger: {
                trigger: progressBar,
                toggleActions: 'play none none reverse',
                once: true
            },
            duration: 2,
            ease: 'sine'
        });
    });
    /* -------------------------------------------

    price

    ------------------------------------------- */
    var price = document.querySelectorAll('.mil-pricing-table-price');
    var year = document.getElementById('year');
    var month = document.getElementById('month');

    if (price.length > 0 && year && month) {
        year.addEventListener('click', function () {
            this.classList.add('mil-active');
            month.classList.remove('mil-active');
            price.forEach(function (element) {
                element.textContent = element.getAttribute('data-year-price');
            });
        });

        month.addEventListener('click', function () {
            this.classList.add('mil-active');
            year.classList.remove('mil-active');
            price.forEach(function (element) {
                element.textContent = element.getAttribute('data-month-price');
            });
        });
    }

    /* -------------------------------------------

    client logo dock

    ------------------------------------------- */

    document.querySelectorAll('.mil-logo-marquee').forEach((marquee) => {
        const slots = Array.from(marquee.querySelectorAll('.mil-logo-slot'));

        if (!slots.length) {
            return;
        }

        let pointerX = 0;
        let frameId = null;

        const resetDock = () => {
            marquee.classList.remove('mil-dock-active');
            slots.forEach((slot) => {
                slot.style.removeProperty('--dock-scale');
                slot.style.removeProperty('--dock-z');
                slot.style.removeProperty('--dock-shadow');
            });
        };

        const updateDock = () => {
            frameId = null;

            slots.forEach((slot) => {
                const rect = slot.getBoundingClientRect();
                const center = rect.left + rect.width / 2;
                const distance = Math.abs(pointerX - center);
                const influence = Math.max(0, 1 - distance / 240);
                const eased = influence * influence * (3 - 2 * influence);
                const scale = 1 + eased * 0.16;

                slot.style.setProperty('--dock-scale', scale.toFixed(3));
                slot.style.setProperty('--dock-z', String(Math.round(1 + eased * 20)));
                slot.style.setProperty('--dock-shadow', (eased * 0.10).toFixed(3));
            });
        };

        marquee.addEventListener('pointermove', (event) => {
            if (window.matchMedia('(pointer: coarse)').matches) {
                return;
            }

            pointerX = event.clientX;
            marquee.classList.add('mil-dock-active');

            if (!frameId) {
                frameId = window.requestAnimationFrame(updateDock);
            }
        });

        marquee.addEventListener('pointerleave', resetDock);
        marquee.addEventListener('blur', resetDock, true);
    });

    /* -------------------------------------------

    pointer particles

    ------------------------------------------- */

    const particleSurfaces = Array.from(document.querySelectorAll('.mil-title-particles'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (particleSurfaces.length && !reducedMotion && !isTouchDevice) {
        const mouse = {
            x: -9999,
            y: -9999
        };
        const particleConfig = {
            count: 130,
            connectionDist: 100,
            mouseRepelRadius: 130,
            mouseRepelStrength: 0.35,
            friction: 0.97,
            baseSpeed: 0.45,
            colors: ['#F35A38', '#1497e0', 'rgba(255,255,255,0.75)', '#F35A38', '#1497e0']
        };

        window.addEventListener('pointermove', (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        }, {
            passive: true
        });

        window.addEventListener('touchmove', (event) => {
            if (!event.touches.length) {
                return;
            }

            mouse.x = event.touches[0].clientX;
            mouse.y = event.touches[0].clientY;
        }, {
            passive: true
        });

        window.addEventListener('pointerleave', () => {
            mouse.x = -9999;
            mouse.y = -9999;
        });

        const particleObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const controller = entry.target.milParticleController;

                if (controller) {
                    controller.setActive(entry.isIntersecting);
                }
            });
        }, {
            threshold: 0.05
        });

        particleSurfaces.forEach((surface) => {
            if (surface.querySelector('.mil-particle-canvas')) {
                return;
            }

            const canvas = document.createElement('canvas');
            canvas.className = 'mil-particle-canvas';
            canvas.setAttribute('aria-hidden', 'true');
            surface.prepend(canvas);

            const context = canvas.getContext('2d');
            const particles = [];
            const isFooter = surface.tagName.toLowerCase() === 'footer';
            let width = 0;
            let height = 0;
            let dpr = 1;
            let rect = surface.getBoundingClientRect();
            let animationFrame = null;
            let active = false;
            let tick = 0;

            class Particle {
                constructor() {
                    this.reset(true);
                }

                reset(initial = false) {
                    this.x = Math.random() * width;
                    this.y = initial ? Math.random() * height : (Math.random() > 0.5 ? -10 : height + 10);
                    this.vx = (Math.random() - 0.5) * particleConfig.baseSpeed * 2;
                    this.vy = (Math.random() - 0.5) * particleConfig.baseSpeed * 2;
                    this.r = Math.random() * 2.2 + 0.4;
                    this.color = particleConfig.colors[Math.floor(Math.random() * particleConfig.colors.length)];
                    this.baseAlpha = Math.random() * 0.5 + 0.25;
                    this.alpha = this.baseAlpha;
                    this.pulseSpeed = Math.random() * 0.02 + 0.005;
                    this.pulseOffset = Math.random() * Math.PI * 2;
                }

                update(localMouse, pointerInside) {
                    if (pointerInside) {
                        const dx = this.x - localMouse.x;
                        const dy = this.y - localMouse.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < particleConfig.mouseRepelRadius && distance > 0) {
                            const force = (particleConfig.mouseRepelRadius - distance) / particleConfig.mouseRepelRadius;
                            this.vx += (dx / distance) * force * particleConfig.mouseRepelStrength;
                            this.vy += (dy / distance) * force * particleConfig.mouseRepelStrength;
                        }
                    }

                    this.vx *= particleConfig.friction;
                    this.vy *= particleConfig.friction;
                    this.x += this.vx;
                    this.y += this.vy;

                    if (this.x < -10) this.x = width + 10;
                    if (this.x > width + 10) this.x = -10;
                    if (this.y < -10) this.y = height + 10;
                    if (this.y > height + 10) this.y = -10;

                    this.alpha = this.baseAlpha + Math.sin(tick * this.pulseSpeed + this.pulseOffset) * 0.12;
                }

                draw() {
                    context.beginPath();
                    context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                    context.fillStyle = this.color;
                    context.globalAlpha = Math.max(0, this.alpha);
                    context.fill();
                    context.globalAlpha = 1;
                }
            }

            const createParticles = () => {
                particles.length = 0;

                const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
                const area = Math.max(1, width * height);
                const density = coarsePointer ? 16000 : 9000;
                const maxParticles = isFooter ? 120 : particleConfig.count;
                const minParticles = isFooter ? 72 : 96;
                const count = Math.max(minParticles, Math.min(maxParticles, Math.round(area / density)));

                for (let i = 0; i < count; i++) {
                    particles.push(new Particle());
                }
            };

            const resizeCanvas = () => {
                rect = surface.getBoundingClientRect();
                dpr = Math.min(window.devicePixelRatio || 1, 2);
                width = Math.max(1, Math.round(rect.width));
                height = Math.max(1, Math.round(rect.height));
                canvas.width = Math.round(width * dpr);
                canvas.height = Math.round(height * dpr);
                context.setTransform(dpr, 0, 0, dpr, 0, 0);
                createParticles();
            };

            const getLocalMouse = () => ({
                x: mouse.x - rect.left,
                y: mouse.y - rect.top
            });

            const isPointerInside = (localMouse) => {
                return localMouse.x >= 0 && localMouse.x <= width && localMouse.y >= 0 && localMouse.y <= height;
            };

            const drawMouseGlow = (localMouse, pointerInside) => {
                if (!pointerInside) {
                    return;
                }

                const gradient = context.createRadialGradient(localMouse.x, localMouse.y, 0, localMouse.x, localMouse.y, particleConfig.mouseRepelRadius);
                gradient.addColorStop(0, 'rgba(243, 90, 56, 0.08)');
                gradient.addColorStop(0.5, 'rgba(20, 151, 224, 0.04)');
                gradient.addColorStop(1, 'transparent');
                context.fillStyle = gradient;
                context.beginPath();
                context.arc(localMouse.x, localMouse.y, particleConfig.mouseRepelRadius, 0, Math.PI * 2);
                context.fill();
            };

            const drawConnections = () => {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const first = particles[i];
                        const second = particles[j];
                        const dx = first.x - second.x;
                        const dy = first.y - second.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < particleConfig.connectionDist) {
                            const alpha = (1 - distance / particleConfig.connectionDist) * 0.12;
                            context.beginPath();
                            context.moveTo(first.x, first.y);
                            context.lineTo(second.x, second.y);
                            context.strokeStyle = `rgba(255,255,255,${alpha})`;
                            context.lineWidth = 0.5;
                            context.stroke();
                        }
                    }
                }
            };

            const drawMouseConnections = (localMouse, pointerInside) => {
                if (!pointerInside) {
                    return;
                }

                particles.forEach((particle) => {
                    const dx = particle.x - localMouse.x;
                    const dy = particle.y - localMouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = particleConfig.mouseRepelRadius * 1.2;

                    if (distance < maxDistance) {
                        const alpha = (1 - distance / maxDistance) * 0.25;
                        context.beginPath();
                        context.moveTo(particle.x, particle.y);
                        context.lineTo(localMouse.x, localMouse.y);
                        context.strokeStyle = `rgba(243,90,56,${alpha})`;
                        context.lineWidth = 0.4;
                        context.stroke();
                    }
                });
            };

            const draw = () => {
                if (!active) {
                    animationFrame = null;
                    return;
                }

                rect = surface.getBoundingClientRect();
                context.clearRect(0, 0, width, height);

                const localMouse = getLocalMouse();
                const pointerInside = isPointerInside(localMouse);

                drawMouseGlow(localMouse, pointerInside);
                drawConnections();
                drawMouseConnections(localMouse, pointerInside);

                particles.forEach((particle) => {
                    particle.update(localMouse, pointerInside);
                    particle.draw();
                });

                tick++;
                animationFrame = window.requestAnimationFrame(draw);
            };

            const setActive = (nextActive) => {
                active = nextActive;

                if (active && !animationFrame) {
                    animationFrame = window.requestAnimationFrame(draw);
                }
            };

            resizeCanvas();

            if ('ResizeObserver' in window) {
                const resizeObserver = new ResizeObserver(resizeCanvas);
                resizeObserver.observe(surface);
            } else {
                window.addEventListener('resize', resizeCanvas);
            }

            surface.milParticleController = {
                setActive
            };

            particleObserver.observe(surface);
        });
    }

    /* -------------------------------------------

    floating skill badges

    ------------------------------------------- */

    const skillClouds = Array.from(document.querySelectorAll('.mil-skill-cloud'));

    if (skillClouds.length && !reducedMotion) {
        const pointer = {
            x: -9999,
            y: -9999
        };
        const skillBadges = skillClouds.flatMap((cloud) => {
            return Array.from(cloud.querySelectorAll('.mil-skill-badge')).map((badge) => ({
                element: badge,
                x: 0,
                y: 0,
                targetX: 0,
                targetY: 0
            }));
        });
        let animationFrame = null;

        const animateSkills = () => {
            let stillMoving = false;

            skillBadges.forEach((badge) => {
                badge.x += (badge.targetX - badge.x) * 0.16;
                badge.y += (badge.targetY - badge.y) * 0.16;

                if (Math.abs(badge.x - badge.targetX) > 0.2 || Math.abs(badge.y - badge.targetY) > 0.2) {
                    stillMoving = true;
                }

                badge.element.style.setProperty('--skill-dx', `${badge.x.toFixed(2)}px`);
                badge.element.style.setProperty('--skill-dy', `${badge.y.toFixed(2)}px`);
                badge.element.classList.toggle('mil-skill-active', Math.abs(badge.targetX) + Math.abs(badge.targetY) > 8);
            });

            if (stillMoving) {
                animationFrame = window.requestAnimationFrame(animateSkills);
            } else {
                animationFrame = null;
            }
        };

        const scheduleSkillAnimation = () => {
            if (!animationFrame) {
                animationFrame = window.requestAnimationFrame(animateSkills);
            }
        };

        const updateSkillTargets = () => {
            skillBadges.forEach((badge) => {
                const rect = badge.element.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dx = centerX - pointer.x;
                const dy = centerY - pointer.y;
                const distance = Math.max(1, Math.sqrt(dx * dx + dy * dy));
                const radius = 180;

                if (distance < radius) {
                    const force = Math.pow((radius - distance) / radius, 1.45);
                    badge.targetX = (dx / distance) * force * 92;
                    badge.targetY = (dy / distance) * force * 92;
                } else {
                    badge.targetX = 0;
                    badge.targetY = 0;
                }
            });

            scheduleSkillAnimation();
        };

        window.addEventListener('pointermove', (event) => {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            updateSkillTargets();
        }, {
            passive: true
        });

        window.addEventListener('pointerleave', () => {
            pointer.x = -9999;
            pointer.y = -9999;
            updateSkillTargets();
        });
    }

    window.addEventListener('load', () => {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    });

});


/* ===== HIDE NAV ON SCROLL ===== */
(function () {
    var panel = document.querySelector('.mil-top-panel');
    if (!panel) return;

    var lastY = 0;
    var idleTimer = null;
    var hidden = false;

    function showNav() {
        if (hidden) {
            panel.classList.remove('mil-nav-hidden');
            hidden = false;
        }
    }

    function hideNav() {
        if (!hidden) {
            panel.classList.add('mil-nav-hidden');
            hidden = true;
        }
    }

    function resetIdle() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(showNav, 700);
    }

    function onScroll(currentY) {
        var delta = currentY - lastY;
        if (currentY > 150) {
            if (delta > 4) {
                hideNav();
            } else if (delta < -2) {
                showNav();
            }
        } else {
            showNav();
        }
        resetIdle();
        lastY = currentY;
    }

    // ScrollTrigger hook (funciona con GSAP ScrollSmoother)
    window.addEventListener('DOMContentLoaded', function () {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.create({
                onUpdate: function (self) {
                    onScroll(self.scroll());
                }
            });
        } else {
            // fallback nativo
            window.addEventListener('scroll', function () {
                onScroll(window.scrollY);
            }, { passive: true });
        }
    });
}());

/* ===== WHATSAPP FLOATING BUTTON ===== */
document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    var GS_WHATSAPP_NUMBER = '573193490741';
    var GS_WHATSAPP_MESSAGES = {
        en: 'Hello, I would like information about your services',
        es: 'Hola, quiero información sobre sus servicios'
    };
    var GS_WHATSAPP_LABELS = {
        en: 'Chat on WhatsApp',
        es: 'Chatear por WhatsApp'
    };

    var link = document.createElement('a');
    link.className = 'gs-whatsapp-btn';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.484 1.34 5.002L2 22l5.117-1.342a9.955 9.955 0 0 0 4.887 1.244h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.928-7.07a9.935 9.935 0 0 0-7.07-2.928zm0 18.164h-.003a8.166 8.166 0 0 1-4.166-1.14l-.299-.177-3.037.797.811-2.96-.195-.304a8.16 8.16 0 0 1-1.25-4.383c0-4.509 3.669-8.178 8.182-8.178 2.186 0 4.24.852 5.786 2.399a8.13 8.13 0 0 1 2.394 5.788c0 4.509-3.67 8.158-8.223 8.158z"/></svg>';

    document.body.appendChild(link);

    var updateWhatsappButton = function () {
        var currentLanguage = localStorage.getItem('site-language') === 'es' ? 'es' : 'en';
        link.href = 'https://wa.me/' + GS_WHATSAPP_NUMBER + '?text=' + encodeURIComponent(GS_WHATSAPP_MESSAGES[currentLanguage]);
        link.setAttribute('aria-label', GS_WHATSAPP_LABELS[currentLanguage]);
    };

    updateWhatsappButton();
    window.initializeWhatsappButton = updateWhatsappButton;
});
