let toggle = document.getElementById("nav-toggle");
let navbar = document.getElementById("navbar");
let bodypadd = document.getElementById("body");


toggle.addEventListener("click", () => {
  toggle.classList.toggle("rotate");
  navbar.classList.toggle("show");
  bodypadd.classList.toggle("expander");
});
