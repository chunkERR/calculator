const container = document.querySelector(".container");
const numberButtons = document.querySelectorAll(["data-number"]);
const operationButtons = document.querySelectorAll(["data-operation"]);
const equalsButton = document.querySelector(["data-equals"]);
const deleteButton = document.querySelector(["data-delete"]);
const allClearButton = document.querySelector(["data-all-clear"]);
const previousOperandTextElement = document.querySelector([
  "data-previous-operand",
]);
const currentOperandTextElement = document.querySelector([
  "data-current-operand",
]);

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (a, operator, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
};

console.log(operate(5, "+", 5));
console.log(operate(5, "/", 5));

// function addButtons () {
//     for (let i = 0; i < 16; i ++) {
//     const digits =  document.createElement("button")
//     container.appendChild(digits)
//     }

// }

// addButtons();
