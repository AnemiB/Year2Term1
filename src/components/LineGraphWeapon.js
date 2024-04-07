import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function LineGraphWeapons({ characters, characterDetails }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const countWeaponData = () => {
      const dataCounts = {};
      characterDetails.forEach(character => {
        const weapon = character.weapon; 
        if (weapon) {
          if (!dataCounts[weapon]) {
            dataCounts[weapon] = 0;
          }
          dataCounts[weapon] += 1; 
        }
      });
      return dataCounts;
    };

    const weaponData = countWeaponData();

    if (chartRef.current && Object.keys(weaponData).length !== 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const backgroundColor = 'rgba(30, 144, 255, 0.5)'; 
      const borderColor = 'rgba(30, 144, 255, 1)'; 
      const label = 'Weapon Distribution';

      chartInstance = new ChartJS(chartRef.current.getContext('2d'), {
        type: 'line',
        data: {
          labels: Object.keys(weaponData),
          datasets: [
            {
              label: label,
              data: Object.values(weaponData),
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
      <div style={{ width: '70%', height: '300px', padding: '20px', marginLeft: '30%', marginTop: '3%' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default LineGraphWeapons;
