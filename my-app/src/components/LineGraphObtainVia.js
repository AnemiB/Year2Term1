import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function LineGraphObtainVia() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const obtainViaData = {
      wish: 19,
      quest: 3,
      unknown: 4
    };

    if (chartRef.current && Object.keys(obtainViaData).length !== 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const backgroundColor = [
        'rgba(255, 165, 0, 0.5)', 
      ];
      const borderColor = [
        'rgba(255, 165, 0, 1)', 
        
      ];
      const label = 'Obtain Via Distribution';

      chartInstance = new ChartJS(chartRef.current.getContext('2d'), {
        type: 'line',
        data: {
          labels: Object.keys(obtainViaData),
          datasets: [
            {
              label: label,
              data: Object.values(obtainViaData),
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
  }, []);

  return (
    <div className="line-chart-container">
      <div style={{ width: '100%', height: '300px', padding: '20px', marginTop: '3%' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default LineGraphObtainVia;
