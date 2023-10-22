const input = document.getElementById('inputExp');
let operator;

function addToInput(toAdd) {
  if (input.value === '' && toAdd === '.') {
    input.value += `0${toAdd}`;
  } else if (operator && toAdd === '.') {
    input.value += `0${toAdd}`;
  } else {
    input.value += toAdd;
  }
}

function addOperator(op) {
  if (!operator && input.value !== '') {
    operator = op;
    input.value += op;
  }
}

function clearData() {
  operator = null;
  input.value = '';
}

function findSqr() {
  const data = +input.value;
  input.value = data ** 0.5;
}
