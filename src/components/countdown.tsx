import React, { useState, useEffect } from "react";
import Art from "./art";

export default function Countdown() {
  const targetDate = new Date("2024-10-31T23:59:59"); // Set your target date and time here
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      setTimeLeft(Math.max(0, Math.floor(difference / 1000)));
    };

    calculateTimeLeft();

    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time % (24 * 3600)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="">
      <Art tab="COUNTDOWN" />
      <div className="countdown">
        <h1 className="text-5xl font-bold text">
          {timeLeft > 0 ? formatTime(timeLeft) : "00:00:00:00"}
        </h1>
      </div>
      <div className="text underscan-mid"></div>
    </div>
  );
}
