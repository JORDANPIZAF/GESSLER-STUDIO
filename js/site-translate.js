const SITE_TRANSLATION_KEY = "site-language";
const SITE_DEFAULT_LANGUAGE = "en";
const TRANSLATABLE_ATTRIBUTES = ["placeholder", "title", "aria-label"];

const TRANSLATIONS = {
    es: {
        "Gessler Studio": "Gessler Studio",
        "Gessler Studio | About us": "Gessler Studio | Sobre nosotros",
        "Gessler Studio | Jordan Piza": "Gessler Studio | Jordan Piza",
        "Gessler Studio | Angie Pachon": "Gessler Studio | Angie Pachon",
        "Gessler Studio | Branding": "Gessler Studio | Branding",
        "Gessler Studio | Web Design": "Gessler Studio | Diseño web",
        "Gessler Studio | Animation and Video Editing": "Gessler Studio | Animación y edición de video",
        "Gessler Studio | Social Media": "Gessler Studio | Social Media",
        "Gessler Studio | Communication Strategies": "Gessler Studio | Estrategias de comunicación",
        "Gessler Studio home": "Inicio de Gessler Studio",
        "Switch site to English": "Cambiar sitio a inglés",
        "Traducir sitio a espanol": "Cambiar sitio a español",
        "Home": "Inicio",
        "Portfolio": "Portafolio",
        "Pages": "Páginas",
        "About": "Acerca de",
        "About us": "Sobre nosotros",
        "Services": "Servicios",
        "Contact": "Contacto",
        "Pricing": "Precios",
        "contact": "Contacto",
        "Store": "Tienda",
        "Store item": "Producto",
        "Coming soon": "Próximamente",
        "Blog": "Blog",
        "List": "Lista",
        "Publication": "Publicación",
        "Project": "Proyecto",
        "Slider 1": "Carrusel 1",
        "Slider 2": "Carrusel 2",
        "Type 1": "Tipo 1",
        "Type 2": "Tipo 2",
        "Type 3": "Tipo 3",
        "Type 4": "Tipo 4",
        "Type 5": "Tipo 5",
        "Type 6": "Tipo 6",
        "Type 7": "Tipo 7",
        "Type 8": "Tipo 8",
        "Type 9": "Tipo 9",
        "Type 10": "Tipo 10",
        "Type 11": "Tipo 11",
        "Type 12": "Tipo 12",
        "Type 13": "Tipo 13",
        "Recent works": "Trabajos recientes",
        "Latest news": "Últimas noticias",
        "Contact Us": "Contáctanos",
        "Menu": "Menú",
        "Our Team": "Nuestro equipo",
        "Projects": "Proyectos",
        "Back to top": "Volver arriba",
        "See Projects": "Ver proyectos",
        "See work": "Ver trabajo",
        "View portfolio": "Ver portafolio",
        "View project": "Ver proyecto",
        "View": "Ver",
        "Continue": "Continuar",
        "Reply": "Responder",
        "now": "ahora",
        "online chat": "chat en línea",
        "Just say Hello via": "Solo di Hola por",
        "Hi. We are Angie and Jordan": "Hola somos Angie y Jordan",
        "years": "años",
        "experience": "experiencia",
        "Design projects": "Proyectos de diseño",
        "in queue": "en curso",
        "Website design for": "Diseño web para",
        "We are redesigning the website clearing websites and we are already in the final phase": "Estamos rediseñando el sitio web y ya estamos en la fase final.",
        "Brand new design for": "Nuevo diseño para",
        "more than 200 websites built with the highest quality standards and advanced features.": "más de 200 sitios web creados con altos estándares de calidad y funciones avanzadas.",
        "Take a look at our latest design projects done for our newest clients, we have worked countless hours for total satisfaction.": "Mira algunos de nuestros proyectos de diseño más recientes realizados para nuevos clientes.",
        "At Gessler Studio, we care about each client and each person who works with us and makes great projects possible": "En Gessler Studio cuidamos a cada cliente y a cada persona que hace posibles grandes proyectos con nosotros.",
        "We are a creative duo focused on strategy, multimedia design and human-centered solutions for growing brands.": "Somos un dúo creativo enfocado en estrategia, diseño multimedia y soluciones centradas en las personas para marcas en crecimiento.",
        "Phone: +051 - 958 237 851": "Teléfono: +051 - 958 237 851",
        "Email: hola@gesslerstudio.com": "Correo: hola@gesslerstudio.com",
        "Address: 300 St. Mary's L, Suite 8060, Houston,": "Dirección: 300 St. Mary's L, Suite 8060, Houston,",
        "Hi. I'm Tinny": "Hola. Soy Tinny",
        "I love visual": "Me encanta el diseño visual",
        "web designer": "diseñadora web",
        "User interface designer": "Diseñador de interfaz",
        "Our services": "Nuestros servicios",
        "Corporate identity": "Identidad corporativa",
        "Graphic design": "Diseño gráfico",
        "Web Design": "Diseño web",
        "Community manager": "Community manager",
        "See details": "Ver detalles",
        "Get in touch": "Ponte en contacto",
        "Send Message": "Enviar mensaje",
        "Subscribe": "Suscríbete",
        "Sign up to our Newsletter": "Suscríbete a nuestro boletín",
        "Load more": "Cargar más",
        "Buy this now": "Comprar ahora",
        "Our work": "Nuestro trabajo",
        "Our works": "Nuestros trabajos",
        "Share:": "Compartir:",
        "3 min ago": "hace 3 min",
        "What comes next is the great workflow remotely from wherever": "Lo que sigue es un gran flujo de trabajo remoto desde cualquier lugar.",
        "Tips to personalize the interface of your devices for use in everyday life": "Consejos para personalizar la interfaz de tus dispositivos para el uso diario.",
        "December 10, 2023 at 10:13": "10 de diciembre de 2023 a las 10:13",
        "Tell more about your new business plan": "Cuéntanos más sobre tu nuevo plan de negocio",
        "Start your next": "Comienza tu próximo",
        "A very well planned vision will take you to your destination": "Una visión bien planificada te llevará a tu destino",
        "Strategic Vision": "Visión estratégica",
        "Small agency, strong vision": "Agencia pequeña, visión clara",
        "Selected creative projects": "Proyectos creativos seleccionados",
        "from": "de",
        "recent portfolio work": "trabajos recientes de portafolio",
        "Trusted flow": "Flujo de confianza",
        "Brands and spaces we can build with": "Marcas y espacios con los que podemos construir",
        "Precision under pressure": "Precisión bajo presión",
        "Branding": "Branding",
        "Design": "Diseño",
        "Multimedia": "Multimedia",
        "Social Media": "Social Media",
        "Creative Direction": "Dirección creativa",
        "Visual Systems": "Sistemas visuales",
        "Content Strategy": "Estrategia de contenido",
        "Campaign Thinking": "Pensamiento de campaña",
        "Digital Presence": "Presencia digital",
        "Art Direction": "Dirección de arte",
        "Motion Ideas": "Ideas en movimiento",
        "Creative Systems": "Sistemas creativos",
        "Visual Identity": "Identidad visual",
        "Storytelling": "Narrativa",
        "A creative and strategic partnership behind every project": "Una alianza creativa y estratégica detrás de cada proyecto",
        "Gessler Studio is built by two complementary profiles. Jordan leads multimedia design, visual communication and brand execution, while Angie brings industrial engineering thinking, structure and process clarity to each project.": "Gessler Studio está formado por dos perfiles complementarios. Jordan lidera el diseño multimedia, la comunicación visual y la ejecución de marca, mientras Angie aporta pensamiento de ingeniería industrial, estructura y claridad de procesos a cada proyecto.",
        "This page is the entry point to get to know us better. Choose the profile you want to explore and discover how each of us contributes to the studio.": "Esta página es el punto de entrada para conocernos mejor. Elige el perfil que quieres explorar y descubre cómo cada uno aporta al estudio.",
        "Choose a profile": "Elige un perfil",
        "Meet the people behind Gessler Studio": "Conoce a las personas detrás de Gessler Studio",
        "Profile 01": "Perfil 01",
        "Profile 02": "Perfil 02",
        "Jordan Piza": "Jordan Piza",
        "Angie Pachon": "Angie Pachon",
        "Multimedia Designer": "Diseñador multimedia",
        "Industrial Engineer": "Ingeniera industrial",
        "Focused on branding, digital design, visual storytelling and creative direction for modern businesses.": "Enfocado en branding, diseño digital, narrativa visual y dirección creativa para negocios modernos.",
        "Bringing strategic analysis, operational thinking and organized decision-making to every service we offer.": "Aportando análisis estratégico, pensamiento operativo y toma de decisiones organizada a cada servicio que ofrecemos.",
        "View profile": "Ver perfil",
        "Creative": "Creativo",
        "Visual identity and brand expression": "Identidad visual y expresión de marca",
        "We shape memorable visuals, digital assets and multimedia experiences that communicate clearly.": "Creamos visuales memorables, activos digitales y experiencias multimedia que comunican con claridad.",
        "Strategic": "Estratégico",
        "Process, structure and decision support": "Proceso, estructura y apoyo en decisiones",
        "We organize ideas, define priorities and help projects move with more order and better execution.": "Organizamos ideas, definimos prioridades y ayudamos a que los proyectos avancen con más orden y mejor ejecución.",
        "Together": "En conjunto",
        "A balanced studio with two perspectives": "Un estudio equilibrado con dos perspectivas",
        "Design and engineering thinking come together to create solutions that are both attractive and functional.": "El diseño y el pensamiento de ingeniería se unen para crear soluciones atractivas y funcionales.",
        "Ready to build your next project with us?": "¿Listo para construir tu próximo proyecto con nosotros?",
        "Creative direction, visual systems and multimedia execution": "Dirección creativa, sistemas visuales y ejecución multimedia",
        "Jordan Piza develops visual concepts that connect strategy with aesthetics. His work focuses on creating brand experiences through design, digital assets, storytelling and strong visual consistency.": "Jordan Piza desarrolla conceptos visuales que conectan estrategia con estética. Su trabajo se centra en crear experiencias de marca a través del diseño, activos digitales, narrativa y una fuerte consistencia visual.",
        "Inside Gessler Studio, Jordan leads the creative side of projects, shaping ideas into clear visual outputs that feel modern, intentional and aligned with each client.": "Dentro de Gessler Studio, Jordan lidera el lado creativo de los proyectos, convirtiendo ideas en resultados visuales claros, modernos e intencionales para cada cliente.",
        "Branding": "Branding",
        "Multimedia": "Multimedia",
        "Visual Design": "Diseño visual",
        "Creative Direction": "Dirección creativa",
        "Focus": "Enfoque",
        "Brand identity and communication": "Identidad de marca y comunicación",
        "Building visual languages that feel distinctive, coherent and ready to grow across digital and printed formats.": "Construyendo lenguajes visuales distintivos, coherentes y listos para crecer en formatos digitales e impresos.",
        "Approach": "Enfoque de trabajo",
        "Design with message and structure": "Diseño con mensaje y estructura",
        "Every decision responds to a concept, a user need and a visual system that supports the brand instead of decorating it.": "Cada decisión responde a un concepto, una necesidad del usuario y un sistema visual que apoya la marca en lugar de solo decorarla.",
        "Role in the studio": "Rol en el estudio",
        "Creative lead and visual execution": "Líder creativo y ejecución visual",
        "From moodboards to final assets, Jordan transforms direction into polished multimedia pieces ready to launch.": "Desde moodboards hasta piezas finales, Jordan transforma la dirección en materiales multimedia listos para lanzar.",
        "How Jordan adds value": "Cómo aporta Jordan",
        "His strength is turning abstract ideas into visual systems that clients can actually use. Whether it is a presentation, a campaign asset, a social media concept or a broader identity direction, the work is always oriented toward clarity and impact.": "Su fortaleza está en convertir ideas abstractas en sistemas visuales que los clientes realmente pueden usar. Ya sea una presentación, una pieza de campaña, un concepto para redes o una dirección de identidad más amplia, el trabajo siempre busca claridad e impacto.",
        "Jordan brings a multimedia mindset to the studio, helping each project feel dynamic, cohesive and expressive across the channels where brands need to be seen.": "Jordan aporta una mirada multimedia al estudio, ayudando a que cada proyecto se sienta dinámico, coherente y expresivo en los canales donde las marcas deben verse.",
        "Profile note": "Nota de perfil",
        "Best fit for branding, visual campaigns, presentation design, content systems and creative guidance for small businesses.": "Ideal para branding, campañas visuales, diseño de presentaciones, sistemas de contenido y dirección creativa para pequeños negocios.",
        "Want to work with Jordan on your next visual project?": "¿Quieres trabajar con Jordan en tu próximo proyecto visual?",
        "Structure, analysis and organized thinking for every service": "Estructura, análisis y pensamiento organizado para cada servicio",
        "Angie Pachon contributes the strategic and operational side of Gessler Studio. Her industrial engineering background helps transform ideas into clearer workflows, stronger decision-making and more grounded project direction.": "Angie Pachon aporta el lado estratégico y operativo de Gessler Studio. Su formación en ingeniería industrial ayuda a transformar ideas en flujos de trabajo más claros, mejores decisiones y una dirección de proyecto más sólida.",
        "She supports the studio by bringing logic, planning and problem-solving into the creative process, helping each service feel more sustainable and better organized from start to finish.": "Ella fortalece el estudio integrando lógica, planeación y resolución de problemas al proceso creativo, haciendo que cada servicio sea más sostenible y ordenado de principio a fin.",
        "Strategy": "Estrategia",
        "Processes": "Procesos",
        "Analysis": "Análisis",
        "Optimization": "Optimización",
        "Systems, order and strategic support": "Sistemas, orden y apoyo estratégico",
        "Helping ideas move from concept to execution with more clarity, measurable steps and practical thinking.": "Ayudando a que las ideas pasen del concepto a la ejecución con más claridad, pasos medibles y pensamiento práctico.",
        "Make each project easier to manage": "Hacer cada proyecto más fácil de gestionar",
        "Angie organizes processes, identifies priorities and supports decisions so the studio can work with greater consistency.": "Angie organiza procesos, identifica prioridades y apoya decisiones para que el estudio trabaje con mayor consistencia.",
        "Operational and strategic perspective": "Perspectiva operativa y estratégica",
        "She helps align ideas with feasibility, structure and sustainable project development for clients and internal workflows.": "Ayuda a alinear ideas con viabilidad, estructura y desarrollo sostenible tanto para clientes como para los flujos internos.",
        "How Angie adds value": "Cómo aporta Angie",
        "Angie strengthens the studio from a systems perspective. She helps identify what is necessary, what is efficient and how to move ideas through a process that supports better outcomes and more confident execution.": "Angie fortalece el estudio desde una perspectiva de sistemas. Ayuda a identificar qué es necesario, qué es eficiente y cómo mover las ideas dentro de un proceso que apoye mejores resultados y una ejecución más segura.",
        "Her presence allows Gessler Studio to combine creative intuition with organization, making the agency more solid, thoughtful and reliable for every collaboration.": "Su presencia permite que Gessler Studio combine intuición creativa con organización, haciendo la agencia más sólida, pensada y confiable en cada colaboración.",
        "Best fit for strategic planning, process organization, project support and service structures that need more clarity and efficiency.": "Ideal para planeación estratégica, organización de procesos, apoyo a proyectos y estructuras de servicio que necesitan más claridad y eficiencia.",
        "Need a more strategic and structured approach for your project?": "¿Necesitas un enfoque más estratégico y estructurado para tu proyecto?",
        "Contact us": "Contáctanos"
        ,
        "5 core services": "5 servicios clave",
        "Creative and strategic services designed to move your brand forward.": "Servicios creativos y estratégicos diseñados para impulsar tu marca.",
        "Each service can work on its own or as part of a larger process. We built this structure so clients can clearly understand what we do, what they receive and where each solution fits.": "Cada servicio puede funcionar por separado o como parte de un proceso más amplio. Diseñamos esta estructura para que los clientes entiendan con claridad qué hacemos, qué reciben y dónde encaja cada solución.",
        "Choose a service to explore the details, deliverables and the kind of projects where it creates the most value.": "Elige un servicio para explorar sus detalles, entregables y el tipo de proyectos donde genera más valor.",
        "Branding": "Branding",
        "Web Design": "Diseño web",
        "Animation and Video Editing": "Animación y edición de video",
        "Communication Strategies": "Estrategias de comunicación",
        "Identity systems, brand voice and visual direction for businesses that need a clearer presence and a stronger first impression.": "Sistemas de identidad, voz de marca y dirección visual para negocios que necesitan una presencia más clara y una primera impresión más fuerte.",
        "Landing pages and websites with a clear message, intentional layout and a digital experience aligned with your brand.": "Landing pages y sitios web con un mensaje claro, una composición intencional y una experiencia digital alineada con tu marca.",
        "Visual motion pieces and edited video content that make communication more dynamic, memorable and platform-ready.": "Piezas en movimiento y contenido de video editado que vuelven la comunicación más dinámica, memorable y lista para plataformas.",
        "Content systems and social assets that help brands stay consistent, visible and better organized across platforms.": "Sistemas de contenido y piezas para redes que ayudan a las marcas a mantenerse consistentes, visibles y mejor organizadas en distintas plataformas.",
        "Strategic direction to define what a brand should say, how it should say it and how to align communication with business goals.": "Dirección estratégica para definir qué debe decir una marca, cómo debe decirlo y cómo alinear la comunicación con los objetivos del negocio.",
        "Identity direction": "Dirección de identidad",
        "Logo systems": "Sistemas de logo",
        "Brand guidelines": "Guías de marca",
        "UI structure": "Estructura UI",
        "Responsive design": "Diseño responsive",
        "Conversion focus": "Enfoque en conversión",
        "Motion graphics": "Motion graphics",
        "Reels and promos": "Reels y promos",
        "Video editing": "Edición de video",
        "Content pillars": "Pilares de contenido",
        "Post design": "Diseño de posts",
        "Campaign assets": "Piezas de campaña",
        "Messaging structure": "Estructura de mensajes",
        "Strategic clarity": "Claridad estratégica",
        "Explore service": "Explorar servicio",
        "How we work": "Cómo trabajamos",
        "A simple process built for clarity.": "Un proceso simple pensado para dar claridad.",
        "We keep each service grounded in strategy, visual coherence and practical execution so the work is not only attractive, but useful for the business behind it.": "Mantenemos cada servicio anclado en estrategia, coherencia visual y ejecución práctica para que el trabajo no solo sea atractivo, sino útil para el negocio detrás.",
        "Listen": "Escuchar",
        "We understand the context, goals and current challenges before proposing any direction.": "Entendemos el contexto, los objetivos y los retos actuales antes de proponer una dirección.",
        "Define": "Definir",
        "We shape the right scope, priorities and creative route for the specific service you need.": "Definimos el alcance correcto, las prioridades y la ruta creativa para el servicio específico que necesitas.",
        "Build": "Construir",
        "We turn the direction into visual pieces, systems or content that can move into the real world.": "Convertimos la dirección en piezas visuales, sistemas o contenido que pueden pasar al mundo real.",
        "Deliver": "Entregar",
        "We deliver assets, systems or recommendations that are ready to be used with confidence.": "Entregamos piezas, sistemas o recomendaciones listas para usarse con confianza.",
        "Brand foundation": "Fundamento de marca",
        "We build brand identities that feel coherent across every touchpoint.": "Construimos identidades de marca que se sienten coherentes en cada punto de contacto.",
        "This service is designed for businesses that need more than a logo. We define the visual language, structure and direction that help a brand appear consistent, professional and easier to recognize.": "Este servicio está pensado para negocios que necesitan más que un logo. Definimos el lenguaje visual, la estructura y la dirección que ayudan a que una marca se vea consistente, profesional y más fácil de reconocer.",
        "Branding can include new identities, refinements of existing systems or clearer guidance for how the brand should behave across digital and printed materials.": "El branding puede incluir identidades nuevas, ajustes de sistemas existentes o una guía más clara sobre cómo debe comportarse la marca en materiales digitales e impresos.",
        "Best fit for": "Ideal para",
        "New businesses": "Nuevos negocios",
        "Rebrands": "Rebrands",
        "Growing studios": "Estudios en crecimiento",
        "Brands that need consistency": "Marcas que necesitan consistencia",
        "A visual route that defines how the brand should look and feel.": "Una ruta visual que define cómo debe verse y sentirse la marca.",
        "Core assets": "Activos base",
        "Logo applications, palette, typography and supporting graphic elements.": "Aplicaciones de logo, paleta, tipografía y elementos gráficos de apoyo.",
        "Guidelines": "Guías",
        "A practical system to keep the brand usable and consistent over time.": "Un sistema práctico para mantener la marca usable y consistente con el tiempo.",
        "What can be included": "Qué puede incluirse",
        "Need a stronger identity for your business?": "¿Necesitas una identidad más fuerte para tu negocio?",
        "We can shape a branding process that gives your studio or company a clearer visual system.": "Podemos construir un proceso de branding que le dé a tu estudio o empresa un sistema visual más claro.",
        "Start this service": "Empezar este servicio",
        "Digital presence": "Presencia digital",
        "We design websites that look intentional and communicate fast.": "Diseñamos sitios web que se ven intencionales y comunican rápido.",
        "Need a site that feels clearer and more intentional?": "¿Necesitas un sitio que se sienta más claro e intencional?",
        "Motion content": "Contenido en movimiento",
        "We turn static ideas into pieces that move with intention.": "Convertimos ideas estáticas en piezas que se mueven con intención.",
        "Need video content that feels more alive?": "¿Necesitas contenido en video que se sienta más vivo?",
        "Content systems": "Sistemas de contenido",
        "We help brands show up with more order, consistency and creative clarity.": "Ayudamos a las marcas a mostrarse con más orden, consistencia y claridad creativa.",
        "Need your social media to feel more coherent?": "¿Necesitas que tu social media se sienta más coherente?",
        "Strategic direction": "Dirección estratégica",
        "We help brands communicate with more purpose and less noise.": "Ayudamos a las marcas a comunicar con más propósito y menos ruido.",
        "Need a clearer communication route for your brand?": "¿Necesitas una ruta de comunicación más clara para tu marca?"
        ,
        "About the agency": "Sobre la agencia",
        "A creative duo building brands, visuals and communication with intention.": "Un dúo creativo construyendo marcas, visuales y comunicación con intención.",
        "Gessler Studio is the collaborative space behind Jordan Piza and Angie Pachon. We combine multimedia design, visual direction and strategic thinking to create work that feels both expressive and well structured.": "Gessler Studio es el espacio colaborativo detrás de Jordan Piza y Angie Pachon. Combinamos diseño multimedia, dirección visual y pensamiento estratégico para crear trabajo que se sienta expresivo y bien estructurado.",
        "This section is designed to introduce the people behind the agency. On the right, you can later replace these images with your own portraits and studio moments.": "Esta sección está pensada para presentar a las personas detrás de la agencia. A la derecha, luego puedes reemplazar estas imágenes por sus propios retratos y momentos de estudio.",
        "Presentation video": "Video de presentación",
        "A space to introduce Jordan in his own voice": "Un espacio para presentar a Jordan con su propia voz",
        "This block is ready for a short presentation video where Jordan can talk about his creative approach, the kind of projects he enjoys and how he works with clients.": "Este bloque está listo para un video corto de presentación donde Jordan puede hablar de su enfoque creativo, el tipo de proyectos que disfruta y cómo trabaja con clientes.",
        "When you have the final video, we can replace this placeholder with YouTube, Vimeo or a local video file.": "Cuando tengas el video final, podemos reemplazar este placeholder por YouTube, Vimeo o un archivo de video local.",
        "Jordan presentation video": "Video de presentación de Jordan",
        "A space to introduce Angie with clarity and context": "Un espacio para presentar a Angie con claridad y contexto",
        "This section is ready for a presentation video where Angie can explain her strategic perspective, how she organizes processes and the value she brings to each project.": "Esta sección está lista para un video de presentación donde Angie puede explicar su perspectiva estratégica, cómo organiza procesos y el valor que aporta a cada proyecto.",
        "Later we can replace this placeholder with YouTube, Vimeo or a hosted video file without changing the page structure.": "Más adelante podemos reemplazar este placeholder por YouTube, Vimeo o un archivo de video alojado sin cambiar la estructura de la página.",
        "Angie presentation video": "Video de presentación de Angie"
        ,"My CV": "Mi CV"
        ,"Jordan CV PDF": "CV PDF de Jordan"
        ,"Angie CV PDF": "CV PDF de Angie"
    }
};

function normalizeText(value) {
    return value.replace(/\s+/g, " ").trim();
}

function getTranslation(value, language) {
    if (language === SITE_DEFAULT_LANGUAGE) {
        return value;
    }

    const dictionary = TRANSLATIONS[language] || {};
    return dictionary[value] || value;
}

function setOriginalAttribute(element, attributeName) {
    const backupName = `data-original-${attributeName}`;
    if (!element.hasAttribute(backupName) && element.hasAttribute(attributeName)) {
        element.setAttribute(backupName, element.getAttribute(attributeName));
    }
}

function translateAttributes(language) {
    document.querySelectorAll("*").forEach((element) => {
        TRANSLATABLE_ATTRIBUTES.forEach((attributeName) => {
            if (!element.hasAttribute(attributeName)) {
                return;
            }

            setOriginalAttribute(element, attributeName);

            const originalValue = element.getAttribute(`data-original-${attributeName}`);
            const translatedValue = getTranslation(originalValue, language);
            element.setAttribute(attributeName, translatedValue);
        });
    });
}

function translateDocumentTitle(language) {
    if (!document.documentElement.hasAttribute("data-original-title")) {
        document.documentElement.setAttribute("data-original-title", document.title);
    }

    const originalTitle = document.documentElement.getAttribute("data-original-title");
    document.title = getTranslation(originalTitle, language);
}

function translateTextNodes(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (!node.parentElement) {
                return NodeFilter.FILTER_REJECT;
            }

            if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.parentElement.tagName)) {
                return NodeFilter.FILTER_REJECT;
            }

            if (!normalizeText(node.nodeValue)) {
                return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
        }
    });

    const nodes = [];
    while (walker.nextNode()) {
        nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
        if (!node.__originalText) {
            node.__originalText = node.nodeValue;
        }

        const originalText = node.__originalText;
        const normalizedOriginal = normalizeText(originalText);
        const translatedText = getTranslation(normalizedOriginal, language);

        if (translatedText === normalizedOriginal) {
            node.nodeValue = originalText;
            return;
        }

        const leadingWhitespace = originalText.match(/^\s*/)[0];
        const trailingWhitespace = originalText.match(/\s*$/)[0];
        node.nodeValue = `${leadingWhitespace}${translatedText}${trailingWhitespace}`;
    });
}

function updateLanguageButton(language) {
    document.querySelectorAll("[data-language-option]").forEach((option) => {
        const optionLanguage = option.getAttribute("data-language-option");
        const isActive = optionLanguage === language;

        option.classList.toggle("mil-active", isActive);
        option.setAttribute("aria-pressed", isActive ? "true" : "false");
        option.setAttribute("title", optionLanguage === "en" ? "English" : "Español");
    });
}

function applyLanguagePreference(language) {
    const normalizedLanguage = language === "es" ? "es" : SITE_DEFAULT_LANGUAGE;

    localStorage.setItem(SITE_TRANSLATION_KEY, normalizedLanguage);
    document.documentElement.lang = normalizedLanguage;

    translateDocumentTitle(normalizedLanguage);
    translateTextNodes(normalizedLanguage);
    translateAttributes(normalizedLanguage);
    updateLanguageButton(normalizedLanguage);

    if (typeof window.initializeMenuLetterHover === "function") {
        window.initializeMenuLetterHover();
    }
    if (typeof window.initializeThemeSwitcher === "function") {
        window.initializeThemeSwitcher();
    }
    if (typeof window.initializeFooterContactButtons === "function") {
        window.initializeFooterContactButtons();
    }

    document.querySelectorAll('[data-lang-bc]').forEach(function(el) {
        el.style.display = el.getAttribute('data-lang-bc') === normalizedLanguage ? '' : 'none';
    });
}

function toggleSiteLanguage() {
    const currentLanguage = localStorage.getItem(SITE_TRANSLATION_KEY) || SITE_DEFAULT_LANGUAGE;
    const nextLanguage = currentLanguage === "es" ? SITE_DEFAULT_LANGUAGE : "es";
    applyLanguagePreference(nextLanguage);
}

window.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem(SITE_TRANSLATION_KEY) || SITE_DEFAULT_LANGUAGE;

    document.querySelectorAll("[data-language-option]").forEach((option) => {
        option.addEventListener("click", () => {
            const selectedLanguage = option.getAttribute("data-language-option") || SITE_DEFAULT_LANGUAGE;
            applyLanguagePreference(selectedLanguage);
        });
    });

    applyLanguagePreference(savedLanguage);
});

