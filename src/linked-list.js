const Node = require('./node');

class LinkedList {
    constructor() {
        this.list = [];
    }

    append(data) {
        this.list.push(data);
    }

    head() {
        return this.list[0];
    }

    tail() {
        return this.list[this.list.length-1];
    }

    at(index) {
        return this.list[index];
    }

    insertAt(index, data) {
        this.list[index] = data;
    }

    isEmpty() {
        return this.list.length ? true : false;
    }

    clear() {
        this.list.length = 0;
    }

    deleteAt(index) {
        this.list.delete(index);
    }

    reverse() {
        this.list.reverse();
    }

    indexOf(data) {
        return this.list.indexOf(data);
    }
}

module.exports = LinkedList;
