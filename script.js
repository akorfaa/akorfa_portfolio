// Toggle mobile menu
document.querySelector(".menu-toggle").onclick = function () {
  document.querySelector(".nav-links").classList.toggle("active");
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    navLinks.classList.remove("active");
  });
});
