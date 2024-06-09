import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from "../components/PieChart";
import PolarAreaChartChart from "../components/PolarAreaChart";
import BarChart from "../components/BarChart";
import paimonImage from "../components/paimon2.png";

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

  const handleCharacterSelection1 = (event) => {
    const selectedCharacter = event.target.value;
    setSelectedCharacter1(selectedCharacter);
  };

  const handleCharacterSelection2 = (event) => {
    const selectedCharacter = event.target.value;
    setSelectedCharacter2(selectedCharacter);
  };

  return (
    <div className='page' style={{ backgroundColor: '#192536', color: 'white' }}>
      <div style={{ marginBottom: '20px', marginTop: '150px' }}>
        <select onChange={handleCharacterSelection1}>
          <option value="">Select first character</option>
          {characterDetails.map(character => (
            <option key={character.name} value={character.name}>
              {character.name}
            </option>
          ))}
        </select>
        <select onChange={handleCharacterSelection2}>
          <option value="">Select second character</option>
          {characterDetails.map(character => (
            <option key={character.name} value={character.name}>
              {character.name}
            </option>
          ))}
        </select>
      </div>
      {(selectedCharacter1 && selectedCharacter2) ? (
        <>
          Comparison for {selectedCharacter1} vs {selectedCharacter2}
          <PieChart character1={selectedCharacter1} character2={selectedCharacter2} characterDetails={characterDetails} />
          <PolarAreaChartChart character1={selectedCharacter1} character2={selectedCharacter2} characterDetails={characterDetails} />
          <BarChart character1={selectedCharacter1} character2={selectedCharacter2} characterDetails={characterDetails} />
        </>
      ) : (
        <div>Please select two characters for comparison.</div>
      )}
      <img src={paimonImage} alt="Paimon" style={{ position: 'absolute', bottom: 440, marginLeft: '-35%', width: '200px', height: 'auto' }} />
    </div>
  );
}

export default Comparison;