import './FormPages.css';
import { useEffect, useState } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";

export default function LookupPage() {

    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
      };

    const fetchGroceryData = (email) => {
        fetch("http://localhost:8080/get_grocery_data", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            // Use the data in your React component
            this.setState({ groceries: data });
            console.log(data);
            console.log("got");
        })
        .catch(error => console.error("Error fetching data:", error));
    }

  return (
    <div class="formContainer">
      <Typography variant="h4" className="body">
        welcome back!
      </Typography>
      <Typography variant="h2" sx={{color:"white", paddingBottom:"24px"}}>
        lookup by email:
      </Typography>
      <div class="inputContainer">
        <TextField
          value={email}
          onChange={handleChange}
          sx={{ width: '40rem', backgroundColor:'white' }} 
          inputProps={{style: {fontSize: '2rem'}}} // font size of input text
          InputLabelProps={{style: {fontSize: '2rem'}}}
        />
         <div class="singleButtonContainer">
          <Button variant="contained" class="formButton" disableRipple>lookup</Button>
        </div>
      </div>
    </div>
  );
}