class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(element) {
        const node = new Node(element);
        let current = null;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            const node = new Node(element);
            let current = this.head;
            let prevous = null;
            let index = 0;
            if (position === 0) {
                this.head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        return false;
    }

    removeAt(position) {
        //检查越界
        if (position >= -1 && position < length) {
            let current = this.head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                this.head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }
        return null;
    }

    findIndex(element) {
        let current = this.head;
        let index = -1;
        while (current) {
            if (element === current.element) {
                return index + 1;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        const index = this.findIndex(element);
        return this.removeAt(index);
    }

    isEmpty() {
        return !this.length;
    }

    size() {
        return this.length;
    }

    toString() {
        let current = this.head;
        let string = "";
        while (current) {
            string += ` ${current.element}`;
            current = current.next;
        }
        return string;
    }
}