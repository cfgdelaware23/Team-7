import './../FormPages.css';
import { useState } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";

export default function BooleanFormComponent({property, setProperty}) {

  return (
    <div class="formContainer">
      <Typography variant="h1" sx={{Color:"white"}}>
        {property}
      </Typography>
        <div class="buttonContainer">
        <Button variant="contained" class="formButton" disableRippl onClick={()=>setProperty(true)}>Yes</Button>
        <Button variant="contained" class="formButton" disableRipple onClick={()=>setProperty(false)}>No</Button>
    </div>
    </div>
  );
}