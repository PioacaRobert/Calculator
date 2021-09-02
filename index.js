function myCalc() {
    let a = parseInt(document.getElementById("first").value);
    let b = parseInt(document.getElementById("secound").value);
    let x = document.getElementById("symbol").value;
    

    

    switch(x) {
        case "+":
            result = alert(a + b);
            break;

        case "-":
            result = alert(a - b);
            break;

        case "*":
            result = alert(a * b);
            break;

        case "/":
            result = alert(a / b);
            break;
            
        default:
            result = alert("NaN");
            break;    

    }
}

