function HashTable(size){
  this.size = size;
  this.buckets = new Array(size);

  this.add = function(value){
    var index = this.hash(value);
    this.buckets[index] = value;
  };

  this.hash = function(value){
    var sum = 0;
    for (var i = 0; i < value.length; ++i){
      sum += value[i].charCodeAt() - 97;
    }
    return sum % this.size;
  };
}