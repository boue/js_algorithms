function reverseSll(sll){
  if (!sll.head || !sll.head.next) return sll;

  var nodes = [];
  var current = sll.head;

  //push all nodes in an array
  while(current){
    nodes.push(current);
    current = current.next;
  }
}