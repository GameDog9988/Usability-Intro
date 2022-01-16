gsap.from("h1", {
  x: -100,
  duration: 0.4,
  opacity: 0,
});

let sections = gsap.utils.toArray("section");

sections.forEach((project) => {
  let tlProject = gsap.timeline({
    scrollTrigger: {
      trigger: project,
      start: "top center",
      end: "center center",
      scrub: 1,
    },
  });
  let projectImage = project.querySelector("h2");
  let projectQuote = project.querySelector("blockquote");
  let projectInfo = project.querySelector("p");

  tlProject
    .from(projectImage, {
      x: -300,
      opacity: 0,
    })
    .from(projectQuote, {
      y: 300,
      opacity: 0,
    })
    .from(projectInfo, {
      x: 300,
      opacity: 0,
    });
});

const image = document.querySelector("#image1");
const strikeThrough = document.querySelector("#name");

gsap.set(image, { xPercent: -50, yPercent: -50 });

strikeThrough.addEventListener("mousemove", moveImage);
strikeThrough.addEventListener("mouseenter", imageHover);
strikeThrough.addEventListener("mouseleave", imageHover);

function moveImage(e) {
  let xpos = e.clientX;
  let ypos = e.clientY;
  const tl = gsap.timeline();
  tl.to(image, {
    x: xpos,
    y: ypos,
  });
}

function imageHover(e) {
  if (e.type === "mouseenter") {
    // const targetImage = e.target.dataset.img;

    const t1 = gsap.timeline();
    t1.to(image, {
      duration: 0.5,
      autoAlpha: 1,
    });
  } else if (e.type === "mouseleave") {
    const tl = gsap.timeline();

    tl.to(image, {
      duration: 0.5,
      autoAlpha: 0,
    });
  }
}
