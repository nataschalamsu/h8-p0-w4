function countProfit(shoppers) {
var sepatuStacattu = {product: listBarang[0][0], shopper: [], amount: 0, totalProfit: 0};
var bajuZoro = {product: listBarang[1][0], shopper: [], amount: 0, totalProfit: 0};
var sweaterUniklooh = {product: listBarang[2][0], shopper: [], amount: 0, totalProfit: 0};
var belanja = [sepatuStacattu, bajuZoro, sweaterUniklooh];
var sisaSepatu = listBarang[0][2];
var sisaBaju = listBarang[1][2];
var sisaSweater = listBarang[2][2];
var jumlahSepatu = 0;
var jumlahBaju = 0;
var jumlahSweater = 0;
var namesSepatu = [];
var namesBaju = [];
var namesSweater = [];
for(var i = 0; i < shoppers.length; i++) {
  if(shoppers[i].product === sepatuStacattu.product) {
    sisaSepatu -= shoppers[i].amount;
    if(sisaSepatu > 0) {
      namesSepatu.push(shoppers[i].name);
      sepatuStacattu.shopper = namesSepatu;
      sepatuStacattu.amount = sisaSepatu;
      jumlahSepatu += shoppers[i].amount;
      sepatuStacattu.totalProfit = jumlahSepatu * listBarang[0][1];
    }
  }
  if(shoppers[i].product === bajuZoro.product) {
    sisaBaju -= shoppers[i].amount;
    if(sisaBaju >= 0) {
      namesBaju.push(shoppers[i].name);
      bajuZoro.shopper = namesBaju;
      bajuZoro.amount = sisaBaju;
      jumlahBaju += shoppers[i].amount;
      bajuZoro.totalProfit = jumlahBaju * listBarang[1][1];
    }
  }
  if(shoppers[i].product === sweaterUniklooh.product) {
    sisaSweater -= shoppers[i].amount;
    if(sisaSweater >= 0) {
      namesSweater.push(shoppers[i].name);
      sweaterUniklooh.shopper = namesSweater;
      sweaterUniklooh.amount = sisaSweater;
      jumlahSweater += shoppers[i].amount;
      sweaterUniklooh.totalProfit = jumlahSweater * listBarang[2][1];
    }
  }
}
return belanja;
}
