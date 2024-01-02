let firstNumber
let secondNumber
let step = 0
let operation
let result = 0

  let numArray = []
  let secondNumberArr = []
  let display = document.getElementById('display')
   
  function getNumber(num) {
    if (step === 0 | step === 1) {
        numArray.push(num)
        step = 1
        firstNumber = Number(numArray.join(''))
        display.value = firstNumber
    } else if (step === 2) {
      secondNumberArr.push(num)
      secondNumber = Number(secondNumberArr.join(''))
      display.value = secondNumber
    }
  }

  function getOperator(operator) {
    step = 2
    operation = operator
    display.value = operator;
  // localStorage.setItem('operator-used', operator)
    let previousOperator = JSON.parse(localStorage.getItem('operator-used')) || [];
  
  // Add the current result to the array
  previousOperator.push(operator);
  
  // Save the updated array back to local storage
  localStorage.setItem('operator-used', JSON.stringify(previousOperator));
  
  }
  function calculateResult() {
    console.log('first number', firstNumber, 'second number', secondNumber)
    if (operation === '+') {
      result = firstNumber + secondNumber
      display.value = result
    } else if (operation === '-') {
      result = firstNumber - secondNumber
      display.value = result
    } else if (operation === '*') {
      result = firstNumber * secondNumber
      display.value = result
    } else if (operation === '/') {
      result = firstNumber / secondNumber
      display.value = result
    }
   // localStorage.setItem('calculate-result',result)
   let previousResults = JSON.parse(localStorage.getItem('calculate-results')) || [];
  
  // Add the current result to the array
   previousResults.push(result);
  
  // Save the updated array back to local storage
  localStorage.setItem('calculate-results', JSON.stringify(previousResults));
  }
  
  function clearDisplay() {
    display.value = 0
    firstNumber = null
    secondNumber = null
    step = 0
    operation = null
    result = 0
    numArray = []
    secondNumberArr = []
  }
  
  


