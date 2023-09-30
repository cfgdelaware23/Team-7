import './App.css';
import { Button, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./FeedbackPage.css"
import React, { useState, useEffect } from 'react';

export default function BoughtItems() {
  const items = ['strawberries', 'milk'];
  const randomIndex = Math.floor(Math.random() * items.length);

  const [totalScore, setTotalScore] = useState(0);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    async function loadResponses() {
      try {
        // Load responses from the JSON file when the component mounts
        // const responseFileContents = await fs.readFile('responses/response.json', 'utf8');
        // const parsedResponses = JSON.parse(responseFileContents);
        // setResponses(parsedResponses);
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

  let imageUrl = require('./assets/strawberries.png');
  if (items[randomIndex] === 'strawberries') {
    imageUrl = require('./assets/strawberries.png');
  } else {
    imageUrl = require('./assets/milk.png');
  }

  return (
    <div className="home">
      <div className="homeInfoContainer">
        <Typography variant="body1" type="left" className="body">
          <h1>How did you feel about the {items[randomIndex]} you bought?</h1>
        </Typography>
      </div>
      <div className="centered-div">
        <Button variant="contained" className="buttonText" disableRipple onClick={() => handleResponse(1)}>
          Good
        </Button>
        <img src={imageUrl} alt="Product" />
        <Button variant="contained" className="buttonText" disableRipple onClick={() => handleResponse(-1)}>
          Bad
        </Button>
      </div>
    </div>
  );
}
