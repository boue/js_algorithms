function Stack(){
  this._size = 0;
  this._storage = 0;
}

//declare size by adding one and using that var as a key with data as the value
Stack.prototype.push = function(data){
  var size = this._size++;
  var._storage[size] = data;
}