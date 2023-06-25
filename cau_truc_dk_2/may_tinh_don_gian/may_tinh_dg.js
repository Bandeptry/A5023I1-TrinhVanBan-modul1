function Basic(x){
    document.getElementById('tinh').value+=x;
}
function Result(){
   let a = document.getElementById('tinh').value;
       document.getElementById('tinh').value = eval(a);
}
function Erase(){
    let Ad = " ";
    document.getElementById('tinh').value=Ad;
}
