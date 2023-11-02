import React, { useState, useEffect } from 'react';

const CountTime = () => {
  const targetDate = new Date('2023-10-25'); // Change this to your target date
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeRemaining() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    if (difference < 0) {
      // Target date has passed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  return (
    <div className="text-center md:pt-0 pt-20">
      <div className='md:text-3xl text-2xl text-white capitalize text-center'>akt test dates AKT October 2023 : 25 October 2023</div>
      <div className="text-4xl text-white font-bold">Countdown</div>
      <div className="flex justify-center mt-4 md:space-x-6 space-x-3 md:text-2xl text-lg font-medium">
        <div className="bg-[#FED7AA] rounded-lg md:px-6 px-4 py-4">
          <div className=" font-bold">{remainingTime.days}</div>
          <div className="text-[#504444] text-lg md:text-xl">Days</div>
        </div>
        <div className="bg-[#FEE2B8] rounded-lg md:px-6 px-4 py-4">
          <div className=" font-bold">{remainingTime.hours}</div>
          <div className="text-[#504444] text-lg md:text-xl">Hours</div>
        </div>
        <div className="bg-[#FFDDBE] rounded-lg md:px-6 px-4 py-4">
          <div className=" font-bold">{remainingTime.minutes}</div>
          <div className="text-[#504444] text-lg md:text-xl">Minutes</div>
        </div>
        <div className="bg-[#FFC3A0] rounded-lg md:px-6 px-4 py-4">
          <div className=" font-bold">{remainingTime.seconds}</div>
          <div className="text-[#504444] text-lg md:text-xl">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountTime;
