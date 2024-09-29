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
        this.currentOperand += num;
    }
    updateDisplay() {
        this.displayText.innerText = this.currentOperand;
    }
    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1);
    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButtons = document.querySelector('[data-equals]');
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
        console.log(num);
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
