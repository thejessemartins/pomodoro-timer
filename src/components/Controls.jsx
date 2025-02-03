import React, { useState } from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

const Controls = ({ isRunning, onPlay, onPause, onStop }) => {
  return (
    <div className="d-flex justify-content-center gap-3 mt-3">
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