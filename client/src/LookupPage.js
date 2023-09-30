import './FormPages.css';
import { useEffect, useState } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function LookupPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
      };

    async function fetchGroceryData() {
      console.log(JSON.stringify({ email: email }));
        let res = await fetch("http://localhost:5000/get_grocery_data", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            navigate("/GroceryListPage");
            this.setState({ groceries: data });
            console.log(data);
        })
        .catch(error => {
            navigate("/GroceryListPage");
            console.error("Error fetching data:", error)});
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
          <Button variant="contained" class="formButton" disableRipple onClick={()=>navigate("/GroceryListPage")}>lookup</Button>
        </div>

      </div>
    </div>
  );
}