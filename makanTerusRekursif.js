function makanTerusRekursif(waktu) {
  if(waktu <= 0) {
    return 0;
  }
    return 1 + makanTerusRekursif(waktu - 15);
}

console.log(makanTerusRekursif(10))
