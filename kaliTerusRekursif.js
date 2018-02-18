function kaliTerusRekursif(angka) {
  var string = angka.toString();
  if (string.length === 1) {
    return angka;
  }
  var tampung = 1;
  for (var i = 0; i < string.length; i++) {
    tampung *= Number(string[i]);
  }
  return kaliTerusRekursif(tampung);
}
