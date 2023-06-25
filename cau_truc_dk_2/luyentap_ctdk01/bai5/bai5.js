function Click(){
    let diemgiuaky = parseFloat(document.getElementById('giuaky').value);
    let diemcuoiky = parseFloat(document.getElementById('cuoiky').value);
    let average = parseFloat((diemgiuaky + diemcuoiky * 2)/3);
    // if(diemgiuaky <= 10 && diemcuoiky <= 10){
        if(average >= 8){
            document.getElementById('danhhieu').innerHTML='Bạn đạt danh hiệu hsg';
        }else if(average >=6.5){
            document.getElementById('danhhieu').innerHTML='Bạn đạt danh hiệu tiên tiến';
        }else if(average >= 5 ){
            document.getElementById('danhhieu').innerHTML='Học sinh TB';
        }else if(average >= 3.5){
            document.getElementById('danhhieu').innerHTML= 'Yếu';
        }else{
            document.getElementById('danhhieu').innerHTML='Học lại';
        }
    
}