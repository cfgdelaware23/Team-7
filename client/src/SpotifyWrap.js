import React from 'react';
import PieChart from './components/pieChart'; // Correct the path if needed

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

  // Use require to import the image
  //both of these images are updated based on the get_nutrition_viz.py
  //get_nutrition_viz.py is a dynamic file that connects to backend data that views the users history 
  //and cacluates valuable information for both the store and the customer
  const imageUrl = require('./assets/pie_chart.png');
  const imageUrl2 = require('./assets/word_cloud.png');

  return (
    <div style={wrapperStyle}>
      <h1 style={headingStyle}>Spotify Wrapped</h1>
      <img src={imageUrl} alt="Pie Chart" />
      <img src={imageUrl2} alt="Word Cloud" />
    </div>
  );
};

export default SpotifyWrapped;
