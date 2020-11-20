var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var ltr = document.querySelector(".ltr")
var btnReload = document.querySelector(".btn-reload");
var body = document.getElementById("gradient");

  
function setGradient() {
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
  console.log(css);
  css.textContent = body.style.background + ";";

}
function setGradient2() {
  body.style.background =
    "linear-gradient(to left, "
    + color1.value
    + ", "
    + color2.value
    + ")";
  console.log(css);
  css.textContent = body.style.background + ";";
}

function reloadPage() {
  window.location.reload()
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
ltr.addEventListener("click", setGradient2);
btnReload.addEventListener("click", reloadPage);

