import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from "../components/PieChart";
import PolarAreaChart from "../components/PolarAreaChart";
import BarChart from "../components/BarChart";
import paimonImage from "../components/paimon2.png";

function Comparison() {
  const [characterDetails, setCharacterDetails] = useState([]);
  const [selectedCharacter1, setSelectedCharacter1] = useState(null);
  const [selectedCharacter2, setSelectedCharacter2] = useState(null);
  const [characterImage1, setCharacterImage1] = useState(null);
  const [characterImage2, setCharacterImage2] = useState(null);

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

  const handleCharacterSelection1 = async (event) => {
    const selectedCharacterName = event.target.value;
    setSelectedCharacter1(selectedCharacterName);
    if (selectedCharacterName) {
      try {
        const characterImage = await import(`../assets/${selectedCharacterName}.png`);
        setCharacterImage1(characterImage.default);
      } catch (error) {
        console.error('Error loading character image:', error);
        setCharacterImage1(null); // Reset image if there was an error
      }
    } else {
      setCharacterImage1(null); // Reset image if no character is selected
    }
  };

  const handleCharacterSelection2 = async (event) => {
    const selectedCharacterName = event.target.value;
    setSelectedCharacter2(selectedCharacterName);
    if (selectedCharacterName) {
      try {
        const characterImage = await import(`../assets/${selectedCharacterName}.png`);
        setCharacterImage2(characterImage.default);
      } catch (error) {
        console.error('Error loading character image:', error);
        setCharacterImage2(null); // Reset image if there was an error
      }
    } else {
      setCharacterImage2(null); // Reset image if no character is selected
    }
  };

  return (
    <div className='page' style={{ backgroundColor: '#192536', color: 'white' }}>
      <div style={{ marginBottom: '20px', marginTop: '150px' }}>
        <select 
          onChange={handleCharacterSelection1}
          style={{ fontSize: '1.3rem', backgroundColor: '#5ca1ff', color: 'white', borderRadius: '25px' }}>
          <option value="">Select first character</option>
          {characterDetails.map(character => (
            <option key={character.name} value={character.name}>
              {character.name}
            </option>
          ))}
        </select>
        <select 
          onChange={handleCharacterSelection2}
          style={{ fontSize: '1.3rem', backgroundColor: '#5ca1ff', color: 'white', borderRadius: '25px' }}>
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
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>
            {characterImage1 && <img src={characterImage1} alt={selectedCharacter1} style={{ width: '200px', height: 'auto' }} />}
            <div style={{ color: 'white', fontSize: '1.5rem' }}>Comparison for {selectedCharacter1} vs {selectedCharacter2}</div>
            {characterImage2 && <img src={characterImage2} alt={selectedCharacter2} style={{ width: '200px', height: 'auto' }} />}
          </div>
          <PieChart character1={selectedCharacter1} character2={selectedCharacter2} characterDetails={characterDetails} />
          <PolarAreaChart character1={selectedCharacter1} character2={selectedCharacter2} characterDetails={characterDetails} />
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
