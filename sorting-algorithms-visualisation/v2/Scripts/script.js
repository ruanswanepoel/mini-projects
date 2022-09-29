const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let isSorting = false;
let algorithm = 0;
let speed = {
	value: 5,
	incSpeed: () => {
		speed.value++;
		Event.emit('speedchanged', speed.value);
	},
	decSpeed: () => {
		speed.value--;
		Event.emit('speedchanged', speed.value);
	},
	setSpeed: (val) => {
		speed.value = val;
		Event.emit('speedchanged', speed.value);
	}
};

let renderer;
let list;

window.onload = function() {
	list = new CachedList(50);
	renderer = new ListRenderer($('canvas'), list);
	Event.on('listcountchanged', (val) => { $('elements-label').innerHTML = val; renderer.render(); });
	Event.on('speedchanged', (val) => $('speed-label').innerHTML = val);
	$('sub-element-button').onclick = () => { list.decCount(); $('elements-slider').stepDown(); }
	$('add-element-button').onclick = () => { list.incCount(); $('elements-slider').stepUp(); }
	$('elements-slider').onchange = (e) => { list.setCount(parseInt(e.target.value)); }
	$('elements-slider').onmousemove = (e) => { list.setCount(parseInt(e.target.value)); }
	$('sub-speed-button').onclick = () => { speed.decSpeed(); $('speed-slider').stepDown(); }
	$('add-speed-button').onclick = () => { speed.incSpeed(); $('speed-slider').stepUp(); }
	$('speed-slider').onchange = (e) => { speed.setSpeed(parseInt(e.target.value)); }
	$('speed-slider').onmousemove = (e) => { speed.setSpeed(parseInt(e.target.value)); }
	window.onresize = () => {
		$('canvas').width = 0.98 * innerWidth;
		$('canvas').height = 0.98 * innerHeight - document.getElementById("header").clientHeight - 10;
	}
	window.onresize();
	renderer.render();
}

function setCriticalButtonsDisabled(disabled) {
	$('algorithm-selector').disabled = disabled;
	$('sub-element-button').disabled = disabled;
	$('add-element-button').disabled = disabled;
	$('elements-slider').disabled = disabled;
	$('sort-button').disabled = disabled;
}

async function sort() {
	setCriticalButtonsDisabled(true);
	let alg = new Selection();
	let isSorted = false;
	isSorting = true;
	alg.begin(list);
	while (!isSorted && isSorting) {
		isSorted = alg.next();
		renderer.render();
		await sleep(50/(speed.value*speed.value));
	}
	isSorting = false;
	setCriticalButtonsDisabled(false);
}

function reset() {
	isSorting = false;
	list.reset();
	renderer.render();
	setCriticalButtonsDisabled(false);
}
