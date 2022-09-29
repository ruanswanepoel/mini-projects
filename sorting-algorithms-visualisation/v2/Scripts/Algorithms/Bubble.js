
class Bubble {

	begin() {

		this.index = 0;
		this.last = list.getLength() - 1;
			
	}

	/**
	 * A.
	 * 
	 * @param {array} list - The list for which to complete the next sorting step.
	 * @returns {boolean} - True if the list is completely sorted.
	 */
	next() {

		if (list.get(this.index) > list.get(this.index + 1)) {
			list.swap(this.index, this.index + 1);
		}

		this.index++;

		if (this.index == this.last) {
			this.index = 0;
			this.last--;
		}

		return (this.last == 0);

	}

}