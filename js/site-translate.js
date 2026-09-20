const SITE_TRANSLATION_KEY = "site-language";
const SITE_SOURCE_LANGUAGE = "es";
const SITE_DEFAULT_LANGUAGE = SITE_SOURCE_LANGUAGE;
const SUPPORTED_LANGUAGES = ["es", "en"];
const TRANSLATABLE_ATTRIBUTES = ["placeholder", "title", "aria-label"];

const TRANSLATIONS = {
    en: {
        "Gessler Studio": "Gessler Studio",
        "Gessler Studio | Sobre nosotros": "Gessler Studio | About us",
        "Gessler Studio | Jordan Piza": "Gessler Studio | Jordan Piza",
        "Gessler Studio | Angie Pachon": "Gessler Studio | Angie Pachon",
        "Gessler Studio | Branding": "Gessler Studio | Branding",
        "Gessler Studio | Diseño web": "Gessler Studio | Web Design",
        "Gessler Studio | Animación y edición de video": "Gessler Studio | Animation and Video Editing",
        "Gessler Studio | Social Media": "Gessler Studio | Social Media",
        "Gessler Studio | Estrategias de comunicación": "Gessler Studio | Communication Strategies",
        "Inicio de Gessler Studio": "Gessler Studio home",
        "Cambiar sitio a inglés": "Switch site to English",
        "Cambiar sitio a español": "Traducir sitio a espanol",
        "Inicio": "Home",
        "Portafolio": "Portfolio",
        "Páginas": "Pages",
        "Acerca de": "About",
        "Sobre nosotros": "About us",
        "Servicios": "Services",
        "Precios": "Pricing",
        "Tienda": "Store",
        "Producto": "Store item",
        "Próximamente": "Coming soon",
        "Blog": "Blog",
        "Lista": "List",
        "Publicación": "Publication",
        "Proyecto": "Project",
        "Carrusel 1": "Slider 1",
        "Carrusel 2": "Slider 2",
        "Tipo 1": "Type 1",
        "Tipo 2": "Type 2",
        "Tipo 3": "Type 3",
        "Tipo 4": "Type 4",
        "Tipo 5": "Type 5",
        "Tipo 6": "Type 6",
        "Tipo 7": "Type 7",
        "Tipo 8": "Type 8",
        "Tipo 9": "Type 9",
        "Tipo 10": "Type 10",
        "Tipo 11": "Type 11",
        "Tipo 12": "Type 12",
        "Tipo 13": "Type 13",
        "Trabajos recientes": "Recent works",
        "Últimas noticias": "Latest news",
        "Contáctanos": "Contact Us",
        "Menú": "Menu",
        "Nuestras páginas": "Our Pages",
        "Nuestros servicios": "Our Services",
        "Nuestro equipo": "Our Team",
        "Proyectos": "Projects",
        "Volver arriba": "Back to top",
        "Ver proyectos": "See Projects",
        "Ver trabajo": "See work",
        "Ver portafolio": "View portfolio",
        "Ver proyecto": "View project",
        "Ver": "View",
        "Continuar": "Continue",
        "Responder": "Reply",
        "ahora": "now",
        "chat en línea": "online chat",
        "Solo di Hola por": "Just say Hello via",
        "Hola somos Angie y Jordan": "Hi. We are Angie and Jordan",
        "años": "years",
        "experiencia": "experience",
        "Proyectos de diseño": "Design projects",
        "en curso": "in queue",
        "Diseño web para": "Website design for",
        "Estamos rediseñando el sitio web y ya estamos en la fase final.": "We are redesigning the website clearing websites and we are already in the final phase",
        "Nuevo diseño para": "Brand new design for",
        "más de 200 sitios web creados con altos estándares de calidad y funciones avanzadas.": "more than 200 websites built with the highest quality standards and advanced features.",
        "Mira algunos de nuestros proyectos de diseño más recientes realizados para nuevos clientes.": "Take a look at our latest design projects done for our newest clients, we have worked countless hours for total satisfaction.",
        "En Gessler Studio cuidamos a cada cliente y a cada persona que hace posibles grandes proyectos con nosotros.": "At Gessler Studio, we care about each client and each person who works with us and makes great projects possible",
        "Somos un dúo creativo enfocado en estrategia, diseño multimedia y soluciones centradas en las personas para marcas en crecimiento.": "We are a creative duo focused on strategy, multimedia design and human-centered solutions for growing brands.",
        "Correo: hola@gesslerstudio.com": "Email: hola@gesslerstudio.com",
        "© 2026 Gessler Studio. Todos los derechos reservados.": "© 2026 Gessler Studio. All rights reserved.",
        "Contacto": "Contact",
        "Admin": "Admin",
        "Hola. Soy Tinny": "Hi. I'm Tinny",
        "Me encanta el diseño visual": "I love visual",
        "diseñadora web": "web designer",
        "Diseñador de interfaz": "User interface designer",
        "Identidad corporativa": "Corporate identity",
        "Diseño gráfico": "Graphic design",
        "Diseño web": "Web Design",
        "Community manager": "Community manager",
        "Ver detalles": "See details",
        "Ponte en contacto": "Get in touch",
        "Enviar mensaje": "Send Message",
        "Suscríbete": "Subscribe",
        "Suscríbete a nuestro boletín": "Sign up to our Newsletter",
        "Cargar más": "Load more",
        "Comprar ahora": "Buy this now",
        "Nuestro trabajo": "Our work",
        "Nuestros trabajos": "Our works",
        "Compartir:": "Share:",
        "hace 3 min": "3 min ago",
        "Lo que sigue es un gran flujo de trabajo remoto desde cualquier lugar.": "What comes next is the great workflow remotely from wherever",
        "Consejos para personalizar la interfaz de tus dispositivos para el uso diario.": "Tips to personalize the interface of your devices for use in everyday life",
        "10 de diciembre de 2023 a las 10:13": "December 10, 2023 at 10:13",
        "Cuéntanos más sobre tu nuevo plan de negocio": "Tell more about your new business plan",
        "Comienza tu próximo": "Start your next",
        "Comienza tu próximo proyecto": "Start your next project",
        "Una visión bien planificada te llevará a tu destino": "A very well planned vision will take you to your destination",
        "Visión estratégica": "Strategic Vision",
        "Agencia pequeña, visión clara": "Small agency, strong vision",
        "Proyectos creativos seleccionados": "Selected creative projects",
        "de": "from",
        "trabajos recientes de portafolio": "recent portfolio work",
        "Flujo de confianza": "Trusted flow",
        "Marcas y espacios con los que podemos construir": "Brands and spaces we can build with",
        "Precisión bajo presión": "Precision under pressure",
        "Branding": "Branding",
        "Diseño": "Design",
        "Multimedia": "Multimedia",
        "Social Media": "Social Media",
        "Dirección creativa": "Creative Direction",
        "Sistemas visuales": "Visual Systems",
        "Estrategia de contenido": "Content Strategy",
        "Pensamiento de campaña": "Campaign Thinking",
        "Presencia digital": "Digital Presence",
        "Dirección de arte": "Art Direction",
        "Ideas en movimiento": "Motion Ideas",
        "Sistemas creativos": "Creative Systems",
        "Identidad visual": "Visual Identity",
        "Narrativa": "Storytelling",
        "Una alianza creativa y estratégica detrás de cada proyecto": "A creative and strategic partnership behind every project",
        "Gessler Studio está formado por dos perfiles complementarios. Jordan lidera el diseño multimedia, la comunicación visual y la ejecución de marca, mientras Angie aporta pensamiento de ingeniería industrial, estructura y claridad de procesos a cada proyecto.": "Gessler Studio is built by two complementary profiles. Jordan leads multimedia design, visual communication and brand execution, while Angie brings industrial engineering thinking, structure and process clarity to each project.",
        "Esta página es el punto de entrada para conocernos mejor. Elige el perfil que quieres explorar y descubre cómo cada uno aporta al estudio.": "This page is the entry point to get to know us better. Choose the profile you want to explore and discover how each of us contributes to the studio.",
        "Elige un perfil": "Choose a profile",
        "Conoce a las personas detrás de Gessler Studio": "Meet the people behind Gessler Studio",
        "Perfil 01": "Profile 01",
        "Perfil 02": "Profile 02",
        "Jordan Piza": "Jordan Piza",
        "Angie Pachon": "Angie Pachon",
        "Diseñador multimedia": "Multimedia Designer",
        "Ingeniera industrial": "Industrial Engineer",
        "Enfocado en branding, diseño digital, narrativa visual y dirección creativa para negocios modernos.": "Focused on branding, digital design, visual storytelling and creative direction for modern businesses.",
        "Aportando análisis estratégico, pensamiento operativo y toma de decisiones organizada a cada servicio que ofrecemos.": "Bringing strategic analysis, operational thinking and organized decision-making to every service we offer.",
        "Ver perfil": "View profile",
        "Creativo": "Creative",
        "Identidad visual y expresión de marca": "Visual identity and brand expression",
        "Creamos visuales memorables, activos digitales y experiencias multimedia que comunican con claridad.": "We shape memorable visuals, digital assets and multimedia experiences that communicate clearly.",
        "Estratégico": "Strategic",
        "Proceso, estructura y apoyo en decisiones": "Process, structure and decision support",
        "Organizamos ideas, definimos prioridades y ayudamos a que los proyectos avancen con más orden y mejor ejecución.": "We organize ideas, define priorities and help projects move with more order and better execution.",
        "En conjunto": "Together",
        "Un estudio equilibrado con dos perspectivas": "A balanced studio with two perspectives",
        "El diseño y el pensamiento de ingeniería se unen para crear soluciones atractivas y funcionales.": "Design and engineering thinking come together to create solutions that are both attractive and functional.",
        "¿Listo para construir tu próximo proyecto con nosotros?": "Ready to build your next project with us?",
        "Dirección creativa, sistemas visuales y ejecución multimedia": "Creative direction, visual systems and multimedia execution",
        "Jordan Piza desarrolla conceptos visuales que conectan estrategia con estética. Su trabajo se centra en crear experiencias de marca a través del diseño, activos digitales, narrativa y una fuerte consistencia visual.": "Jordan Piza develops visual concepts that connect strategy with aesthetics. His work focuses on creating brand experiences through design, digital assets, storytelling and strong visual consistency.",
        "Dentro de Gessler Studio, Jordan lidera el lado creativo de los proyectos, convirtiendo ideas en resultados visuales claros, modernos e intencionales para cada cliente.": "Inside Gessler Studio, Jordan leads the creative side of projects, shaping ideas into clear visual outputs that feel modern, intentional and aligned with each client.",
        "Diseño visual": "Visual Design",
        "Enfoque": "Focus",
        "Identidad de marca y comunicación": "Brand identity and communication",
        "Construyendo lenguajes visuales distintivos, coherentes y listos para crecer en formatos digitales e impresos.": "Building visual languages that feel distinctive, coherent and ready to grow across digital and printed formats.",
        "Enfoque de trabajo": "Approach",
        "Diseño con mensaje y estructura": "Design with message and structure",
        "Cada decisión responde a un concepto, una necesidad del usuario y un sistema visual que apoya la marca en lugar de solo decorarla.": "Every decision responds to a concept, a user need and a visual system that supports the brand instead of decorating it.",
        "Rol en el estudio": "Role in the studio",
        "Líder creativo y ejecución visual": "Creative lead and visual execution",
        "Desde moodboards hasta piezas finales, Jordan transforma la dirección en materiales multimedia listos para lanzar.": "From moodboards to final assets, Jordan transforms direction into polished multimedia pieces ready to launch.",
        "Cómo aporta Jordan": "How Jordan adds value",
        "Su fortaleza está en convertir ideas abstractas en sistemas visuales que los clientes realmente pueden usar. Ya sea una presentación, una pieza de campaña, un concepto para redes o una dirección de identidad más amplia, el trabajo siempre busca claridad e impacto.": "His strength is turning abstract ideas into visual systems that clients can actually use. Whether it is a presentation, a campaign asset, a social media concept or a broader identity direction, the work is always oriented toward clarity and impact.",
        "Jordan aporta una mirada multimedia al estudio, ayudando a que cada proyecto se sienta dinámico, coherente y expresivo en los canales donde las marcas deben verse.": "Jordan brings a multimedia mindset to the studio, helping each project feel dynamic, cohesive and expressive across the channels where brands need to be seen.",
        "Nota de perfil": "Profile note",
        "Ideal para branding, campañas visuales, diseño de presentaciones, sistemas de contenido y dirección creativa para pequeños negocios.": "Best fit for branding, visual campaigns, presentation design, content systems and creative guidance for small businesses.",
        "¿Quieres trabajar con Jordan en tu próximo proyecto visual?": "Want to work with Jordan on your next visual project?",
        "Estructura, análisis y pensamiento organizado para cada servicio": "Structure, analysis and organized thinking for every service",
        "Angie Pachon aporta el lado estratégico y operativo de Gessler Studio. Su formación en ingeniería industrial ayuda a transformar ideas en flujos de trabajo más claros, mejores decisiones y una dirección de proyecto más sólida.": "Angie Pachon contributes the strategic and operational side of Gessler Studio. Her industrial engineering background helps transform ideas into clearer workflows, stronger decision-making and more grounded project direction.",
        "Ella fortalece el estudio integrando lógica, planeación y resolución de problemas al proceso creativo, haciendo que cada servicio sea más sostenible y ordenado de principio a fin.": "She supports the studio by bringing logic, planning and problem-solving into the creative process, helping each service feel more sustainable and better organized from start to finish.",
        "Estrategia": "Strategy",
        "Procesos": "Processes",
        "Análisis": "Analysis",
        "Optimización": "Optimization",
        "Sistemas, orden y apoyo estratégico": "Systems, order and strategic support",
        "Ayudando a que las ideas pasen del concepto a la ejecución con más claridad, pasos medibles y pensamiento práctico.": "Helping ideas move from concept to execution with more clarity, measurable steps and practical thinking.",
        "Hacer cada proyecto más fácil de gestionar": "Make each project easier to manage",
        "Angie organiza procesos, identifica prioridades y apoya decisiones para que el estudio trabaje con mayor consistencia.": "Angie organizes processes, identifies priorities and supports decisions so the studio can work with greater consistency.",
        "Perspectiva operativa y estratégica": "Operational and strategic perspective",
        "Ayuda a alinear ideas con viabilidad, estructura y desarrollo sostenible tanto para clientes como para los flujos internos.": "She helps align ideas with feasibility, structure and sustainable project development for clients and internal workflows.",
        "Cómo aporta Angie": "How Angie adds value",
        "Angie fortalece el estudio desde una perspectiva de sistemas. Ayuda a identificar qué es necesario, qué es eficiente y cómo mover las ideas dentro de un proceso que apoye mejores resultados y una ejecución más segura.": "Angie strengthens the studio from a systems perspective. She helps identify what is necessary, what is efficient and how to move ideas through a process that supports better outcomes and more confident execution.",
        "Su presencia permite que Gessler Studio combine intuición creativa con organización, haciendo la agencia más sólida, pensada y confiable en cada colaboración.": "Her presence allows Gessler Studio to combine creative intuition with organization, making the agency more solid, thoughtful and reliable for every collaboration.",
        "Ideal para planeación estratégica, organización de procesos, apoyo a proyectos y estructuras de servicio que necesitan más claridad y eficiencia.": "Best fit for strategic planning, process organization, project support and service structures that need more clarity and efficiency.",
        "¿Necesitas un enfoque más estratégico y estructurado para tu proyecto?": "Need a more strategic and structured approach for your project?",
        "5 servicios clave": "5 core services",
        "Servicios creativos y estratégicos diseñados para impulsar tu marca.": "Creative and strategic services designed to move your brand forward.",
        "Cada servicio puede funcionar por separado o como parte de un proceso más amplio. Diseñamos esta estructura para que los clientes entiendan con claridad qué hacemos, qué reciben y dónde encaja cada solución.": "Each service can work on its own or as part of a larger process. We built this structure so clients can clearly understand what we do, what they receive and where each solution fits.",
        "Elige un servicio para explorar sus detalles, entregables y el tipo de proyectos donde genera más valor.": "Choose a service to explore the details, deliverables and the kind of projects where it creates the most value.",
        "Animación y edición de video": "Animation and Video Editing",
        "Estrategias de comunicación": "Communication Strategies",
        "Sistemas de identidad, voz de marca y dirección visual para negocios que necesitan una presencia más clara y una primera impresión más fuerte.": "Identity systems, brand voice and visual direction for businesses that need a clearer presence and a stronger first impression.",
        "Landing pages y sitios web con un mensaje claro, una composición intencional y una experiencia digital alineada con tu marca.": "Landing pages and websites with a clear message, intentional layout and a digital experience aligned with your brand.",
        "Piezas en movimiento y contenido de video editado que vuelven la comunicación más dinámica, memorable y lista para plataformas.": "Visual motion pieces and edited video content that make communication more dynamic, memorable and platform-ready.",
        "Sistemas de contenido y piezas para redes que ayudan a las marcas a mantenerse consistentes, visibles y mejor organizadas en distintas plataformas.": "Content systems and social assets that help brands stay consistent, visible and better organized across platforms.",
        "Dirección estratégica para definir qué debe decir una marca, cómo debe decirlo y cómo alinear la comunicación con los objetivos del negocio.": "Strategic direction to define what a brand should say, how it should say it and how to align communication with business goals.",
        "Dirección de identidad": "Identity direction",
        "Sistemas de logo": "Logo systems",
        "Guías de marca": "Brand guidelines",
        "Estructura UI": "UI structure",
        "Diseño responsive": "Responsive design",
        "Enfoque en conversión": "Conversion focus",
        "Motion graphics": "Motion graphics",
        "Reels y promos": "Reels and promos",
        "Edición de video": "Video editing",
        "Pilares de contenido": "Content pillars",
        "Diseño de posts": "Post design",
        "Piezas de campaña": "Campaign assets",
        "Estructura de mensajes": "Messaging structure",
        "Claridad estratégica": "Strategic clarity",
        "Explorar servicio": "Explore service",
        "Cómo trabajamos": "How we work",
        "Un proceso simple pensado para dar claridad.": "A simple process built for clarity.",
        "Mantenemos cada servicio anclado en estrategia, coherencia visual y ejecución práctica para que el trabajo no solo sea atractivo, sino útil para el negocio detrás.": "We keep each service grounded in strategy, visual coherence and practical execution so the work is not only attractive, but useful for the business behind it.",
        "Escuchar": "Listen",
        "Entendemos el contexto, los objetivos y los retos actuales antes de proponer una dirección.": "We understand the context, goals and current challenges before proposing any direction.",
        "Definir": "Define",
        "Definimos el alcance correcto, las prioridades y la ruta creativa para el servicio específico que necesitas.": "We shape the right scope, priorities and creative route for the specific service you need.",
        "Construir": "Build",
        "Convertimos la dirección en piezas visuales, sistemas o contenido que pueden pasar al mundo real.": "We turn the direction into visual pieces, systems or content that can move into the real world.",
        "Entregar": "Deliver",
        "Entregamos piezas, sistemas o recomendaciones listas para usarse con confianza.": "We deliver assets, systems or recommendations that are ready to be used with confidence.",
        "Fundamento de marca": "Brand foundation",
        "Construimos identidades de marca que se sienten coherentes en cada punto de contacto.": "We build brand identities that feel coherent across every touchpoint.",
        "Este servicio está pensado para negocios que necesitan más que un logo. Definimos el lenguaje visual, la estructura y la dirección que ayudan a que una marca se vea consistente, profesional y más fácil de reconocer.": "This service is designed for businesses that need more than a logo. We define the visual language, structure and direction that help a brand appear consistent, professional and easier to recognize.",
        "El branding puede incluir identidades nuevas, ajustes de sistemas existentes o una guía más clara sobre cómo debe comportarse la marca en materiales digitales e impresos.": "Branding can include new identities, refinements of existing systems or clearer guidance for how the brand should behave across digital and printed materials.",
        "Ideal para": "Best fit for",
        "Nuevos negocios": "New businesses",
        "Rebrands": "Rebrands",
        "Estudios en crecimiento": "Growing studios",
        "Marcas que necesitan consistencia": "Brands that need consistency",
        "Una ruta visual que define cómo debe verse y sentirse la marca.": "A visual route that defines how the brand should look and feel.",
        "Activos base": "Core assets",
        "Aplicaciones de logo, paleta, tipografía y elementos gráficos de apoyo.": "Logo applications, palette, typography and supporting graphic elements.",
        "Guías": "Guidelines",
        "Un sistema práctico para mantener la marca usable y consistente con el tiempo.": "A practical system to keep the brand usable and consistent over time.",
        "Qué puede incluirse": "What can be included",
        "¿Necesitas una identidad más fuerte para tu negocio?": "Need a stronger identity for your business?",
        "Podemos construir un proceso de branding que le dé a tu estudio o empresa un sistema visual más claro.": "We can shape a branding process that gives your studio or company a clearer visual system.",
        "Empezar este servicio": "Start this service",
        "Diseñamos sitios web que se ven intencionales y comunican rápido.": "We design websites that look intentional and communicate fast.",
        "¿Necesitas un sitio que se sienta más claro e intencional?": "Need a site that feels clearer and more intentional?",
        "Contenido en movimiento": "Motion content",
        "Convertimos ideas estáticas en piezas que se mueven con intención.": "We turn static ideas into pieces that move with intention.",
        "¿Necesitas contenido en video que se sienta más vivo?": "Need video content that feels more alive?",
        "Sistemas de contenido": "Content systems",
        "Ayudamos a las marcas a mostrarse con más orden, consistencia y claridad creativa.": "We help brands show up with more order, consistency and creative clarity.",
        "¿Necesitas que tu social media se sienta más coherente?": "Need your social media to feel more coherent?",
        "Dirección estratégica": "Strategic direction",
        "Ayudamos a las marcas a comunicar con más propósito y menos ruido.": "We help brands communicate with more purpose and less noise.",
        "¿Necesitas una ruta de comunicación más clara para tu marca?": "Need a clearer communication route for your brand?",
        "Términos y Condiciones": "Terms & Conditions",
        "PDF Términos y Condiciones": "Terms and Conditions PDF",
        "Cuéntanos sobre tu proyecto.": "Tell us about your project.",
        "Gessler Studio | Contacto": "Gessler Studio | Contact",
        "Descargar Términos y Condiciones": "Download our Terms & Conditions",
        "Documento legal": "Legal document",
        "Nombre": "Name",
        "Correo electrónico": "Email",
        "Tu mensaje": "Your message",
        "Sobre la agencia": "About the agency",
        "Un dúo creativo construyendo marcas, visuales y comunicación con intención.": "A creative duo building brands, visuals and communication with intention.",
        "Gessler Studio es el espacio colaborativo detrás de Jordan Piza y Angie Pachon. Combinamos diseño multimedia, dirección visual y pensamiento estratégico para crear trabajo que se sienta expresivo y bien estructurado.": "Gessler Studio is the collaborative space behind Jordan Piza and Angie Pachon. We combine multimedia design, visual direction and strategic thinking to create work that feels both expressive and well structured.",
        "Esta sección está pensada para presentar a las personas detrás de la agencia. A la derecha, luego puedes reemplazar estas imágenes por sus propios retratos y momentos de estudio.": "This section is designed to introduce the people behind the agency. On the right, you can later replace these images with your own portraits and studio moments.",
        "Video de presentación": "Presentation video",
        "Un espacio para presentar a Jordan con su propia voz": "A space to introduce Jordan in his own voice",
        "Este bloque está listo para un video corto de presentación donde Jordan puede hablar de su enfoque creativo, el tipo de proyectos que disfruta y cómo trabaja con clientes.": "This block is ready for a short presentation video where Jordan can talk about his creative approach, the kind of projects he enjoys and how he works with clients.",
        "Cuando tengas el video final, podemos reemplazar este placeholder por YouTube, Vimeo o un archivo de video local.": "When you have the final video, we can replace this placeholder with YouTube, Vimeo or a local video file.",
        "Video de presentación de Jordan": "Jordan presentation video",
        "Un espacio para presentar a Angie con claridad y contexto": "A space to introduce Angie with clarity and context",
        "Esta sección está lista para un video de presentación donde Angie puede explicar su perspectiva estratégica, cómo organiza procesos y el valor que aporta a cada proyecto.": "This section is ready for a presentation video where Angie can explain her strategic perspective, how she organizes processes and the value she brings to each project.",
        "Más adelante podemos reemplazar este placeholder por YouTube, Vimeo o un archivo de video alojado sin cambiar la estructura de la página.": "Later we can replace this placeholder with YouTube, Vimeo or a hosted video file without changing the page structure.",
        "Video de presentación de Angie": "Angie presentation video",
        "Mi CV": "My CV",
        "CV PDF de Jordan": "Jordan CV PDF",
        "CV PDF de Angie": "Angie CV PDF",
        "CV de Jordan Piza": "CV Jordan Piza",
        "CV de Angie Pachon": "CV Angie Pachon",
        "Teléfono: 319-349-0741": "Phone: 319-349-0741",
        "Correo: Felipe12.florez14@gmail.com": "Email: Felipe12.florez14@gmail.com",
        "Teléfono: +57 304 347 2299": "Phone: +57 304 347 2299",
        "Correo: Carolina4pachon@gmail.com": "Email: Carolina4pachon@gmail.com",
        "Herramientas de diseño y desarrollo de Jordan": "Jordan design and development tools",
        "WhatsApp de Jordan": "Jordan WhatsApp",
        "Behance de Jordan": "Jordan Behance",
        "Instagram de Jordan": "Jordan Instagram",
        "Herramientas y competencias de Angie": "Angie tools and competencies",
        "WhatsApp de Angie": "Angie WhatsApp",
        "Correo de Angie": "Angie Email",
        "Instagram de Angie": "Angie Instagram",
        "Control de procesos": "Process Control",
        "Validación de datos": "Data Validation",
        "Auditoría": "Audit",
        "Cumplimiento": "Compliance",
        "Detección de riesgos": "Risk Detection",
        "Concepto visual y dirección de mood": "Visual concept and mood direction",
        "Sistema de logo y variaciones": "Logo system and variations",
        "Selección de paleta de color y tipografía": "Color palette and typography selection",
        "Aplicaciones de marca para formatos digitales": "Brand applications for digital formats",
        "Mini guía o documento de uso": "Mini guideline or usage document",
        "Este servicio se enfoca en sitios web, landing pages y diseños digitales que organizan mejor la información y hacen que las marcas se vean más profesionales en línea.": "This service is focused on websites, landing pages and digital layouts that organize information better and make brands feel more professional online.",
        "Trabajamos la jerarquía visual, el flujo de secciones, el diseño responsive y la claridad general de la experiencia para que el sitio respalde tu negocio y no solo la estética.": "We work on visual hierarchy, section flow, responsive design and the overall clarity of the experience so the site supports your business and not just the aesthetics.",
        "Landing pages": "Landing pages",
        "Sitios de portafolio": "Portfolio sites",
        "Sitios de servicios": "Service websites",
        "Renovaciones de marca": "Brand refreshes",
        "Estructura": "Structure",
        "Organizamos la página en torno a lo que los usuarios necesitan entender primero.": "We organize the page around what users need to understand first.",
        "Creamos una apariencia que coincide con el tono y la identidad de la marca.": "We shape a look that matches the tone and identity of the brand.",
        "Refinamiento": "Refinement",
        "Ajustamos espaciados, secciones y detalles para que la experiencia se sienta pulida.": "We adjust spacing, sections and details so the experience feels polished.",
        "Diseño de landing page": "Landing page design",
        "Estructura de página de servicio": "Service page structure",
        "Sistema visual responsive": "Responsive visual system",
        "Planeación de CTA y jerarquía": "CTA and hierarchy planning",
        "Piezas visuales para el lanzamiento": "Visual assets for launch",
        "Podemos construir una ruta de diseño web que mejore cómo se presenta tu marca en línea.": "We can build a web design route that improves how your brand is presented online.",
        "Este servicio combina pensamiento de animación y estructura de edición para producir contenido más dinámico, más atractivo de ver y mejor adaptado a las plataformas digitales actuales.": "This service combines animation thinking and editing structure to produce content that feels more dynamic, more watchable and better adapted to current digital platforms.",
        "Puede incluir ediciones promocionales, gráficos animados, contenido de formato corto y ajustes de ritmo visual que ayudan a que el mensaje llegue más rápido.": "It can include promotional edits, animated graphics, short-form content and visual pacing adjustments that help the message land faster.",
        "Reels y shorts": "Reels and shorts",
        "Videos de campaña": "Campaign videos",
        "Contenido explicativo": "Explainer content",
        "Piezas de motion": "Motion assets",
        "Concepto": "Concept",
        "Definimos tono, ritmo e intención visual antes de comenzar la edición.": "We define tone, pacing and visual intention before editing starts.",
        "Editar": "Edit",
        "Damos forma al flujo narrativo, el ritmo, los cortes y la jerarquía del contenido.": "We shape the narrative flow, rhythm, cuts and content hierarchy.",
        "Potenciar": "Enhance",
        "Agregamos detalles de motion, soporte gráfico y versiones listas para exportar.": "We add motion details, graphic support and export-ready versions.",
        "Edición de video de formato corto": "Short-form video editing",
        "Soporte de motion graphics": "Motion graphics support",
        "Títulos y transiciones animadas": "Animated titles and transitions",
        "Ediciones promocionales o de campaña": "Promo or campaign edits",
        "Exportaciones listas para plataformas": "Platform-ready exports",
        "Podemos ayudarte a construir piezas en movimiento más limpias, sólidas y listas para plataformas.": "We can help you build motion pieces that look cleaner, stronger and more platform-ready.",
        "El social media necesita más que publicaciones aisladas. Este servicio se enfoca en construir consistencia visual, dirección de contenido y piezas prácticas que ayudan a una marca a comunicarse mejor con el tiempo.": "Social media needs more than isolated posts. This service focuses on building visual consistency, content direction and practical assets that help a brand communicate better over time.",
        "Puede apoyar lanzamientos, sistemas de contenido continuos o contenido de campaña donde la necesidad principal es coherencia y estructura.": "It can support launches, ongoing content systems or campaign-based content where the main need is coherence and structure.",
        "Planeación de contenido": "Content planning",
        "Piezas visuales de campaña": "Campaign visuals",
        "Sistemas de posts": "Post systems",
        "Consistencia del feed": "Feed consistency",
        "Organizar": "Organize",
        "Definimos categorías, formatos y una estructura más clara para la comunicación.": "We define categories, formats and a cleaner structure for communication.",
        "Creamos las piezas visuales que mantienen el sistema reconocible.": "We create the visual pieces that keep the system recognizable.",
        "Preparamos piezas que pueden usarse directamente o adaptarse internamente.": "We prepare assets that can be used directly or adapted internally.",
        "Pilares y temas de contenido": "Content pillars and themes",
        "Sistema de diseño de posts e historias": "Post and story design system",
        "Materiales de apoyo para lanzamiento": "Launch support materials",
        "Plantillas para comunicación continua": "Templates for ongoing communication",
        "Podemos construir un sistema de contenido más claro que le dé a tu marca más consistencia en línea.": "We can build a cleaner content system that gives your brand more consistency online.",
        "Cuando la comunicación se siente poco clara, inconsistente o desconectada del negocio, este servicio ayuda a definir la estructura estratégica detrás del mensaje.": "When communication feels unclear, inconsistent or disconnected from the business, this service helps define the strategic structure behind the message.",
        "Nos enfocamos en la claridad narrativa, las prioridades de comunicación y los marcos que pueden apoyar campañas, lanzamientos o decisiones de marca más amplias.": "We focus on narrative clarity, communication priorities and frameworks that can support campaigns, launches or broader brand decisions.",
        "Planeación de lanzamiento": "Launch planning",
        "Mensaje de marca": "Brand messaging",
        "Estructura de campaña": "Campaign structure",
        "Equipos que necesitan claridad": "Teams needing clarity",
        "Diagnosticar": "Diagnose",
        "Identificamos qué necesita comunicar la marca con mayor claridad.": "We identify what the brand needs to communicate more clearly.",
        "Priorizar": "Prioritize",
        "Definimos mensajes clave, audiencias y rutas de comunicación.": "We define key messages, audiences and communication routes.",
        "Alinear": "Align",
        "Conectamos la comunicación con la dirección más amplia del proyecto.": "We connect communication with the broader direction of the project.",
        "Marco de mensaje": "Message framework",
        "Definición de audiencia y tono": "Audience and tone definition",
        "Apoyo de concepto de campaña": "Campaign concept support",
        "Prioridades de comunicación": "Communication priorities",
        "Recomendaciones estratégicas": "Strategic recommendations",
        "Podemos construir una estrategia que ayude a que tu mensaje sea más consistente y útil.": "We can shape a strategy that helps your message become more consistent and useful.",
        "Legal": "Legal",
        "Este documento rige la relación entre Gessler Studio y sus clientes. Aplica a todos los servicios de diseño, desarrollo web, fotografía, video y producción digital que ofrece el estudio.": "This document governs the relationship between Gessler Studio and its clients. It applies to all design, web development, photography, video and digital production services offered by the studio.",
        "Descargar PDF": "Download PDF",
        "Tu navegador no puede mostrar el PDF integrado.": "Your browser cannot display the PDF inline.",
        "Gessler Studio — Términos y Condiciones": "Gessler Studio — Términos y Condiciones",
        "PDF de Términos y Condiciones de Gessler Studio": "Gessler Studio Terms and Conditions PDF",
        "Video de introducción de Gessler Studio": "Gessler Studio intro video",
        "Secuencia animada del logo de Gessler Studio": "Gessler Studio logo reveal motion sequence",
        "Chatear por WhatsApp": "Chat on WhatsApp",
        "Teléfono: +57 319 349 0741": "Phone: +57 319 349 0741",
        "Dirección: Calle 80A Sur #5-18, Bogotá, Colombia": "Address: Calle 80A Sur #5-18, Bogotá, Colombia",

        "Diseño y Desarrollo Web en Bogotá | Gessler Studio": "Web Design and Development in Bogotá | Gessler Studio",
        "Diseño y desarrollo web": "Web design and development",
        "Diseño y desarrollo de páginas web en Bogotá": "Web design and development in Bogotá",
        "Construimos sitios web, landing pages y catálogos online pensados para empresas y negocios en Bogotá y el resto de Colombia: un diseño claro, una estructura que comunica rápido y una base técnica lista para crecer.": "We build websites, landing pages and online catalogs for companies and businesses in Bogotá and across Colombia: a clear design, a structure that communicates fast and a technical foundation ready to grow.",
        "Cuéntanos sobre tu proyecto": "Tell us about your project",
        "Este servicio se enfoca en sitios web, landing pages y catálogos digitales que organizan mejor la información y hacen que las marcas se vean más profesionales en línea. Trabajamos el diseño UX/UI, el desarrollo frontend, la integración con WhatsApp y formularios de contacto, y una base de SEO técnico básico (títulos, metadatos y estructura semántica) desde el primer entregable.": "This service focuses on websites, landing pages and digital catalogs that organize information better and make brands look more professional online. We work on UX/UI design, frontend development, WhatsApp and contact form integration, and a basic SEO foundation (titles, metadata and semantic structure) from the first deliverable.",
        "Qué incluye": "What's included",
        "Sitios corporativos": "Corporate websites",
        "Catálogos y tiendas online": "Online catalogs and stores",
        "WhatsApp y formularios": "WhatsApp and forms",
        "SEO básico": "Basic SEO",
        "Para quién": "Who it's for",
        "Un servicio pensado para empresas y negocios que necesitan presencia digital real.": "A service built for companies and businesses that need a real digital presence.",
        "Trabajamos con empresas, negocios, marcas, emprendimientos, profesionales independientes y organizaciones que necesitan un sitio web que respalde lo que hacen, no solo una vitrina genérica.": "We work with companies, businesses, brands, startups, independent professionals and organizations that need a website to back up what they do, not just a generic showcase.",
        "Un proceso claro, de principio a fin.": "A clear process, from start to finish.",
        "Sitios web que hemos diseñado y desarrollado.": "Websites we've designed and developed.",
        "Sitio web de Beyond SAS diseñado por Gessler Studio": "Beyond SAS website designed by Gessler Studio",
        "Catálogo online de WAC SAS diseñado por Gessler Studio": "WAC SAS online catalog designed by Gessler Studio",
        "Podemos construir una ruta de diseño web que mejore cómo se presenta tu marca en línea, desde la estructura hasta el desarrollo.": "We can build a web design route that improves how your brand is presented online, from structure to development.",
        "Solicitar una cotización": "Request a quote",

        "Gessler Studio | Agencia de Diseño y Desarrollo Web en Bogotá": "Gessler Studio | Web Design and Development Agency in Bogotá",
        "Sobre Gessler Studio | Agencia de Diseño y Desarrollo Web en Bogotá": "About Gessler Studio | Web Design and Development Agency in Bogotá",
        "Contacto | Gessler Studio — Diseño y Desarrollo Web en Bogotá": "Contact | Gessler Studio — Web Design and Development in Bogotá",
        "Servicios de Diseño, Desarrollo Web y Branding | Gessler Studio": "Design, Web Development and Branding Services | Gessler Studio",
        "Branding y Diseño de Identidad de Marca | Gessler Studio": "Branding and Brand Identity Design | Gessler Studio",
        "Animación y Edición de Video | Gessler Studio": "Animation and Video Editing | Gessler Studio",
        "Diseño para Redes Sociales y Social Media | Gessler Studio": "Social Media Design | Gessler Studio",
        "Estrategia de Comunicación de Marca | Gessler Studio": "Brand Communication Strategy | Gessler Studio",
        "Caso de Estudio: Beyond SAS | Gessler Studio": "Case Study: Beyond SAS | Gessler Studio",
        "Caso de Estudio: WAC SAS | Gessler Studio": "Case Study: WAC SAS | Gessler Studio",
        "Jordan Piza | Diseñador Multimedia — Gessler Studio": "Jordan Piza | Multimedia Designer — Gessler Studio",
        "Angie Pachon | Ingeniera Industrial — Gessler Studio": "Angie Pachon | Industrial Engineer — Gessler Studio",
        "Portafolio de Diseño y Desarrollo Web | Gessler Studio": "Web Design and Development Portfolio | Gessler Studio",
        "Términos y Condiciones | Gessler Studio": "Terms & Conditions | Gessler Studio",
        "Proyectos de diseño y desarrollo web.": "Web design and development projects."
    }
};

function normalizeText(value) {
    return value.replace(/\s+/g, " ").trim();
}

function getTranslation(value, language) {
    if (language === SITE_SOURCE_LANGUAGE) {
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

function isNoTranslate(element) {
    let el = element;
    while (el && el !== document.body) {
        if (el.getAttribute('translate') === 'no' || el.hasAttribute('data-no-translate')) {
            return true;
        }
        el = el.parentElement;
    }
    return false;
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

            if (isNoTranslate(node.parentElement)) {
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

function translateDataAttributes(language) {
    document.querySelectorAll('[data-en]').forEach((el) => {
        if (el.dataset.es === undefined) {
            el.dataset.es = el.textContent.trim();
        }
        el.textContent = language === 'en' ? el.dataset.en : el.dataset.es;
    });
}

function applyLanguagePreference(language) {
    const normalizedLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : SITE_DEFAULT_LANGUAGE;

    localStorage.setItem(SITE_TRANSLATION_KEY, normalizedLanguage);
    document.documentElement.lang = normalizedLanguage;

    translateDocumentTitle(normalizedLanguage);
    translateTextNodes(normalizedLanguage);
    translateAttributes(normalizedLanguage);
    translateDataAttributes(normalizedLanguage);
    updateLanguageButton(normalizedLanguage);

    if (typeof window.initializeTypingHero === "function") {
        window.initializeTypingHero();
    }
    if (typeof window.initializeWhatsappButton === "function") {
        window.initializeWhatsappButton();
    }
    if (typeof window.initializeMenuLetterHover === "function") {
        window.initializeMenuLetterHover();
    }
    if (typeof window.initializeThemeSwitcher === "function") {
        window.initializeThemeSwitcher();
    }
    if (typeof window.initializeFooterContactButtons === "function") {
        window.initializeFooterContactButtons();
    }
    if (typeof window.refreshFooterLegalLabel === "function") {
        window.refreshFooterLegalLabel();
    }

    document.querySelectorAll('[data-lang-bc]').forEach(function(el) {
        el.style.display = el.getAttribute('data-lang-bc') === normalizedLanguage ? '' : 'none';
    });
}

function toggleSiteLanguage() {
    const currentLanguage = localStorage.getItem(SITE_TRANSLATION_KEY) || SITE_DEFAULT_LANGUAGE;
    const nextLanguage = currentLanguage === "es" ? "en" : "es";
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
