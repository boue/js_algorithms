function Dictionary(){
  this.datastore = new Array();
}

Dictionary.prototype.add = function(key, value){
  this.datastore[key] = value;
}

Dictionary.prototype.find = function(key){
  return this.datastore[key];
}

//delete takes a key as an argument and deleted both key + val
Dictionary.prototype.remove = function(key){
  delete this.datastore[key];
}

Dictionary.prototype.showAll = function(){
  for each(var key in Object.keys(this.datastore)){
    print(key + "=>" this.datastore[key]);
  }
}