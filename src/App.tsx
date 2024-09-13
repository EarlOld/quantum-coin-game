import React, { useState } from "react";
import { getQuantumCoinGameResult, quantumCoinGame } from "@earlold/quantum.js";
import Button from "./components/Button/Button";
import Coin from "./components/Coin/Coin";

import styles from "./App.module.scss";

type Scene = "welcome" | "spin" | "result";

const App: React.FC = () => {
  const [scene, setScene] = useState<Scene>("welcome");
  const [result, setResult] = useState<string>("");

  const startGame = () => {
    setScene("spin");
  };

  const chooseOption = (option: boolean) => {
    const result = quantumCoinGame(option);
    setResult(getQuantumCoinGameResult(result));
    setScene("result");
  };

  const resetGame = () => {
    setScene("welcome");
    setResult("");
  };

  return (
    <div className={styles.container}>
      {scene === "welcome" && (
        <>
          <h1 className={styles.title}>Quantum Coin Game</h1>
          <h3 className={styles.title}>@earlold/quantum.js used</h3>
          <p className={styles.text}>
            1. Quantum Computer places the coin in a state of choice (heads or
            tails on top) in a box that covers the coin. Even by touching the
            coin, it is impossible to determine which side is up. .
          </p>
          <p className={styles.text}>
            2. You reache into the box and has the choice to flip the coin over
            or not. Quantum Computer cannot see what he is doing.
          </p>
          <p className={styles.text}>
            3. Quantum Computer reaches into the box and performs an operation
            of choice (flip or not flip)
          </p>
          <p className={styles.text}>
            4. The coin is uncovered and the result is read. 3. If its heads(0),
            then Quantum Computer wins. Else(1), you win.
          </p>

          <Button onClick={startGame} text="Play" />
        </>
      )}
      {scene === "spin" && (
        <>
          <Coin />
          <div className={styles.buttonGroup}>
            <Button onClick={() => chooseOption(true)} text="Flip" />
            <Button
              onClick={() => chooseOption(false)}
              text="Don't"
              type="secondary"
            />
          </div>
        </>
      )}
      {scene === "result" && (
        <>
          <h1 className={styles.title}>{result}</h1>
          <Button onClick={resetGame} text="Try again" />
        </>
      )}
    </div>
  );
};

export default App;
