function checkNumber(number) {
    if (number < 2) {
      return 0;
    }
    let squareRoot = Math.sqrt(number);
    let i;
    for (i = 2; i <= squareRoot; i++) {
      if (number % i === 0) {
        return 0;
      }
    }
    return 1;
  }
  
  function result() {
    let n = document.getElementById('soNguyenTo').value;
    let count = 1;
    let number = 2;
    let output = document.getElementById('kq');
    output.innerHTML = '';
    while (count < n) {
      if (checkNumber(number)) {
        let element = document.createElement('p');
        element.innerHTML = number;
        output.appendChild(element);
        count++;
      }
      number++;
    }
  }
  