function Dictionary(){
  this.datastore = new Array();
}

Dictionary.prototype.add = function(key, value){
  this.datastore[key] = value;
}

Dictionary.prototype.find = function(key){
  return this.datastore[key];
}

