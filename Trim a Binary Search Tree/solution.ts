class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

const isLeaf = (root: TreeNode | null): boolean | null => {
    if(root === null) return null;
    if(root.left === null && root.right === null) return true;
    return false;
}

const isValid = (root: TreeNode | null, low: number, high: number) : boolean => {
    if(root === null) return false;
    return root.val >= low && root.val <= high;
}

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    if(root === null) return null;
    if(isLeaf(root))
        return isValid(root, low, high) ? root: null;  
    else{        
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);       
        if(!isValid(root, low, high)){
            if(root.left !== null) root = root.left;
            else root = root.right;
        }
        return root;
    }
};


const myTree = new TreeNode(1, new TreeNode(0), new TreeNode(2));
console.log(trimBST(myTree, 1, 2));