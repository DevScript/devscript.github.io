document.querySelectorAll(".Description").forEach(function (p) {
    p.querySelector("a").addEventListener("click", function () {
      p.classList.toggle("show");
      this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
    });
  });