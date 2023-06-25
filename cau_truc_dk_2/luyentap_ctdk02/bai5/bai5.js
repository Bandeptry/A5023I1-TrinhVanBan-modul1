alert('Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.');
let a = +prompt('nhập cạnh kề a');
let b = +prompt('nhập cạnh kề b');
let S = 1/2 * (a*b);
document.getElementById('result').innerHTML='Diện tích tam giác vuông là: ' +S;