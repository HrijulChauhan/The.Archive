import { gsap } from "gsap";

var childSplit = new SplitText("h1", {
    type: "lines",
    linesClass: "split-child"
  });
  var parentSplit = new SplitText("h1", {
    type: "lines",
    linesClass: "split-parent"
  });
  
  gsap.from(childSplit.lines, {
    duration: 1.5,
    yPercent: 100,
    ease: "power4",
    stagger: 0.1
  });
  