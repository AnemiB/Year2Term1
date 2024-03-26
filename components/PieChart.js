import React, { useRef, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart({ selectedCharacters, characterDetails }) {
  const chartRef = useRef(null);
  const [visionData, setVisionData] = useState({});

  useEffect(() => {
    let chartInstance = null;

    const countVisionData = () => {
      const dataCounts = { Pyro: 0, Cryo: 0, Hydro: 0, Electro: 0, Anemo: 0, Geo: 0 };
      selectedCharacters.forEach(characterName => {
        const character = characterDetails.find(char => char.name === characterName);
        if (character) {
          dataCounts[character.vision]++;
        }
      });
      return dataCounts;
    };

    if (selectedCharacters.length > 0 && characterDetails.length > 0) {
      const dataCounts = countVisionData();
      setVisionData(dataCounts);
    }

    if (chartRef.current) {
      chartInstance = chartRef.current.chartInstance;
      chartInstance?.destroy();
    }

    if (selectedCharacters.length > 0 && characterDetails.length > 0) {
      const ctx = chartRef.current?.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Pyro', 'Cryo', 'Hydro', 'Electro', 'Anemo', 'Geo'],
          datasets: [
            {
              data: Object.values(visionData),
              backgroundColor: ['orangered', 'white', 'aqua', 'purple', 'green', 'darkgoldenrod'],
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: true,
              text: 'Vision Distribution',
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [selectedCharacters, characterDetails]);

  return (
    <div className="pie-chart-container">
      <div style={{ padding: '20px', width: '50%', margin: 'auto' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default PieChart;
