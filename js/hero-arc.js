/* Hero "Arco" — slide 1 del carrusel del home (estilos en css/hero-arc.css).
   El video de Jordan caminando se reproduce una vez; al terminar se congela en el PNG sin fondo
   y los cuadritos entran por un carril circular alrededor de él (pasan por detrás, se achican,
   y quedan 3 a cada lado). Expone window.GesslerArcHero = { start(onDone), stop() } para que
   js/home-v2.js lo arranque al entrar al slide y avance 10 s después de onDone. Requiere GSAP. */
(function () {
    var root = document.querySelector('[data-arc-hero]');
    if (!root) return;

    // Dónde está la persona dentro del cuadro original de 1280×720 (px del video)
    var SRC = { w: 1280, h: 720, headX: 652, headTop: 100, headHalf: 118 };
    var STAGE_SCALE = 0.8; // igual que el scale(.8) de .ha-stage

    // Carril circular (la "onda gravitacional" alrededor de la persona)
    var ORBIT = {
        backScale: 0.55,  // tamaño al pasar justo por detrás
        frontScale: 1.3,  // tamaño al pasar por delante (los de la derecha dan la vuelta completa)
        turn: 38,         // grados que se tuercen hacia el centro mientras orbitan
        durLeft: 2.4,     // segundos de recorrido (izquierda: media vuelta por detrás)
        durRight: 3.4,    // derecha: vuelta completa
        stagger: 0.28,
        settle: 0.78      // desde qué punto del recorrido se "posa" en su lugar final
    };

    var stage = root.querySelector('.ha-stage');
    var glow = root.querySelector('.ha-glow');
    var still = root.querySelector('.ha-still');
    var video = root.querySelector('.ha-video');
    var copy = root.querySelector('.ha-copy');
    var slots = [].slice.call(root.querySelectorAll('.ha-slot'));
    var arms = slots.map(function (s) { return s.querySelector('.ha-arm'); });
    var cards = slots.map(function (s) { return s.querySelector('.ha-card'); });
    var SLOTS = slots.map(function (s) { return { side: +s.getAttribute('data-side'), k: +s.getAttribute('data-k') }; });
    var geo = {}, finals = [];
    var prog = SLOTS.map(function () { return { p: 0 }; });

    // Celular / tablet vertical: el escenario ocupa la parte baja sin reducir (ver css) y los
    // cuadritos van en columna a cada lado de la cabeza.
    var mqCol = window.matchMedia('(max-width: 900px) and (orientation: portrait)');

    // Posiciones finales: escalera pareja a cada lado de la cabeza (escritorio) o columnas (celular),
    // sin tocar nunca el texto
    function layout() {
        var W = stage.clientWidth, H = stage.clientHeight;
        if (!W || !H) return;
        var col = mqCol.matches;
        var scale = col ? 1 : STAGE_SCALE;
        var s = Math.max(W / SRC.w, H / SRC.h);
        var ox;
        if (col) {
            // centrar a la persona en pantalla moviendo el recorte del video
            var extra = W - SRC.w * s;                         // negativo: lo que se recorta
            ox = Math.max(extra, Math.min(0, W / 2 - SRC.headX * s));
            var pos = extra ? (ox / extra * 100) + '% 0' : '50% 0';
            video.style.objectPosition = still.style.objectPosition = pos;
        } else {
            ox = extra = (W - SRC.w * s) / 2;
            video.style.objectPosition = still.style.objectPosition = '';
        }
        var cx = ox + SRC.headX * s;
        var headHalf = SRC.headHalf * s;
        var headTop = SRC.headTop * s;
        // borde superior visible del escenario, en coordenadas del hero (el scale está anclado abajo)
        var visTop = stage.offsetTop + H * (1 - scale);
        // Límite inferior: ningún cuadrito baja hasta el bloque de texto (offsetTop ignora la
        // animación de entrada). Se pasa a coordenadas del escenario.
        var SAFE = col ? 20 : 36;
        var maxBottom = (copy.offsetTop - SAFE - visTop) / scale;
        var minTop = (96 - visTop) / scale;                   // debajo del menú
        var heroHalf = root.clientWidth / (2 * scale);
        var gap, cw;

        if (col) {
            gap = Math.max(8, W * 0.022);
            var sideRoom = Math.min(cx, W - cx) - headHalf + headHalf * 0.12 - 10; // se mete un poco detrás de la cabeza
            var top0c = Math.max(minTop, headTop - headHalf * 0.4);
            cw = Math.max(56, Math.min(150, sideRoom, (maxBottom - top0c - gap * 2) / 3));
            SLOTS.forEach(function (c, i) {
                var fx = c.side < 0 ? 10 + cw / 2 : W - 10 - cw / 2;
                var fy = top0c + c.k * (cw + gap) + cw / 2;
                finals[i] = { x: fx, y: fy };
            });
        } else {
            gap = Math.max(12, W * 0.013);
            // el hero puede ser más ancho que el escenario: los cuadritos pueden usar ese espacio
            var room = Math.min(cx - (W / 2 - heroHalf), (W / 2 + heroHalf) - cx) - 16;
            cw = Math.max(88, Math.min(292, W * 0.155, (room - headHalf - gap * 4) / 3));
            // mismo paso horizontal y vertical entre cada cuadrito
            var stepX = cw + gap;
            var top0 = Math.max(minTop, headTop - cw * 0.2);
            var stepY = Math.min(stepX * 0.42, (maxBottom - cw - top0) / 2);
            if (stepY < 0) { stepY = 0; top0 = Math.max(minTop, maxBottom - cw); }
            SLOTS.forEach(function (c, i) {
                var dx = headHalf + gap + cw / 2 + c.k * stepX;
                finals[i] = { x: cx + c.side * dx, y: top0 + c.k * stepY + cw / 2 };
            });
        }
        stage.style.setProperty('--cw', cw + 'px');
        glow.style.setProperty('--cx', (cx / W * 100) + '%');
        SLOTS.forEach(function (c, i) {
            slots[i].style.left = (finals[i].x - cw / 2) + 'px';
            slots[i].style.top = (finals[i].y - cw / 2) + 'px';
        });
        geo = {
            cx: cx,
            rx: col ? W * 0.42 : headHalf + gap * 2 + cw * 1.5, // radio horizontal del carril
            ry: H * (col ? 0.06 : 0.1),                        // atrás se ve más arriba
            ryFront: H * (col ? 0.2 : 0.34),                   // adelante pasa más abajo, sin tapar la cara
            cy: col ? finals[2].y : headTop + cw * 0.5,
            exitX: W / 2 + heroHalf + cw                       // fuera de la pantalla, a la derecha
        };
        geo.m0 = Math.max(1, (geo.exitX - cx) / geo.rx);       // radio inicial (espiral que se va cerrando)
        render();
    }
    if (mqCol.addEventListener) mqCol.addEventListener('change', layout);

    function smooth(t) { return t * t * (3 - 2 * t); }

    // Dibuja cada cuadrito según su progreso en el carril
    function render() {
        if (!geo.rx) return;
        SLOTS.forEach(function (c, i) {
            var p = prog[i].p;
            var a0 = 90, a1 = c.side < 0 ? 270 : 450;  // 90 derecha, 180 atrás, 270 izquierda, 360 adelante
            var ang = (a0 + (a1 - a0) * p) * Math.PI / 180;
            var m = 1 + (geo.m0 - 1) * Math.pow(1 - Math.min(p / 0.35, 1), 2);
            var depth = -Math.cos(ang);                 // 1 = atrás, -1 = adelante
            var ox = geo.cx + geo.rx * m * Math.sin(ang);
            var oy = geo.cy - (depth > 0 ? geo.ry : geo.ryFront) * depth;
            var sc = depth > 0 ? 1 - (1 - ORBIT.backScale) * depth : 1 + (ORBIT.frontScale - 1) * -depth;
            var rot = -Math.sin(ang) * ORBIT.turn;
            var w = p <= ORBIT.settle ? 0 : smooth((p - ORBIT.settle) / (1 - ORBIT.settle));
            var x = ox + (finals[i].x - ox) * w;
            var y = oy + (finals[i].y - oy) * w;
            sc = sc + (1 - sc) * w;
            rot = rot * (1 - w);
            arms[i].style.transform = 'translate(' + (x - finals[i].x) + 'px,' + (y - finals[i].y) + 'px) ' +
                'perspective(700px) rotateY(' + rot + 'deg) scale(' + sc + ')';
            slots[i].style.zIndex = (depth < -0.05 && w < 0.5) ? 4 : 2;
        });
    }

    var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hasGsap = !!window.gsap;
    var tl = null, doneCb = null, revealed = false, safety = null;

    window.addEventListener('resize', layout);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);

    function finalState() {
        prog.forEach(function (o) { o.p = 1; });
        video.pause();
        video.style.opacity = 0;
        still.style.opacity = 1;
        glow.style.opacity = 1;
        cards.forEach(function (c) { c.style.opacity = 1; });
        copy.style.opacity = 1;
        copy.style.transform = 'none';
        document.documentElement.classList.remove('ha-js');
        layout();
    }

    function reset() {
        revealed = false;
        clearTimeout(safety);
        if (tl) { tl.kill(); tl = null; }
        gsap.killTweensOf([video, still, glow, copy].concat(prog, slots));
        gsap.set(video, { opacity: 1 });
        gsap.set([still, glow], { opacity: 0 });
        gsap.set(cards, { opacity: 1 });
        gsap.set(copy, { opacity: 0, y: 24 });
        prog.forEach(function (o) { o.p = 0; });
        document.documentElement.classList.remove('ha-js');
        layout();
    }

    // La persona queda quieta: video → PNG y los cuadritos entran por el carril circular
    function reveal() {
        if (revealed) return;
        revealed = true;
        clearTimeout(safety);
        tl = gsap.timeline({ onUpdate: render, onComplete: function () { if (doneCb) doneCb(); } });
        tl.set(still, { opacity: 1 })
            .to(video, { opacity: 0, duration: 0.8, ease: 'power2.inOut' })
            .to(glow, { opacity: 1, duration: 1.2, ease: 'power2.out' }, '<');
        // sale primero el que va más lejos (izquierda exterior); los de la derecha dan la vuelta completa
        SLOTS.forEach(function (c, i) {
            tl.to(prog[i], {
                p: 1,
                duration: c.side < 0 ? ORBIT.durLeft : ORBIT.durRight,
                ease: 'power3.out' // "Easy Ease In" de After Effects: llega frenando suave
            }, 0.4 + i * ORBIT.stagger);
        });
        tl.to(copy, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 2.2);
    }

    video.addEventListener('ended', function () { if (!revealed && doneCb) reveal(); });
    video.addEventListener('error', function () { if (!revealed && doneCb) reveal(); });

    window.GesslerArcHero = {
        // Arranca desde cero (video + animación). onDone se llama cuando todo quedó en su lugar.
        start: function (onDone) {
            doneCb = onDone || null;
            if (!hasGsap || reduced) { finalState(); if (doneCb) doneCb(); return; }
            reset();
            try { video.currentTime = 0; } catch (e) {}
            var p = video.play();
            if (p && p.catch) p.catch(reveal); // autoplay bloqueado: no dejar el hero vacío
            // seguro: si el video no arranca en 4 s, revelar igual
            safety = setTimeout(function () { if (video.currentTime === 0 && !revealed) reveal(); }, 4000);
        },
        stop: function () {
            doneCb = null;
            clearTimeout(safety);
            video.pause();
            if (tl) tl.pause();
        },
        // duración aproximada total (para la barrita de progreso del carrusel)
        estimate: function () {
            var d = (video.duration && isFinite(video.duration)) ? video.duration : 8;
            return (d + 0.4 + 5 * ORBIT.stagger + ORBIT.durRight) * 1000;
        }
    };

    // Hover tipo "dock": crece el que está bajo el mouse, se encogen sus vecinos del mismo lado
    var fan = root.querySelector('.ha-fan');
    slots.forEach(function (el, i) {
        el.addEventListener('mouseenter', function () {
            fan.classList.add('is-hovering');
            slots.forEach(function (o, j) {
                o.classList.toggle('is-hover', j === i);
                o.classList.toggle('is-near', j !== i && SLOTS[j].side === SLOTS[i].side && Math.abs(SLOTS[j].k - SLOTS[i].k) === 1);
            });
        });
        el.addEventListener('mouseleave', function () {
            fan.classList.remove('is-hovering');
            el.classList.remove('is-hover');
            slots.forEach(function (o) { o.classList.remove('is-near'); });
        });
    });

    // Parallax con inercia (quickTo) — solo con mouse; los de afuera se mueven más
    if (hasGsap && !reduced && window.matchMedia('(hover: hover)').matches) {
        var movers = slots.map(function (el) { return gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' }); });
        var stillX = gsap.quickTo(still, 'x', { duration: 0.8, ease: 'power3.out' });
        window.addEventListener('mousemove', function (e) {
            if (!revealed) return;
            var relX = (e.clientX / window.innerWidth - 0.5) * 2;
            SLOTS.forEach(function (c, i) { movers[i](relX * 22 * ((c.k + 1) / 3)); });
            stillX(relX * -6);
        });
    }
})();
