import React, { useState } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const startStopwatch = () => {
    setRunning(true);
  };

  const stopStopwatch = () => {
    setRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setRunning(false);
  };

  React.useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{time} seconds</h2>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

export default Stopwatch;
