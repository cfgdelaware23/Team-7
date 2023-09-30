import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

function CongratsPage({ onSignUp }) {
  const navigate = useNavigate(); // Create a navigate function

  useEffect(() => {
    // Use setTimeout to delay the redirection for 3 seconds (adjust the time as needed)
    const redirectTimeout = setTimeout(() => {
      navigate('/'); // Use navigate('/') to go back to the home page
    }, 3000); // 3000 milliseconds (3 seconds)

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  const congratsPageStyle = {
    fontFamily: 'Roboto, sans-serif', // Apply the Roboto font
    textAlign: 'center',
  };

  const handleSignUp = () => {
    if (typeof onSignUp === 'function') {
      onSignUp();
    }
  };

  return (
    <div style={congratsPageStyle} className="congrats-page">
      <h3>Congratulations! </h3>
      <p>You have successfully signed up.</p>
    </div>
  );
}

export default CongratsPage;
