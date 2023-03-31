const cuadro = document.getElementById("cuadro");
const opciones = document.getElementById("opciones");
const texto = document.getElementById("texto");
const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");

botonNo.addEventListener("mouseover", () => {
  const x = getRandomInt(-window.innerWidth/2, window.innerWidth/2);
  const y = getRandomInt(-window.innerHeight/2, window.innerHeight/2);
  cuadro.style.setProperty("--x", x + "px");
  cuadro.style.setProperty("--y", y + "px");
  cuadro.classList.add("movimiento");
});

botonSi.addEventListener("click", () => {
  cuadro.classList.remove("movimiento");
  alert("Yo te amo más");
});

cuadro.addEventListener("animationend", () => {
  cuadro.classList.remove("movimiento");
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
