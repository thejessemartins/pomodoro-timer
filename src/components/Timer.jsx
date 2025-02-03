import React from 'react';

const Timer = ({ sessionType, timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center timer">
      <h2>{sessionType} Session</h2>
      <h1>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </h1>
    </div>
  );
};

export default Timer;