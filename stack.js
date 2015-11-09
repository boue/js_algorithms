function Stack(){
  this._size = 0;
  this._storage = 0;
}

//declare size by adding one and using that var as a key with data as the value
Stack.prototype.push = function(data){
  var size = this._size++;
  var._storage[size] = data;
}

//pop must remove the most recent added data
Stack.prototype.pop = function(){
  var size = this._size,
      deletedData;

  //most recent since size represents index of latest 
  //size to make sure we can't pop and changes size to -1 once we reach empty object
  if(size){
    deletedData = this._storage[size];

  //use the key as reference to delete data
    delete this._storage[size];
    this.size--;

    return deletedData;
  };
};