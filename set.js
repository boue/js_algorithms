//sets are build around an array
//two sets are equal if they contain exactly the same members
//set is considered a subset of another set if all the members of the first set are contained in the second set.
//unordered collection in which no members occur more than once

function Set(){
  this.dataStore = [];
}

Set.prototype.add = function(data){
  if (this.dataStore.indexOf(data) < 0){
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}

Set.prototype.remove = function(data){
  var pos = this.dataStore.indexOf(data);
  if (pos > -1){
    this.dataStore.splice(pos,1);
    return true;
  } else {
    return false;
  }
}

Set.prototype.show = function(){
  return this.dataStore;
}

var names = new Set(); 
names.add("David"); names.add("Jennifer"); names.add("Cynthia"); names.add("Mike"); names.add("Raymond");
console.log(names.show());