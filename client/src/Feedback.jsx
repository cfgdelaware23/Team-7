import React, { useState, useEffect } from 'react';
import fs from 'fs/promises'; // Node.js file system module

function RandomFood(props) {
  return <li>I am a {props.items}</li>;
}

function BoughtItems() {
  const items = ['Strawberries', 'Carrots', 'Milk'];
  const randomIndex = Math.floor(Math.random() * items.length);

  const [totalScore, setTotalScore] = useState(0);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    // Load responses from the JSON file when the component mounts
    async function loadResponses() { 
      try {
        const responseFileContents = await fs.readFile('responses/response.json', 'utf8');
        const parsedResponses = JSON.parse(responseFileContents);
        setResponses(parsedResponses);
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
        await fs.writeFile('responses/response.json', JSON.stringify(newResponses), 'utf8');
        setResponses(newResponses);
      } catch (error) {
        console.error('Error updating responses:', error);
      }
    }

    updateResponsesFile();
  };

  return (
    <>
      <h1>How did you feel about {items[randomIndex]} you bought?</h1>
      <button onClick={() => handleResponse(1)}>Positive</button>
      <button onClick={() => handleResponse(-1)}>Negative</button>
      
      <RandomFood items={items[randomIndex]} />
    </>
  );
}

export default BoughtItems;
