import React from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

const Controls = ({ isRunning, onPlay, onPause, onStop }) => {
  return (
    <div className="controls d-flex justify-content-center">
      <button className="btn btn-success" onClick={onPlay} disabled={isRunning}>
        <FaPlay /> Start
      </button>
      <button className="btn btn-warning" onClick={onPause} disabled={!isRunning}>
        <FaPause /> Pause
      </button>
      <button className="btn btn-danger" onClick={onStop}>
        <FaStop /> Stop
      </button>
    </div>
  );
};

export default Controls;