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
      <Typography variant="h2" sx={{color:"white", paddingBottom:"24px"}}>
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
<<<<<<< HEAD
         <div class="buttonContainer">
          <Button variant="contained" class="formButton" disableRipple>back</Button>
          <Button variant="contained" class="formButton" disableRipple onClick={()=>setProperty(input)}>next</Button>
        </div>
=======
        <Button variant="contained" class="formButton" disableRipple onClick={()=>setProperty(input)}>Next</Button>
>>>>>>> 135935165aa3d726cb85810b1aa1edd5fada48b1
      </div>
    </div>
  );
}