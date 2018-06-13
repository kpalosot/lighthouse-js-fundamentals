function howManyHundreds(num){

  //case: less than 100
  if(num < 100){
    return 0;
  }

  var remainder = num % 100;
  var newNum = num - remainder;
  return newNum / 100;

}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);