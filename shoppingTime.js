var memberId = '1820RzKrnWn08';
var money = 2475000;

function shoppingTime(memberId, money) {
var arrShop = [['Sepatu Stacattu', 1500000], ['Baju Zoro', 500000], ['Baju H&N', 250000],  ['Sweater Uniklooh', 175000], ['Casing Handphone', 50000]];
var objShop = {};
if(memberId !== '') {
  objShop.memberId = memberId;
} else {
  return 'Mohon maaf, Toko X hanya untuk member saja!';
}
if(money < 50000) {
  return 'Maaf uang tidak cukup!';
} else {
  objShop.money = money;
}
var listPurchase = [];
for(var i = 0; i< arrShop.length; i ++){
  if(money >= arrShop[i][1]) {
    money -= arrShop[i][1];
    listPurchase.push(arrShop[i][0]);
  }
  objShop.listPurchase = listPurchase;
  objShop.changeMoney = money;
}
return objShop;
}

shoppingTime(memberId, money);
