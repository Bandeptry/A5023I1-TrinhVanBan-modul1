let a = prompt('Nhập tuổi của một người');
if(a % 1 == 0){
    if(a < 120 && a > 0){
    document.getElementById('result').innerHTML='Đây là tuổi của một người';

    }else{
    document.getElementById('result').innerHTML='Đây là số lớn hơn tuổi thọ của một người';
    }
}else{
    document.getElementById('result').innerHTML='Đây là số thập phân';
}