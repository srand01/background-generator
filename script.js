var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColors = document.getElementById("randomBtn");

console.log(css);
console.log(color1);
console.log(color2);

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

//setRandom colors for gradient 1 and 2
function setRandomColors() {
  color1.value = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  color2.value = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
  console.log(color1.value);
  console.log(color2.value);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// //btn for random colors
randomColors.addEventListener("click", setRandomColors);
