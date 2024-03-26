import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Timeline.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
  const [characterDetails, setCharacterDetails] = useState(null);
  const [timelineEvents, setTimelineEvents] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false); // State to track if data is loaded

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get('https://genshinlist.com/api/characters');
        const dilucCharacter = response.data.find(character => character.name === 'Diluc');
        setCharacterDetails(dilucCharacter);
        setDataLoaded(true); // Data is loaded
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacterDetails();
  }, []);

  useEffect(() => {
    if (characterDetails) {
      const birthYear = new Date(characterDetails.birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;
      const timelineEvents = [];

      for (let year = birthYear; year <= currentYear; year++) {
        const event = `${year}: ${characterDetails.name}'s ${age}th birthday`; // Fix typo here
        timelineEvents.push(event);
      }

      setTimelineEvents(timelineEvents);
    }
  }, [characterDetails]);

  if (!dataLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='page' style={{ backgroundColor: '#192536', color: 'white', padding: '20px', margin: '0' }}>
      <h3>Birthday Timeline for {characterDetails.name}</h3>
      <VerticalTimeline>
        {timelineEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.split(':')[0]}
            dateClassName="timeline-date"
            iconStyle={{ background: '#FF5733', color: '#fff' }}
            icon={<i className="fa fa-birthday-cake" />}
          >
            <h3 className="vertical-timeline-element-title">{event}</h3>
            <p>
              This is a timeline event for {characterDetails.name}'s birthday in {event.split(':')[0]}.
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
