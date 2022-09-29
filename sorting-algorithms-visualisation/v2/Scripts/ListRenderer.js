class ListRenderer {

    constructor(canvas, list) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.list = list;
        this.elementWidth = 0;
		this.elementGap = 0;
		this.elementOffset = 0;
    }

    render() {
        this.calculateListAttributes();
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = "#67468f";
		for (let i = 0; i < this.list.count; i++) {
			let x = Math.floor(((2*i - this.list.count + 1) * this.elementOffset - this.elementWidth + this.canvas.width) / 2);
			let h = Math.floor(this.list.get(i) * 400 + 10);
			this.ctx.fillRect(x, 0, this.elementWidth, h);
		}
	}

	calculateListAttributes() {
		let r = this.canvas.width / this.list.count;
		this.elementWidth = 0.63 * r;
		this.elementGap = 0.27 * r;
		this.elementOffset = 0.9 * r;
	}

}
