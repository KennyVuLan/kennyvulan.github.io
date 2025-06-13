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

  if (isDeleting) {
    currentRole = roles[i].substring(0, j--);
  } else {
    currentRole = roles[i].substring(0, j++);
  }

  target.innerHTML = currentRole;

  if (!isDeleting && j === roles[i].length) {
    isDeleting = true;
    setTimeout(type, pauseBetweenRoles); // Pause before deleting
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length; // Move to the next role
    setTimeout(type, typingSpeed); // Start typing the next role
  } else {
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", type);

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.getElementById("navbarMenu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  menuToggle.addEventListener("click", () => {
    const isOpen = navbarMenu.classList.toggle("show");

    // Toggle icons
    iconOpen.style.display = isOpen ? "none" : "inline";
    iconClose.style.display = isOpen ? "inline" : "none";
  });

  // Auto-close menu on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navbarMenu.classList.remove("show");
      iconOpen.style.display = "inline";
      iconClose.style.display = "none";
    }
  });
});