
var TextEditor = function() {
    this.forward = [];
    this.backward = [];
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    for (const char of text) this.forward.push(char);
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
    let deleted = 0;
    while (this.forward.length && deleted < k) {
        this.forward.pop();
        deleted += 1;
    }
    return deleted;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
    
    let moved = 0;
    
    while (this.forward.length && moved < k) {
        this.backward.push(this.forward.pop());
        moved += 1;
    }
    
    return toTheLeft(this.forward);
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
    let moved = 0;
    
    while (this.backward.length && moved < k) {
        this.forward.push(this.backward.pop());
        moved += 1;
    }
    
    return toTheLeft(this.forward);
};

/** 
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

function toTheLeft(arr) {
    const letters = [];
    
    for (let i = Math.max(0, arr.length - 10); i < arr.length; i++) {
        letters.push(arr[i]);
    }
    
    return letters.join('');
}