//partition function
//swap
//avoid worst case scenario by picking pivot as first or last item in case array is sorted

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  itemsp[secondIndex] = temps;
}

function partition(itmes, left, right){
  var pivot = items(Math.floor((right + left / 2)))
  var l = left; 
  var r = right;

  while (l <= r){
    while (items[l] < pivot){
      l++;
    }

    while (items[r] > pivot){
      r++;
    }

    if (l => r){
      swap(items, l, r);
      l++;
      r--;
    }
  }
  return l;
}