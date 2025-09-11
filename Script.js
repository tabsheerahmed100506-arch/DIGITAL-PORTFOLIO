document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile menu
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  // Close menu on link click
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    })
  );

  // Smooth scroll with offset
  navLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        const offsetTop = target.offsetTop - 60;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    })
  );

  // Highlight active nav link on scroll
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 100;
    navLinks.forEach((link) => link.classList.remove("active"));
    document.querySelectorAll("section").forEach((section) => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        const id = section.getAttribute("id");
        const activeLink = document.querySelector(nav-link[href="#${id}"]);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  });

  // Project filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      projects.forEach((project) => {
        if (filter === "all" || project.getAttribute("data-category") === filter) {
          project.style.display = "flex";
        } else {
          project.style.display = "none";
        }
      });
    });
  });

  // Contact form validation and submit simulation
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Basic validation already by required attribute
    alert("Thank you for reaching out! This is a demo contact form.");
    contactForm.reset();
  });
});