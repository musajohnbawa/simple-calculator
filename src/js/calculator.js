function calculate(op) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const error = document.getElementById("error");
    const resultDisplay = document.getElementById("result");

    error.innerText = "";
    resultDisplay.innerText = "";

    if (!num1 || !num2) {
        error.innerText = "please fill in both inputs!";
        return;
    }

    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(num2);

    if (isNaN(num1Value) || isNaN(num2Value)) {
        error.innerText = "invalid input!";
        return;
    }

    let result;
    switch (op) {
        case "add":
        result = num1Value + num2Value;
        break;
        case "subtract":
            result = num1Value - num2Value;
            break;
            case "multiply":
                result = num1Value * num2Value;
                break;
                case "divide":
                    if (num2Value === 0) {
                        error.innerText = "can not divide by zero(0)";
                        return;
                    }
                    result = num1Value / num2Value;
                    break;
                }
                
                resultDisplay.innerText = `result: ${result}`;
    }