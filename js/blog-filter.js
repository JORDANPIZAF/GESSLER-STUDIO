/* Filtro por categoría de blog.html. Los botones se arman a partir de las etiquetas
   (.gs-blog-tag) de cada tarjeta, así un artículo nuevo con una categoría nueva aparece
   solo en el filtro. Si la categoría no está en ICONS, usa el ícono por defecto. */
(function () {
    var list = document.querySelector('[data-blog-list]');
    var bar = document.querySelector('[data-blog-filter]');
    if (!list || !bar) return;

    var ICONS = {
        'Diseño web': 'fas fa-laptop-code',
        'Branding': 'fas fa-star',
        'Estrategia': 'fas fa-chess-knight',
        'Casos de éxito': 'fas fa-trophy',
        'Publicidad': 'fas fa-bullhorn',
        'Fotografía': 'fas fa-camera'
    };
    var ORDER = ['Diseño web', 'Branding', 'Estrategia', 'Casos de éxito', 'Publicidad', 'Fotografía'];

    function slug(text) {
        return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }

    var items = [].slice.call(list.children).filter(function (col) {
        return col.querySelector('.gs-blog-tag');
    });
    var counts = {};
    items.forEach(function (col) {
        var name = col.querySelector('.gs-blog-tag').textContent.trim();
        col.setAttribute('data-category', slug(name));
        counts[name] = (counts[name] || 0) + 1;
    });

    var names = Object.keys(counts).sort(function (a, b) {
        var ia = ORDER.indexOf(a), ib = ORDER.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });

    function button(key, label, icon, count) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'gs-blog-filter-btn mil-c-gone';
        b.setAttribute('data-filter', key);
        b.setAttribute('aria-pressed', 'false');
        b.innerHTML = '<i class="' + icon + '" aria-hidden="true"></i><span>' + label + '</span><small>' + count + '</small>';
        bar.appendChild(b);
        return b;
    }

    button('todos', 'Todos', 'fas fa-th-large', items.length);
    names.forEach(function (name) {
        button(slug(name), name, ICONS[name] || 'fas fa-tag', counts[name]);
    });

    var status = document.querySelector('[data-blog-filter-status]');

    function apply(key, updateUrl) {
        if (!bar.querySelector('[data-filter="' + key + '"]')) key = 'todos';
        [].forEach.call(bar.children, function (b) {
            b.setAttribute('aria-pressed', b.getAttribute('data-filter') === key ? 'true' : 'false');
        });
        var shown = 0;
        items.forEach(function (col) {
            var match = key === 'todos' || col.getAttribute('data-category') === key;
            col.hidden = !match;
            if (match) shown++;
        });
        if (status) status.textContent = shown + (shown === 1 ? ' artículo' : ' artículos');
        if (updateUrl) {
            var url = new URL(window.location.href);
            if (key === 'todos') url.searchParams.delete('categoria');
            else url.searchParams.set('categoria', key);
            history.replaceState(null, '', url);
        }
        // Al ocultar tarjetas cambia la altura de la página: ScrollSmoother y las animaciones
        // de entrada (.mil-up) necesitan recalcular sus posiciones.
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    }

    bar.addEventListener('click', function (e) {
        var b = e.target.closest('[data-filter]');
        if (b) apply(b.getAttribute('data-filter'), true);
    });

    apply(new URLSearchParams(window.location.search).get('categoria') || 'todos', false);
})();
