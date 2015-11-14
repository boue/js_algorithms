//issue with mergesort is if we are trying to sort very large data set using this algorithm, the amount of space we need
//of space required to store two merged subarrays can be large

var arr = [21, 1112, 3, 746, 198, 8990, 198, 24, 9];

function mergeSort(arr){
  if(arr.length < 2){
    return arr;
  }

  var middle = parseInt(arr.length / 2);
  //split into left of middle and right of middle
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  //final function
}

//we keep on dividing from the middle until we get only one element in each halves
//then sort the subarrays and join (merge) them back to be the final array 
function merge(left, right){
  var result = [];

  while(left.length && right.length){
    if(left[0] <= right[0]){
      result.push(left.shift());
    } else{
      result.push(right.shift());
    }
  }

}

