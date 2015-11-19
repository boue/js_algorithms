var quicksort = function(array){
  if(array.length <= 1){ return array };
  var SwapPos = Math.floor((array.length - 1) / 2);
  var SwapValue = array[SwapPos], less = [], more = [];
  array = array.slice(0, SwapPos).concat(array.slice(SwapPos + 1));
  for(var i = 0; i < array.length; i++){
    if(array[i] < SwapValue){
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  return(quicksort(less)).concat([SwapValue], quicksort(more));
}