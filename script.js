// LENIS SMOOTH SCROLL
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  lerp: 0.1,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// PARALLAX SCALE EFFECT
gsap.utils.toArray(".section").forEach((section) => {
  const img = section.querySelector("img");

  gsap.fromTo(
    img,
    { scale: 1.2 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
});

// Handle window resize to refresh ScrollTrigger
ScrollTrigger.addEventListener("refresh", () => {
  lenis.resize();
});

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
