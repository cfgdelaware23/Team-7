import {Button, Typography} from '@mui/material';
import CongratsPage from './congrats';

function HomePage() {
    return (
        <div class="home">
        <Typography variant="h1" class="welcomeText">
        Welcome!
        </Typography>
  
        <div class = "homeInfoContainer">
          <Typography variant="body1" type="left" class="infoText">
          Creating a seamless grocery shopping experience, with<br></br>
          <i> personalized pricing.</i>
          </Typography>
          <img src={require("./images/homeImage.png")} class ="homeInfoImage" alt="A World Well Nourished"></img>
        </div>
  
        <Typography variant="body1" class="promptText">
        Do you have an account with us?
        </Typography>
       
        <div class = "homeButtonContainer">
          <Button variant="contained" class="homeButton" disableRipple>Yes</Button>
          <Button variant="contained" class="homeButton" disableRipple>No</Button>
        </div>
      </div>
      );
    }
    

    export default HomePage;