
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 
 const getLength = (list: ListNode | null) : number | null => {
    if(list === null) return null;
    
    let nextNode = list.next;
    let length = 1;
    while(nextNode !== null){
        length++;
        nextNode = nextNode.next;
    }
    return length;
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const firstLength = getLength(l1);
    const secondLength = getLength(l2);
    const maxLength = Math.max(firstLength, secondLength);
    const deltaLength = Math.abs(firstLength - secondLength);
    
    let l1Node : ListNode | null = null;
    let l2Node : ListNode | null = null;
    let prevNode : ListNode | null = null;
    let firstNode : ListNode | null = null;    
    for(let i =0; i< maxLength; i++){
        if(l1Node === null)
        {
            if(firstLength === maxLength || i === deltaLength){
                l1Node = l1;
            }
        }            
        else
            l1Node = l1Node.next;
        
        if(l2Node === null)
        {
            if(secondLength === maxLength || i === deltaLength){
                l2Node = l2;  
            }
        }              
        else
            l2Node = l2Node.next;
        
        const l1NodeValue = l1Node === null ? 0 : l1Node.val;
        const l2NodeValue = l2Node === null ? 0 : l2Node.val;
        const currentValue = (l1NodeValue+ l2NodeValue)% 10;
        const hasCarry = l1NodeValue+ l2NodeValue > 9;

        const currentNode = new ListNode(currentValue);
        if(firstNode === null)
            firstNode = currentNode;
        else
            prevNode.next = currentNode;

        if(hasCarry){
            if(prevNode === null){
                const oldFirstNode = firstNode;
                firstNode = new ListNode(1, oldFirstNode);
            }
            else
                prevNode.val = prevNode.val +1;
        }
        prevNode = currentNode;
    }   
    
        
    return firstNode;
};

const l1 = new ListNode(9);
const l2 = new ListNode(9);
console.log(addTwoNumbers(l1, l2));