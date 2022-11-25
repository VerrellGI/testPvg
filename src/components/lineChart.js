import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  const options={
    plugins: {
      legend: false
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        min: 1000000,
        max: 8000000,
        ticks: {
          stepSize: 2000000,
          callback: (value) => 'Rp. ' + value 
        },
        grid: {
          // tickborderDash: [1],
        }
      }
    }
  };

  return <Line data={chartData} options={options}/>;
}

export default LineChart;