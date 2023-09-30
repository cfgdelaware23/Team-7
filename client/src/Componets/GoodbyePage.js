import { useEffect } from 'react';

function HaveANiceDayPage() {

  useEffect(() => {
    // Use setTimeout to delay the redirection for 3 seconds (adjust the time as needed)
    const redirectTimeout = setTimeout(() => {
      window.location.href = '/'; // Replace '/' with the URL of your home page
    }, 3000); // 3000 milliseconds (3 seconds)

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => clearTimeout(redirectTimeout);
  }, []);

  const centerTextStyle = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const boxStyle = {
    backgroundColor: 'rgba(111, 150, 163, 0.7)', // Color #6F96A3 with 70% opacity
    padding: '20px',
    position: 'relative',
    top: '50px', /* Adjust the distance from the top as needed */
  };

  return (
    <div style={centerTextStyle}>
      <div style={boxStyle}>
        <h1>Have a Nice Day!</h1>
        <p>Wishing you a wonderful and joyful day!</p>
      </div>
    </div>
  );
}

export default HaveANiceDayPage;
