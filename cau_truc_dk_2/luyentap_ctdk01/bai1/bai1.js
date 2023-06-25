function submit(){
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    if(a % b == 0 ){
         document.getElementById('kq').innerHTML= + a + ' chia hết cho '+ b;
    }else
    document.getElementById('kq').innerHTML= + a + ' không chia hết cho '+ b;
}