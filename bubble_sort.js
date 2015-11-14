//it will go thru the loop numElements times
function bubbleSort(){
  var numElements = this.datastore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer){
    for (var inner = 0; inner <= outer -1){
      if (this.datastore[inner] > this.datastore[inner+1]){
        swap(this.datastore, inner, inner+1);
      }
    }
    console.log(this.toString());
  }
}