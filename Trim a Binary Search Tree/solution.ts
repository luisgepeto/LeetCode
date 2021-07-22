class MyTreeNode {
  val: number;
  left: MyTreeNode | null;
  right: MyTreeNode | null;
  constructor(
    val?: number,
    left?: MyTreeNode | null,
    right?: MyTreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const isLeaf = (root: MyTreeNode | null): boolean | null => {
  if (root === null) return null;
  if (root.left === null && root.right === null) return true;
  return false;
};

const isValid = (
  root: MyTreeNode | null,
  low: number,
  high: number
): boolean => {
  if (root === null) return false;
  return root.val >= low && root.val <= high;
};

function trimBST(
  root: MyTreeNode | null,
  low: number,
  high: number
): MyTreeNode | null {
  if (root === null) return null;
  if (isLeaf(root)) return isValid(root, low, high) ? root : null;
  else {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    if (!isValid(root, low, high)) {
      if (root.left !== null) root = root.left;
      else root = root.right;
    }
    return root;
  }
}

const myTree = new MyTreeNode(1, new MyTreeNode(0), new MyTreeNode(2));
console.log(trimBST(myTree, 1, 2));
