import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Legend, Tooltip, PolarAreaController, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Legend, Tooltip, PolarAreaController, ArcElement);

function PolarAreaChart({ character1, character2, characterDetails }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const countRarityData = () => {
      const dataCounts = { '4 stars': 0, '5 stars': 0 };

      [character1, character2].forEach(characterName => {
        const character = characterDetails.find(char => char.name === characterName);
        if (character) {
          if (Array.isArray(character.rarity)) {
            character.rarity.forEach(rarity => {
              dataCounts[rarity + ' stars'] += 1; 
            });
          } else {
            dataCounts[character.rarity + ' stars'] += 1; 
          }
        }
      });
      return dataCounts;
    };

    const rarityData = countRarityData();

    if (chartRef.current && Object.keys(rarityData).length !== 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const labels = ['4 Stars', '5 Stars'];
      const data = [rarityData['4 stars'], rarityData['5 stars']];
      const backgroundColor = ['rgba(128, 0, 128, 1)', 'rgba(255, 215, 0, 1)'];

      chartInstance = new ChartJS(chartRef.current.getContext('2d'), {
        type: 'polarArea',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: backgroundColor,
            borderColor: 'rgba(255, 255, 255, 1)', 
            borderWidth: 2, 
            tension: 0.4,
          }],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: 'rgba(255, 255, 255, 1)', 
              },
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
    <div className="polar-area-chart-container">
      <div style={{ width: '80%', height: '400px', padding: '20px', marginLeft: '36%', marginTop: '3%' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default PolarAreaChart;
