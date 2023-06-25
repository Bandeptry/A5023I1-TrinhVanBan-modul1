let a = +prompt('Nhập a');
let b = +prompt('Nhập b');
if(a == 0){
    if(b == 0){
        document.getElementById('result').innerHTML='Phương trình vô số nghiệm';
    }else{
        document.getElementById('result').innerHTML='Phương trình vô nghiệm';
    }
}else{
    let S = -b/a;
    document.getElementById('result').innerHTML='Phương trình có nghiệm '+S;
}