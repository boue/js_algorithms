//a better version of this is the ShellSort, go see js file for that

function insertionSort(){
  var temp, inner;
  for (var outer = 1; outer <= this.dataStore.length - 1; ++outer){
    temp = this.dataStore[outer];
    inner = outer;
    //swap while number on left is bigger
    while (inner > 0 && (this.dataStore[inner-1] >= temp)){
      this.dataStore[inner] = this.dataStore[inner-1];
      --inner;
    }
    this.dataStore[inner] = temp;
  }
}