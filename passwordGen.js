var str = 'Natascha Lamsu';

function passworGenerator(str) {
function changeVocal(str) {
var split = str.split('');
var kosong = '';
for(var i = 0; i < split.length; i++) {
  if(split[i] === 'a') {
    split[i] = 'b';
  }
  if(split[i] === 'i') {
    split[i] = 'j';
  }
  if(split[i] === 'u') {
    split[i] = 'v';
  }
  if(split[i] === 'e') {
    split[i] = 'f';
  }
  if(split[i] === 'o') {
    split[i] = 'p';
  }
  if(split[i] === 'A') {
    split[i] = 'B';
  }
  if(split[i] === 'I') {
    split[i] = 'J';
  }
  if(split[i] === 'U') {
    split[i] = 'V';
  }
  if(split[i] === 'E') {
    split[i] = 'F';
  }
  if(split[i] === 'O') {
    split[i] = 'P';
  }
}
return split;
}

function reverseWords(str) {
var changeVoc = changeVocal(str);
var reverse = '';
for(var i = changeVoc.length - 1; i >= 0; i--) {
  reverse += changeVoc[i];
}
return reverse;
}

function setLowerUpperCase(str) {
var reversed = reverseWords(str).split('');
var change = '';
for(var i = 0; i < reversed.length; i++) {
  if(reversed[i].toUpperCase() === reversed[i]) {
    change += reversed[i].toLowerCase();
  }
    if(reversed[i].toLowerCase() === reversed[i]) {
    change += reversed[i].toUpperCase();
  }
}
return change;
}

function removeSpaces(str) {
var changed = setLowerUpperCase(str).split('');
var index = 0;
for(var i = 0; i < changed.length; i++) {
  if(changed[i] === ' ') {
    changed[i] = '';
  }
}
return changed.join('');
}
var password = removeSpaces(str);
return password;
}

passworGenerator(str);
