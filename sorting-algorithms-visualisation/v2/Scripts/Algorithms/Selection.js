
class Selection {

	begin() {

		this.base = 0;
		this.compare = 1;
		this.min = 0;

	}

	/**
	 * A.
	 * 
	 * @param {array} list - The list for which to complete the next sorting step.
	 * @returns {boolean} - True if the list is completely sorted.
	 */
	next() {

		if (list.get(this.compare) < list.get(this.min)) {
			this.min = this.compare;
		}

		this.compare++;

		if (this.compare == list.getLength()) {
			if (this.min != this.base) {
				list.swap(this.base, this.min);
			}
			this.base++;
			this.compare = this.base + 1;
			this.min = this.base;
		}
		
		return (this.base == list.getLength() - 1);

	}

}