import React from 'react';
import { useState } from 'react';
import {Typography,Button} from "@mui/material";
import './FeedbackPage.css';
import { useNavigate } from 'react-router-dom';


export default function FeedbackPage() {
  const navigate = useNavigate();
  const groceryList = ['Apples', 'Apples', 'Bananas', 'Swoon Lemonade'];
  const randomIndex = Math.floor(Math.random() * groceryList.length);
  const [scoreDifference, setScoreDifference] = useState(0);
  
  return (
    <div class="feedbackContainer">
      <Typography variant="h2" sx={{color:"white", paddingBottom:"24px"}}>
      Thank you for shopping with us! Last time you purchased <b>{groceryList[randomIndex]}</b>, would you purchase it again?
    </Typography>

    <div class="buttonContainer">
      <Button variant="contained" class="formButton" disableRipple onClick={()=>{setScoreDifference(1);  navigate('/goodbye');}}>Yes</Button>
      <Button variant="contained" class="formButton" disableRipple onClick={()=>{setScoreDifference(-1);  navigate('/goodbye');}}>No</Button>
    </div>
  </div>
  );
};

