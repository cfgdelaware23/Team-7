import './GroceryListPage.css';
import { useEffect, useState } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function GroceryListPage() {
    const navigate = useNavigate();
    const groceryList = [ 'apple', 'apple','carrot'];
  return (
    <div class="groceryListContainer">
      <Typography variant="h1" sx={{Color:"white"}}>
        Your Cart:
      </Typography>
      <div class="listContainer">
      {groceryList.map(function(data) {
      return (
        <div>
           {data}
        </div>
      )
     })} 
     </div>
        <Button variant="contained" class="nextButton" disableRipple onClick={()=>navigate("/SpotifyWrap")}>Check Out</Button>
    </div>
  );
}