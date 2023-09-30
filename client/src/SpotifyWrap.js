import React from 'react';
import PieChart from './components/pieChart';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

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

  // Use require to import the images
  const imageUrl = require('./assets/pie_chart.png');
  const imageUrl2 = require('./assets/word_cloud.png');

  const imageContainerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '20px', // Adjust margin as needed
    border: '2px solid #6F96A3', // Add a blue border
    padding: '10px', // Add padding
    borderRadius: '8px', // Rounded corners
  };

  const imageTitleStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'white', // Text color
    margin: '10px', // Adjust margin as needed
  };

  const imageAnimationProps = {
    initial: { scale: 0 },
    animate: { rotate: 360, scale: 0.86 },
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 20,
    },
  };

  return (
    <div style={wrapperStyle}>
      <h1 style={headingStyle}>Spotify Wrapped</h1>
      <motion.div {...imageAnimationProps} style={imageContainerStyle}>
        <h2 style={imageTitleStyle}>Pie Chart</h2>
        <img src={imageUrl} alt="Pie Chart" className="chart-animation" />
      </motion.div>
      <motion.div {...imageAnimationProps} style={imageContainerStyle}>
        <h2 style={imageTitleStyle}>Word Cloud</h2>
        <img src={imageUrl2} alt="Word Cloud" className="cloud-animation" />
      </motion.div>
    </div>
  );
};

export default SpotifyWrapped;
