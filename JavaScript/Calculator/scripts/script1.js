window.addEventListener('load', bindEvents);

var str = document.querySelector('input');
var current = "";
var operator = [];
var operand = [];
var strOperand = "";
var priority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '%': 2,
};

var numBtns = document.querySelectorAll('.num');
var operatorBtns = document.querySelectorAll('.operatorBtn');

function bindEvents() {
    numBtns.forEach(numBtn => numBtn.addEventListener('click', onClickNum));
    operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', onClickOperator));
    document.querySelector('#backSpace').addEventListener('click', clearLast);
    document.querySelector('#clear').addEventListener('click', clearAll);
    document.querySelector('#equalTo').addEventListener('click', eval);
}

function onClickNum() {
    
    if (str.value.length >= 1 && this.innerText == '.' ) {
        if (str.value.charAt(str.value.length - 1) != '.') {
            str.value += this.innerText;
            strOperand += this.innerText;
        }
    } else {
        str.value += this.innerText;
        strOperand += this.innerText;
    }
    current = strOperand;
}

function onClickOperator() {
    if (str.value.length >= 1) {
        if (!ifOperand(str.value.charAt(str.value.length - 1))) {
            if (str.value.length > 1) {
                str.value = str.value.substring(0, str.value.length - 1) + this.innerText;
                operator.pop();
            }
        } else {
            str.value += this.innerText;
            if (strOperand.length > 0) {
                addToOperandList(strOperand);
            }
        }
        checkpriority(this.innerText);
        addToOperatorList(this.innerText);
    }
}

function checkpriority(currentOp) {
    while (operator.length != 0 && priority[onTop(operator)] > priority[currentOp]) {
        var op1 = parseFloat(operand.pop());
        var op2 = parseFloat(operand.pop());
        var op = operator.pop();
        computeResult(op1, op2, op);
    }
}
function ifOperand(current) {
    return Number.isInteger(parseInt(current));
}

function clearAll() {
    str.value = "";
    strOperand = "";
    operator.splice(0, operator.length);
    operand.splice(0, operand.length);
}

function clearLast() {
    if (str.value.length > 1) {
        var currentEle = str.value.charAt(str.value.length - 1);
        str.value = str.value.substring(0, str.value.length - 1);
        if (ifOperand(currentEle)) {
            if (onTop(operand) === current) {
                strOperand = operand.pop();
                strOperand = strOperand.substring(0, strOperand.length - 1);
                current = strOperand;
                if (strOperand.length >= 1) {
                    operand.push(strOperand);
                }
            } else {
                strOperand = strOperand.substring(0, strOperand.length - 1);
                current = strOperand;
                if (strOperand.length >= 1) {
                    operand.push(strOperand);
                }
            }
        } else {
            operator.pop();
        }
    } else {
        clearAll();
    }
    console.log(operator);
    console.log(operand);
}

function onTop(arr) {
    return arr[arr.length - 1];
}

function addToOperatorList(currentOperator) {
    operator.push(currentOperator);
    strOperand = "";
}

function addToOperandList(strOperand) {
    operand.push(strOperand);
}

function eval() {
    if (operator.length >= 1) {
        operand.push(strOperand);
        while (operator.length != 0) {
            var op1 = parseFloat(operand.pop());
            var op2 = parseFloat(operand.pop());
            var op = operator.pop();
            computeResult(op1, op2, op);
        }

        str.value = onTop(operand);
        strOperand = str.value;
    }
}

function computeResult(op1, op2, op) {
    if (op == '+') {
        operand.push(op2 + op1);
    } else if (op == '-') {
        operand.push(op2 - op1);
    } else if (op == '*') {
        operand.push(op2 * op1);
    } else if (op == '%') {
        operand.push(op2 % op1);
    } else if (op == '/') {
        operand.push(op2 / op1);
    }
}