const hamburgermenu = document.getElementById("hamburgermenu");
        const mobileNavDropDown = document.querySelector(
          ".mobile__navbar__items"
        );
        window.addEventListener("click", () => {
          if (mobileNavDropDown.classList.contains("hamburger__menu__close"))
            return mobileNavDropDown.classList.remove("hamburger__menu__close");
          return mobileNavDropDown.classList.add("hamburger__menu__close");
        });
        
document.querySelectorAll(".Description").forEach(function (p) {
  p.querySelector("a").addEventListener("click", function () {
    p.classList.toggle("show");
    this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
  });
});

const slider = document.querySelector('.ThemeContainer');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});