window.addEventListener("scroll", function (event) {
  let scroll = window.scrollY / 12 + 30;
  let header = document.querySelector(".header");
  if (scroll > 0 && scroll < 100) {
    header.style.backgroundPositionY = scroll + "%";
    console.log(scroll);
  }
});
let elements;
let windowHeight;
function init() {
  elements = document.querySelectorAll(".hidden");
  windowHeight = window.innerHeight;
}
function checkPosition() {
  for (var i = 0; i < elements.length; i++) {
    let element = elements[i];
    let positionFromTop = element.getBoundingClientRect().top;
    if (positionFromTop - windowHeight < -100) {
      setTimeout(function () {
        element.classList.add("fade-in-element");
        element.classList.remove("hidden");
      }, 0);
    }
  }
}
window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", init);
init();
checkPosition();

document.querySelector(".back-button").addEventListener("click", (event) => {
  event.preventDefault();
  window.history.back();
});
