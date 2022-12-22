"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const firstStr = (0, readline_sync_1.question)("Enter First Number:\n");
    const operator = (0, readline_sync_1.question)("Enter Operator:\n");
    const secondStr = (0, readline_sync_1.question)("Enter Second Number:\n");
    const validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        const firstNum = parseInt(firstStr);
        const secondNum = parseInt(secondStr);
        const result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("\ninvalid input\n");
        main();
    }
}
main();
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
