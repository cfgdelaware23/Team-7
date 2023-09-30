import './../FormPages.css';
import { useState } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";

export default function FormComponent({property, setProperty}) {

    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
      };

  return (
    <div class="formContainer">
      <Typography variant="h1" sx={{Color:"white"}}>
        {property}
      </Typography>
      <div class="inputContainer">
        <TextField
          value={input}
          onChange={handleChange}
          sx={{ width: '40rem', backgroundColor:'white' }} 
          inputProps={{style: {fontSize: '2rem'}}} // font size of input text
          InputLabelProps={{style: {fontSize: '2rem'}}}
        />
        <Button variant="contained" class="formButton" disableRipple onClick={()=>setProperty(input)}>Next</Button>
      </div>
    </div>
  );
}