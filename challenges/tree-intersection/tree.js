class BinaryTree {
    constructor() {
      this.root = null;
      this.arr = [];
    }
    
    add(node) {
      if (!this.root) {
        this.root = node;
        this.arr[0] = (node);
        return
      }
  
      let nextNode = this.root;
      let arr = this.arr;
      while (arr[arr.length - 1]) {
        let temp = arr[arr.length - 1];
        if (temp.left && temp.right) {
          arr.pop();
          arr.unshift(temp.left);
          arr.unshift(temp.right);
        }
        nextNode = temp;
        if (!temp.left) {
          nextNode.left = node;
          nextNode = nextNode.left;
          return;
        } else if (!temp.right) {
          nextNode.right = node;
          nextNode = nextNode.right;
          return;
        }
      }
    }
    
    
  }

  module.exports = BinaryTree; 