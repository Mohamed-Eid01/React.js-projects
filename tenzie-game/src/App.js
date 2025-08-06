import "./App.css";
import Diec from "./components/Dice-Button.js";
import React from "react";
import { nanoid } from "nanoid";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";


function App() {
  const [arraynums, setArraynums] = React.useState(() => generateAllNewDice());
  const [gameWon, setgameWon] = React.useState(false);
  const [rollcount, setRollcount] = React.useState(0);
  const [timecount, settimecount] = React.useState(0);
  const [hasstarted, sethasstarted] = React.useState(false);
  const [besttime, setbesttime] = React.useState(0);
  const buttonRef = React.useRef(null);
  

React.useEffect(() => {
  if (!hasstarted && arraynums.some((die) => die.isHeld)) {
    sethasstarted(true);
  }
}, [arraynums]);

  React.useEffect(() => {
    if (hasstarted && !gameWon) {
      const interval = setInterval(() => {
        settimecount((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameWon, hasstarted]);


  React.useEffect(() => {
      if (gameWon) {
            buttonRef.current.focus();
          }
          }, [gameWon]);

  React.useEffect(() => {
    if (
      arraynums.every((num) => num.isHeld) &&
      arraynums.every((num) => num.value === arraynums[0].value)
    ) {
      setgameWon(true);
      setbesttime(prevbest=>{
        if(prevbest===0 || timecount < prevbest){
          return timecount;
        }
        return prevbest;
      }
)}
  }, [arraynums]);

  function buttnText() {
    return gameWon ? "New Game" : "Roll";
  }

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  const Dieelement = arraynums.map((dieobject) => (
    <Diec
      isHeld={dieobject.isHeld}
      key={dieobject.id}
      value={dieobject.value}
      hold={() => hold(dieobject.id)}
    />
  ));

  function rolldice() {
    if (!gameWon) {
      setArraynums((prevone) =>
        prevone.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
      setRollcount((count) => count + 1); // ← هنا المكان الصح
    } else {
      setArraynums(generateAllNewDice());
      setgameWon(false);
      setRollcount(0);
      settimecount(0);
      sethasstarted(false);
    }
  }


  function hold(id) {
    setArraynums((prevone) =>
      prevone.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  return (
    <>
      <main className="main">
        {gameWon && <Confetti />}
        <div aria-live="polite" className="sr-only">
          {gameWon && (
            <p>Congratulations! You won! Press "New Game" to start again.</p>
          )}
        </div>
        <div className="main-container">
          <h1>Tenzi</h1>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls. Try to get the fastest time!
          </p>
          <div className="counters-section">
            <span>Rolls: {rollcount}</span>
            <span>Best Time: {besttime > 0 ? `${besttime} s` : "--"}</span>
            <span>Time: {timecount} s</span>
          </div>
          <div className="dice-section">{Dieelement}</div>
          <button ref={buttonRef} className="role-btn" onClick={rolldice}>
            {buttnText()}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
