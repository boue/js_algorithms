//great when array is sorted (must be sorted)

function binaryIndexOf(searchElement){
  'use strict';

  var minIndex = 0;
  var maxIndex = this.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex){
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = this[currentIndex];

    if (currentElement < searchElement){
      minIndex = currentIndex + 1;
    } else if (currentElement > searchElement) {
        maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

// other implementation which this time accepts an array
function binSearch(arr, data){
  var upperBound = arr.length-1;
  var lowerbound = 0;
  while (lowerbound <= upperBound){
    var mid = Math.floor((upperBound + lowerbound) / 2);
    if (arr[mid] < data){
      lowerbound = mid + 1;
    } else if (arr[mid] > data){
      upperBound = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}


function count(arr, data){
  var count = 0;
  var position = binSearch(arr, data);
  if (position > -1){
    ++count;
    for (var i = position-1; i > 0; --i){
      if (arr[i] == data){
        ++count;
      } else {
        break;
      }
    }
    for (var i = position+1; i < arr.length; i++){
      if (arr[i] == data){
        ++count;
      } else {
        break;
      }
    }
  } 
  return count;
}