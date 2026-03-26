const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
});