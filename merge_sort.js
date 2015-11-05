var arr = [21, 1112, 3, 746, 198, 8990, 198, 24, 9];

function mergeSort(arr){
  if(arr.length < 2){
    return arr;
  }

  var middle = parseInt(arr.length / 2);
  //split into left of middle and right of middle
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);
  
};