
class Point {

	constructor() {

		this.x = 0;
		this.y = 0;

		// Genererate random x and y that is clear from the diagonal line
		while (Math.abs(this.x/width - this.y/height) < 0.01) {
			this.x = Math.random() * width;
			this.y = Math.random() * height;
		}

		if (this.y/this.x < height/width) {
			this.label = 1;
			this.color = color(210, 100, 70);
		} else {
			this.label = -1;
			this.color = color(70, 160, 220);
		}

	}

	/**
	 * Draw an ellipse at this point's location
	 * @param {int} guess AI's guess
	 */
	show(guess) {

		if (guess == this.label) {
			fill(this.color); // Fill with normal color if guess was correct
		}
		else {
			fill(60, 210, 90); // Fill green if the guess was wrong
		}

		noStroke();
		ellipse(this.x, this.y, 9, 9);

	}

}