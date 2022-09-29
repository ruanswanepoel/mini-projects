
class Perceptron {

	constructor() {

		this.lr = 0.1; // Learning rate
		this.weights = [Math.random() - 0.5, Math.random() - 0.5]; // Random starting weights

	}

	/**
	 * Perform a weighted summation 
	 * @param 	{Array<float>}	inputs 	Two input nodes
	 * @returns {int}					Guess node (+/- 1)
	 */
	guess(inputs) {

		let sum = 0;

		// Perform weighted summation
		for (let i = 0; i < this.weights.length; i++) {
			sum += inputs[i] * this.weights[i];
		}

		return Math.sign(sum);

	}

	/**
	 * Train the Perceptron on a given input and a known target
	 * @param	{Array<float>}	inputs	Two input nodes
	 * @param	{int}			target	Desired guess result
	 */
	train(inputs, target) {

		let guess = this.guess(inputs);
		let error = target - guess;

		// Correct the weights in terms of error
		for (let i = 0; i < this.weights.length; i++) {
			this.weights[i] += error * inputs[i] * this.lr;
		}

	}

}