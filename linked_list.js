function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(val){
  //node has a value and a pointer to null
  var node = {
    value: val,
    next: null
  }
  if(!this.head){
    this.head = node;
  } else{
    //we traverse until there is nothing and we add our new node at the end of list
    current = this.head;
    //while there are nodes
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
}

LinkedList.prototype.remove = function(val){
  var current = this.head;
  //your targeted node is in the head. Need to replace head with the next node
  if(current.value == val){
    this.head = current.next;
  } else {
    //they are the same 
    var previous = current;
    while(current.next){
      //your target node is in the middle of linked list so make the node after your targeted node to be the next node of the node 
      //before your targeted node (you are making middle node dissapear used to be a-b-c now a-c since a isnt pointing to b anymore)
      if(current.value == val){
        previous.next = current.next;
        break;
      }
      //moving pointers
      previous = current;
      current = current.next;
    }
    //target node is in the tail, remove it from the tail. Next on the node before the tail will be null.
    //since current.next checked for every node with a node next to it that means its the tail
    if(current.value == val){
      previous.next = null;
    }
  }
}