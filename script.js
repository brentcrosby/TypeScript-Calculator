"use strict";
class Calculator {
    constructor(outputDisplay) {
        this.currentOperand = '';
        this.previousOperand = '';
        this.displayText = outputDisplay;
    }
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    appendNumber(num) {
        if (num === '.') {
            if (this.currentOperand.includes('.')) { // Catch if a decimal is already there
                return;
            }
        }
        this.currentOperand += num;
    }
    updateDisplay() {
        this.displayText.innerText = this.currentOperand;
    }
    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1);
    }
    setOperation(operator) {
        this.operation = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    calculate() {
        let calculation;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        switch (this.operation) {
            case '×':
                calculation = prev * curr;
                break;
            case '÷':
                calculation = prev / curr;
                break;
            case '+':
                calculation = prev + curr;
                break;
            case '-':
                calculation = prev - curr;
                break;
            default:
                return;
        }
        this.currentOperand = calculation.toLocaleString();
        this.previousOperand = '';
        this.operation = undefined;
    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const outputDisplay = document.querySelector('[data-output]');
// Check if outputDisplay exists
if (!outputDisplay) {
    throw new Error('Output display element not found');
}
const calculator = new Calculator(outputDisplay);
// Make the number buttons return their numbers
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const num = button.innerText;
        calculator.appendNumber(num);
        calculator.updateDisplay();
    });
});
// All clear button event listener
allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});
// Delete button
deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});
// Make the operator buttons return their operators
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const operator = button.innerText;
        calculator.setOperation(operator);
        calculator.updateDisplay();
    });
});
// All clear button event listener
equalsButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
});
