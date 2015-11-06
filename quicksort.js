//partition function
//swap
//avoid worst case scenario by picking pivot as first or last item in case array is sorted
//ask is the array sorted? To optimize best if not and 0+ values in array

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  itemsp[secondIndex] = temps;
}

function partition(items, left, right){
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
  //return left pointer to know where to start partitioning the next time
  return l;
}

function quicksort(items, left, right){
  var index;

  //If there are two or more items in the array then it is partitioned.
  if (items.length > 1){
    index = partition(items, left, right);

    if (left < index - 1){
      quicksort(items, left, index - 1);
    }

    if (index < right){
      quicksort(items, index, right);
    }
  }
  return items;
}

var result = quicksort(items, 0, items.length - 1);