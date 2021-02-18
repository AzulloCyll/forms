import "@babel/polyfill";

const form = document.getElementById("form");
const preview = document.getElementById("preview");

const inputs = document.querySelectorAll("select,input");
for (let input of inputs) {
	input.oninput = show;
}

function show(event) {
	preview.textContent = form.text.value;
	preview.style.padding = "10px";
	preview.style.margin = "10px";
}

show();
