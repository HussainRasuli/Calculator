var operation = "";
var operand1 = 0;
var operand2 = null;

function pi(number) {
  var num = document.getElementById("display");
  var pi = number * num.value;
  num.value = pi;
}
function addNumber(number) {
  var display = document.getElementById("display");
  display.value = display.value + number;
}

function performOperation(op) {
  var display = document.getElementById("display");
  operand1 = parseFloat(display.value);
  operation = op;
  display.value = "";
}
// Five operation math
function calculateResult() {
  var display = document.getElementById("display");
  operand2 = parseFloat(display.value);
  switch (operation) {
    case "+":
      display.value = operand1 + operand2;
      break;
    case "-":
      display.value = operand1 - operand2;
      break;
    case "*":
      display.value = operand1 * operand2;
      break;
    case "%":
      display.value = operand1 % operand2;
      break;
    case "/":
      if (operand2 === 0) {
        alert("Cannot divide by zero");
        return;
      }
      display.value = operand1 / operand2;
      break;
  }
}

function clearDisplay() {
  var display = document.getElementById("display");
  display.value = "";
}
