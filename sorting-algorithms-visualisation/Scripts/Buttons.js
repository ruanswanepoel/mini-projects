
let algButtons = document.getElementsByClassName('alg');
let sortButton = document.getElementsByClassName('sort')[0];
let resetButton = document.getElementsByClassName('reset')[0];
let subButton = document.getElementsByClassName('sub')[0];
let addButton = document.getElementsByClassName('add')[0];

for (let i = 0; i < algButtons.length; i++) {
	algButtons[i].addEventListener("click", onAlgButtonClick);
}

sortButton.addEventListener("click", sort);
resetButton.addEventListener("click", reset);
subButton.addEventListener("click", sub);
addButton.addEventListener("click", add);

function onAlgButtonClick(e) {
	setAlgorithmById(e.path[1].id);
}