import React, { useState } from "react";
import './lotto.css'

export function Lotto() {
  const [number, setNumber] = useState([])

  const pushNumbers = counter => {
    let emptyArr = [];

    let randomGenerator = num => {
      return parseInt(Math.random() * num + 1);
    };

    while (counter) {

      let randomNum = randomGenerator(60);

      while (emptyArr.indexOf(randomNum) !== -1) {
        randomNum = randomGenerator(60);
      }

      emptyArr.push(randomNum);
      counter--;
    }

    emptyArr[emptyArr.length] = randomGenerator(10);
    return emptyArr;
  };

  function handleClick() {
    return setNumber(pushNumbers(5))
  }

  function reset() {
    return setNumber([])
  }

  return (
    <div className="lotto-container">
      <h1>Trabalho Matemática</h1>
      <p>Gerador de número aleatórios</p>
      <ul className="number-container">
        {number.map((num, i) => {
          return (
            <li key={i}>
              <p>{num}</p>
            </li>
          );
        })}
      </ul>
      <div className="button-container">
        <button className="reset" onClick={reset}>Resetar</button>
        <button className="generate" onClick={handleClick}>Mostre os números da sorte</button>
      </div>
    </div>
  );
}


