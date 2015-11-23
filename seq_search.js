var seqSearch(arr, data){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == data){
      return i;
    } else {
      return -1;
    }
  }
}

function dispArr(arr){
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i] + " ");
    if (i % 10 == 9){
      console.log("\n");
    }
  }
  if (i % 10 != 0){
    console.log("\n");
  }
}