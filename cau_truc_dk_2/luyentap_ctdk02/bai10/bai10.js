let x = +prompt('Nhập mức tiêu thụ điện (kWh):');//x là lượng điện tiêu thụ tính kWh
if( x <= 50){
    x = x * 1500;
    document.getElementById('ketqua').innerHTML='Tiền điện phải trả là: '+x;
}else if(x <= 100){
    x = (x - 50) * 2000 + 50 * 1500;
    document.getElementById('ketqua').innerHTML='Tiền điện phải trả là: '+x;
}else{
    x = (x - 100) * 2500 + 50 * 1500 + 50 * 2000;
    document.getElementById('ketqua').innerHTML='Tiền điện phải trả là: '+x;
}