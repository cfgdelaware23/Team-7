import './FormPages.css';
import { useState } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";

export default function FirstPage() {
  const [firstName, setFirstName] = useState('');

  return (
    <div class="formContainer">
      <Typography variant="h1">
        First Name:
      </Typography>
      <div class="inputContainer">
        <TextField
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          sx={{ width: '40rem', backgroundColor:'white' }} 
          inputProps={{style: {fontSize: '2rem'}}} // font size of input text
          InputLabelProps={{style: {fontSize: '2rem'}}}
        />
         <div class="buttonContainer">
          <Button variant="contained" class="formButton" disableRipple>Back</Button>
          <Button variant="contained" class="formButton" disableRipple>Next</Button>
        </div>
      </div>
    </div>
  );
}