/* Home v2: carrusel del hero + animaciones (texto, números, revelado y parallax). */
(function () {
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Carrusel ---------- */
    var hero = document.querySelector('[data-hv2-hero]');
    if (hero) {
        var slides = [].slice.call(hero.querySelectorAll('.hv2-slide'));
        var dots = [].slice.call(hero.querySelectorAll('.hv2-dot'));
        var count = hero.querySelector('.hv2-count');
        var IMG_MS = 10000, current = 0, timer = null;
        /* Slide del hero "Arco" (js/hero-arc.js): maneja su propio video y animación */
        var ARC_WAIT = 10000; // espera después de que terminó la animación
        var arc = function (s) { return s.hasAttribute('data-arc') && window.GesslerArcHero; };
        var ownVideo = function (s) { return s.hasAttribute('data-arc') ? null : s.querySelector('video'); };

        var clear = function () { clearTimeout(timer); };
        var next = function () { go(current + 1); };

        function go(n) {
            current = (n + slides.length) % slides.length;
            clear();
            slides.forEach(function (s, i) {
                var on = i === current, v = ownVideo(s);
                s.classList.toggle('is-active', on);
                s.setAttribute('aria-hidden', on ? 'false' : 'true');
                if (arc(s)) {
                    if (!on) window.GesslerArcHero.stop();
                } else if (v) {
                    if (on) { v.currentTime = 0; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
                    else { v.pause(); }
                }
            });
            var active = slides[current], video = ownVideo(active), isArc = arc(active);
            var ms = IMG_MS;
            if (video) ms = ((video.duration && isFinite(video.duration)) ? video.duration * 1000 : 20000) + 1500;
            if (isArc) ms = window.GesslerArcHero.estimate() + ARC_WAIT;
            dots.forEach(function (d, i) {
                d.classList.remove('is-active');
                d.style.animationDuration = '';
                if (i === current) { d.firstElementChild.style.animationDuration = (video ? ms - 1500 : ms) + 'ms'; void d.offsetWidth; d.classList.add('is-active'); }
                d.setAttribute('aria-current', i === current ? 'true' : 'false');
            });
            if (count) count.textContent = '0' + (current + 1) + ' / 0' + slides.length;
            /* Imagen: avanza por tiempo. Video: avanza cuando termina (el timer solo es un seguro).
               Arco: avanza 10 s después de que la animación quedó quieta (con un seguro por si algo falla). */
            if (isArc) {
                var slide = active;
                if (!reduce) timer = setTimeout(next, ms + 6000);
                window.GesslerArcHero.start(function () {
                    if (slides[current] !== slide || reduce) return;
                    clear();
                    timer = setTimeout(next, ARC_WAIT);
                });
            } else if (!reduce || video) timer = setTimeout(next, ms);
        }

        slides.forEach(function (s) {
            var v = ownVideo(s);
            if (!v) return;
            v.addEventListener('ended', function () { if (slides[current] === s) next(); });
            v.addEventListener('loadedmetadata', function () { if (slides[current] === s) go(current); });
            v.addEventListener('error', function () { if (slides[current] === s) next(); });
        });
        hero.querySelector('[data-hv2-prev]').addEventListener('click', function () { go(current - 1); });
        hero.querySelector('[data-hv2-next]').addEventListener('click', function () { go(current + 1); });
        dots.forEach(function (d, i) { d.addEventListener('click', function () { go(i); }); });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') go(current - 1); else if (e.key === 'ArrowRight') go(current + 1);
        });
        var x0 = null;
        hero.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
        hero.addEventListener('touchend', function (e) {
            if (x0 === null) return;
            var dx = e.changedTouches[0].clientX - x0; x0 = null;
            if (Math.abs(dx) > 50) go(current + (dx < 0 ? 1 : -1));
        });
        go(0);
    }

    /* ---------- Titulares: palabra por palabra ---------- */
    function split(node) {
        [].slice.call(node.childNodes).forEach(function (c) {
            if (c.nodeType === 3) {
                var frag = document.createDocumentFragment();
                c.textContent.split(/(\s+)/).forEach(function (t) {
                    if (!t) return;
                    if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(' ')); return; }
                    var w = document.createElement('span'), i = document.createElement('span');
                    w.className = 'hv2-w'; i.textContent = t; w.appendChild(i); frag.appendChild(w);
                });
                node.replaceChild(frag, c);
            } else if (c.nodeType === 1 && c.tagName !== 'BR') { split(c); }
        });
    }
    var n = 0;
    [].forEach.call(document.querySelectorAll('.hv2 [data-split]'), function (h) {
        split(h);
        [].forEach.call(h.querySelectorAll('.hv2-w > span'), function (s, i) { s.style.transitionDelay = (i * 70) + 'ms'; });
    });

    /* ---------- Números que cuentan ---------- */
    function fmt(v) { return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
    function countUp(el) {
        var end = parseFloat(el.getAttribute('data-count')), pre = el.getAttribute('data-prefix') || '';
        if (reduce) { el.textContent = pre + fmt(end); return; }
        var t0 = null, dur = 1600;
        (function tick(t) {
            if (t0 === null) t0 = t;
            var k = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - k, 3);
            el.textContent = pre + fmt(end * e);
            if (k < 1) requestAnimationFrame(tick);
        })(performance.now());
    }

    /* ---------- Revelado al hacer scroll ---------- */
    var targets = [].slice.call(document.querySelectorAll('.hv2 [data-split], .hv2 .hv2-rv'));
    if (!('IntersectionObserver' in window)) {
        targets.forEach(function (t) { t.classList.add('is-in'); });
        [].forEach.call(document.querySelectorAll('[data-count]'), countUp);
    } else {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (!e.isIntersecting) return;
                e.target.classList.add('is-in');
                [].forEach.call(e.target.querySelectorAll('[data-count]'), countUp);
                if (e.target.hasAttribute('data-count')) countUp(e.target);
                io.unobserve(e.target);
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
        targets.forEach(function (t) { io.observe(t); });
    }

    /* ---------- Parallax suave en las fotos de Nosotros ---------- */
    if (!reduce) {
        var par = [].slice.call(document.querySelectorAll('.hv2-about-img div'));
        var ticking = false;
        var update = function () {
            par.forEach(function (el, i) {
                var r = el.getBoundingClientRect(), mid = r.top + r.height / 2 - innerHeight / 2;
                el.style.transform = 'translateY(' + (mid * (i % 2 ? -0.06 : 0.06)).toFixed(1) + 'px)';
            });
            ticking = false;
        };
        addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
        update();
    }
})();
