import './../FormPages.css';
import { useState } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";

export default function BooleanFormComponent({property, setProperty, setModifiedProperty}) {
    
  return (
    <div class="formContainer">
      <Typography variant="h1" sx={{Color:"white"}}>
        {property}
      </Typography>
        <div class="buttonContainer">
        <Button variant="contained" class="formButton" disableRipple onClick={()=>  {setModifiedProperty(true); setProperty(true);}}>Yes</Button>
        <Button variant="contained" class="formButton" disableRipple onClick={()=> {setModifiedProperty(true); setProperty(false);}}>No</Button>
    </div>
    </div>
  );
}