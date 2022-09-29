
class BubbleSort extends Algorithm {

	constructor() { super() }

	async sort() {

		let n = values.length;

		let hasSwapped;

		do {

			hasSwapped = false;

			for (let i = 1; i < n; i++) {

				if (!isSorting) return;

				let previuosVal = parseInt(values[i - 1], 10);
				let currentVal = parseInt(values[i], 10);
				setColor(i - 1, colors.check);
				setColor(i, colors.check);

				await this.sleep(200);

				setColor(i - 1, colors.normal);
				setColor(i, colors.normal);

				plusComparison();

				if (previuosVal > currentVal) {
					await this.swap(values, i, i-1);
					hasSwapped = true;
					plusSwap();
				}

				

			}

		} 
		while (hasSwapped);
		
	}

}
