export const INPUTS = [
    { id: "clear", className: "all-clear", stringName: "AC", onClick: "this.allClear"},
    { id: "divide", className: "operand", stringName: "/", onClick: "this.inputIsOperand" },
    { id: "multiply", className: "operand", stringName: "*", onClick: "this.inputIsOperand" },
    { id: "seven", className: "number", stringName: "7", onClick: "this.inputIsNumber" },
    { id: "eight", className: "number", stringName: "8", onClick: "this.inputIsNumber" },
    { id: "nine", className: "number", stringName: "9", onClick: "this.inputIsNumber" },
    { id: "subtract", className: "operand", stringName: "-", onClick: "this.inputIsOperand" },
    { id: "four", className: "number", stringName: "4", onClick: "this.inputIsNumber" },
    { id: "five", className: "number", stringName: "5", onClick: "this.inputIsNumber" },
    { id: "six", className: "number", stringName: "6", onClick: "this.inputIsNumber" },
    { id: "add", className: "operand", stringName: "+", onClick: "this.inputIsOperand" },
    { id: "one", className: "number", stringName: "1", onClick: "this.inputIsNumber" },
    { id: "two", className: "number", stringName: "2", onClick: "this.inputIsNumber" },
    { id: "three", className: "number", stringName: "3", onClick: "this.inputIsNumber" },
    { id: "zero", className: "zero", stringName: "0", onClick: "this.inputIsNumber" },
    { id: "decimal", className: "decimal", stringName: ".", onClick: "this.inputIsDecimal" },
    { id: "equals", className: "equals", stringName: "=", onClick: "this.solve" },
];
export const isOperand = /[*/+-]/;
export const endIsOperand = /[*/+-]$/;
export const isZero = /\D0$/;
export const hasDecimal = /(-?\d+\.?\d*)$/;
