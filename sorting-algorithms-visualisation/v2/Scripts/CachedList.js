
/**
 * 
 */
class CachedList {

	constructor(numElements) {

		this.cache = new Array(numElements);
		this.elements = new Array(numElements);
		
		this.newRandomList();

	}

	/**
	 * Gets the value of the element at the given index.
	 * 
	 * @param {number} i - Index of the element.
	 * @returns {number} - Value of the element.
	 */
	get(i) {

		return this.elements[i];

	}

	set(i, value) {

		this.elements[i] = value;

	}

	/**
	 * Generates new random values for the list.
	 * The list will stay the same length.
	 */
	newRandomList() {
		
		for (let i = 0; i < this.cache.length; i++) {
			this.cache[i] = Math.random();
		}

		this.elements = this.cache.slice();

	}

	/**
	 * Resets the list to the original state.
	 */
	reset() {

		this.elements = this.cache.slice(0, this.elements.length);

	}

	/**
	 * Swaps the elements at the given indices.
	 * 
	 * @param {number} i - Index of first element.
	 * @param {number} j - Index of second element.
	 */
	swap(i, j) {

		let temp = this.elements[i];
		this.elements[i] = this.elements[j];
		this.elements[j] = temp;

	}

	/**
	 * Sets the number of elements for this list.
	 * If the new length is shorter than the old length then the list is trimmed.
	 * If the new length is larger then the list is extended based on the random seed.
	 * 
	 * @param {number} length - New number of elements for the list.
	 */
	resize(length) {

		if (length > this.cache.length) {
			for (let i = 0; i < length - this.cache.length; i++) {
				this.cache.push(Math.random());
			}
		}

		this.elements = this.cache.slice(0, length);

	}

	/**
	 * Gets the length of the underlying array.
	 * 
	 * @returns {number} - Length of the list
	 */
	getLength() {

		return this.elements.length;

	}

}