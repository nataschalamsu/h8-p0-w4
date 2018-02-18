function totalDigitRekursif(angka) {
  string = angka.toString();
    if (string.length === 1) {
      return angka;
    }
  var tampung = parseInt(string[0]);
    string = string.slice(1);
    number = parseInt(string);
    return tampung + totalDigitRekursif(number);
}
