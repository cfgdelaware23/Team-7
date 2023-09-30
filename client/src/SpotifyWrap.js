import React from 'react';
import PieChart from './components/pieChart';

const SpotifyWrapped = () => {
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headingStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    color: 'white', // Text color
    padding: '10px', // Padding around the text
    borderRadius: '8px', // Rounded corners
    textAlign: 'center', // Center text
    marginTop: '20px', // Adjust margin-top as needed
  };

  return (
    <div style={wrapperStyle}>
      <h1 style={headingStyle}>Spotify Wrapped</h1>
      <PieChart />
    </div>
  );
};

export default SpotifyWrapped;
