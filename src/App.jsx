import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Controls from './components/Controls';
import Report from './components/Report';
import ProductivityChart from './components/ProductivityChart';
import Settings from './components/Settings';

function App() {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutos
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState('Focus');
  const [sessions, setSessions] = useState([]);
  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  useEffect(() => {
    let intervalId = null;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    } else if (timeLeft === 0) {
      playSound();
      handleSessionEnd();
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  const playSound = () => {
    const audio = new Audio('https://notificationsounds.com/soundfiles/7e68c8d09f/alarm-1.mp3');
    audio.play();
  };

  const handleSessionEnd = () => {
    const newSession = {
      type: sessionType,
      duration: sessionType === 'Focus' ? focusTime : breakTime,
    };
    setSessions((prevSessions) => [...prevSessions, newSession]);
    toggleSessionType();
    setTimeLeft(sessionType === 'Focus' ? breakTime * 60 : focusTime * 60);
  };

  const toggleSessionType = () => {
    setSessionType((prevType) => (prevType === 'Focus' ? 'Break' : 'Focus'));
  };

  const handlePlay = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleStop = () => {
    setIsRunning(false);
    setTimeLeft(focusTime * 60);
    setSessionType('Focus');
  };

  return (
    <div className="container">
      <Header />
      <Timer sessionType={sessionType} timeLeft={timeLeft} />
      <Controls
        isRunning={isRunning}
        onPlay={handlePlay}
        onPause={handlePause}
        onStop={handleStop}
      />
      {/* <Report sessions={sessions} /> */}
      <ProductivityChart sessions={sessions} />
      <Settings
        onFocusTimeChange={(value) => setFocusTime(Number(value))}
        onBreakTimeChange={(value) => setBreakTime(Number(value))}
      />
    </div>
  );
}

export default App;