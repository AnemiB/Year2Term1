import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current) {
      chartInstance = new ChartJS(chartRef.current.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              label: 'Stock Prices',
              data: [6000, 3000, 9000, 4000, 2500, 6000],
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Change to transparent background
              borderColor: 'rgba(255, 99, 132, 1)', // Change to solid border color
              pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Set point color same as border color
              borderWidth: 1,
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'top', // Position legend at the top
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // Hide x-axis grid lines
              },
            },
            y: {
              beginAtZero: true, // Start y-axis scale from zero
            },
          },
        },
      });
    }

    return () => {
      // Cleanup function to destroy the chart when the component unmounts or before rendering a new one
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="line-chart-container">
      <div style={{ width: '70%', height: '300px', padding: '20px', margin: 'auto' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default LineChart;
