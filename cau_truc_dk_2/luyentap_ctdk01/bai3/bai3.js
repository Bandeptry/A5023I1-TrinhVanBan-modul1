function result(){
    let x = parseInt(document.getElementById('demo').value);
    if(x > 0){
       
        document.getElementById('kq').innerHTML='số này lớn hơn 0';
    }else{
        document.getElementById('kq').innerHTML='số này nhỏ hơn 0';
    }
}