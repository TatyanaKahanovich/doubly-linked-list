const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
    }

    append(data) {
        var node = new Node();
        if (this.length === 0 ){
            this._head = node;
            this._tail = node;
            node.data = data;
            this.data = data;

        } else {
            node.data = data;
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
            this.data = data;
        }
        this.length++;
        return this;

    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var count = 0;
        if (this.length !== 0) {
            var nodeCurrent = this._head;
            while (nodeCurrent !== null){
                if (count === index) {
                    return nodeCurrent.data;
                }
                nodeCurrent = nodeCurrent.next;
                count++;
            }
            return -1;
        }
        else {
            return -1;
        }
    }

    insertAt(index, data) {
        var count = 0;
        if (this.length !== 0) {
            var nodeCurrent = this._head;
            while (nodeCurrent !== null){
                if (count === index) {
                    return nodeCurrent.data = data;
                }
                nodeCurrent = nodeCurrent.next;
                count++;
            }
            return -1;
        }
        else {
            return -1;
        }
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    clear() {
        var node = new Node();
        this.length = 0;
        this._head = node;
        this._tail = node;
    }

    deleteAt(index) {
        var count = 0;
        if (this.length !== 0) {
            var nodeCurrent = this._head;
            while (nodeCurrent !== null){
                if (count === index) {
                    nodeCurrent.prev.next = nodeCurrent.next;
                    nodeCurrent.next.prev = nodeCurrent.prev;
                    return nodeCurrent;
                }
                nodeCurrent = nodeCurrent.next;
                count++;
            }
            return -1;
        }
        else {
            return -1;
        }
    }

    reverse() {
        var temp = this._head;
        this._tail = temp;
        while (this._head != null) {
            var temp = this._head.next;
            this._head.next = this._head.prev;
            this._head.prev = temp;
            if (!temp) {
                break;
            }
            this._head = temp;
        }
    }

    indexOf(data) {
        if (this.length !== 0) {
            var count = 0;
            var nodeCurrent = this._head;
            do {
                if (nodeCurrent.data === data) {
                    return count;
                }
                nodeCurrent = nodeCurrent.next;
                count++;
            } while (nodeCurrent !== null);
            return -1;
        }
        else {
            return -1;
        }
    }
}

module.exports = LinkedList;
