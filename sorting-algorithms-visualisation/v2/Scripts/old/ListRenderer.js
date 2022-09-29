
/**
 * The ListRenderer
 */
class ListRenderer {

	constructor(canvas) {

		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");

		// this.list = list;

		this.elementWidth = 0;
		this.elementGap = 0;
		this.elementOffset = 0;

		this.colors = new Array(100);

	}

	render() {

		this.calculateListAttributes();

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		this.ctx.fillStyle = "#67468f";

		for (let i = 0; i < list.getLength(); i++) {
			if (this.colors[i] != undefined) this.ctx.fillStyle = this.colors[i];
			//console.log(this.ctx.fillStyle);
			let x = Math.floor(((2*i - list.getLength() + 1) * this.elementOffset - this.elementWidth + this.canvas.width) / 2);
			let h = Math.floor(list.get(i) * 400 + 10);
			this.ctx.fillRect(x, 0, this.elementWidth, h);
		}

		this.colors = new Array(100);

	}

	barColor(index, color) {
		
		this.colors[index] = color;

	}

	/**
	 * A.
	 * 
	 * @param {array} list A.
	 */
	calculateListAttributes() {

		let r = this.canvas.width / list.getLength();
		this.elementWidth = 0.63 * r;
		this.elementGap = 0.27 * r;
		this.elementOffset = 0.9 * r;

	}

}
