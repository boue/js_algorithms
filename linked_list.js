function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(val){
  //node has a value and a pointer to null
  var node = {
    value: val,
    next: null
  }
}