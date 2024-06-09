import React, { useRef, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; 

function PieChart({ character1, character2, characterDetails }) {
  const chartRef = useRef(null);
  const [visionData, setVisionData] = useState({});

  useEffect(() => {
    const countVisionData = () => {
      const dataCounts = { Pyro: 0, Cryo: 0, Hydro: 0, Electro: 0, Anemo: 0, Geo: 0, Dendro: 0 };
      [character1, character2].forEach(characterName => {
        const character = characterDetails.find(char => char.name === characterName);
        if (character) {
          const vision = character.vision;
          dataCounts[vision] = dataCounts[vision] ? dataCounts[vision] + 1 : 1; 
        }
      });
      return dataCounts;
    };

    if (character1 && character2 && characterDetails.length > 0) {
      const dataCounts = countVisionData();
      setVisionData(dataCounts);
    }
  }, [character1, character2, characterDetails]);

  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current && Object.keys(visionData).length !== 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      
      const ctx = chartRef.current?.getContext('2d');
      const labels = Object.keys(visionData).filter(vision => visionData[vision] > 0); 
      const dataValues = labels.map(vision => visionData[vision]);
      
      const colors = labels.map(vision => {
        switch (vision) {
          case 'pyro':
            return 'red';
          case 'cryo':
            return 'white';
          case 'hydro':
            return 'blue';
          case 'electro':
            return 'purple';
          case 'anemo':
            return 'turquoise';
          case 'geo':
            return 'gold';
          case 'dendro':
            return 'green';
          default:
            return 'black';
        }
      });

      chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: dataValues,
              backgroundColor: colors, 
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
  }, [visionData]);

  return (
    <div className="pie-chart-container">
      <div style={{ padding: '20px', width: '100%', margin: 'auto' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default PieChart;
