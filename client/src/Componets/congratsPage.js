import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

function CongratsDisplay() {
  const navigate = useNavigate(); // Create a navigate function

  useEffect(() => {
    // Use setTimeout to delay the redirection for 3 seconds (adjust the time as needed)
    const redirectTimeout = setTimeout(() => {
      navigate('/'); // Use navigate('/') to go back to the home page
    }, 3000); // 3000 milliseconds (3 seconds)

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div>
      <h1>Displaying Congrats Page</h1>
    </div>
  );
}

export default CongratsDisplay;
