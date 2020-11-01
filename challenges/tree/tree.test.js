'use strict';
const Node = require('../tree/tree')
const BinaryTree = require('../tree/tree')


//Instantiate empty tree
describe('Instantiate empty tree', () => {
  const testTree = new BinaryTree
  it('returns that tree is empty ', () => {
    expect(testTree.root).toEqual(null)
  })
})

//Instantiate a tree with a single root node
describe('Instantiate a tree with a single root node', () => {
  const testTree = new BinaryTree
testTree.add(5)
  it('returns root of tree ', () => {
    expect(testTree.root.value).toEqual(5)
  })
})

//Add a left child and right child to a single root node
describe('Instantiate a tree with a root, a left, and a right', () => {
  const testTree = new BinaryTree

testTree.add(5)
testTree.add(6)
testTree.add(10)
testTree.add(1)
testTree.add(80)

  it('returns left of root of tree ', () => {
    expect(testTree.root.left.value).toEqual(1)
  })
  it('returns right of root of tree ', () => {
    expect(testTree.root.right.value).toEqual(6)
  })
})


//return a collection of preorder traversal
describe('Preorder Traversal', () => {
  const testTree = new BinaryTree

testTree.add(5)
testTree.add(6)
testTree.add(10)
testTree.add(1)
testTree.add(80)

  let result = testTree.preOrder()
  it('returns tree preorder traversed ', () => {
    expect(result).toEqual([5, 1, 6, 10, 80])
  })
})

//return a collection of inorder traversal
describe('Inorder Traversal', () => {
  const testTree = new BinaryTree

testTree.add(5)
testTree.add(6)
testTree.add(10)
testTree.add(1)
testTree.add(80)
  let result = testTree.inOrder()
  it('returns tree inorder traversed ', () => {
    expect(result).toEqual([1,5,6,10,80])
  })
})

//return a collection of postorder
describe('Postorder Traversal', () => {
  const testTree = new BinaryTree

testTree.add(5)
testTree.add(6)
testTree.add(10)
testTree.add(1)
testTree.add(80)
  let result = testTree.postOrder()
  it('returns tree postorder traversed ', () => {
    expect(result).toEqual([1,80,10,6,5])
  })
})

describe('Maximum Value class-16', ()=> {
  it('Returns null for empty trees', ()=> {
    let binaryTree = new BinaryTree();

    expect(binaryTree.findMaximumValue()).toBeNull;
  });

  it('Can successfully find a maximum value', ()=> {

    let tree = new BinaryTree();
  tree.add(6);
  tree.add(2);
  tree.add(4);
  tree.add(7);
  tree.add(1);
  tree.add(10);
  tree.add(3);

    expect(tree.findMaximumValue()).toEqual(10);
  });
});
