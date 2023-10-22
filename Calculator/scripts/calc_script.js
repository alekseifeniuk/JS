'use strict';

let operator;

// function calculate() {
//   let value_1 = +document.getElementById("field_1").value;
//   let value_2 = +document.getElementById("field_2").value;

//   let result;
  
//   switch(op) {
//     case "+":
//       result = value_1 + value_2;
//       break;
    
//     case "-":
//       result = value_1 - value_2;
//       break;

//     case "*":
//       result = value_1 * value_2;
//       break;

//     case "/":
//       result = value_1 / value_2;
//       break;
//   }

// document.getElementById("result").innerHTML = result;

// }

function addToInput(toAdd) {
  document.getElementById("inputExp").value += toAdd;
}

function clearData() {
  operator = null;
  document.getElementById("inputExp").value = "";
}

function addOperator(op) {
  if (operator) {
    alert( `Выбран оператор - "${operator}"` );
  } else {
    operator = op;
    document.getElementById("inputExp").value += op;
  }
}
