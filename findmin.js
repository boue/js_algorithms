function findMin(arr){
  var min = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr){
  var max = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

//self-organization
function swap(arr, index, index1){
  temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}