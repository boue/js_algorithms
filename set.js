//sets are build around an array
//two sets are equal if they contain exactly the same members
//set is considered a subset of another set if all the members of the first set are contained in the second set.
//unordered collection in which no members occur more than once

function Set(){
  this.dataStore = [];
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}

Set.prototype.add = function(data){
  if (this.dataStore.indexOf(data) < 0){
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}