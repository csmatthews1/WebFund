var numStored = 0.0;
var startNewNum = true;
var currOperator = "";
var maxDisplay = 8;

function press(number) {
    var currValue = document.getElementById("display").innerText;

    if(currValue == "0" || startNewNum) {
        document.getElementById("display").innerText = number;
        startNewNum = false;
    }
    else {
        document.getElementById("display").innerText += number;
    }
}
function setOP(operator) {
    if (numStored !=0.0 && currOperator != "") {
        calculate();
    }
    currOperator = operator;
    numStored = parseFloat(document.getElementById("display").innerText);
    startNewNum = true;
}
function clr () {
    document.getElementById("display").innerText = 0;
    currOperator = "";
    numStored = 0;
    startNewNum = true;
}
function calculate() {
    var calcValue = 0;

    if(numStored != 0 && currOperator != "") {
        if (currOperator == "/") {
            calcValue = numStored / parseInt(document.getElementById("display").innerText);
            document.getElementById("display").innerText = calcValue.toString().substring(0,maxDisplay);
        }
        else if (currOperator == "*") {
            calcValue = numStored * parseInt(document.getElementById("display").innerText);
            document.getElementById("display").innerText = calcValue.toString().substring(0,maxDisplay);
       }
        else if (currOperator == "-") {
            calcValue = numStored - parseInt(document.getElementById("display").innerText);
            document.getElementById("display").innerText = calcValue.toString().substring(0,maxDisplay);
        }
        else {
            calcValue = numStored + parseInt(document.getElementById("display").innerText);
            document.getElementById("display").innerText = calcValue.toString().substring(0,maxDisplay);
        }
    }
    else {
        document.getElementById("display").innerText = 0;
    }
    currOperator = "";
    numStored = parseInt(document.getElementById("display").innerText);
}