import React, { useState, useEffect } from "react";

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

    return (
      <div className="text-center">
        <div>
          <span>{String(days).padStart(2, "0")}</span>:
          <span>{String(hours).padStart(2, "0")}</span>:
          <span>{String(minutes).padStart(2, "0")}</span>:
          <span>{String(seconds).padStart(2, "0")}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="countdown mt-20">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold text">
          {timeLeft > 0 ? formatTime(timeLeft) : "00:00:00:00"}
        </h1>
      </div>
      <div className="text flex flex-row justify-center gap-x-12 text-lg sm:text-2xl sm:gap-x-20 lg:text-3xl lg:gap-x-28 mt-1 lg:mt-2 mb-20">
        <span>DAYS</span>
        <span>HRS</span>
        <span>MIN</span>
        <span>SEC</span>
      </div>
    </div>
  );
}
