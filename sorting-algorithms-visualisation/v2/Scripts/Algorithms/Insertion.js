
class Insertion {

	begin() {

		this.index = 1;
		this.last = 1;

	}

	/**
	 * A.
	 * 
	 * @param {array} list - The list for which to complete the next sorting step.
	 * @returns {boolean} - True if the list is completely sorted.
	 */
	next() {

		if (list.get(this.index) < list.get(this.index - 1) && this.index != 0) {
			list.swap(this.index, this.index - 1);
			this.index--;
		}
		else {
			this.last++;
			this.index = this.last;
		}

		return this.last == list.getLength();

	}

}