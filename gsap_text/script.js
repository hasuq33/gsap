gsap.registerPlugin(SplitText);

gsap.set("h1",{opacity:1});

let splitWords = SplitText.create("#heading", { type: "chars" });

gsap.from(splitWords.chars, {
  y: 50,
  autoAlpha: 0,
  stagger: 0.1,
  duration: 0.8,
  ease: "power2.out"
});
