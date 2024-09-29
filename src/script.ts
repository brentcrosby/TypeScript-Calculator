
class Calculator {
  
  private currentOperand : string = '';
  private previousOperand : string = '';
  private operation : string | undefined;
  private displayText : HTMLElement;

  constructor(outputDisplay : HTMLElement) {
    this.displayText! = outputDisplay;
  }

  clear(): void {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  appendNumber(num: string): void {
    this.currentOperand += num;
  }

  updateDisplay(): void {
    this.displayText.innerText = this.currentOperand;
  }

  delete(): void {
    this.currentOperand = this.currentOperand.slice(0 , -1);
  }
}

const numberButtons = document.querySelectorAll<HTMLElement>('[data-number]');
const operatorButtons = document.querySelectorAll<HTMLElement>('[data-operator]');
const equalsButtons = document.querySelector<HTMLElement>('[data-equals]');
const deleteButton = document.querySelector<HTMLElement>('[data-delete]');
const allClearButton = document.querySelector<HTMLElement>('[data-all-clear]');
const outputDisplay = document.querySelector<HTMLElement>('[data-output]');

// Check if outputDisplay exists
if (!outputDisplay) {
  throw new Error('Output display element not found');
}

const calculator = new Calculator(outputDisplay);

// Make the number buttons return their numbers
numberButtons!.forEach(button => {
  button.addEventListener('click', () => {
    const num = button.innerText;
    console.log(num);
    calculator.appendNumber(num);
    calculator.updateDisplay();
  })
});

// All clear button event listener
allClearButton!.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

// Delete button
deleteButton!.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});
