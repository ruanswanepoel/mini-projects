
function setupDOM() {

	selectAlgorithm = document.getElementById("selectAlgorithm");
	lblSpeed = document.getElementById("lblSpeed");
	btnDecSpeed = document.getElementById("btnDecSpeed");
	sliderSpeed = document.getElementById("sliderSpeed");
	btnIncSpeed = document.getElementById("btnIncSpeed");
	lblElements = document.getElementById("lblElements");
	btnDecElements = document.getElementById("btnDecElements");
	sliderElements = document.getElementById("sliderElements");
	btnIncElements = document.getElementById("btnIncElements");
	btnSort = document.getElementById("btnSort");
	btnReset = document.getElementById("btnReset");
	canvas = document.getElementById("ctx");

}

function setupListeners() {

	selectAlgorithm.onchange = function() {
		algorithm = selectAlgorithm.value;
	}

	btnDecSpeed.onclick = function() {
		sliderSpeed.stepDown();
		sliderSpeed.onchange();
	}

	sliderSpeed.onchange = function() {
		if (speed == sliderSpeed.value) return;
		speed = sliderSpeed.value;
		lblSpeed.innerHTML = speed/10;
		console.log("New speed: " + speed);
	}

	sliderSpeed.addEventListener("mousemove", function() {
		sliderSpeed.onchange();
	});

	btnIncSpeed.onclick = function() {
		sliderSpeed.stepUp();
		sliderSpeed.onchange();
	}

	btnDecElements.onclick = function() {
		sliderElements.stepDown();
		sliderElements.onchange();
	}

	sliderElements.onchange = function() {
		if (numElements == sliderElements.value) return;
		numElements = sliderElements.value;
		lblElements.innerHTML = numElements;
		list.resize(numElements);
		renderer.render(list);
	}

	sliderElements.addEventListener("mousemove", function() {
		sliderElements.onchange();
	});

	btnIncElements.onclick = function() {
		sliderElements.stepUp();
		sliderElements.onchange();
	}

	btnSort.onclick = function() {
		sort();
	}

	btnReset.onclick = function() {
		reset();
	}

	window.onresize = function() {
		canvas.width = 0.98 * innerWidth;
		canvas.height = 0.98 * innerHeight - document.getElementById("header").clientHeight - 10;
		renderer.calculateListAttributes();
		renderer.render();
	}

}

function setup() {

	setupDOM();
	setupListeners();

	canvas.width = 0.98 * innerWidth;
	canvas.height = 0.98 * innerHeight - document.getElementById("header").clientHeight - 10;

	renderer = new ListRenderer(canvas);
	list = new CachedList(numElements);

	renderer.render();

}
