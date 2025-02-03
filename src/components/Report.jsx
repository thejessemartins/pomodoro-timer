import React from 'react';

const Report = ({ sessions }) => {
  return (
    <div className="report">
      <h3>Productivity Report</h3>
      <ul className="list-group">
        {sessions.map((session, index) => (
          <li key={index} className="list-group-item">
            {session.type}: {session.duration} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;