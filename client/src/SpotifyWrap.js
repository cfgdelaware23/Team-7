//I just want to make an outline of what I want to make for this file.
//Some of the features include: 
//Displaying 
//-customer purchasing data,
//-Nutrition of products (compared to typical foods at Dollar General or 7/11),
//-Total Saved YTD (compared to competitors retail)
//-Favorite Purchases


import React from 'react';
import { Line } from 'react-chartjs-2';
import customerData from './data';

const SavingsChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Savings',
        data: customerData.savings,
        fill: false,
        borderColor: 'blue',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>Customer Savings</h2>
      <Line data={data} />
    </div>
  );
};

export default SavingsChart;
