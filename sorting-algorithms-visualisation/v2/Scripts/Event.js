class Event {

    static on(name, callback) {
        if (!this[name]) {
            this[name] = [];
        }
        this[name].push(callback);
    }

    static emit(name, value) {
        if (this[name]) {
            this[name].forEach(callback => callback(value));
        }
    }

}
