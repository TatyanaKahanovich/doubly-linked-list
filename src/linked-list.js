const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);
        if(this.length){
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;

        } else {
            this._tail = node;
            this._head = node;
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
        let count = 0;
        let nodeCurrent = this._head;

        while (count < this.length){
            if (count === index) {
                return nodeCurrent.data;
            } else {
                nodeCurrent = nodeCurrent.next;
            }
            count++;
        }
        return this;
    }

    insertAt(index, data) {
        let count = 0,
            nodeCurrent = this._head;

        if (this.length !== 0) {

            while (count < this.length){

                if (count == index) {
                    let nodePrev = nodeCurrent.prev,
                        nodeNew = new Node();
                    nodeNew.data = data;
                    nodePrev.next = nodeNew;
                    nodeNew.next = nodeCurrent;
                    nodeNew.prev = nodePrev;
                    nodeCurrent.prev = nodeNew;
					this.length++;
                } else {
                    nodeCurrent = nodeCurrent.next;
                }

                count++;
            }
        } else {
            return false;
        }
        return this;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    clear() {
        let node = new Node();
        this.length = 0;
        this._head = node;
        this._tail = node;
        return this;
    }


    deleteAt(index) {
        let count = 0;

        if(index < 0 || index > this.length-1) {
            throw new Error();
        } else if(index === 0){
			this.clear();
			return this;
		}
        if (this.length !== 0) {
            let nodeCurrent = this._head;

            while (count < this.length){

                if (count === index) {
                    nodeCurrent.prev.next = nodeCurrent.next;
                    nodeCurrent.next.prev = nodeCurrent.prev;
                    this.length--;
                }
                nodeCurrent = nodeCurrent.next;
                count++;
            }
        } else {
            return false;
        }

    }

    reverse() {
        let temp  = this._head;
		this._head = this._tail;
		this._tail = temp;

        while(temp !== null){
            let temp_next = temp.next,
                temp_prev = temp.prev;
            temp.next = temp_prev;
            temp.prev =  temp_next;
            temp = temp.prev;
        }
        return this;
    }

    indexOf(data) {

        if (this.length !== 0) {
            let count = 0,
                nodeCurrent = this._head;

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
