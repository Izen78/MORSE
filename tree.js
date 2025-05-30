// Create a ternary parse tree for Morse code

class MorseNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  setLeft(val) {
    this.left = val;
  }
  setRight(val) {
    this.right = val;
  }
  getVal() {
    return this.val;
  }
  getLeft() {
    return this.left;
  }
  getRight() {
    return this.right;
  }
}

class MorseTree {
  constructor() {
    console.log("Hi Tree");
    this.tree = null;
    this.create();
  }

  create() {
    this.tree = new MorseNode("Start");
    this.tree.setLeft(new MorseNode("E"));
    this.tree.left.setRight(new MorseNode("A"));
    return this.tree;
  }

  drawTree() {
    console.log(this.tree.getVal());
    console.log(this.tree.left.getVal());
  }
}

export function createTree() {
  const tree = new MorseTree();
  return tree.tree;
}
