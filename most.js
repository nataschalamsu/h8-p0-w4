var arrNumber = [2, 8, 4, 6, 8, 5, 8, 4];

function sorting(arrNumber) {
var angka = 0;
for(var i = 1; i < arrNumber.length; i++) {
  for(var j = 0; j < arrNumber.length; j ++) {
  if(arrNumber[i] > arrNumber[j]) {
    angka = arrNumber[j];
    arrNumber[j] = arrNumber[i];
    arrNumber[i] = angka;
  }
  }
}
return arrNumber;
}

function getTotal(arrNumber) {
var listSort = sorting(arrNumber);
var counter = 0;
for(var i = 0; i < arrNumber.length; i++) {
  if(listSort[i] === arrNumber[i+1]) {
    counter += 1;
  }
}
return counter;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
