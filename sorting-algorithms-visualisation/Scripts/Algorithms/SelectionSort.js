
class SelectionSort extends Algorithm {

	constructor() { super() }

	async sort() {

		for (let i = 0; i < values.length - 1; i++) {

			let minIndex = i;
			let minVal = parseInt(values[i], 10);

			for (let j = i; j < values.length; j++) {

				if (!isSorting) return;

				plusComparison();
				setColor(j, colors.check);

				let currentVal = parseInt(values[j], 10);
				if (currentVal < minVal) {
					minIndex = j;
					minVal = currentVal;
				}

				await this.sleep(50);
				setColor(j, colors.normal);

			}

			if (i != minIndex) {
				await this.swap(values, i, minIndex);
				plusSwap();
			}

		}

	}

}
