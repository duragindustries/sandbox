var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("area");
var btn = document.getElementById("random");

function updateColors() {
	body.style.background = "linear-gradient(to right, "+color1.value+" , "+color2.value+")";
	css.textContent = body.style.background;
}

function randomizeColors() {
	color1.value = '#' + (Math.random().toString(16) + "000000").substring(2,8)
	color2.value = '#' + (Math.random().toString(16) + "000000").substring(2,8)
	updateColors()
}

updateColors()

btn.addEventListener("click", randomizeColors)

color1.addEventListener("input", updateColors)

color2.addEventListener("input", updateColors)