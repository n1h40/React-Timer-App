import React, { useState, useEffect } from 'react';

function Watch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div>
      <h1>Current Time</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Watch;
