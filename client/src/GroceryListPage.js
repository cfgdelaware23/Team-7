import './FormPages.css';
import { useEffect, useState } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";

export default function GrocertListPage(groceryList) {

  return (
    <div class="formContainer">
      <Typography variant="h1" sx={{Color:"white"}}>
        Your Cart:
      </Typography>
      {groceryList.map(function(data) {
      return (
        <div>
           {data}
        </div>
      )
     })} 
        <Button variant="contained" class="formButton" disableRipple>Check Out</Button>
    </div>
  );
}