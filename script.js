// LENIS SMOOTH SCROLL
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  direction: "vertical",
  gestureDirection: "vertical",
  smoothTouch: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// PARALLAX EFFECT
gsap.utils.toArray(".hero").forEach((section, i) => {
  gsap.fromTo(
    section.querySelector("img"),
    { scale: 1.2 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
});

