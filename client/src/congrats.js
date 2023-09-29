import React from 'react';

function CongratsPage({ onSignUp }) {
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
      <h3>Congratulations!</h3>
      <p>You have successfully signed up.</p>
      <button onClick={handleSignUp}>Back to Home</button>
    </div>
  );
}

export default CongratsPage;
