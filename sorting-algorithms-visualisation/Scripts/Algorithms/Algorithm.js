
class Algorithm {

	constructor() { }

	async swap(values, i, j) {
		let temp = values[i];
		values[i] = values[j];
		values[j] = temp;
		swap(i, j);
		let sleepTime = anim_time * 1000;
		await this.sleep(sleepTime);
		drawContent();
	}

	sleep(msec) {
		return new Promise(resolve => setTimeout(resolve, msec));
	}

}