let x = +prompt('nhập số phút cuộc gọi của bạn');
if(x > 0){
    if(x <= 5){
        x = x * 900;
        document.getElementById('cuoc').innerHTML=+x;
    }else if(x <= 10){
        x = ((x - 5) * 600 + 5 * 900);
        document.getElementById('cuoc').innerHTML=+x;
    }else if(x <= 20){
        x = (x - 10)*400 + 5*600 + 5*900;
        document.getElementById('cuoc').innerHTML=+x;
    }else{
        x = (x - 20)*200 + 5*600 + 5*900 + 10*400;
        document.getElementById('cuoc').innerHTML=+x;
    }
}else{
    document.getElementById('cuoc').innerHTML='bạn nhập nhầm rồi, vui lòng nhập số dương';
}