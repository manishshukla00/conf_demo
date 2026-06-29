import React, { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("September 13, 2025 00:00:00 GMT+00:00"); // Target date: July 12, 2025
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      // Timer has expired
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-4 py-6 flex flex-col items-center bg-gradient-to-br from-blue-200 via-indigo-300 to-indigo-400 rounded-3xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-500 to-emerald-400 mb-4 text-center drop-shadow-md">
        Countdown to AICCT 2025
      </h2>
      <div className="flex flex-wrap justify-center gap-6 text-center">
        {/* Days */}
        <div className="flex flex-col items-center">
          <span
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-md"
            style={{ width: "3ch" }} // Reduced width for smaller alignment
          >
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <p className="text-gray-900 text-sm md:text-base font-semibold">
            Days
          </p>
        </div>
        <span className="text-4xl md:text-5xl font-bold text-blue-900 drop-shadow-md">
          :
        </span>
        {/* Hours */}
        <div className="flex flex-col items-center">
          <span
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 drop-shadow-md"
            style={{ width: "3ch" }} // Reduced width for smaller alignment
          >
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <p className="text-gray-900 text-sm md:text-base font-semibold">
            Hours
          </p>
        </div>
        <span className="text-4xl md:text-5xl font-bold text-blue-900 drop-shadow-md">
          :
        </span>
        {/* Minutes */}
        <div className="flex flex-col items-center">
          <span
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 drop-shadow-md"
            style={{ width: "3ch" }} // Reduced width for smaller alignment
          >
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <p className="text-gray-900 text-sm md:text-base font-semibold">
            Minutes
          </p>
        </div>
        <span className="text-4xl md:text-5xl font-bold text-blue-900 drop-shadow-md">
          :
        </span>
        {/* Seconds */}
        <div className="flex flex-col items-center">
          <span
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 drop-shadow-md"
            style={{ width: "3ch" }} // Reduced width for smaller alignment
          >
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <p className="text-gray-900 text-sm md:text-base font-semibold">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;


