import { useState } from "react";
const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => (prev === "0" ? value : prev + value));
  };

  const handleClear = () => {
    setInput("0");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (Error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input} </div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[
          "/",
          "(",
          ")",
          "+",
          "7",
          "8",
          "9",
          "-",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "=",
          "%",
          "0",
          ".",
        ].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear}>AC</button>
      </div>
    </div>
  );
};

export default Calculator;
