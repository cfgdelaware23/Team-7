import React from 'react';
import Chart from 'react-google-charts';

const PieChart = () => {
  const data = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ];

  const options = {
    title: 'My Daily Activities',
    is3D: true, // Add is3D to enable 3D effect
  };

  const chartContainerStyle = {
    border: '2px solid blue',
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
