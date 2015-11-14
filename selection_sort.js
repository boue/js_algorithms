// The outer loop moves from the
// first element in the array to the next to last element; the inner loop moves from the
// second array element to the last element, looking for values that are smaller than the
// element currently being pointed to by the outer loop. 
function selectionSort(){
  var min, temp;
  //last two numbers are already sorted
  for (var outer = 0; outer <= this.dataStore.length - 2; ++outer){
    min = outer;
    for (var inner = outer + 1; inner <= this.dataStore.lenght - 1; ++inner){
      if (this.dataStore[inner] < this.dataStore[min]){
        min = inner;
      }
    }  
    swap(this.dataStore, outer, min);
  }
}

function swap(arr, index1, index2){
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}