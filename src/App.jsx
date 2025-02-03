import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Controls from './components/Controls';
import Report from './components/Report';

function App() {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState('Focus');
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    let intervalId = null;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    } else if (timeLeft === 0) {
      handleSessionEnd();
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  const handleSessionEnd = () => {
    const newSession = {
      type: sessionType,
      duration: sessionType === 'Focus' ? 25 : 5,
    };
    setSessions((prevSessions) => [...prevSessions, newSession]);
    toggleSessionType();
    setTimeLeft(sessionType === 'Focus' ? 300 : 1500); // Break or Focus
  };

  const toggleSessionType = () => {
    setSessionType((prevType) => (prevType === 'Focus' ? 'Break' : 'Focus'));
  };

  const handlePlay = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleStop = () => {
    setIsRunning(false);
    setTimeLeft(1500);
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
      <Report sessions={sessions} />
    </div>
  );
}

export default App;