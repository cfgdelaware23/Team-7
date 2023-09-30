import './GroceryListPage.css';
import { useEffect, useState } from 'react';
import { TextField, Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom';

export default function GroceryListPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const groceryList = [
    { item: 'Apple (2x)', price: 1.99 },
    { item: 'Banana', price: 0.99 },
    { item: 'Swoon Lemonade', price: 2.49 },
    { item: 'Milk', price: 2.99 },
    { item: 'Eggs (dozen)', price: 3.49 },
  ];
  
  

  // Calculate the total price
  const totalPrice = groceryList.reduce((total, item) => total + item.price, 0);

  return (
    <div class="groceryListContainer">
      <Typography variant="h1" sx={{ color: "white", paddingBottom: "24px" }}>
        Your Cart:
      </Typography>
      <div class="listContainer">
        {groceryList.map(function (data, index) {
          return (
            <div key={index} className="groceryItem">
              <span className="itemName">{data.item}</span>
              <span className="itemPrice">${data.price.toFixed(2)}</span>
            </div>
          )
        })}
      </div>
      <div className="totalPrice">
        <Typography variant="h4" sx={{ color: "white" }}>
          Total: ${totalPrice.toFixed(2)}
        </Typography>
      </div>
      <Button
        variant="contained"
        class="nextButton"
        disableRipple
        onClick={() => {
          navigate("/SpotifyWrap");
        }}
      >
        Check Out
      </Button>
    </div>
  );
}
