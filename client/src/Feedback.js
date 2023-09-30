import './App.css';
import {Button, Typography} from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./HomePage.css"


// function FeedbackPage() {
//     return (
//         <div class="home">
//         <Typography variant="h1" class="header">
//         welcome.
//         </Typography>
  
//         <div class = "homeInfoContainer">
//           <Typography variant="body1" type="left" class="body">
//           creating a seamless grocery<br></br>shopping experience, with<br></br>
//           <i> personalized pricing.</i>
//           </Typography>
//           {/* <img src={require("./images/homeImage.png")} class ="homeInfoImage" alt="A World Well Nourished"></img> */}
//         </div>
  
//         <Typography variant="body1" class="body">
//         do you have an account with us?
//         </Typography>
       
//         <div class = "homeButtonContainer">
//         <a href="/lookupPage">
//           <Button variant="contained" class="buttonText" disableRipple>Yes</Button>
//           </a>
//           <a href="/formPage">
//           <Button variant="contained" class="buttonText" disableRipple>No</Button>
//           </a>
//         </div>
//       </div>
//       );
//     }
    

//     export default FeedbackPage;




import React, { useState, useEffect } from 'react';
// import fs from 'fs/promises'; // Node.js file system module

function RandomFood(props) {
  return <li>I am a {props.items}</li>;
}

export default function BoughtItems() {
  const items = ['strawberries', 'carrots', 'milk'];
  const randomIndex = Math.floor(Math.random() * items.length);

  const [totalScore, setTotalScore] = useState(0);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    // Load responses from the JSON file when the component mounts
    async function loadResponses() { 
      try {
      //  const responseFileContents = await fs.readFile('responses/response.json', 'utf8');
      //  const parsedResponses = JSON.parse(responseFileContents);
      //  setResponses(parsedResponses);
      } catch (error) {
        console.error('Error loading responses:', error);
      }
    }

    loadResponses();
  }, []);

  const handleResponse = (binaryResponse) => {
    // Update the total score
    setTotalScore(totalScore + binaryResponse);

    // Add the response to the responses array
    const newResponses = [...responses, binaryResponse];

    // Update the responses in the JSON file
    async function updateResponsesFile() {
      try {
       // await fs.writeFile('responses/response.json', JSON.stringify(newResponses), 'utf8');
        setResponses(newResponses);
      } catch (error) {
        console.error('Error updating responses:', error);
      }
    }

    updateResponsesFile();
  };

  return (
    <>
    <div class="home">
    <div class = "homeInfoContainer"> 
    <Typography variant="body1" type="left" class="body">
      <h1>How did you feel about {items[randomIndex]} you bought?</h1>
      </Typography>
      </div>
      <button onClick={() => handleResponse(1)}>Positive</button>
      <button onClick={() => handleResponse(-1)}>Negative</button>
      
      {/* <RandomFood items={items[randomIndex]} /> */}
      </div>
    </>
  );
}

