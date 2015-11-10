function Dictionary(){
  this.datastore = [];
}

Dictionary.prototype.add = function(key, value){
  this.datastore[key] = value;
};

Dictionary.prototype.find = function(key){
  return this.datastore[key];
};

//delete takes a key as an argument and deleted both key + val
Dictionary.prototype.remove = function(key){
  delete this.datastore[key];
};

var pbook = new Dictionary(); 
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David")); pbook.remove("David");