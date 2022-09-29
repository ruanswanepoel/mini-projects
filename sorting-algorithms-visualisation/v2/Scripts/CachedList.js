class CachedList {

    constructor(count) {
        this.count = count;
        this.cache = this._randomArray(count);
        this.elements = this.cache.slice();
    }

    reset() {
        this.elements = this.cache.slice(0, this.count);
    }

    incCount() {
        this.count++;
        this.resize();
        Event.emit('listcountchanged', this.count);
    }

    decCount() {
        this.count--;
        this.resize();
        Event.emit('listcountchanged', this.count);
    }

    setCount(count) {
        this.count = count;
        this.resize();
        Event.emit('listcountchanged', this.count);
    }

    get(i) {
        return this.elements[i];
    }

    set(i, value) {
        this.elements[i] = value;
    }

    swap(i, j) {
		let temp = this.elements[i];
		this.elements[i] = this.elements[j];
		this.elements[j] = temp;
	}

    resize() {
		if (this.count > this.cache.length) {
            this.cache.push(this._randomArray(this.count - this.cache.length));
		}
        this.reset();
	}

    _randomArray(n) {
        return Array(n).fill(0).map(() => Math.random());
    }

}
