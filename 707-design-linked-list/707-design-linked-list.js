var Node = function (val) {
    this.val = val;
    this.next = null;
};

var MyLinkedList = function() {
    this.length = 0;
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
        return -1;
    }
    
    let counter = 0;
    let current = this.head;
    
    while (counter < index) {
        current = current.next;
        counter += 1;
    }
    
    return current.val;
};

MyLinkedList.prototype.getNode = function(index) {
    if (index < 0 || index >= this.length) {
        return -1;
    }
    
    let counter = 0;
    let current = this.head;
    
    while (counter !== index) {
        current = current.next;
        counter += 1;
    }
    
    return current;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val); 
          
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    
    this.length += 1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length += 1;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.length || index < 0) return;
    if (index === this.length) return this.addAtTail(val);
    if (index === 0) return this.addAtHead(val);
    
    const newNode = new Node(val);
    const prevNode = this.getNode(index - 1);
    
    newNode.next = prevNode.next
    prevNode.next = newNode
    
    this.length += 1;
};


MyLinkedList.prototype.shift = function() {
    if (!this.head) return;

    const oldHead = this.head;
    this.head = this.head.next;
    this.length -= 1;

    if (this.length === 0) this.tail = null;
};

MyLinkedList.prototype.pop = function() {
    
    if (!this.head) return;

    let current = this.head;
    let newTail = current;

    while (current.next) {
        newTail = current;
        current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
        this.head = null;
        this.tail = null;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= 0 && index < this.length) {
        let prevNode;
        
        if (index === 0) return this.shift();
        
        if (index === this.length - 1) return this.pop();
        
        prevNode = this.getNode(index - 1);
        let current = prevNode.next;
        
        prevNode.next = current.next;
        current.next = null;
        
        this.length -= 1;
        return;
    }
};


/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */