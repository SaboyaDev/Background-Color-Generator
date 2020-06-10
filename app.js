let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let body = document.querySelector('body');
let css = document.querySelector('#colorDisplay');
let h3 = document.querySelector('h3');

function setGradient() {
	body.style.background =
		'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
  h3.textContent = body.style.backgroundImage;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
