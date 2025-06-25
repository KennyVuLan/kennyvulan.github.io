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
        sections.forEach(sec => sec.classList.remove("section-show"));

        // Show the target section
        targetSection.classList.add("section-show");

        // Scroll smoothly
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }

        // Update active class
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
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
      images: [
        "https://images.unsplash.com/photo-1508514177221-188e1eaf2d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1508514177221-188e1eaf2d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1508514177221-188e1eaf2d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1508514177221-188e1eaf2d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1508514177221-188e1eaf2d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
      images: [
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
      images: [
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
        "https://images.unsplash.com/photo-1434626881859-19439b315f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1434626881859-19439b315f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1434626881859-19439b315f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1434626881859-19439b315f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1434626881859-19439b315f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
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
        "https://images.unsplash.com/photo-1552664730-d306ca4b3ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1552664730-d306ca4b3ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1552664730-d306ca4b3ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1552664730-d306ca4b3ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1552664730-d306ca4b3ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    {
      id: 12,
      title: "ScanThis",
      shortDesc: "An Android app for barcode scanning with geolocation pricing.",
      description: "Mobile app that lets users scan barcodes and view prices based on location to support informed shopping.",
      tags: ["#Android", "#mobileApp", "#barcodeScanner"],
      skills: ["Android Development", "Programming"],
      category: ["technical"],
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
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
                        <img src="${project.images[0]}"  || 'https://via.placeholder.com/400x300?text=No+Image'} alt="${project.title}" class="project-image w-full h-full object-cover">
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
      placeholderCard.className = 'project-card bg-white rounded-lg shadow-md overflow-hidden h-80';
      placeholderCard.innerHTML = `
                    <div class="bg-gray-100 w-full h-64 flex items-center justify-center">
                        <i class="fas fa-plus text-gray-400 text-4xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">More Projects Coming Soon</h3>
                        <p class="text-gray-600">Currently working on exciting new projects in UX and data-driven design.</p>
                    </div>
                `;
      projectsContainer.appendChild(placeholderCard);
    }
  }

  // Open modal with project details
  function openModal(project) {
    currentProject = project;
    currentSlide = 0;

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
      img.className = `slider-image w-full h-full object-cover ${index === 0 ? 'active' : ''}`;
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

