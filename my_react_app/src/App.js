import './App.css';

export default function App() {
  return (
    <table>
      <tr>
        <td colSpan="5"><input id="inputExp" /></td>
      </tr>
      <tr>
        <td><Button value="1" /></td>
        <td><Button value="2" /></td>
        <td><Button value="3" /></td>
        <td><Button value="+" /></td>
        <td><Button value="-" /></td>
      </tr>
      <tr>
        <td><Button value="4" /></td>
        <td><Button value="5" /></td>
        <td><Button value="6" /></td>
        <td><Button value="x" /></td>
        <td><Button value="/" /></td>
      </tr>
      <tr>
        <td><Button value="7" /></td>
        <td><Button value="8" /></td>
        <td><Button value="9" /></td>
        <td><Button value="sqr" /></td>
        <td><Button value="deg" /></td>
      </tr>
      <tr>
        <td><Button value="0" /></td>
        <td><Button value="." /></td>
        <td><Button value="clr" /></td>
        <td colSpan="2"><Button value="=" /></td>
      </tr>
    </table>
  );
}

function Button({ value }) {
  const myButton = (value === '=')
    ? <button type="button" className="rectButton">{value}</button>
    : <button type="button" className="roundButton">{value}</button>;

  return (myButton);
}
