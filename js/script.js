const button = document.querySelector(".button");
const pop = document.querySelector(".pop");
const component = document.querySelector("body");
let width;
onresize = (e) => {
  width = component.getBoundingClientRect().width;
};

button.addEventListener("click", (e) => {
  pop.classList.toggle("anim");
  button.classList.toggle("button-active");
  if (width >= 800) {
    pop.style.transform = "translateX(0%)";
  }
  if (!pop.classList.contains("anim")) {
    pop.style.opacity = "1";
    if (width < 800) {
      pop.style.transform = "translateX(0%)";
    }
    pop.style.pointerEvents = "auto";
  } else {
    pop.style.opacity = "0";
    if (width < 800) {
      pop.style.transform = "translateX(100%)";
    }
    pop.style.pointerEvents = "none";
  }
});
