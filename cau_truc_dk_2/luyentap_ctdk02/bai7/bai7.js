let a = +prompt('Nhập a');
let b = +prompt('Nhập b');
let c = +prompt('Nhập c');
let delta = b * b - 4 * a * c;

if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.getElementById('result').innerHTML = 'Phương trình có 2 nghiệm phân biệt: ' + x1 + ' và ' + x2;
} else if (delta === 0) {
    let x = -b / (2 * a);
    document.getElementById('result').innerHTML = 'Phương trình có nghiệm kép: ' + x;
} else {
    document.getElementById('result').innerHTML = 'Phương trình vô nghiệm';
}
