import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Features from '../components/Features';
import LineGraphVision from '../components/LineGraphVision';
import LineGraphRarity from '../components/LineGraphRarity';
import './Home.css';
import Side from "../components/Side.png";

const Card = ({ children }) => {
  return (
    <div className="card" style={{ backgroundColor: '#5ca1ff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '30%', marginLeft: '50%', marginTop: '-67.4%' }}>
      {children}
    </div>
  );
};

function Home() {
  const [characterDetails, setCharacterDetails] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterDescription, setCharacterDescription] = useState('');
  const [selectedCharacterName, setSelectedCharacterName] = useState('');
  const [weapons, setWeapons] = useState([]);
  const [filteredWeapons, setFilteredWeapons] = useState([]);
  const [characterImage, setCharacterImage] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const characterResponse = await axios.get('https://genshinlist.com/api/characters');
        setCharacterDetails(characterResponse.data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    const fetchWeapons = async () => {
      try {
        const weaponResponse = await axios.get('https://genshinlist.com/api/weapons');
        setWeapons(weaponResponse.data);
      } catch (error) {
        console.error('Error fetching weapons:', error);
      }
    };

    fetchCharacterDetails();
    fetchWeapons();
  }, []);

  const handleCharacterSelection = async (event) => {
    const selectedCharacterName = event.target.value;
    const selectedCharacter = characterDetails.find(character => character.name === selectedCharacterName);
    setSelectedCharacter(selectedCharacter);
    setSelectedCharacterName(selectedCharacterName);
    if (selectedCharacter) {
      setCharacterDescription(selectedCharacter.description);
      const weaponType = selectedCharacter.weapon || selectedCharacter.weapon_type; // Adjust property name based on actual data structure
      if (weaponType) {
        const filtered = weapons.filter(weapon => weapon.type.toLowerCase() === weaponType.toLowerCase());
        setFilteredWeapons(filtered);
      } else {
        setFilteredWeapons([]);
      }

      // Dynamically import the character image
      try {
        const characterImage = await import(`../assets/${selectedCharacterName}.png`);
        setCharacterImage(characterImage.default);
      } catch (error) {
        console.error('Error loading character image:', error);
        setCharacterImage(null); // Reset image if there was an error
      }
    } else {
      setCharacterDescription('');
      setFilteredWeapons([]);
      setCharacterImage(null); // Reset image if no character is selected
    }
  };

  return (
    <div className='page' style={{ backgroundColor: '#192536', color: 'white', position: 'relative' }}>
      <div style={{ marginTop: '10px', padding: '0 20px' }}>
        <Features />
        <Card>
          <LineGraphVision characters={characterDetails} characterDetails={characterDetails} />
          <LineGraphRarity characters={characterDetails} characterDetails={characterDetails} />
        </Card>
        
        <h2 style={{ marginTop: '20%', fontSize: '1.5rem' }}>Select a Character for more info!</h2>
        <select
          onChange={handleCharacterSelection}
          value={selectedCharacterName}
          style={{ fontSize: '1.3rem', backgroundColor: '#5ca1ff', color: 'white', borderRadius: '25px' }}
        >
          <option value="">Select a character</option>
          {characterDetails.map(character => (
            <option key={character.name} value={character.name}>
              {character.name}
            </option>
          ))}
        </select>
        {selectedCharacter && (
          <div style={{ marginTop: '20px', fontSize: '1rem', width: '50%', marginLeft: '25%' }}>
            <h3>{selectedCharacterName}</h3>
            <h4>Birthday: {selectedCharacter.birthday}</h4>
            {characterImage && (
              <div>
                <img src={characterImage} alt={selectedCharacterName} style={{ width: '200px', height: 'auto' }} />
              </div>
            )}
            <h3>Description</h3>
            <p>{characterDescription}</p>
            <h3>Compatible Weapons</h3>
            <ul className="weapon-list">
              {filteredWeapons.map(weapon => (
                <li key={weapon.name}>{weapon.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <img src={Side} alt="Sidebanner" style={{ position: 'absolute', marginRight: '-86.8%', width: '200px', height: '3000px', marginTop: '-5%' }} />
    </div>
  );
}

export default Home;
