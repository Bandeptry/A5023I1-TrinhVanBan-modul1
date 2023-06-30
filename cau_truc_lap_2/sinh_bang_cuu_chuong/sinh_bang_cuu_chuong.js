let sout = "<table border='1' width='100%' cellspacing='0' cellpadding='3'>"
for(let i = 1; i < 10; i++){
    sout = sout + '<tr>';
    for(let j = 2; j < 10; j++){
        let sum = i * j;
        sout = sout + '<td>' + j + ' x ' + i + '=' + sum + '</td>'
    }
    sout = sout + '</tr>';
}
sout = sout + "</table>";
document.write(sout);