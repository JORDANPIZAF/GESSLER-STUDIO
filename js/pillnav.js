/* ===== FLOATING PILL NAV (ported from Beyond's FloatingNav/NavPill/MobileNav, Gessler colors) =====
   The hover/reveal/scroll motion below is a direct port of Beyond's framer-motion springs —
   same stiffness/damping/mass numbers, run through a small spring-physics engine instead of
   framer-motion, since this site has no React. */
(function () {
    "use strict";

    /* ---- generic damped-spring engine (semi-implicit Euler, same model framer-motion uses) ---- */
    function Spring(stiffness, damping, mass) {
        this.stiffness = stiffness;
        this.damping = damping;
        this.mass = mass || 1;
        this.precision = 0.01;
        this.values = {};
        this.running = false;
        this.onUpdate = null;
        this.onRest = null;
    }
    Spring.prototype.set = function (key, value) {
        this.values[key] = { value: value, velocity: 0, target: value };
    };
    Spring.prototype.to = function (targets) {
        var self = this;
        Object.keys(targets).forEach(function (key) {
            if (!self.values[key]) self.values[key] = { value: targets[key], velocity: 0, target: targets[key] };
            else self.values[key].target = targets[key];
        });
        this._start();
    };
    Spring.prototype._start = function () {
        if (this.running) return;
        this.running = true;
        var self = this;
        var lastTime = null;

        function frame(now) {
            if (lastTime === null) lastTime = now;
            var dt = Math.min((now - lastTime) / 1000, 0.064);
            lastTime = now;

            var allSettled = true;
            var out = {};
            Object.keys(self.values).forEach(function (key) {
                var s = self.values[key];
                var force = -self.stiffness * (s.value - s.target);
                var dampingForce = -self.damping * s.velocity;
                var accel = (force + dampingForce) / self.mass;
                s.velocity += accel * dt;
                s.value += s.velocity * dt;

                if (Math.abs(s.target - s.value) > self.precision || Math.abs(s.velocity) > self.precision) {
                    allSettled = false;
                } else {
                    s.value = s.target;
                    s.velocity = 0;
                }
                out[key] = s.value;
            });

            if (self.onUpdate) self.onUpdate(out);

            if (allSettled) {
                self.running = false;
                if (self.onRest) self.onRest();
                return;
            }
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    };

    var REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var GS_WHATSAPP_NUMBER = '573193490741';
    var GS_WHATSAPP_MESSAGES = {
        en: 'Hello, I would like information about your services',
        es: 'Hola, quiero información sobre sus servicios'
    };
    var GS_WHATSAPP_LABELS = {
        en: 'Chat on WhatsApp',
        es: 'Chatear por WhatsApp'
    };
    var WHATSAPP_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .105 5.335.102 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 0 0 5.71 1.446h.006c6.585 0 11.943-5.335 11.946-11.893 0-3.176-1.24-6.165-3.475-8.412M12.05 21.785h-.005a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.85 9.85 0 0 1-1.51-5.26c.002-5.448 4.437-9.883 9.889-9.883 2.64 0 5.122 1.03 6.988 2.898a9.822 9.822 0 0 1 2.893 6.994c-.003 5.448-4.437 9.884-9.885 9.884"/><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>';

    var ACCENT_ORANGE = '#F35A38';
    var ACCENT_BLUE = '#1497E0';

    var NAV_LINKS = [
        { href: 'index.html',    icon: 'fas fa-home',          key: 'Inicio',         color: ACCENT_ORANGE },
        { href: 'services.html', icon: 'fas fa-layer-group',   key: 'Servicios',      color: ACCENT_BLUE },
        { href: 'portfolio-2.html', icon: 'fas fa-briefcase',  key: 'Portafolio',     color: ACCENT_ORANGE },
        { href: 'about.html',    icon: 'fas fa-users',         key: 'Sobre nosotros', color: ACCENT_BLUE },
        { href: 'contact.html',  icon: 'fas fa-envelope',      key: 'Contacto',       color: ACCENT_ORANGE }
    ];

    function currentFile() {
        var path = window.location.pathname.split('/').pop();
        return path === '' ? 'index.html' : path;
    }

    function isActiveLink(href) {
        var current = currentFile();
        if (href === 'index.html') return current === 'index.html' || current === '';
        return current === href;
    }

    function currentLang() {
        return localStorage.getItem('site-language') === 'en' ? 'en' : 'es';
    }

    /* Beyond's NavItem textTransition: maxWidth/marginLeft spring at {stiffness:90, damping:15, mass:1.6},
       opacity as a plain 0.26s ease (kept as a CSS transition, springs on opacity look jittery). */
    function wireLabelSpring(labelEl, isShown) {
        var natural = null;
        var spring = new Spring(90, 15, 1.6);
        spring.set('w', 0);
        spring.set('m', 0);
        spring.onUpdate = function (v) {
            labelEl.style.maxWidth = Math.max(0, v.w) + 'px';
            labelEl.style.marginLeft = Math.max(0, v.m) + 'px';
        };

        function measure() {
            if (natural !== null) return natural;
            var prevMax = labelEl.style.maxWidth;
            labelEl.style.maxWidth = 'none';
            natural = labelEl.scrollWidth;
            labelEl.style.maxWidth = prevMax;
            return natural;
        }

        function apply(shown) {
            if (shown) {
                spring.to({ w: measure(), m: 9 });
                labelEl.style.opacity = '1';
            } else {
                spring.to({ w: 0, m: 0 });
                labelEl.style.opacity = '0';
            }
        }

        apply(isShown());
        return apply;
    }

    function buildDesktopPill() {
        var wrap = document.querySelector('.gs-pillnav-wrap');
        if (!wrap) return;

        var pill = wrap.querySelector('.gs-pillnav');
        var itemsHost = wrap.querySelector('.gs-pillnav-items');
        var highlight = wrap.querySelector('.gs-pillnav-highlight');
        if (!pill || !itemsHost) return;

        // Beyond's liquid highlight spring: {stiffness:300, damping:30} (opacity is a separate 0.18s ease)
        var highlightSpring = new Spring(300, 30, 1);
        if (highlight) {
            highlightSpring.set('left', 0);
            highlightSpring.set('top', 0);
            highlightSpring.set('width', 0);
            highlightSpring.set('height', 0);
            highlightSpring.onUpdate = function (v) {
                highlight.style.left = v.left + 'px';
                highlight.style.top = v.top + 'px';
                highlight.style.width = v.width + 'px';
                highlight.style.height = v.height + 'px';
            };
        }

        function hexToRgba(hex, alpha) {
            var r = parseInt(hex.slice(1, 3), 16);
            var g = parseInt(hex.slice(3, 5), 16);
            var b = parseInt(hex.slice(5, 7), 16);
            return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        }

        var moveHighlight = function (el, opacity, instant, color) {
            if (!highlight || !el) return;
            var left = el.offsetLeft, top = el.offsetTop, width = el.offsetWidth, height = el.offsetHeight;
            if (instant) {
                highlightSpring.set('left', left);
                highlightSpring.set('top', top);
                highlightSpring.set('width', width);
                highlightSpring.set('height', height);
                highlight.style.left = left + 'px';
                highlight.style.top = top + 'px';
                highlight.style.width = width + 'px';
                highlight.style.height = height + 'px';
            } else {
                highlightSpring.to({ left: left, top: top, width: width, height: height });
            }
            if (color) {
                highlight.style.transition = 'opacity 0.18s ease, background-color 0.25s ease';
                highlight.style.backgroundColor = hexToRgba(color, 0.14);
            } else {
                highlight.style.transition = 'opacity 0.18s ease';
            }
            highlight.style.opacity = String(opacity);
        };

        var itemEls = [];
        NAV_LINKS.forEach(function (link) {
            var a = document.createElement('a');
            a.href = link.href;
            var active = isActiveLink(link.href);
            a.className = 'gs-pillnav-item mil-c-gone' + (active ? ' gs-pillnav-active' : '');
            a.style.setProperty('--gs-accent', link.color);
            a.innerHTML = '<i class="' + link.icon + '"></i><span class="gs-pillnav-item-label">' + link.key + '</span>';
            itemsHost.appendChild(a);
            itemEls.push(a);

            var labelEl = a.querySelector('.gs-pillnav-item-label');
            var isHovered = false;
            var setLabel = wireLabelSpring(labelEl, function () { return active || isHovered; });

            a.addEventListener('mouseenter', function () {
                isHovered = true;
                moveHighlight(a, 1, false, link.color);
                setLabel(true);
            });
            a.addEventListener('mouseleave', function () {
                isHovered = false;
                if (highlight) {
                    highlight.style.transition = 'opacity 0.18s ease';
                    highlight.style.opacity = '0';
                }
                if (!active) setLabel(false);
            });
        });

        // Highlight the currently active page on load too
        var activeItem = itemEls.find(function (el) { return el.classList.contains('gs-pillnav-active'); });
        if (activeItem && highlight) {
            moveHighlight(activeItem, 0.6, true, activeItem.style.getPropertyValue('--gs-accent'));
        }
    }

    function buildContactButton() {
        var contact = document.querySelector('.gs-pillnav-contact');
        var link = document.querySelector('.gs-pillnav-contact-link');
        var textEl = document.querySelector('.gs-pillnav-contact-text');
        var iconHost = document.querySelector('.gs-pillnav-contact-icon');
        var overlayCta = document.querySelector('.gs-pillnav-overlay-cta');
        var overlayIconHost = document.querySelector('.gs-pillnav-overlay-cta-icon');
        var overlayTextEl = document.querySelector('.gs-pillnav-overlay-cta-text');

        if (iconHost) iconHost.innerHTML = WHATSAPP_SVG;
        if (overlayIconHost) overlayIconHost.innerHTML = WHATSAPP_SVG;

        var update = function () {
            var lang = currentLang();
            var href = 'https://wa.me/' + GS_WHATSAPP_NUMBER + '?text=' + encodeURIComponent(GS_WHATSAPP_MESSAGES[lang]);

            if (link) {
                link.href = href;
                link.setAttribute('aria-label', GS_WHATSAPP_LABELS[lang]);
            }
            if (textEl) textEl.textContent = GS_WHATSAPP_LABELS[lang];
            if (overlayCta) {
                overlayCta.href = href;
                overlayCta.setAttribute('aria-label', GS_WHATSAPP_LABELS[lang]);
            }
            if (overlayTextEl) overlayTextEl.textContent = GS_WHATSAPP_LABELS[lang];
        };
        update();
        window.initializeWhatsappButton = update;

        // Text uses the exact same spring as nav item labels (Beyond reuses textTransition verbatim)
        if (contact && textEl) {
            var expanded = false;
            var hovered = false;
            var setText = wireLabelSpring(textEl, function () { return expanded || hovered; });
            textEl.style.marginLeft = '0px';

            contact.addEventListener('mouseenter', function () { hovered = true; setText(true); });
            contact.addEventListener('mouseleave', function () { hovered = false; setText(expanded); });

            // Enters as a plain circle, blooms into a pill ~700ms after the pill has expanded (matches Beyond)
            var wrap = document.querySelector('.gs-pillnav-wrap');
            if (wrap) {
                var observer = new MutationObserver(function () {
                    if (wrap.classList.contains('gs-pillnav-contact-ready') && !expanded) {
                        expanded = true;
                        setText(true);
                    }
                });
                observer.observe(wrap, { attributes: true, attributeFilter: ['class'] });
            }
        }
    }

    function buildMobileOverlay() {
        var overlay = document.querySelector('.gs-pillnav-overlay');
        var burger = document.querySelector('.gs-pillnav-burger');
        var overlayLinksHost = document.querySelector('.gs-pillnav-overlay-links');
        if (!overlay || !burger || !overlayLinksHost) return;

        overlayLinksHost.innerHTML = '';
        NAV_LINKS.forEach(function (link, i) {
            var a = document.createElement('a');
            a.href = link.href;
            a.className = 'gs-pillnav-overlay-link mil-c-gone' + (isActiveLink(link.href) ? ' gs-pillnav-active' : '');
            a.style.setProperty('--gs-accent', link.color);
            a.textContent = link.key;
            a.style.transitionDelay = (0.06 * i) + 's';
            overlayLinksHost.appendChild(a);
        });

        var isOpen = false;
        function openMenu() {
            isOpen = true;
            overlay.classList.add('gs-pillnav-overlay-open');
            burger.innerHTML = '<i class="fas fa-times"></i>';
            burger.setAttribute('aria-label', 'Cerrar menú');
            document.body.style.overflow = 'hidden';
        }
        function closeMenu() {
            isOpen = false;
            overlay.classList.remove('gs-pillnav-overlay-open');
            burger.innerHTML = '<i class="fas fa-bars"></i>';
            burger.setAttribute('aria-label', 'Abrir menú');
            document.body.style.overflow = '';
        }

        burger.addEventListener('click', function () {
            isOpen ? closeMenu() : openMenu();
        });
        overlayLinksHost.addEventListener('click', function (e) {
            if (e.target.closest('a')) closeMenu();
        });
    }

    function buildLangPill() {
        // site-translate.js already listens for [data-language-option] clicks globally; nothing to wire here.
    }

    function initEntrance() {
        var wrap = document.querySelector('.gs-pillnav-wrap');
        var itemsHost = document.querySelector('.gs-pillnav-items');
        var contact = document.querySelector('.gs-pillnav-contact');
        if (!wrap) return;

        if (REDUCE_MOTION) {
            wrap.style.opacity = '1';
            wrap.style.transform = 'none';
            if (itemsHost) itemsHost.style.width = 'auto';
            if (contact) contact.style.opacity = '1';
            wrap.classList.add('gs-pillnav-expanded', 'gs-pillnav-contact-ready');
            return;
        }

        // Drop-in: Beyond deliberately uses pure easing here (no spring) to avoid any jitter on landing.
        var dropSpring = { value: -60, velocity: 0 };
        var opacitySpring = { value: 0, velocity: 0 };
        wrap.style.opacity = '0';
        wrap.style.transform = 'translateY(-60px) scale(0.94)';

        var start = null;
        var duration = 850; // ms, matches Beyond's dropTransition
        function ease(t) { // cubic-bezier(0.16, 1, 0.3, 1) approximated with a standard expo-out
            return 1 - Math.pow(2, -10 * t);
        }
        function dropFrame(now) {
            if (start === null) start = now;
            var t = Math.min((now - start) / duration, 1);
            var eased = t >= 1 ? 1 : ease(t);
            var y = -60 + 60 * eased;
            var scale = 0.94 + 0.06 * eased;
            wrap.style.transform = 'translateY(' + y + 'px) scale(' + scale + ')';
            wrap.style.opacity = String(Math.min(1, eased / 0.6));
            if (t < 1) {
                requestAnimationFrame(dropFrame);
            } else {
                wrap.style.transform = 'translateY(0) scale(1)';
                wrap.style.opacity = '1';
                onDropComplete();
            }
        }
        requestAnimationFrame(dropFrame);

        function onDropComplete() {
            setTimeout(function () {
                wrap.classList.add('gs-pillnav-expanded');

                if (itemsHost) {
                    // Beyond's initial pill-expand spring: {stiffness:85, damping:22, mass:1.3} — overdamped, no bounce
                    var itemsSpring = new Spring(85, 22, 1.3);
                    var target = itemsHost.scrollWidth;
                    itemsHost.style.width = '0px';
                    itemsSpring.set('w', 0);
                    itemsSpring.onUpdate = function (v) { itemsHost.style.width = v.w + 'px'; };
                    itemsSpring.onRest = function () { itemsHost.style.width = 'auto'; };
                    itemsSpring.to({ w: target });
                }
                if (contact) {
                    // Beyond's ContactButton wrapper spring: {stiffness:200, damping:26}
                    var contactSpring = new Spring(200, 26, 1);
                    contactSpring.set('opacity', 0);
                    contactSpring.set('scale', 0.85);
                    contact.style.transformOrigin = 'center';
                    contactSpring.onUpdate = function (v) {
                        contact.style.opacity = String(v.opacity);
                        contact.style.transform = 'scale(' + v.scale + ')';
                    };
                    contactSpring.onRest = function () {
                        // Hand transform back to CSS so the :hover/:active scale rules can take over
                        contact.style.transform = '';
                    };
                    setTimeout(function () {
                        contactSpring.to({ opacity: 1, scale: 1 });
                    }, 250);
                }
                setTimeout(function () {
                    wrap.classList.add('gs-pillnav-contact-ready');
                }, 700);
            }, 180);
        }
    }

    function initScrollHide() {
        var wrap = document.querySelector('.gs-pillnav-wrap');
        if (!wrap) return;

        // Beyond: showSpring {stiffness:110, damping:14, mass:1.5}, hideSpring {stiffness:280, damping:28}
        var showSpring = new Spring(110, 14, 1.5);
        var hideSpring = new Spring(280, 28, 1);
        var lastY = 0;
        var idleTimer = null;
        var hidden = false;

        function currentTransform() {
            var m = /translateY\(([-\d.]+)px\)/.exec(wrap.style.transform || '');
            return m ? parseFloat(m[1]) : 0;
        }
        function currentOpacity() {
            var o = parseFloat(wrap.style.opacity);
            return isNaN(o) ? 1 : o;
        }

        function showNav() {
            if (!hidden) return;
            hidden = false;
            showSpring.set('y', currentTransform());
            showSpring.set('opacity', currentOpacity());
            showSpring.onUpdate = function (v) {
                wrap.style.transform = 'translateY(' + v.y + 'px) scale(1)';
                wrap.style.opacity = String(Math.max(0, Math.min(1, v.opacity)));
            };
            showSpring.to({ y: 0, opacity: 1 });
        }
        function hideNav() {
            if (hidden) return;
            hidden = true;
            hideSpring.set('y', currentTransform());
            hideSpring.set('opacity', currentOpacity());
            hideSpring.onUpdate = function (v) {
                wrap.style.transform = 'translateY(' + v.y + 'px) scale(1)';
                wrap.style.opacity = String(Math.max(0, Math.min(1, v.opacity)));
            };
            hideSpring.to({ y: -120, opacity: 0 });
        }
        function resetIdle() {
            clearTimeout(idleTimer);
            idleTimer = setTimeout(showNav, 700);
        }
        function onScroll(currentY) {
            var delta = currentY - lastY;
            if (currentY < 80) {
                showNav();
            } else if (delta > 4) {
                hideNav();
            } else if (delta < -4) {
                showNav();
            }
            resetIdle();
            lastY = currentY;
        }

        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.create({
                onUpdate: function (self) { onScroll(self.scroll()); }
            });
        } else {
            window.addEventListener('scroll', function () {
                onScroll(window.scrollY);
            }, { passive: true });
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        buildDesktopPill();
        buildContactButton();
        buildMobileOverlay();
        buildLangPill();
        initEntrance();
        initScrollHide();
    });
}());
