import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CongratsPage.css"

function CongratsPage({ onSignUp }) {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  const centerTextStyle = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const boxStyle = {
    backgroundColor: 'rgba(111, 150, 163, 0.7)', // Color #6F96A3 with 70% opacity
    padding: '40px', // Increase padding to make the box slightly bigger
    position: 'relative',
    top: '50px', /* Adjust the distance from the top as needed */
    fontSize: '24px', // Increase font size to make the text bigger
  };

  return (
    <div className='container'>
      <Typography variant="h3" className='header'>thank you!</Typography>
      <Typography variant="h4" sx={{color:"white"}}>you have successfully signed up.</Typography>
    </div>
  );
}

export default CongratsPage;
