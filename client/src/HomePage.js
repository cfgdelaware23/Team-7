import './App.css';
import {Button, Typography} from '@mui/material';
import "./HomePage.css"


function HomePage() {
    return (
        <div class="home">
        <Typography variant="h1" class="header">
        welcome.
        </Typography>
  
        <div class = "homeInfoContainer">
          <Typography variant="body1" type="left" class="body">
          creating a seamless grocery<br></br>shopping experience, with<br></br>
          <i> personalized pricing.</i>
          </Typography>
          {/* <img src={require("./images/homeImage.png")} class ="homeInfoImage" alt="A World Well Nourished"></img> */}
        </div>
  
        <Typography variant="body1" class="body">
        do you have an account with us?
        </Typography>
       
        <div class = "homeButtonContainer">
        <a href="/lookupPage">
          <Button variant="contained" class="buttonText" disableRipple>yes</Button>
          </a>
          <a href="/formPage">
          <Button variant="contained" class="buttonText" disableRipple>no</Button>
          </a>
        </div>
      </div>
      );
    }
    

    export default HomePage;