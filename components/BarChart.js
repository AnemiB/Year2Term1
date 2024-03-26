import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current) {
      chartInstance = new ChartJS(chartRef.current.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'Sale Figures',
            data: [5000, 6000, 9000, 4000, 7000, 8000],
            backgroundColor: 'aqua',
            borderColor: 'black',
            borderWidth: 1,
          }]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false // Hide the x-axis grid lines
              }
            },
            y: {
              beginAtZero: true // Start y-axis scale from zero
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            title: {
              display: true,
              text: 'Sales Data'
            }
          }
        }
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
    <div className="bar-chart-container">
      <div style={{ width: '50%', height: '500px', margin: 'auto' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default BarChart;
