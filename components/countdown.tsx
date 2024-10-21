import React, { useState, useEffect } from "react";
import Art from "./art";

export default function Countdown() {
  const totalTimeInSeconds = 10000; // Set your countdown time in seconds
  const [timeLeft, setTimeLeft] = useState(totalTimeInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time % (24 * 3600)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="lg:pr-20 border-cover">
      <Art tab="COUNTDOWN" />
      <div className="countdown">
        <h1 className="countdown-text text">{timeLeft > 0 ? formatTime(timeLeft) : "00:00:00:00"}</h1>
        <pre className="text">
            {`ALGOEXPLORE 1.0 |
COUNTDOWN[demo]`}</pre>
      </div>
      <div className="text underscan-mid">
        <pre>{`
~$ cat details.txt
Powered By : HackathonHub-NSBM
// Prepare for a Whole New Adventure !

~$ ./init_Navigation
Navigation Initialized

>>> Press ↓ to continue
        `}</pre>
      </div>
    </div>
  );
}
