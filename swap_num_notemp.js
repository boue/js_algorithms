function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  console.log('------------------');
  b = b -a;
  console.log('a: ', a, 'b: ', b);
  a = a+ b;
  console.log('a: ', a, 'b: ', b);
  b = a-b;
  console.log('a: ', a, 'b: ', b);
  console.log('------------------');
  console.log('after swap: ','a: ', a, 'b: ', b);  
}

swapNumb(5, 8);