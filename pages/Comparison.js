import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";

function Comparison() {
  const [characterDetails, setCharacterDetails] = useState([]);
  const [selectedCharacter1, setSelectedCharacter1] = useState(null);
  const [selectedCharacter2, setSelectedCharacter2] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get('https://genshinlist.com/api/characters');
        setCharacterDetails(response.data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacterDetails();
  }, []);

  const handleCharacterSelection = (character) => {
    if (!selectedCharacter1) {
      setSelectedCharacter1(character);
    } else if (!selectedCharacter2) {
      setSelectedCharacter2(character);
    } else {
      // Reset selections if both characters are already selected
      setSelectedCharacter1(character);
      setSelectedCharacter2(null);
    }
  };

  return (
    <div className='page' style={{ backgroundColor: '#192536', color: 'white' }}>
      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row' }}>
        {characterDetails.map(character => (
          <label key={character.name} style={{ fontSize: '14px', display: 'block' }}>
            <input 
              type="checkbox" 
              checked={selectedCharacter1 === character || selectedCharacter2 === character} 
              onChange={() => handleCharacterSelection(character)} 
            /> 
            {character.name}
          </label>
        ))}
      </div>
      {(selectedCharacter1 && selectedCharacter2) ? (
        <>
          Comparison for {selectedCharacter1.name} vs {selectedCharacter2.name}
          <PieChart character1={selectedCharacter1.name} character2={selectedCharacter2.name} characterDetails={characterDetails} />
          <LineChart character1={selectedCharacter1.name} character2={selectedCharacter2.name} characterDetails={characterDetails} />
          <BarChart character1={selectedCharacter1.name} character2={selectedCharacter2.name} characterDetails={characterDetails} />
        </>
      ) : (
        <div>Please select two characters for comparison.</div>
      )}
    </div>
  );
}

export default Comparison;
