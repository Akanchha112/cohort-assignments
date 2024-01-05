/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  getResult() {
    console.log("Answer is " + this.result);
    return this.result;
  }

  add(a) {
    this.result += a;
  }

  subtract(a) {
    this.result -= a;
  }

  multiply(a) {
    if (this.result === 0) {
      this.result = 1;
      this.result *= a;
    } else {
      this.result *= a;
    }
  }

  divide(a) {
    if (a === 0) {
      return new Error("divided by zero");
    }
    this.result /= a;
  }

  clear(){
    this.result=0;
  }

  calculate(expression) {
    // Remove continuous spaces and validate the expression
    const sanitizedExpression = expression.replace(/\s+/g, '');

    if (!/^[0-9+\-*/(). ]+$/.test(sanitizedExpression)) {
      return new Error("Invalid expression: It contains non-numerical or invalid characters.");
    }

    // Use eval to calculate the result of the expression
    try {
      this.result = eval(sanitizedExpression);
    } catch (error) {
      return new Error("Error in evaluating the expression.");
    }
  }
  
}
// calc = new Calculator();
// calc.add(5);
// calc.add(3);
// calc.getResult();
// calc.clear();
// calc.calculate('(   15 + 3) /   6   ');
// calc.getResult();
// calc.clear();
// calc.calculate('10 - (4 + 2)');
// calc.getResult();
module.exports = Calculator;
