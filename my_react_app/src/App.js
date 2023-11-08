import './App.css';

function Button({ value, operation }) {
  const myButton = (value === '=')
    ? (
      <td colSpan="2">
        <button type="button" className="rectButton" onClick={operation}>
          {value}
        </button>
      </td>
    )
    : (
      <td>
        <button type="button" className="roundButton" onClick={operation}>
          {value}
        </button>
      </td>
    );

  return (myButton);
}

export default function App() {
  let operator;
  function clear() {
    const inputField = document.getElementById('inputExp');
    if (operator) {
      operator = null;
    }
    inputField.value = '';
  }
  function addToInput(toAdd) {
    const inputField = document.getElementById('inputExp');
    if (inputField.value === '' && toAdd === '.') {
      inputField.value += `0${toAdd}`;
    } else if (operator && toAdd === '.') {
      inputField.value += `0${toAdd}`;
    } else {
      inputField.value += toAdd;
    }
  }
  function addOperator(mathOperator) {
    const inputField = document.getElementById('inputExp');
    if (!operator && inputField.value !== '') {
      operator = mathOperator;
      inputField.value += mathOperator;
    }
  }
  function findSqr() {
    const inputField = document.getElementById('inputExp');
    inputField.value = Math.sqrt(inputField.value);
  }
  function calculateExprassion() {
    const inputField = document.getElementById('inputExp');
    const operands = inputField.value.split(operator);
    const operandOne = +operands[0];
    const operandTwo = +operands[1];

    switch (operator) {
      case '+':
        inputField.value = operandOne + operandTwo;
        break;
      case '-':
        inputField.value = operandOne - operandTwo;
        break;
      case '*':
        inputField.value = operandOne * operandTwo;
        break;
      case '/':
        inputField.value = operandOne / operandTwo;
        break;
      case '^':
        inputField.value = operandOne ** operandTwo;
        break;
      default:
        inputField.value = 'Error!';
        break;
    }
    operator = null;
  }

  return (
    <table>
      <tr>
        <td colSpan="5"><input id="inputExp" /></td>
      </tr>
      <tr>
        <Button value="1" operation={() => addToInput('1')} />
        <Button value="2" operation={() => addToInput('2')} />
        <Button value="3" operation={() => addToInput('3')} />
        <Button value="+" operation={() => addOperator('+')} />
        <Button value="-" operation={() => addOperator('-')} />
      </tr>
      <tr>
        <Button value="4" operation={() => addToInput('4')} />
        <Button value="5" operation={() => addToInput('5')} />
        <Button value="6" operation={() => addToInput('6')} />
        <Button value="x" operation={() => addOperator('*')} />
        <Button value="/" operation={() => addOperator('/')} />
      </tr>
      <tr>
        <Button value="7" operation={() => addToInput('7')} />
        <Button value="8" operation={() => addToInput('8')} />
        <Button value="9" operation={() => addToInput('9')} />
        <Button value="&#8730;" operation={() => findSqr()} />
        <Button value="deg" operation={() => addOperator('^')} />
      </tr>
      <tr>
        <Button value="0" operation={() => addToInput('0')} />
        <Button value="." operation={() => addToInput('.')} />
        <Button value="clr" operation={() => clear()} />
        <Button value="=" operation={() => calculateExprassion()} />
      </tr>
    </table>
  );
}
