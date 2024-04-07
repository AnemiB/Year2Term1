import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import HeaderImage from '../components/Header';
import axios from 'axios';
import Features from '../components/Features'; 
import LineGraphVision from '../components/LineGraphVision'; 
import LineGraphRarity from '../components/LineGraphRarity'; 

function Home() {
  const [characterDetails, setCharacterDetails] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterDescription, setCharacterDescription] = useState('');
  const [selectedCharacterName, setSelectedCharacterName] = useState('');

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

  const handleCharacterSelection = (event) => {
    const selectedCharacterName = event.target.value;
    const selectedCharacter = characterDetails.find(character => character.name === selectedCharacterName);
    setSelectedCharacter(selectedCharacter);
    setSelectedCharacterName(selectedCharacterName);
    if (selectedCharacter) {
      setCharacterDescription(selectedCharacter.description);
    } else {
      setCharacterDescription('');
    }
  };

  return (
    <div className='page' style={{ backgroundColor: '#192536', color: 'white', position: 'relative' }}>
      <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={100} gravity={0.2} wind={0.1} friction={0.9} confettiSize={6} opacity={0.9} />
      <HeaderImage />
      <div style={{ marginTop: '-10px', padding: '0 20px' }}>
        <Features /> 
        <div>
          <LineGraphVision characters={characterDetails} characterDetails={characterDetails} />
        </div>
        <div>
          <LineGraphRarity characters={characterDetails} characterDetails={characterDetails} />
        </div>
        <br></br>
        <h2 style={{ marginTop: '20px', fontSize: '2rem' }}>Select a Character for more info!</h2>
        <select
          onChange={handleCharacterSelection}
          value={selectedCharacterName}
          style={{ fontSize: '1rem' }}
        >
          <option value="">Select a character</option>
          {characterDetails.map(character => (
            <option key={character.name} value={character.name}>
              {character.name}
            </option>
          ))}
        </select>
        {selectedCharacter && (
          <div style={{ marginTop: '20px', fontSize: '2rem', width: '70%', marginLeft: '15%' }}>
            <h3>{selectedCharacterName}</h3>
            <h4>Birthday: {selectedCharacter.birthday}</h4> 
            <h3>Description</h3>
            <p>{characterDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
