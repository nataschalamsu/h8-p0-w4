var arr = [['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']];


function changeMe(arr) {
for(var i = 0; i < arr.length; i++) {
  var objC = {};
  objC.firstName = arr[i][0];
  objC.lastName = arr[i][1];
  objC.gender = arr[i][2];
  if(arr[i][3] === 1982) {
    objC.age = 2017 - arr[i][3];
  } else {
    objC.age = 'Invalid Birth Year';
  }
  console.log('1. ' + ' ' + objC.firstName + ' ' + objC.lastName)
  console.log(objC)
}
}
