function submit(){
    let x = parseInt(document.getElementById('old').value);
    if(x >= 16 ){
        document.getElementById('ok').innerHTML=('bạn ' + x +' tuổi đủ tuổi học lớp 10');
    }else{
        document.getElementById('ok').innerHTML=('bạn ' + x +' tuổi chưa đủ tuổi học lớp 10');
        
    }
}