import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CongratsPage({ onSignUp }) {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 5000);

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
    <div style={centerTextStyle}>
      <div style={boxStyle}>
        <h3>Congratulations!</h3>
        <p>You have successfully signed up.</p>
      </div>
    </div>
  );
}

export default CongratsPage;
