function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function power(num1, num2) {
  return num1 ** num2;
}

function mod(num1, num2) {
  return num1 % num2;
}

function sqrt(num1) {
  return Math.sqrt(num1);
}

function factorial(num1) {
  let result = 1;
  while ( num1 > 0) {
    result *= num1;
    num1--;
  }
  return result
}

function calculate(expression) {
  const tokens = expression.split(' ');
  let num1;
  let operator;
  let num2;

  if (tokens.length === 3) {
    num1 = Number(tokens[0]);
    operator = tokens[1];
    num2 = Number(tokens[2]);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("It's not a valid number");
      return;
    }
  }
  else if (tokens.length === 2) {
    operator = tokens[0];
    num1 = Number(tokens[1]);
    if (Number.isNaN(num1)) {
      alert(" It's not a valid number");
      return;
    }
  } else {
    alert(" Invalid expression");
    return;
  }
  
  if (operator === '+') {
    return add(num1, num2);
  } if (operator === '-') {
    return subtract(num1, num2);
  } if (operator === '*') {
    return multiply(num1, num2);
  } if (operator === '/') {
    return divide(num1, num2);
  } if (operator === '^') {
    return power(num1, num2);
  } if (operator === '%') {
    return mod(num1, num2);
  } if (operator === 'sqrt') {
    return sqrt(num1);
  } if ( operator === '!') {
    if (Number.isInteger(num1)) {
      if (num1 > 0) {
        return factorial(num1);
      } else {
        alert('The number is invalid');
        return
      }
    } 
  }
  alert("Invalid operator");  
}


/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});


