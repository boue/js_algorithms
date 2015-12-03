function sumFinder(arr, sum){
  var len = arr.length;

  for(var i = 0; i < len - 1; i++){
    for(var j = i+1; j < len; j++){
      if (arr[i] + arr[j] == sum)
        return true;
    }
  }
  return false;
}

//make it better here

function sumFinder2(arr, sum){
  var difference = {},
      len = arr.length,
      subtract;
  for(var i = 0; i < len; i++){
    subtract = sum - arr[i];

    if(difference[subtract])
      return true;
    else
      difference[arr[i]] = true;
  }
  return false;
}