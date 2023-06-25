alert('Tính thế thu nhập cá nhân');
let a = +prompt('Nhập tiền thu nhập cá nhân:');
let taxFree = 10000000;
if(a < taxFree){
    document.getElementById('result').innerHTML='Miễn phí đóng thuế';
}else{
    let b = (a - taxFree) * 0.1;
    document.getElementById('result').innerHTML='Bạn cần đóng thuế là: ' +b;
}