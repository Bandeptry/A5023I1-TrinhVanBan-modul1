let x = +prompt('số hàng bán hôm nay là:');
let a = x*500000;//số tiền trên 1 đơn hàng
if(x > 50){
    a *= 0.05;
    document.getElementById('spham').innerHTML=+a;
}else{
    a *= 0.03;
    document.getElementById('spham').innerHTML=+a;
}
