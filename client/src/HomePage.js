import './App.css';
import {Button, Typography} from '@mui/material';
// import '@fontsource/roboto/300.css';
import NavBar from './navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from'./form.js';
import FormPage from './FormPage';


function HomePage() {
    return (
        <div class="home">
        <Typography variant="h1" class="welcomeText">
        Welcome!
        </Typography>
  
        <div class = "homeInfoContainer">
          <Typography variant="body1" type="left" class="infoText">
          Creating a seamless grocery<br></br>shopping experience, with<br></br>
          <i> personalized pricing.</i>
          </Typography>
          <img src={require("./images/homeImage.png")} class ="homeInfoImage" alt="A World Well Nourished"></img>
        </div>
  
        <Typography variant="body1" class="promptText">
        Do you have an account with us?
        </Typography>
       
        <div class = "homeButtonContainer">
        <a href="/formPage">
          <Button variant="contained" class="homeButton" disableRipple>Yes</Button>
          </a>
          <Button variant="contained" class="homeButton" disableRipple>No</Button>
        </div>
      </div>
      );
    }
    

    export default HomePage;