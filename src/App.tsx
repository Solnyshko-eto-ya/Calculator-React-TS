import { useState } from "react";
import "./App.css";
import Backgroud from "./Background";
import CustomButton, { ButtonStyle } from "./CustomButton";
import ButtonContainer from "./ButtonContainer";
import InputNumbers from "./InputNumbers";
import Result from "./Result";
import ResultContainer from "./ResultContainer";

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const buttonValues = [
    {
      value: "<",
      style: ButtonStyle.ORANGE,
    },
    {
      value: "C",
      style: ButtonStyle.ORANGE,
    },
    {
      value: "+",
      style: ButtonStyle.ORANGE,
    },
    {
      value: "/",
      style: ButtonStyle.ORANGE,
    },
    {
      value: "7",
      style: ButtonStyle.WHITE,
    },
    {
      value: "8",
      style: ButtonStyle.WHITE,
    },
    {
      value: "9",
      style: ButtonStyle.WHITE,
    },
    {
      value: "X",
      style: ButtonStyle.ORANGE,
    },
    {
      value: "4",
      style: ButtonStyle.WHITE,
    },
    {
      value: "5",
      style: ButtonStyle.WHITE,
    },
    {
      value: "6",
      style: ButtonStyle.WHITE,
    },
    {
      value: "-",
      style: ButtonStyle.ORANGE,
    },
    {
      value: "1",
      style: ButtonStyle.WHITE,
    },
    {
      value: "2",
      style: ButtonStyle.WHITE,
    },
    {
      value: "3",
      style: ButtonStyle.WHITE,
    },
    {
      value: "=",
      style: ButtonStyle.ORANGE,
    },
    {
      value: "(",
      style: ButtonStyle.BLUE,
    },
    {
      value: "0",
      style: ButtonStyle.WHITE,
    },
    {
      value: ".",
      style: ButtonStyle.WHITE,
    },
    {
      value: ")",
      style: ButtonStyle.BLUE,
    },
  ];

  // value значение кнопки приходит как строка
  const handleClick = (value: string) => {
      if (display.length > 18) {
        return;
      } else {
        switch (value) {
          case "=":
            // eslint-disable-next-line no-eval
            return setResult(eval(display));
          case "<":
            return setDisplay((prev) => prev.substring(0, prev.length - 1));
          case "C":
            return setDisplay("");
          case "X":
            if (display.substr(-1) === "*") {
              return;
            }
            if (display.substr(-1) === "+" && "-" && "/") {
              setDisplay((prev) => prev.substring(0, prev.length - 1));
            }
            return setDisplay((prev) => prev + "*");
          case "+":
            if (display.substr(-1) === "+") {
              return;
            }
            if (display.substr(-1) === "*" && "-" && "/") {
              setDisplay((prev) => prev.substring(0, prev.length - 1));
            }
            return setDisplay((prev) => prev + "+");
          case "-":
            if (display.substr(-1) === "-") {
              return;
            }
            if (display.substr(-1) === "*" && "+" && "/") {
              setDisplay((prev) => prev.substring(0, prev.length - 1));
            }
            return setDisplay((prev) => prev + "-");
          case "/":
            if (display.substr(-1) === "/") {
              return;
            }
            if (display.substr(-1) === "*" && "-" && "+") {
              // ниже строка не робит
              setDisplay((prev) => prev.substring(0, prev.length - 1)); 
            }
            return setDisplay((prev) => prev + "/");
          default:
            setDisplay((prev) => prev + value);
        }
      }
  };

  return (
    <Backgroud>
      <ResultContainer>
        <InputNumbers disabled={display.length > 19} value={display} />
        <Result value={result}></Result>
      </ResultContainer>
      <ButtonContainer>
        {buttonValues.map((button) => {
          return (
            <CustomButton
              onClick={handleClick}
              value={button.value}
              styleType={button.style}
            />
          );
        })}
      </ButtonContainer>
    </Backgroud>
  );
}

export default App;
