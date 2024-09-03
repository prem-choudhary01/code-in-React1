import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let [multiplication, setMultiplication] = useState(1);
  let [division, setDivision] = useState(20);

  const addValue = () => {
    if (counter >= 10) return;
    // counter++;
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter <= 0) return;
    // counter--;
    setCounter(counter - 1);
  };
  const multiplicationValue = () => {
    multiplication = multiplication * 2;
    setMultiplication(multiplication);
  };
  const divisionValue = () => {
    if (division <= 2) return;
    // division / 2;
    setDivision(division / 2);
  };

  return (
    <>
      <h1>code in react </h1>
      <h3>counter value {counter}</h3>
      <button onClick={addValue}>add value </button>
      <br />
      <br />
      <button onClick={removeValue}>remove value</button>
      <br />
      <br /> <br />
      <br />
      <h3>multiplication {multiplication}</h3>
      <button onClick={multiplicationValue}>multiplication value</button>
      <br />
      <br />
      <h3>Division{division}</h3>
      <button onClick={divisionValue}>Division value</button>
    </>
  );
}

export default App;
