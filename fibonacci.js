var Fib = function(n){
  if (n <= 1){
    return n;
  } else {
    return Fib(n-1) + Fib(n-2);
  }
}

var Fib = function(n){
  var a = 0;
  var b = 1;
  for (var i = 0; i < n; i++){
    var temp = b;
    b = a + b;
    a = temp;
  }
  return a;
}