import "./SendEmail.css"
import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function SendEmail() {
    const navigate = useNavigate();
    // press the yes button and then send an email of customer's past purchase to the email entered
    const groceryList = ['Apple', 'Apple', 'Banana', 'Swoon Lemonade'];
    const message = groceryList.map(element => `- ${element}`).join('\n');
    const recipientEmail = "johndoe@gmail.com";
    const subject = "List of Your Past Purchase";
    
    const emailLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
  return (
    <div class="sendEmailDisplay">
        <div class="emailContainer">
            <Typography class="emailText">email past purchase?</Typography>
            <div class="buttonContainer">
                <a href={emailLink}>
                <Button variant="contained" class="emailButton" disableRipple onClick={()=>navigate('/goodbye')}>yes</Button>
                </a>
                <Button variant="contained" class="emailButton" disableRipple onClick={()=>navigate('/goodbye')}>no</Button>
            </div>
        </div>
    </div>

  );
}
