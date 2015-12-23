var _list = "abcdefghijklmnopqrstuvwxyz9876543210"; 

function randomStringGenerator(how_long){
  var tmp = '', i = 0;
  var list_len = _list.length;

  for (i = 0; i < how_long; i++){
    tmp += _list.charAt(Math.floor(Math.random() * list_len));
  }
  return tmp;
}
