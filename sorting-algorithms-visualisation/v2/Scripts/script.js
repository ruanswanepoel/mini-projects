
let selectAlgorithm, sliderSpeed, sliderElements,
	btnDecSpeed, btnIncSpeed, btnDecElements, btnIncElements, btnSort, btnReset,
	lblSpeed, lblElements, canvas;

let algorithm = 0;
let speed = 50;
let numElements = 50;
let isSorting = false;

let algs = [
	new Selection(), new Bubble(), new Insertion()
];

let renderer;
let list;


/**
 * Tells the current algorithm to step until the list is sorted.
 */
async function sort() {

	selectAlgorithm.disabled = true;
	sliderElements.disabled = true;
	btnSort.disabled = true;

	algs[algorithm].begin();

	isSorting = true;
	let isSorted = false;

	while (!isSorted && isSorting) {
		isSorted = algs[algorithm].next();
		renderer.render();
		await sleep(21-speed);
	}

	console.log("DONE");

	isSorting = false;
	
}

/**
 * Resets the state of the app.
 */
function reset() {

	isSorting = false;
	
	list.reset();
	renderer.render();

	selectAlgorithm.disabled = false;
	sliderElements.disabled = false;
	btnSort.disabled = false;

}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


// When the window loads setup 
window.onload = function() {
	setup();
}
