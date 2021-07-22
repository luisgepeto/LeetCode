class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const inorderSuccessor = (
  root: TreeNode | null,
  p: TreeNode | null
): TreeNode | null => {
  if (p === null) return null;
  if (root === null) return null;

  if (p.val > root.val) return inorderSuccessor(root.right, p);
  else return inorderSuccessor(root.left, p);
};

console.log(
  inorderSuccessor(
    new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
      new TreeNode(6)
    ),
    new TreeNode(3)
  )
);
