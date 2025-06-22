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
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.getElementById("navbarMenu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navbarMenu.classList.toggle("show");
      iconOpen.style.display = isOpen ? "none" : "inline";
      iconClose.style.display = isOpen ? "inline" : "none";
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navbarMenu.classList.remove("show");
      iconOpen.style.display = "inline";
      iconClose.style.display = "none";
    }
  });
});

// Section transition + smooth scroll
document.querySelectorAll('#navbarMenu .nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Remove section-show from all
      document.querySelectorAll('section').forEach(s => s.classList.remove('section-show'));
      // Add to the clicked section
      targetSection.classList.add('section-show');

      // Optionally scroll smoothly (if needed)
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Close menu on small screen
      const navbarMenu = document.getElementById("navbarMenu");
      const iconOpen = document.getElementById("icon-open");
      const iconClose = document.getElementById("icon-close");
      navbarMenu.classList.remove("show");
      iconOpen.style.display = "inline";
      iconClose.style.display = "none";
    }
  });
});

document.querySelector('.header').classList.add('section-hidden');

document.querySelector('.header').classList.remove('section-hidden');

document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero-section");
  const navLinks = document.querySelectorAll(".nav-link");
  const logo = document.querySelector(".logo");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#header" && this.getAttribute("href") !== "#") {
        // Hide hero section
        heroSection.classList.add("hide-hero");
      } else {
        // Home button clicked
        heroSection.classList.remove("hide-hero");
      }
    });
  });

  logo.addEventListener("click", function () {
    heroSection.classList.remove("hide-hero");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".nav-link");

  // Update active state on scroll
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const top = section.offsetTop - 70; // Adjust for header
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Update active state on nav click
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      // Remove active from all links
      links.forEach(l => l.classList.remove("active"));
      // Add to clicked link
      link.classList.add("active");
    });
  });
});

