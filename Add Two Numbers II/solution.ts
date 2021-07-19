class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const getLength = (list: ListNode | null): number | null => {
  if (list === null) return null;

  let nextNode = list.next;
  let length = 1;
  while (nextNode !== null) {
    length++;
    nextNode = nextNode.next;
  }
  return length;
};

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const firstLength = getLength(l1);
  const secondLength = getLength(l2);
  const maxLength = Math.max(firstLength, secondLength);
  const deltaLength = Math.abs(firstLength - secondLength);

  let l1Node: ListNode | null = null;
  let l2Node: ListNode | null = null;
  let prevNode: ListNode | null = null;
  let firstNode: ListNode | null = null;
  let forwardStack: ListNode[] = [];
  for (let i = 0; i < maxLength; i++) {
    if (l1Node === null) {
      if (firstLength === maxLength || i === deltaLength) {
        l1Node = l1;
      }
    } else l1Node = l1Node.next;

    if (l2Node === null) {
      if (secondLength === maxLength || i === deltaLength) {
        l2Node = l2;
      }
    } else l2Node = l2Node.next;

    const l1NodeValue = l1Node === null ? 0 : l1Node.val;
    const l2NodeValue = l2Node === null ? 0 : l2Node.val;
    const currentValue = (l1NodeValue + l2NodeValue) % 10;
    const hasCarry = l1NodeValue + l2NodeValue > 9;

    const currentNode = new ListNode(currentValue);
    if (firstNode === null) firstNode = currentNode;
    else prevNode.next = currentNode;

    if (hasCarry) {
      let currentNode: ListNode | null = null;
      let reverseStack: ListNode[] = [];
      let finishedCarry = false;
      while (forwardStack.length !== 0 && !finishedCarry) {
        currentNode = forwardStack.pop();
        reverseStack.push(currentNode);
        finishedCarry = currentNode.val < 9;
        currentNode.val = (currentNode.val + 1) % 10;
      }
      if (!finishedCarry) {
        const oldFirstNode = firstNode;
        firstNode = new ListNode(1, oldFirstNode);
        forwardStack.push(firstNode);
      }
      while (reverseStack.length !== 0) {
        forwardStack.push(reverseStack.pop());
      }
    }
    forwardStack.push(currentNode);
    prevNode = currentNode;
  }
  return firstNode;
}

const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(7))));
const l2 = new ListNode(1, new ListNode(1));
console.log(JSON.stringify(addTwoNumbers(l1, l2)));
