import { useEffect } from 'react';
import "./CongratsPage.css"
import { Typography } from '@mui/material';

function HaveANiceDayPage() {

  useEffect(() => {
    // Use setTimeout to delay the redirection for 3 seconds (adjust the time as needed)
    const redirectTimeout = setTimeout(() => {
      window.location.href = '/'; // Replace '/' with the URL of your home page
    }, 3500); // 3000 milliseconds (3 seconds)

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className='container'>
        <Typography variant="h3" className='header'>thank you for shopping with us.</Typography>
        <Typography variant='h4' sx={{color: "white"}}>have a wonderful day!</Typography>
    </div>
  );
}

export default HaveANiceDayPage;
