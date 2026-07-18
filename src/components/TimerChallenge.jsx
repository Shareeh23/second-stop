import ResultModal from "./ResultModal";
import { useRef, useState, useEffect } from "react";

const TIMER_INTERVAL = 10;

export default function TimerChallenge({ title, targetTime }) {
  const timerRef = useRef(null);
  const dialogRef = useRef(null);

  const initialTime = targetTime * 1000;

  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  const timerIsActive = timeRemaining > 0 && timeRemaining < initialTime;

  function handleStart() {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) =>
        Math.max(prevTimeRemaining - TIMER_INTERVAL, 0),
      );
    }, TIMER_INTERVAL);
  }

  function handleStop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    dialogRef.current?.open();
  }

  function handleReset() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimeRemaining(initialTime);
  }

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      dialogRef.current?.open();
    }
  }, [timeRemaining]);

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button
            type="button"
            onClick={timerIsActive ? handleStop : handleStart}
          >
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
