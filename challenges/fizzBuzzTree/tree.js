'use strict';
class BinaryTree {

    constructor(root) {
      this.root = root;
    }
  
    // Root - Left - Right
    preOrder() {
      let results = [];
  
      let _walk = (node) => {
        // 1. read TreeNode
        results.push(node.value);
        // 2. go Left
        if (node.left) _walk(node.left);
        // 3. go Right
        if (node.right) _walk(node.right);
      };
  
      _walk(this.root);
      return results;
    }
  
    // Left - Root - Right
    inOrder() {
      let results = [];
  
      let _walk = (node) => {
        if (node.left) _walk(node.left);
        results.push(node.value);
        if (node.right) _walk(node.right);
      };
  
      _walk(this.root);
  
      return results;
    }
  
    // Left - Right - Root
    postOrder() {
      let results = [];
  
      let _walk = (node) => {
        if (node.left) _walk(node.left);
        if (node.right) _walk(node.right);
        results.push(node.value);
      };
      _walk(this.root);
  
      return results;
    }
  
  }
  module.exports = BinaryTree;
    