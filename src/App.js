import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumberClick = (evt) => {
    setDisplay(
      display === "0" ? evt.target.value : `${display}${evt.target.value}`
    );
  };

  const handleOperatorClick = (evt) => {
    setDisplay(`${display} ${evt.target.value} `);
  };

  return (
    <div className="App">
      <section>
        <p>{display}</p>
        <main>
          <div className="row">
            <button
              className="operator"
              value="+"
              onClick={handleOperatorClick}
            >
              +
            </button>
            <button
              value="-"
              className="operator"
              onClick={handleOperatorClick}
            >
              -
            </button>
            <button
              value="*"
              className="operator"
              onClick={handleOperatorClick}
            >
              ×
            </button>
            <button
              value="/"
              className="operator"
              onClick={handleOperatorClick}
            >
              ÷
            </button>
          </div>
          <div className="row">
            <div>
              <div className="row">
                <button value="7" onClick={handleNumberClick}>
                  7
                </button>
                <button value="8" onClick={handleNumberClick}>
                  8
                </button>
                <button value="9" onClick={handleNumberClick}>
                  9
                </button>
              </div>
              <div className="row">
                <button value="4" onClick={handleNumberClick}>
                  4
                </button>
                <button value="5" onClick={handleNumberClick}>
                  5
                </button>
                <button value="6" onClick={handleNumberClick}>
                  6
                </button>
              </div>
              <div className="row">
                <button value="1" onClick={handleNumberClick}>
                  1
                </button>
                <button value="2" onClick={handleNumberClick}>
                  2
                </button>
                <button value="3" onClick={handleNumberClick}>
                  3
                </button>
              </div>
              <div className="row">
                <button value="0" onClick={handleNumberClick}>
                  0
                </button>
                <button value="." onClick={handleNumberClick}>
                  .
                </button>
                <button className="clear" onClick={() => setDisplay("0")}>
                  AC
                </button>
              </div>
            </div>
            <button className="equal" onClick={() => setDisplay(eval(display))}>
              =
            </button>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
