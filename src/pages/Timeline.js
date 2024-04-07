import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LineGraphRarity from "../components/LineGraphRarity";
import LineGraphWeapon from "../components/LineGraphWeapon";
import LineGraphObtainVia from "../components/LineGraphObtainVia";
import LineGraphVision from "../components/LineGraphVision";
import LineGraphGender from "../components/LineGraphGender";
import paimonImage from "../components/paimon.png"; 

function AlternateTimeline() {
  const [characterDetails, setCharacterDetails] = useState([]);
  const [selectedGraph, setSelectedGraph] = useState('');

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

  const handleGraphSelection = (event) => {
    setSelectedGraph(event.target.value);
  };

  const renderGraph = () => {
    switch (selectedGraph) {
      case 'Rarity':
        return <LineGraphRarity characterDetails={characterDetails} />;
      case 'Weapon':
        return <LineGraphWeapon characterDetails={characterDetails} />;
      case 'ObtainVia':
        return <LineGraphObtainVia characterDetails={characterDetails} />;
      case 'Vision':
        return <LineGraphVision characterDetails={characterDetails} />;
      case 'Gender':
        return <LineGraphGender characterDetails={characterDetails} />;
      default:
        return null;
    }
  };

  return (
    <div className="page" style={{ backgroundColor: '#192536', color: 'white', position: 'relative' }}>
      <h5 style={{ textAlign: 'center', marginBottom: '10px', marginTop: '2%' }}>Timeline</h5>
      <div style={{ marginBottom: '0px', textAlign: 'center' }}>
        <select onChange={handleGraphSelection}>
          <option value="">Select Graph</option>
          <option value="Rarity">Rarity Distribution</option>
          <option value="Weapon">Weapon Distribution</option>
          <option value="ObtainVia">Obtain Via Distribution</option>
          <option value="Vision">Vision Distribution</option>
          <option value="Gender">Gender Distribution</option>
        </select>
      </div>
      <div style={{ textAlign: 'center' }}>
        {renderGraph()}
      </div>
      <div style={{ textAlign: 'center', marginTop: '-30%', marginLeft: '70%' }}>
        <img src={paimonImage} alt="Paimon" style={{ maxWidth: '250px' }} />
      </div>
    </div>
  );
}

export default AlternateTimeline;
