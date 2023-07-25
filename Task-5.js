function calculator (num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
      default:
        throw new Error("Invalid operator. Supported operators are +, -, *, and /.");
    }
  }
  
  try {
    const num1 = 10;
    const operator = '*';
    const num2 = 5;
    const result = calculator(num1, operator, num2);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
  