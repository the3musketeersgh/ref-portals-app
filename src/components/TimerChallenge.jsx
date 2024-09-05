import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
  const [remaingTime, setRemainingTime] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const timerActive = remaingTime > 0 && remaingTime < targetTime * 1000;

  if (remaingTime <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }
  function handleTimer() {
    timer.current = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
  }
  function handleReset() {
    // clearInterval(timer.current);
    setRemainingTime(targetTime * 1000);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remaingTime={remaingTime}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleTimer}>
            {timerActive ? "Start" : "Stop"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Time is running..." : "Time is not running"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
