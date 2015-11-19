//we are assuming linked_list.js is loaded in an html file before script way
function reverseSll(sll){
  if (!sll.head || !sll.head.next) return sll;

  var nodes = [];
  var current = sll.head;

  //push all nodes in an array
  while(current){
    nodes.push(current);
    current = current.next;
  }
  
  var reversedLL = new LinkedList();

  reversedLL.head = nodes.pop();
  current = reversedLL.head;

  var node = nodes.pop();

  while(node){
    node.next = null;
    current.next = node;
    current = current.next;
    node = nodes.pop();
  }
return reversedLL
}