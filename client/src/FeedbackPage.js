import React from 'react';
import { useState } from 'react';
import {Typography,Button} from "@mui/material";
import './FeedbackPage.css';
import { useNavigate } from 'react-router-dom';


export default function FeedbackPage() {
  const navigate = useNavigate();
  const groceryList = ['apples', 'apples', 'bananas', 'swoon lemonade'];
  const randomIndex = Math.floor(Math.random() * groceryList.length);
  const [scoreDifference, setScoreDifference] = useState(0);
  
  return (
    <div class="feedbackContainer">
      <Typography variant="h2" sx={{color:"white", paddingBottom:"24px"}}>
      thank you for shopping with us! last time you purchased <b>{groceryList[randomIndex]}</b>, would you buy it again?
    </Typography>

    <div class="buttonContainer">
      <Button variant="contained" class="formButton" disableRipple onClick={()=>{setScoreDifference(1);  navigate('/goodbye');}}>yes</Button>
      <Button variant="contained" class="formButton" disableRipple onClick={()=>{setScoreDifference(-1);  navigate('/goodbye');}}>no</Button>
    </div>
  </div>
  );
};
