window.addEventListener("load", () => {
  const left = document.querySelector(".left-content");

  if (!left) return;

  // Initial state
  left.style.opacity = 0;
  left.style.transform = "translateY(20px)";

  requestAnimationFrame(() => {
    left.style.transition = "all 1.2s ease";
    left.style.opacity = 1;
    left.style.transform = "translateY(0)";
  });
});

const sections = document.querySelectorAll("section");

// Initial setup
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all 0.8s ease";
});

function revealOnScroll() {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();

    if (rect.top < window.innerHeight - 80) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
}

// Run once on load (important fix)
window.addEventListener("load", revealOnScroll);

// Scroll listener (optimized)
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(sec => observer.observe(sec));
transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
sections.forEach((sec, i) => {
  sec.style.transitionDelay = `${i * 0.1}s`;
});
sec.style.transform = "translateY(40px) scale(0.98)";