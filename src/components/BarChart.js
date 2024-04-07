import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Legend, Tooltip } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Legend, Tooltip);

function BarChart({ character1, character2, characterDetails }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const countWeaponData = () => {
      const dataCounts = {};

      [character1, character2].forEach(characterName => {
        const character = characterDetails.find(char => char.name === characterName);
        if (character) {
          const weapon = character.weapon === 'greatsword' ? 'claymore' : character.weapon;
          dataCounts[weapon] = dataCounts[weapon] ? dataCounts[weapon] + 1 : 1; 
        }
      });
      return dataCounts;
    };

    const weaponData = countWeaponData();

    if (chartRef.current && Object.keys(weaponData).length !== 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      
      const colorMap = {
        polearm: 'red',
        catalyst: 'blue',
        sword: 'turquoise', 
        claymore: 'orange',
        bow: 'pink', 
      };

      const labels = Object.keys(weaponData);
      const backgroundColors = labels.map(weapon => colorMap[weapon]);
      const borderColors = 'white'; 

      chartInstance = new ChartJS(chartRef.current.getContext('2d'), {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Weapon Distribution',
            data: Object.values(weaponData),
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Weapon Distribution',
            },
            legend: {
              display: true,
              position: 'top',
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
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
  }, [character1, character2, characterDetails]);

  return (
    <div className="bar-chart-container">
      <div style={{ width: '70%', height: '300px', padding: '20px', marginLeft: '30%', marginTop: '3%' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default BarChart;
