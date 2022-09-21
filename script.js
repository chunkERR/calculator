class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }


    clear() {
this.currentOperand = '';
this.previousOperand = '';
this.operation = undefined;
    }


    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }


    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }


    chooseOperation(operation) {
if (this.currentOperand === '') return
if (this.previousOperand !== '') {
    this.compute()
}
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''
    }


    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }


    updateDisplay() {
this.currentOperandTextElement.innerText = this.currentOperand;
this.previousOperandTextElement.innerText = this.previousOperand;
    }
}


const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    }) 
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    }) 
})

equalsButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.compute()
        calculator.updateDisplay()
    }) 
})

allClearButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.clear()
        calculator.updateDisplay();
    }) 
})

deleteButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.delete()
        calculator.updateDisplay();
    }) 
})






// const add = function (a, b) {
//   return a + b;
// };

// const subtract = function (a, b) {
//   return a - b;
// };

// const multiply = function (a, b) {
//   return a * b;
// };

// const divide = function (a, b) {
//   return a / b;
// };

// const operate = function (a, operator, b) {
//   if (operator === "+") {
//     return add(a, b);
//   } else if (operator === "-") {
//     return subtract(a, b);
//   } else if (operator === "*") {
//     return multiply(a, b);
//   } else if (operator === "/") {
//     return divide(a, b);
//   }
// };


// function addButtons () {
//     for (let i = 0; i < 16; i ++) {
//     const digits =  document.createElement("button")
//     container.appendChild(digits)
//     }

// }

// addButtons();
