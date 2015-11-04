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
  }
}