'use strict';

class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  class BinaryTree {
    constructor() {
      this.root = null;
    }
    // ROOT - LEFT - RIGHT
    preOrder() {
      const results = [];
      const _walk = (node) => {
        results.push(node.value);
        if (node.left) _walk(node.left);
        if (node.right) _walk(node.right);
      };

      _walk(this.root);
      return results;
    }
    //  LEFT- ROOT - RIGHT
    inOrder() {
      const results = [];
      const _walk = (node) => {
        if (node.left) _walk(node.left);
        results.push(node.value);
        if (node.right) _walk(node.right);
      };

      _walk(this.root);
      return results;
    }
    // LEFT - RIGHT - ROOT
    postOrder() {
      const results = [];
      const _walk = (node) => {
        if (node.left) _walk(node.left);
        if (node.right) _walk(node.right);
        results.push(node.value);
      };

      _walk(this.root);
      return results;
    }

    add(value){
        if(this.root == null){
          this.root = new Node(value);
          return this;
        }

        return  __walk(this.root);

        function __walk(node){
          if(value<node.value){
            if(node.left == null){
              node.left = new Node(value);
              return this;
            }else {
              return __walk(node.left);
            }
          }else if(value>node.value){
            if(node.right == null){
              node.right = new Node(value);
              return this;
            }else {
              return __walk(node.right);
            }
          }else {
            return 'this node is  exist';
          }
        }
      }
      contains(value){
        if(this.root == null ){
          return 'Empty tree';
        }
        let node = this.root;
        while(node != null){
          if(value == node.value){
            return true;
          }else if(value< node.value){
            node=node.left;
          } else  if(value> node.value){
            node = node.right;
          }
        }
        return false;
      }

      findMaximumValue(){
        if(this.root === null)
          return null;
        let max = 0;
        helperFunction(this.root);
        function helperFunction (root){
          if (root.value > max) 
            max = root.value;
          if(root.left !== null){
            helperFunction(root.left);
          }
          if(root.right !== null){
            helperFunction(root.right);
          }
        } 
        return max;
      } 


  }

  let tree = new BinaryTree();
  tree.add(6);
  tree.add(2);
  tree.add(4);
  tree.add(7);
  tree.add(1);
  tree.add(10);
  tree.add(3);
  // console.log('tree = ',tree);
  // console.log('tree.contains(10) = ',tree.contains(10));
  console.log('findMaximumValue',tree.findMaximumValue());
  module.exports = (Node , BinaryTree);


