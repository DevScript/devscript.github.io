const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

if (links.classList.contains("active")) {
  links.classList.remove("active");
}

btn.addEventListener("click", () => {
  links.classList.toggle("active");
});

document.querySelectorAll(".Description").forEach(function (p) {
  p.querySelector("a").addEventListener("click", function () {
    p.classList.toggle("show");
    this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
  });
});