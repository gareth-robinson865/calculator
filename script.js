class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    //clearing the whole calculation
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    //deleting just one number
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }