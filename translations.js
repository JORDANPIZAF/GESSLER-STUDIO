// translate.js

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-es]').forEach(el => {
        if (lang === 'es') {
            el.innerHTML = el.getAttribute('data-es');
        } else {
            el.innerHTML = el.getAttribute('data-en');
        }
    });

    // Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Cargar el idioma guardado cuando se abre la página
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('language') || 'es';
    changeLanguage(savedLang);
});