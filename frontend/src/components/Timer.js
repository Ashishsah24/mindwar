import "./Timer.css";
import React, {useEffect, useState} from 'react';

const Timer = () =>{
    // Set total time in seconds 5 min = 300 seconds
    const initialTime = 300;
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const radius = 90;
    const circumference = 2 * Math.PI * radius;

// Update timeLeft every Second
useEffect(()=>{
    if(timeLeft === 0) return;
    const timerId = setInterval(()=>{
        setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
}, [timeLeft]);

// Calculate percentage and stroke-dashoffset for the circle fill
const percentage = (timeLeft / initialTime) * 100;
const strokeDashoffset = (percentage / 100) * circumference - circumference;

// Format time in mm:ss format
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

return (
    <div className="timer-container">
      <svg width="200" height="200">
        <circle
          className="background-circle"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="10"
        />
        <circle
          className="foreground-circle"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="timer-text">{formatTime(timeLeft)}</div>
    </div>
);
};

export default Timer;