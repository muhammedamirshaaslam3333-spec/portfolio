window.addEventListener("load", () => {
  const left = document.querySelector(".left-content");
  left.style.opacity = 0;
  left.style.transform = "translateY(20px)";

  setTimeout(() => {
    left.style.transition = "1.2s ease";
    left.style.opacity = 1;
    left.style.transform = "translateY(0)";
  }, 200);
});
// Simple fade-in animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "1s ease";
});