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

Set.prototype.contains(data) = function(){
  if (this.dataStore.indexOf(data) > -1){
    return true;
  } else {
    return false;
  }
}

Set.prototype.union(set) = function(){
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i){
    tempSet.add(this.dataStore[i]);
  }
  for (var i = 0; i < set.dataStore.length; ++i){
    if (!tempSet.contains(set.dataStore[i])){
      tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet;
}

Set.prototype.size(){
  return this.dataStore.length;
}

//if original set is bigger than set we are checking on then it can't be a subset
//as well then we make sure each member in original set is in bigger set if so return true if not then false
Set.prototype.subsect(set){
  if (this.size() > set.size()){
    return false;
  }
  else {
    for each (var member in this.dataStore){
      if (!set.contains(member)){
        return false
      }
    }
  }
  return true;
}

var names = new Set(); 
names.add("David"); names.add("Jennifer"); names.add("Cynthia"); names.add("Mike"); names.add("Raymond");
console.log(names.show());