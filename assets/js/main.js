// Typing effect

const roles = ["UX Researcher ", "Interaction Designer ", "AI-Data Enthusiast "];
let i = 0;
let j = 0;
let currentRole = '';
let isDeleting = false;
const typingSpeed = 200;
const deletingSpeed = 100;
const pauseBetweenRoles = 1000;

function type() {
  const target = document.querySelector(".typed");
  if (!target) return;

  if (isDeleting) {
    currentRole = roles[i].substring(0, j--);
  } else {
    currentRole = roles[i].substring(0, j++);
  }

  target.innerHTML = currentRole;

  if (!isDeleting && j === roles[i].length) {
    isDeleting = true;
    setTimeout(type, pauseBetweenRoles);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Navbar toggle for mobile
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const mobileMenu = document.getElementById("mobile-menu");

  // Smooth scroll + section show
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Hide all sections
        sections.forEach(sec => {
          sec.classList.remove("section-show");
        });

        // Show target section
        targetSection.classList.add("section-show");

        // ✅ Scroll the new section to top after it's visible
        requestAnimationFrame(() => {
          targetSection.scrollTop = 0;
        });

        // Close mobile menu if needed
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }

        // Update active link
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  // Update active link on scroll
  window.addEventListener("scroll", () => {
    let currentId = "";

    sections.forEach(section => {
      const top = section.offsetTop - 80; // offset for nav height
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const sections = document.querySelectorAll('section');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Mobile menu toggle
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scroll + section show + close mobile menu + update active
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Hide all sections (if you're using section-show logic)
        sections.forEach(sec => sec.classList.remove("section-show"));
        targetSection.classList.add("section-show");

        // Smooth scroll
        window.scrollTo({
          top: targetSection.offsetTop - 80,  // Adjust offset for your navbar height
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }

        // Update active link
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  // Update active link + nav shadow on scroll
  window.addEventListener("scroll", function () {
    let currentId = "";

    sections.forEach(section => {
      const top = section.offsetTop - 100; // adjust for nav height
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });

    // Nav shadow
    if (window.scrollY > 10) {
      nav.classList.add("shadow-lg");
    } else {
      nav.classList.remove("shadow-lg");
    }
  });
});

// Skill Details Modal Functions
function showSkillDetails(type) {
  const modal = document.getElementById('skillModal');
  const title = document.getElementById('modalTitle');
  const content = document.getElementById('modalContent');

  // Set title and content based on skill type
  switch (type) {
    case 'technical':
      title.textContent = 'Technical Skills Details';
      content.innerHTML = `
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-blue-500">Languages & Frameworks</h4>
                            <p>Python, JavaScript, CSS, PHP, Swift, C#, SQL</p>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-blue-500">Frameworks & Tools</h4>
                            <p>Apache, Spring MVC, Firebase</p>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-blue-500">Development</h4>
                            <p>Web Development, Android Development, iOS Development, Google App Engine, Unity (C#), A-Frame</p>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-blue-500">Database Design & Security</h4>
                            <p>SQL, Database Modeling, Backend Integration</p>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-2 text-blue-500">Smart City Applications</h4>
                            <p>Digital Twin Integration, Smart City research projects</p>
                        </div>
                    `;
      break;

    case 'design':
      title.textContent = 'Design & Development Details';
      content.innerHTML = `
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-purple-500">UX & Interaction Design</h4>
                            <p>UX Design, Interaction Design, Customer Experience Design</p>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-purple-500">Smart City & Digital Twin</h4>
                            <p>Digital Twin Systems, Smart City Solutions</p>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-purple-500">Game & Interactive Design</h4>
                            <p>Serious Game Design, VR/AR Game Development, WebVR</p>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-2 text-purple-500">Sustainable Urban Development</h4>
                            <p>Urban Design, Sustainable Design, Speculative Design</p>
                        </div>
                    `;
      break;

    case 'research':
      title.textContent = 'Research & Analytical Skills';
      content.innerHTML = `
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-green-500">Data Science & Analysis</h4>
                            <p>Data Analysis, NLP Applications, Machine Learning</p>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-green-500">Statistical & Research Tools</h4>
                            <p>SPSS, WEKA, Bibliometric Analysis (VOSViewer), AHP, SWOT, Kano, VGA</p>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-green-500">Quantitative & Qualitative Research</h4>
                            <p>UX Research, Spatial Reasoning Studies, Evaluation Methods</p>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-green-500">AI Integration for Design & Prototyping</h4>
                            <p>Integration of AI tools (e.g., ChatGPT, Gemini, Claude) for creative ideation, code generation, and design automation</p>
                        </div>
                    `;
      break;

    case 'creative':
      title.textContent = 'Creative Tools & Management';
      content.innerHTML = `
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-2 text-yellow-500">Creative Tools</h4>
                            <p>Autodesk 3ds Max (Urban Simulations), TouchDesigner (Interactive Visuals), Ableton Live (Sound Design & Installations), Gravity Sketch (VR Spatial Design)</p>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-2 text-yellow-500">Soft Skills & Management</h4>
                            <p>Project Management (Research Leadership, Delivery), Team Leadership (Cross-functional teams, Community Engagement), Customer Experience (Installations, Services), Event Planning (Community, Engagement Events), Technical Troubleshooting (Hardware/Software Diagnostics)</p>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-2 text-yellow-500">Generative Design & AI Tools</h4>
                            <p>ComfyUI (Workflow-based image generation), Stable Diffusion / ControlNet, Hunyuan 3D-2 (text-to-3D modeling for concept prototyping), Runway ML, Adobe Firefly, OpenAI GPTs for text/logic design assistance</p>
                        </div>
                    `;
      break;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function hideSkillDetails() {
  const modal = document.getElementById('skillModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      id: 1,
      title: "Smart City Interactivity with Thick Data & Digital Twin",
      shortDesc: "Doctoral research on enhancing smart city systems with data integration.",
      description: "Doctoral dissertation exploring how thick data and digital twin technologies can improve earthquake preparedness and urban resilience. Includes network visualization, chatbot prototyping, and bibliometric analysis.",
      tags: ["#SmartCity", "#DigitalTwin", "#ThickData"],
      skills: ["LLMs", "Chatbot Development", "VOSViewer", "Design Research"],
      category: ["research", "technical"],
      images: [
        "./assets/img/smartcity.png"
      ]
    },
    {
      id: 2,
      title: "Digital Transformation & SDGs in Smart Cities",
      shortDesc: "Evaluating city digitalization strategies during COVID-19.",
      description: "Research using SWOT-AHP to assess the digital transformation of cities through SDGs 8, 9, and 11, highlighting resilience and innovation during the pandemic.",
      tags: ["#smartCity", "#SDGs", "#urbanTech"],
      skills: ["Urban Design", "SWOT Analysis", "AHP"],
      category: ["research"],
      images: [
        "./assets/img/SDG_ESG/SDG_ESG3.png",
        "./assets/img/SDG_ESG/SDG_ESG.png",
        "./assets/img/SDG_ESG/SDG_ESG1.png",
        "./assets/img/SDG_ESG/SDG_ESG2.png",
      ]
    },
    {
      id: 3,
      title: "Comparison of NTUT Campus Building Connectivity",
      shortDesc: "Spatial analysis of campus interactivity using VGA.",
      description: "Urban spatial analysis using VGA to evaluate how NTUT campus buildings support interaction and connectivity. Findings informed spatial design recommendations.",
      tags: ["#urbanDesign", "#VGA", "#campusPlanning"],
      skills: ["VGA Analysis", "depthMapX", "Axial Analysis", "Programming"],
      category: ["research"],
      images: [
        "./assets/img/spatialanalysis/spatial_analysis_thumbnail.png",
        "./assets/img/spatialanalysis/spatial_analysis.jpg",
        "./assets/img/spatialanalysis/spatial_analysis1.jpg",
        "./assets/img/spatialanalysis/spatial_analysis2.jpg"
      ]
    },
    {
      id: 4,
      title: "Enhancing Spatial Reasoning with VR",
      shortDesc: "VR-based research to improve spatial reasoning in education.",
      description: "Study on how immersive VR can boost spatial reasoning skills, especially in STEAM educational contexts.",
      tags: ["#VR", "#education", "#spatialReasoning"],
      skills: ["Virtual Reality", "Educational Research"],
      category: ["research", "design"],
      publicationLink: "https://ieeexplore.ieee.org/abstract/document/10549809",
      images: [
        "./assets/img/spatialreasoning/spatial_reasoning.png",
        "./assets/img/spatialreasoning/spatial_reasoning1.png",
        "./assets/img/spatialreasoning/spatial_reasoning2.png",
        "./assets/img/spatialreasoning/spatial_reasoning3.png",
        "./assets/img/spatialreasoning/spatial_reasoning4.png"


      ]
    },
    {
      id: 5,
      title: "ICHOS – Noise Awareness Speculative Design",
      shortDesc: "Speculative AR system for urban noise awareness.",
      description: "Design of a speculative AR system offering noise maps, quiet route suggestions, and exposure tracking for urban health improvement.",
      tags: ["#speculativeDesign", "#AR", "#urbanHealth"],
      skills: ["Speculative Design", "UX Research"],
      category: ["design", "research"],
      videoLink: "https://www.youtube.com/watch?v=o9P8H-0AuJo",
      images: [
        "./assets/img/ICHOS/ICHOS_thumbnail.png"
      ]
    },
    {
      id: 6,
      title: "Image Classification in Design Research",
      shortDesc: "Machine learning applied to automotive design trends.",
      description: "Use of machine learning classifiers in WEKA to improve objectivity in automotive design trend detection.",
      tags: ["#ML", "#designResearch", "#WEKA"],
      skills: ["Programming", "WEKA Analysis"],
      category: ["technical", "research"],
      images: [
        "./assets/img/WEKA/imgclassification.png"
      ]
    },
    {
      id: 7,
      title: "AR Monopoly-Inspired Board Game",
      shortDesc: "A hybrid AR board game blending physical and digital play.",
      description: "Master’s project creating an AR-enhanced Monopoly-style game where players interact with 3D buildings on physical cards to explore hybrid gameplay.",
      tags: ["#AR", "#gameDesign", "#hybridPlay"],
      skills: ["Augmented Reality", "Game Design", "Programming"],
      category: ["design", "creative"],
      images: [
        "./assets/img/ARMonopoly/ARMNP.png",
        "./assets/img/ARMonopoly/ARMNP1.jpg",
        "./assets/img/ARMonopoly/ARMNP2.jpg",
        "./assets/img/ARMonopoly/ARMNP3.jpg"

      ]
    },
    {
      id: 8,
      title: "Harmonic Waves",
      shortDesc: "Interactive sound installation with water-themed visuals.",
      description: "Installation combining interactive visuals and sound design, comprising Oceanic Serenity and Interactive Underwater Symphony experiences.",
      tags: ["#soundDesign", "#TouchDesigner", "#installationArt"],
      skills: ["TouchDesigner", "Ableton Live", "Python", "Sound Design"],
      category: ["creative"],
      videoLink: "https://youtu.be/b96D8tmbuPo",
      images: [
        "./assets/img/HMW/HMW1.jpg",
        "./assets/img/HMW/HMW2.jpg",
        "./assets/img/HMW/HMW3.jpg",
        "./assets/img/HMW/HMW4.jpg",
        "./assets/img/HMW/HMW5.jpg",
        "./assets/img/HMW/HMW6.jpg"
      ]
    },
    {
      id: 9,
      title: "Gravity is Your Enemy",
      shortDesc: "A Unity game featuring gravity-based challenges.",
      description: "A platformer game built in Unity where players navigate a rocket through gravitational puzzles. Developed as part of a game media design course.",
      tags: ["#Unity", "#gameDesign", "#CSharp"],
      skills: ["C#", "Unity", "Game Design"],
      category: ["creative"],
      codeLink: "https://github.com/KennyVuLan/GMD-Gravity-Is-Your-Enemy",
      images: [
        "./assets/img/GMD/thumbnailGIYE.png",
        "./assets/img/GMD/Gameflow.png",
        "./assets/img/GMD/Gameobject.png",
        "./assets/img/GMD/GIYE1.JPG",
        "./assets/img/GMD/GIYE2.JPG",
        "./assets/img/GMD/GIYE3.JPG",
        "./assets/img/GMD/GIYE4.JPG",
        "./assets/img/GMD/GIYE5.JPG",
        "./assets/img/GMD/GIYE6.JPG",
        "./assets/img/GMD/GIYE7.JPG",
        "./assets/img/GMD/GIYE8.JPG",
      ]
    },
    {
      id: 10,
      title: "Run Artichoke Run",
      shortDesc: "A whimsical 2D endless runner game.",
      description: "A Unity-built endless runner featuring sprite animation and scoring, developed during undergraduate study.",
      tags: ["#gameDesign", "#Unity", "#2D"],
      skills: ["C#", "Unity", "Game Design"],
      category: ["creative"],
      images: [
        "./assets/img/artichoke/Artichoke.png",
        "./assets/img/artichoke/Character.png",
        "./assets/img/artichoke/bee.png"
      ],
      liveLink: "",
      codeLink: "",
    },
    {
      id: 11,
      title: "WebVR Showcase using A-Frame",
      shortDesc: "Interactive 3D gallery for academic work.",
      description: "A WebVR gallery built using A-Frame to present academic and creative projects in immersive environments.",
      tags: ["#WebVR", "#AFrame", "#3D"],
      skills: ["HTML", "CSS", "JavaScript", "A-Frame"],
      category: ["technical", "creative"],
      images: [
        "./assets/img/WebVR/WebVR1.png",
        "./assets/img/WebVR/WebVR2.jpg",
        "./assets/img/WebVR/WebVR3.jpg"
      ],
    },
    {
      id: 12,
      title: "ScanThis",
      shortDesc: "An Android barcode scanner app with geolocation-based pricing — built during my time at RMIT Vietnam as an IT student.",
      description: "This was an early mobile development project created while studying at RMIT University Vietnam. The app allows users to scan barcodes and view pricing information based on location. It served as an exploration into Android app development, barcode integration, and simple geolocation logic. While it's a beginner-level project, it reflects my initial experience with building functional Android applications and experimenting with user-centric features.",
      tags: ["#Android", "#mobileApp", "#barcodeScanner"],
      skills: ["Android Development", "Programming"],
      category: ["technical"],
      images: [
        "./assets/img/ScanThis/thumbnail.png"
      ],
      codeLink: "https://github.com/KennyVuLan/ScanThis",
    }
  ];

  const projectsContainer = document.getElementById('projects-container');
  const modal = document.getElementById('project-modal');
  const closeModal = document.getElementById('close-modal');
  const skillFilters = document.querySelectorAll('.skill-filter');

  document.getElementById('project-count').textContent = projects.length;

  let currentProject = null;
  let currentSlide = 0;
  let slideInterval = null;

  // Render projects
  function renderProjects(filter = 'all') {
    projectsContainer.innerHTML = '';

    const filteredProjects = filter === 'all'
      ? projects
      : projects.filter(project => project.category.includes(filter));

    // Render actual projects
    filteredProjects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-80 relative';
      projectCard.innerHTML = `
                    <div class="h-full w-full relative">
                        <img src="${project.images[0]}"  || 'https://via.placeholder.com/400x300?text=No+Image'} alt="${project.title}" class="project-image w-full h-full object-content">
                        <div class="blur-overlay"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                            <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                            <p class="text-sm mb-3">${project.shortDesc}</p>
                            <div class="flex flex-wrap gap-1">
                                ${project.tags.map(tag => `<span class="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;

      projectCard.addEventListener('click', () => openModal(project));
      projectsContainer.appendChild(projectCard);
    });


    // Add "More Projects Coming Soon" placeholder if showing all projects
    if (filter === 'all') {
      const placeholderCard = document.createElement('div');
      placeholderCard.className = 'project-card more-project-coming-soon bg-white rounded-lg shadow-md overflow-hidden h-80';  // Added the specific class
      placeholderCard.innerHTML = `
    <div class="w-full h-64 relative">
      <div class="absolute bottom-0 left-0 right-0 p-6 text-white bg-black bg-opacity-50 text-center">
        <h3 class="text-xl font-bold mb-2">More Projects Coming Soon</h3>
        <p class="text-gray-600">Currently working on exciting new projects in UX and data-driven design.</p>
      </div>
    </div>
  `;
      projectsContainer.appendChild(placeholderCard);
    }
  }

  // Open modal with project details
  function openModal(project) {
    currentProject = project;
    currentSlide = 0;
    // Set live and code links (optional)
    const liveBtn = document.getElementById("modal-live-link");
    const codeBtn = document.getElementById("modal-code-link");
    const pubBtn = document.getElementById("modal-publication-link");
    const videoBtn = document.getElementById("modal-video-link");

    if (project.videoLink) {
      videoBtn.href = project.videoLink;
      videoBtn.classList.remove("opacity-50", "pointer-events-none", "cursor-not-allowed");
    } else {
      videoBtn.href = "#";
      videoBtn.classList.add("opacity-50", "pointer-events-none", "cursor-not-allowed");
    }
    if (project.publicationLink) {
      pubBtn.href = project.publicationLink;
      pubBtn.classList.remove("opacity-50", "pointer-events-none", "cursor-not-allowed");
    } else {
      pubBtn.href = "#";
      pubBtn.classList.add("opacity-50", "pointer-events-none", "cursor-not-allowed");
    }
    if (project.liveLink) {
      liveBtn.href = project.liveLink;
      liveBtn.classList.remove('opacity-50', 'pointer-events-none', 'cursor-not-allowed');
    } else {
      liveBtn.href = "#";
      liveBtn.classList.add('opacity-50', 'pointer-events-none', 'cursor-not-allowed');
    }

    if (project.codeLink) {
      codeBtn.href = project.codeLink;
      codeBtn.classList.remove('opacity-50', 'pointer-events-none', 'cursor-not-allowed');
    } else {
      codeBtn.href = "#";
      codeBtn.classList.add('opacity-50', 'pointer-events-none', 'cursor-not-allowed');
    }
    // Set modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;

    // Set tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = project.tags.map(tag =>
      `<span class="text-xs bg-gray-100 px-2 py-1 rounded">${tag}</span>`
    ).join('');

    // Set skills
    const skillsContainer = document.getElementById('modal-skills');
    skillsContainer.innerHTML = project.skills.map(skill =>
      `<span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">${skill}</span>`
    ).join('');

    // Set up image slider
    const sliderContainer = document.querySelector('.image-slider');
    sliderContainer.innerHTML = '';

    project.images.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = `${project.title} - Image ${index + 1}`;
      img.className = `slider-image w-full h-full object-content ${index === 0 ? 'active' : ''}`;
      sliderContainer.appendChild(img);
    });

    // Set up indicators
    const indicatorsContainer = document.getElementById('slider-indicators');
    indicatorsContainer.innerHTML = '';

    project.images.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.className = `slider-indicator ${index === 0 ? 'active' : ''}`;
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });

    // Start slideshow
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  function closeModalHandler() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (slideInterval) clearInterval(slideInterval);
  }

  // Navigation for slider
  function nextSlide() {
    const slides = document.querySelectorAll('.slider-image');
    const indicators = document.querySelectorAll('.slider-indicator');

    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  function prevSlide() {
    const slides = document.querySelectorAll('.slider-image');
    const indicators = document.querySelectorAll('.slider-indicator');

    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = (currentSlide - 1 + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  function goToSlide(index) {
    const slides = document.querySelectorAll('.slider-image');
    const indicators = document.querySelectorAll('.slider-indicator');

    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');

    // Reset timer when manually changing slide
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
  }

  closeModal.addEventListener('click', closeModalHandler);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalHandler();
  });

  document.querySelectorAll('.slider-nav').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.direction === 'next') nextSlide();
      else prevSlide();
    });
  });

  skillFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      skillFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      renderProjects(filter.dataset.filter);
    });
  });

  renderProjects();
});

// Recognition Data
const honors = [
  {
    id: 1,
    title: "Hult Prize Winner",
    issuer: "Hult Prize Foundation - NTUT",
    date: "2022",
    description: "Won the campus round of the prestigious Hult Prize competition for social entrepreneurship.",
    image: "./assets/img/recognition/hult.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Best Academic Paper Award",
    issuer: "International Conference on Medical Design (MD 2020)",
    date: "2020",
    description: "Recognized for outstanding research contribution at the International Conference on Medical Design.",
    image: "./assets/img/recognition/mdpaper.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Best Teamwork Award",
    issuer: "NTUT International PBL Workshop",
    date: "2023",
    description: "Awarded for exceptional teamwork and collaboration in the international project-based learning workshop.",
    image: "./assets/img/recognition/pbl2023.jpg",
    link: "#"
  }
];

const certifications = [
  {
    id: 1,
    title: "NTUT Innovation Competition",
    issuer: "NTUT",
    date: "2020",
    description: "Participated in the Innovation and Entrepreneurship Base Competition.",
    image: "./assets/img/recognition/ntut_inno.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Entrepreneurship Workshop",
    issuer: "NKUST",
    date: "2021",
    description: "Participant in the NKUST Entrepreneurship Winter Workshop.",
    image: "./assets/img/recognition/nkust.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Happy Technology Competition",
    issuer: "Happy Technology",
    date: "2022",
    description: "Competitor in the Happy Technology Entrepreneurship Competition.",
    image: "./assets/img/recognition/happytech.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "IEEE CIS Summer School",
    issuer: "IEEE",
    date: "2022",
    description: "Certificate of Participation in the IEEE CIS Summer School.",
    image: "./assets/img/recognition/cissummer.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "Hult Prize Regional Summit",
    issuer: "Hult Prize Foundation",
    date: "2022",
    description: "Competitor in the Hult Prize Taipei Regional Summit.",
    image: "./assets/img/recognition/hult2.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "Service Science Conference",
    issuer: "ICSSI",
    date: "2021",
    description: "Participant in the International Conference on Service Science and Innovation.",
    image: "./assets/img/recognition/ICSSI.jpg",
    link: "#"
  },
  {
    id: 7,
    title: "Grids & Clouds Symposium",
    issuer: "ISGC",
    date: "2021",
    description: "Participant in the International Symposium on Grids & Clouds (ISGC 2021).",
    image: "./assets/img/recognition/ISGC2021.jpg",
    link: "#"
  },
  {
    id: 8,
    title: "LLM Fine Tuning Course",
    issuer: "Udemy",
    date: "2023",
    description: "Certificate of Completion for 'Master LLM Fine Tuning: Llama with Hugging Face Transformers' course.",
    image: "./assets/img/recognition/masterllm.jpg",
    link: "https://www.udemy.com/certificate/UC-c628c66a-b4af-4b04-8fe2-22b332ce5747/"
  },
  {
    id: 9,
    title: "Y.S Award Preliminary",
    issuer: "Y.S Award",
    date: "2023",
    description: "Preliminary Round Participant in the 19th Y.S Award competition.",
    image: "./assets/img/recognition/19th.jpg",
    link: "#"
  }
];

// Render Recognition Items
function renderRecognition() {
  const honorsContainer = document.getElementById('honors-container');
  const certsContainer = document.getElementById('certs-container');

  honors.forEach(item => {
    honorsContainer.appendChild(createRecognitionCard(item));
  });

  certifications.forEach(item => {
    certsContainer.appendChild(createRecognitionCard(item));
  });
}

function createRecognitionCard(item) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer';
  card.addEventListener('click', () => openRecognitionModal(item));

  const imageUrl = item.image || 'https://cdn-icons-png.flaticon.com/512/3132/3132693.png';
  const hasImage = !!item.image;

  card.innerHTML = `
        <div class="h-48 ${hasImage ? '' : 'bg-gray-100 flex items-center justify-center'}">
          <img src="${imageUrl}" alt="${item.title}" class="w-full h-full ${hasImage ? 'object-content' : 'w-24 h-24 object-contain opacity-50'}">
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
          <div class="flex items-center text-gray-600 mb-2">
            <i class="fas fa-building text-sm mr-2"></i>
            <span class="text-sm">${item.issuer}</span>
          </div>
          <div class="flex items-center text-gray-500">
            <i class="fas fa-calendar-alt text-sm mr-2"></i>
            <span class="text-sm">${item.date}</span>
          </div>
        </div>
      `;
  return card;
}

// Recognition Modal Functions
function openRecognitionModal(item) {
  const modal = document.getElementById('recognition-modal');
  const imageUrl = item.image || 'https://cdn-icons-png.flaticon.com/512/3132/3132693.png';

  document.getElementById('modal-recognition-title').textContent = item.title;
  document.getElementById('modal-recognition-issuer').textContent = item.issuer;
  document.getElementById('modal-recognition-date').textContent = item.date;
  document.getElementById('modal-recognition-description').textContent = item.description;
  document.getElementById('modal-recognition-image').src = imageUrl;
  document.getElementById('modal-recognition-image').alt = `${item.title} from ${item.issuer}`;

  const linkBtn = document.getElementById('modal-recognition-link');
  if (item.link && item.link !== '#') {
    linkBtn.href = item.link;
    linkBtn.classList.remove('hidden');
  } else {
    linkBtn.classList.add('hidden');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRecognitionModal() {
  document.getElementById('recognition-modal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Initialize Recognition Section
document.addEventListener('DOMContentLoaded', function () {
  renderRecognition();

  // Event listeners
  document.getElementById('close-recognition-modal').addEventListener('click', closeRecognitionModal);
  document.getElementById('recognition-modal').addEventListener('click', function (e) {
    if (e.target === this) closeRecognitionModal();
  });
});
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("section-show");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("section-show");

    // Prevent outer scroll
    document.body.style.overflow = "hidden";

    // Scroll section container to top
    const container = target.querySelector(".container");
    if (container) container.scrollTop = 0;
  }
}