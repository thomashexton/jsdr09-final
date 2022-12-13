import { useState } from "react";
import "./index.scss";

import calculate from "./logic/calculate"; // calculator logic
import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    operation: null,
    next: null,
  });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  const { total, operation, next } = state;

  const buttons = [
    ["AC", "+/-", "%", "÷"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const screenValue = () => {
    let display = [total, operation, next];

    let filteredDisplay = display.filter((element) => {
      return element != null; // interesting use of "!=" and not "!=="
    });

    return filteredDisplay.length === 0 ? "0" : filteredDisplay;
  };

  return (
    <Wrapper>
      <Screen value={screenValue()} />
      <ButtonBox>
        {buttons.flat().map((btn) => {
          return (
            <Button
              className={btn === "=" ? "equals" : ""}
              key={btn} // bad practice
              onClick={handleClick}
              value={btn}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default Calculator;
