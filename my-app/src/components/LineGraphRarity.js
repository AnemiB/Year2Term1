import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function LineGraphRarity({ characters, characterDetails }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const countRarityData = () => {
      const dataCounts = {};
      characterDetails.forEach(character => {
        if (character.rarity) {
          if (Array.isArray(character.rarity)) {
            character.rarity.forEach(rarity => {
              if (!dataCounts[rarity + ' stars']) {
                dataCounts[rarity + ' stars'] = 0;
              }
              dataCounts[rarity + ' stars'] += 1; 
            });
          } else {
            if (!dataCounts[character.rarity + ' stars']) {
              dataCounts[character.rarity + ' stars'] = 0;
            }
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

      const backgroundColor = 'rgba(128, 0, 128, 0.5)'; 
      const borderColor = 'rgba(128, 0, 128, 1)'; 
      const label = 'Rarity Distribution';

      chartInstance = new ChartJS(chartRef.current.getContext('2d'), {
        type: 'line',
        data: {
          labels: Object.keys(rarityData),
          datasets: [
            {
              label: label,
              data: Object.values(rarityData),
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)', 
              borderWidth: 2, 
              fill: true,
              tension: 0.4,
            }
          ],
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
  }, [characters, characterDetails]);

  return (
    <div className="line-chart-container">
      <div style={{ width: '100%', height: '300px', padding: '20px', marginTop: '3%' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default LineGraphRarity;
