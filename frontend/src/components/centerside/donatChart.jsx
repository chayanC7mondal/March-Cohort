import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Credits', 'Transfers', 'Markets', 'Restaurants', 'Clothes'],
    datasets: [
      {
        label: 'Transactions',
        data: [922.42, 500, 400, 600, 291.42],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ position: 'relative', height: '200px', width: '200px' }} >
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <strong className='font-bold font-serif text-2xl'>$2,713.42</strong>
      </div>
    </div>
  );
};

export default DonutChart;
