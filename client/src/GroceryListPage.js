import './GroceryListPage.css';
import { useEffect, useState } from 'react';
import { TextField, Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom';

export default function GroceryListPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const groceryList = ['Apple', 'Apple', 'Banana', 'Swoon Lemonade'];

  const [playAudio, setPlayAudio] = useState(false);

  useEffect(() => {
    // Play audio when the state indicates it should be played
    if (playAudio) {
      const audio = new Audio('audio/ChangetheWorld.mp3'); // Replace with the actual path to your audio file
      audio.play();
    } else {
      // Stop the audio when navigating away from the page
      const audio = new Audio('audio/ChangetheWorld.mp3'); // Replace with the actual path to your audio file
      audio.pause();
      audio.currentTime = 0; // Reset audio to the beginning
    }
  }, [playAudio]);

  return (
    <div class="groceryListContainer">
      <Typography variant="h1" sx={{ Color: "white" }}>
        Your Cart:
      </Typography>
      <div class="listContainer">
        {groceryList.map(function (data) {
          return (
            <div>
              {data}
            </div>
          )
        })}
      </div>
      <Button
        variant="contained"
        class="nextButton"
        disableRipple
        onClick={() => {
          setPlayAudio(true); // Set the state to indicate that audio should be played
          navigate("/SpotifyWrap");
        }}
      >
        Check Out
      </Button>
    </div>
  );
}
