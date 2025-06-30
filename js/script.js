/* ===== DOM Elements ===== */
const navToggle      = document.getElementById('nav-toggle');
const navMenu        = document.getElementById('nav-menu');
const navLinks       = document.querySelectorAll('.nav__link');
const backToTopBtn   = document.getElementById('back-to-top');
const contactForm    = document.getElementById('contact-form');
const header         = document.querySelector('.header');

/* ===== Mobile Navigation Toggle ===== */
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

/* Close mobile menu on link click */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

/* Smooth scroll */
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const offsetTop = section.offsetTop - header.offsetHeight - 20;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    });
});

/* Back-to-top visibility */
window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 300);
});
backToTopBtn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



/* Header shadow */
window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';
});

/* Card reveal */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

/* ===== Project Data ===== */
const projectsData = [
    /* Project 0 – Souls-Like Combat System */
    {
        id: 0,
        title: 'Souls-Like Combat System',
        image: './images/VIDEOS/GifCombatSys.gif',
        videoEmbed: 'https://www.youtube.com/embed/JF77QIymYvE?rel=0',
        tags: ['Unreal Engine 5', 'C++', 'Gameplay Architecture', 'Action RPG'],

        overview:
            'This project was undertaken with two primary objectives: first, to achieve a deep, practical understanding of **C++ in a game development context**, and second, to build a reusable framework that faithfully recreates the combat mechanics of the Souls-like genre. The goal was to engineer a scalable, data-driven foundation in C++ that I can build upon for future game projects.',

        architecture:
            'The architecture is built on a set of cohesive, single-responsibility components for combat, stats, and state management. These systems communicate through event-driven dispatchers and C++ interfaces to remain decoupled and extensible. **Gameplay Tags** are used as the primary driver for state and action logic, replacing hard-coded dependencies with a flexible, data-centric approach that empowers designer iteration.',
        
        contribution:
        'As the sole developer, I was responsible for the complete architecture and C++ implementation. I focused on building robust, object-oriented systems, ensuring the code was modular and that key functionality was exposed to Blueprints for efficient designer workflows.',

        features: [
            '**Equipment Lifecycle:** A full system for weapon pickups, equipping to sockets, and unequipping.',
            '**Combo Attack System:** Implemented chained attacks (light, heavy, sprint, charged) with input buffering windows.',
            '**Gameplay Tag-Driven State Machine:** Manages all character states (e.g., Attacking, Sprinting, Dodging) for deterministic state transitions.',
            '**Responsive Movement:** Includes directional dodging and a stamina-based sprint mechanic with configurable regeneration delays.',
            '**Weapon Hit Detection:** Utilizes per-socket weapon traces for animation-driven impact registration.',
            '**Modular Stats Component:** Governs Health, Armor, and Stamina. Action costs are defined in weapon assets, allowing for unique balancing per item.',
            '**Master-Pose Armor System:** Attaches skeletal armor pieces that seamlessly conform to character animations and modify defensive stats.',
            '**Lock-On Targeting:** An optional soft-lock system to orient the player and camera towards an enemy during combat.',
            '**Extensible Weapon Design:** New weapon types, such as the included dual-wielding variant, can be created by extending base classes.',
            '**Designer-Friendly C++:** Core logic is in C++, with exposed Blueprint hooks for rapid prototyping and iteration by non-programmers.'
        ],


        techStack: [ 'Unreal Engine 5', 'C++', 'Object-Oriented Design (OOD)','State Machine', 'Component-Based Architecture', 'C++ Interfaces & Delegates', 'Data-Driven Design (Gameplay Tags)', 'Git' ],
        
        demoLink: null,
        githubLink: null
    },

    /* Project 1 – ATOM */
    {
        id: 1,
        title: 'Augmenting The On-Scene Medic (ATOM)',
        image: './images/project1-thumbnail.gif',
        videoEmbed: 'https://www.youtube.com/embed/GOw_iAA3yxo?rel=0',
        measurementVideoEmbed: 'https://www.youtube.com/embed/JKZDKgbzU1E?rel=0',
        tags: ['Unity', 'C#', 'HoloLens 2'],
        overview:
            'ATOM is an end to end **Unity** augmented reality decision support suite that tackles the 25 percent pediatric medication error rate in pre hospital care. Built for Microsoft HoloLens 2 with MRTK3, the system walks EMTs through weight estimation, drug selection, barcode verification, syringe priming, and administration. A tablet companion delivers the same logic where AR gear is unavailable, and a desktop utility lets hospital admins curate the medication database and push updates through Firebase.',
        challenge:
            'EMTs treat pediatric patients in only 1 to 3 percent of calls, yet dosing errors exceed 30 percent. Weight must be estimated fast, labels are tiny, and on scene stress raises cognitive load. Existing aids like tapes or charts slow workflow and still miss failure points.',
        solution:
            'ATOM overlays step by step instructions and live checks in the responder’s field of view. 3D animations show how to place measurement points and draw meds with a stopcock, real time barcode scans confirm the vial, and syringe models render the correct volume. A single tap advances each gate so nothing is skipped and every dose is validated.',
        contribution:
            'Led development of the hand-tracked measurement tool and engineered the menu core logic, integrating MRTK3 components to create the complete, functional user flow in Unity/C#.',
        features: [
            'Hand tracked measurement tool converts length to weight group',
            'Interactive MRTK3 menu system with articulated hand buttons',
            'Bluetooth barcode verification with offline fallback',
            '3D animations and audio cues for high error tasks',
            'Tablet twin built with Flutter and camera scanner',
            'Desktop CRUD dashboard with audit logging',
            'Firebase sync plus local SQLite cache for offline use'
        ],
        techStack: [
            'Unity 2022', 'MRTK3', 'C#', 'HoloLens 2 APIs',
            'Flutter', 'Dart', 'Firebase', 'SQLite',
            'REST JWT integration', 'Blender', 'Unity Animator'
        ],
        demoLink: null,
        githubLink: null
    },

    /* Project 2 – Immersive AI Learning Modules */
    {
        id: 2,
        title: 'Immersive AI Learning Modules: A VR Proof-of-Concept',
        image: './images/immersive-ai-ssrai-thumb.png',
        videoEmbed: 'https://www.youtube.com/embed/Lw-gdCBYJhw?rel=0',
        tags: ['Unity', 'C#', 'Virtual Reality', 'AI Education'],
        overview:
            'As part of an eight-month collaboration with Dr. Alvis Fong\'s **WMU CyberTraining** research team, my role was to help visualize complex AI concepts through hands-on VR experiences. I developed five focused **prototypes** for the Meta Quest to serve as a **proof-of-concept**. The goal was to test if VR could make these topics more intuitive and to provide a technical foundation for the team\'s future research.',
        challenge:
            'Abstract AI concepts like genetic algorithms are often difficult to grasp from textbooks alone. The research team needed an interactive way for students to **see these concepts in action**, making them more intuitive. The challenge was to build a tangible proof-of-concept to test this hypothesis without developing a full-scale application.',
        solution:
            'I developed five distinct, game-like VR scenes, each mapping a core AI concept to a direct interaction. For example, instead of just reading about a **genetic algorithm**, students could watch virtual cars evolve and learn to race. To understand **Q-learning**, they could walk through a maze and see its Q-table update in real-time. These simple, interactive modules successfully demonstrated the potential of VR as a teaching tool for these topics.',
        contribution:
            'I was responsible for the end-to-end development of all five Unity prototypes. Attending weekly meetings, I translated pedagogical goals into concrete VR mechanics. This involved writing the core C# scripts, integrating the Meta Quest SDK and ML-Agents, and delivering functional builds that the research team could use for initial testing and demonstration. My work provided the essential groundwork for their ongoing project.',
        features: [
            'Five focused VR prototypes (approx. 5 minutes each)',
            'On-screen visualizers to show AI learning in real-time',
            'Model-swapping for "before vs. after training" insight',
            'Optimized for Quest 2/3'
        ],
        techStack: ['Unity 2022 LTS', 'C#', 'Meta Quest SDK', 'Unity ML-Agents', 'VR Interaction Toolkit', 'Git'],
        demoLink: null,
        githubLink: null
    }
];

/* ===== Modal Elements ===== */
const modal                = document.getElementById('project-modal');
const modalContent         = modal.querySelector('.modal__content');
const modalBackdrop        = modal.querySelector('.modal__backdrop');
const modalClose           = modal.querySelector('.modal__close');
const modalHeader          = modal.querySelector('.modal__header');
const modalImage           = modal.querySelector('.modal__hero-image');
const modalTitle           = modal.querySelector('.modal__title');
const modalTags            = modal.querySelector('.modal__tags');
const modalOverview        = modal.querySelector('.modal__overview');
const modalChallenge       = modal.querySelector('.modal__challenge'); // Will be used for Architecture
const modalSolution        = modal.querySelector('.modal__solution');
const modalFeatures        = modal.querySelector('.modal__features');
const modalTechStack       = modal.querySelector('.modal__tech-stack');
const modalContribution    = modal.querySelector('.modal__contribution-text');
const contributionSection  = document.querySelector('.modal__contribution');
const modalDemoLink        = modal.querySelector('.modal__demo-link');
const modalGithubLink      = modal.querySelector('.modal__github-link');
const prevBtn              = modal.querySelector('.modal__nav--prev');
const nextBtn              = modal.querySelector('.modal__nav--next');
const swapToMeasureBtn     = document.getElementById('swap-to-measure-btn');
const swapToDemoBtn        = document.getElementById('swap-to-demo-btn');

let currentProjectIndex = 0;

const formatText = (text) => {
    if (!text) return '';
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

/* Populate modal */
function populateModal(data) {
    modalTitle.textContent = data.title;
    modalTags.innerHTML = '';
    data.tags.forEach(tag => {
        const chip = document.createElement('span');
        chip.className = 'tag';
        chip.textContent = tag;
        modalTags.appendChild(chip);
    });

    // Handle new project structure vs old
    if (data.architecture) {
        modalOverview.innerHTML = formatText(data.overview);
        modalChallenge.innerHTML = formatText(data.architecture);
        // Show the sections and hide the redundant one
        modalOverview.parentElement.style.display = 'block';
        modalChallenge.parentElement.style.display = 'block';
        modalSolution.parentElement.style.display = 'none';
    } else {
        // Fallback for old project structure
        modalOverview.innerHTML = formatText(data.overview);
        modalChallenge.innerHTML = formatText(data.challenge);
        modalSolution.innerHTML = formatText(data.solution);
        modalOverview.parentElement.style.display = 'block';
        modalChallenge.parentElement.style.display = 'block';
        modalSolution.parentElement.style.display = 'block';
    }

    if (data.contribution) {
        modalContribution.innerHTML = formatText(data.contribution);
        contributionSection.style.display = 'block';
    } else {
        contributionSection.style.display = 'none';
    }

    modalFeatures.innerHTML = '';
    data.features.forEach(f => {
        const li = document.createElement('li');
        li.innerHTML = formatText(f);
        modalFeatures.appendChild(li);
    });

    modalTechStack.innerHTML = '';
    data.techStack.forEach(t => {
        const chip = document.createElement('span');
        chip.className = 'tag';
        chip.textContent = t;
        modalTechStack.appendChild(chip);
    });
    
    if (data.demoLink && data.demoLink !== '#') {
        modalDemoLink.style.display = 'inline-block';
        modalDemoLink.href = data.demoLink;
    } else {
        modalDemoLink.style.display = 'none';
    }

    if (data.githubLink) {
        modalGithubLink.style.display = 'inline-block';
        modalGithubLink.href = data.githubLink;
    } else {
        modalGithubLink.style.display = 'none';
    }

    if (data.measurementVideoEmbed) {
        swapToMeasureBtn.classList.remove('hidden');
        swapToDemoBtn.classList.add('hidden');
    } else {
        swapToMeasureBtn.classList.add('hidden');
        swapToDemoBtn.classList.add('hidden');
    }

    const existingIframe = modalHeader.querySelector('iframe');
    if (data.videoEmbed) {
        modalImage.style.display = 'none';
        if (existingIframe) {
            existingIframe.src = data.videoEmbed;
            existingIframe.style.display = 'block';
        } else {
            const iframe = document.createElement('iframe');
            iframe.src = data.videoEmbed;
            iframe.title = data.title + ' demo';
            iframe.frameBorder = '0';
            iframe.allow =
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            modalHeader.appendChild(iframe);
        }
    } else {
        if (existingIframe) {
            existingIframe.style.display = 'none';
            existingIframe.src = '';
        }
        modalImage.src = data.image;
        modalImage.alt = data.title + ' screenshot';
        modalImage.style.display = 'block';
    }

    prevBtn.disabled = currentProjectIndex === 0;
    nextBtn.disabled = currentProjectIndex === projectsData.length - 1;
}

function openModal(i) {
    currentProjectIndex = i;
    populateModal(projectsData[i]);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__content').scrollTop = 0;
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    const iframe = modal.querySelector('iframe');
    if (iframe) iframe.src = '';
}

document.querySelectorAll('.project-details-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        openModal(parseInt(btn.dataset.project, 10));
    });
});

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

prevBtn.addEventListener('click', () => currentProjectIndex > 0 && openModal(currentProjectIndex - 1));
nextBtn.addEventListener('click', () => currentProjectIndex < projectsData.length - 1 && openModal(currentProjectIndex + 1));

function swapVideo(newSrc) {
    const iframe = modalHeader.querySelector('iframe');
    if (iframe) {
        iframe.src = newSrc;
        modalContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

swapToMeasureBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const project = projectsData[currentProjectIndex];
    if (project.measurementVideoEmbed) {
        swapVideo(project.measurementVideoEmbed);
        swapToMeasureBtn.classList.add('hidden');
        swapToDemoBtn.classList.remove('hidden');
    }
});

swapToDemoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const project = projectsData[currentProjectIndex];
    if (project.videoEmbed) {
        swapVideo(project.videoEmbed);
        swapToDemoBtn.classList.add('hidden');
        swapToMeasureBtn.classList.remove('hidden');
    }
});

document.addEventListener('keydown', e => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft'  && !prevBtn.disabled) { e.preventDefault(); prevBtn.click(); }
    if (e.key === 'ArrowRight' && !nextBtn.disabled) { e.preventDefault(); nextBtn.click(); }
});

let touchStartX = 0;
modal.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX, { passive: true });
modal.addEventListener('touchend', e => {
    if (touchStartX === 0) return;
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (dx >  50 && !prevBtn.disabled) prevBtn.click();
    if (dx < -50 && !nextBtn.disabled) nextBtn.click();
    touchStartX = 0;
});

window.addEventListener('load', () => { document.body.style.opacity = '1'; });
if (window.history.replaceState) window.history.replaceState(null, null, window.location.href);