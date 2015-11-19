function Node() = {
  value: val;
  next: null,
  previous: null
}

function DoublyLinkedList(){
  this.head = null;
}

DoublyLinkedList.prototype.push = function(val){
  var head = this.head;
  var current = head;
  var previous = head;

  if(!head){
    this.head = {value: val, previous: null, next: null};
  }
  else{
    while(current && current.next){
      previous = current;
      current = current.next;
    }
    current.next = {value: val, previous: current, next: null}
  }
}