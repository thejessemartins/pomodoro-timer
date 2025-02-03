import React, { useState } from 'react';

const Settings = ({ onFocusTimeChange, onBreakTimeChange }) => {
  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const handleFocusTimeChange = (e) => {
    setFocusTime(e.target.value);
    onFocusTimeChange(e.target.value);
  };

  const handleBreakTimeChange = (e) => {
    setBreakTime(e.target.value);
    onBreakTimeChange(e.target.value);
  };

  return (
    <div className="settings">
      <h3>Configurações</h3>
      <div className="mb-2">
        <label htmlFor="focus-time" className="form-label">
          Foco (minutos):
        </label>
        <input
          type="number"
          id="focus-time"
          className="form-control"
          value={focusTime}
          onChange={handleFocusTimeChange}
        />
      </div>
      <div>
        <label htmlFor="break-time" className="form-label">
          Pausa (minutos):
        </label>
        <input
          type="number"
          id="break-time"
          className="form-control"
          value={breakTime}
          onChange={handleBreakTimeChange}
        />
      </div>
    </div>
  );
};

export default Settings;