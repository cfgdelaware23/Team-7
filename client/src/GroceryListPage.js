import './GroceryListPage.css';
import { useEffect, useState } from 'react';
import { TextField, Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom';

export default function GroceryListPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const groceryList = ['Apple', 'Apple', 'Banana', 'Swoon Lemonade'];

  return (
    <div class="groceryListContainer">
      <Typography variant="h1" sx={{ color: "white", paddingBottom:"24px" }}>
        your cart:
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
          navigate("/SpotifyWrapped");
        }}
      >
        check out
      </Button>
    </div>
  );
}
