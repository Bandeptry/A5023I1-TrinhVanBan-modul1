function submit(){
    let a =parseInt(document.getElementById('demo1').value);
    let b =parseInt(document.getElementById('demo2').value);
    let c =parseInt(document.getElementById('demo3').value);
    if(a > b && a > c){
        document.getElementById('ketqua').innerHTML= +a + ' là lớn nhất';    
    }else if(b > a && b >c){
        document.getElementById('ketqua').innerHTML= +b + ' là lớn nhất';    
    }else{
        document.getElementById('ketqua').innerHTML= +c + ' là lớn nhất';    
    }
}