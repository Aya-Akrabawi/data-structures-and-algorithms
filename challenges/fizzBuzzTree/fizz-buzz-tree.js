'use strict';

function FizzBuzzTree(tree) {

  let buzzFizzFunc = (node) => {
    let str = '';
    if (node.value % 3 === 0) str += 'Fizz';
    if (node.value % 5 === 0) str += 'Buzz';
    if (!str) str = node.value;
    node.value = str;
    if (node.left) buzzFizzFunc(node.left);
    if (node.right) buzzFizzFunc(node.right);
  };

  buzzFizzFunc(tree.root);
  return tree;
}

module.exports = FizzBuzzTree;
