import React, { useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => setSeconds((prev) => prev + 1), 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setSeconds(0);
    setIntervalId(null);
  };

  return (
    <div>
      <h1>Timer</h1>
      <h2>{seconds} seconds</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
