'use strict';

let op;

function calculate() {
  let value_1 = +document.getElementById("field_1").value;
  let value_2 = +document.getElementById("field_2").value;

  let result;
  
  switch(op) {
    case "+":
      result = value_1 + value_2;
      break;
    
    case "-":
      result = value_1 - value_2;
      break;

    case "*":
      result = value_1 * value_2;
      break;

    case "/":
      result = value_1 / value_2;
      break;
  }

document.getElementById("result").innerHTML = result;

}
