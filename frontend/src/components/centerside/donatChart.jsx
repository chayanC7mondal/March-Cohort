import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Credits", "Transfers", "Markets", "Restaurants", "Clothes"],
    datasets: [
      {
        label: "Transactions",
        data: [922.42, 500, 400, 600, 291.42],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%", // Makes it look like a donut chart
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-full max-w-xs mx-auto md:max-w-sm lg:max-w-md h-52 sm:h-64 md:h-72 lg:h-80">
      {/* Doughnut Chart */}
      <Doughnut data={data} options={options} />

      {/* Centered Text */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <strong className="text-lg sm:text-xl md:text-2xl font-bold font-serif">
          $2,713.42
        </strong>
      </div>
    </div>
  );
};

export default DonutChart;
