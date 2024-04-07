import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function LineGraphGender({ characters, characterDetails }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const countGenderData = () => {
      const dataCounts = {};
      characterDetails.forEach(character => {
        const gender = character.gender; 
        if (gender) {
          if (!dataCounts[gender]) {
            dataCounts[gender] = 0;
          }
          dataCounts[gender] += 1;
        }
      });
      return dataCounts;
    };

    const genderData = countGenderData();

    if (chartRef.current && Object.keys(genderData).length !== 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }

     
      const backgroundColor = 'rgba(255, 182, 193, 0.5)'; 
      const borderColor = 'rgba(255, 105, 180, 1)';
      const label = 'Gender Distribution';

      chartInstance = new ChartJS(chartRef.current.getContext('2d'), {
        type: 'line',
        data: {
          labels: Object.keys(genderData),
          datasets: [
            {
              label: label,
              data: Object.values(genderData),
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
                color: 'white', 
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

export default LineGraphGender;
