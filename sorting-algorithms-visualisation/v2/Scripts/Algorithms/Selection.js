
class Selection {

	begin(list) {
		this.list = list;
		this.base = 0;
		this.compare = 1;
		this.min = 0;
	}

	next() {
		if (this.list.get(this.compare) < this.list.get(this.min)) {
			this.min = this.compare;
		}
		this.compare++;
		if (this.compare == this.list.count) {
			if (this.min != this.base) {
				this.list.swap(this.base, this.min);
			}
			this.base++;
			this.compare = this.base + 1;
			this.min = this.base;
		}
		return (this.base == this.list.count - 1);
	}
	
}