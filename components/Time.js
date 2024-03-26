import React from 'react';
import './Time.css'; 

function Time() {
  const events = [
    { id: 1, title: 'Event 1', date: 'January 1, 2024' },
    { id: 2, title: 'Event 2', date: 'February 15, 2024' },
    { id: 3, title: 'Event 3', date: 'March 30, 2024' },
    { id: 4, title: 'Event 4', date: 'May 10, 2024' },
  ];

  return (
    <div className="timeline">
      <h1>Timeline</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <div className="event">
              <div className="event-title">{event.title}</div>
              <div className="event-date">{event.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Time;
