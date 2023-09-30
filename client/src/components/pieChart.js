import React from 'react';
import Chart from 'react-google-charts';

const PieChart = () => {
  const data = [
    ['Nutrition', 'Percent of Diet'],
    ['Carbohydrates', 73.0],
    ['Protein', 8.7],
    ['Fats', 18.3]
  ];

  const options = {
    title: 'My Daily Activities',
    is3D: true, // Add is3D to enable 3D effect
    backgroundColor: '#E9BC8B', // Set the background color to #1E4182
  };

  const chartContainerStyle = {
    borderRadius: '8px',
    padding: '10px',
    width: '60%',
    margin: '0 auto',
    background: 'transparent',
  };

  return (
    <div style={chartContainerStyle}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default PieChart;
