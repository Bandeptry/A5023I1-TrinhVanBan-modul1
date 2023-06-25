alert('Nhập 3 số thực (a,b,c). Kiểm tra có phải là cạnh của một tam giác hay không')
let a = +prompt('nhập a');
let b = +prompt('nhập b');
let c = +prompt('nhập c');
if(a > 0 && b > 0 && c > 0){
    if(a + b > c && a + c > b && b + c > a){
        document.getElementById('submit').innerHTML='3 số này là độ dài các cạnh của một tam giác';
    }else{
        document.getElementById('submit').innerHTML='3 số này chưa đủ điều kiện của một tam giác';
    }
}else{
    document.getElementById('submit').innerHTML='3 số này có một số âm không thể có tam giác mong muốn';
}