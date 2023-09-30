import './App.css';
import {Button, Typography} from '@mui/material';
// import '@fontsource/roboto/300.css';
import NavBar from './navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from'./form.js';
import CongratsPage from './congrats';
import FirstNameComponent from './FirstNameComponent';
import HomePage from './HomePage';

function SwitchRoutes() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/congratsPage' element={<CongratsPage/>}/>
      </Routes>
  )
}
function App() {
  return (
    //<Navbar/>
    <div class="home">
      <Typography variant="h1" class="welcomeText">
      Welcome!
      </Typography>

      <div class = "homeInfoContainer">
        <Typography variant="body1" type="left" class="infoText">
        Creating a seamless grocery<br></br> shopping experience, with<br></br>
        <i> personalized pricing.</i>
        </Typography>
        <img src={require("./images/homeImage.png")} class ="homeInfoImage" alt="A World Well Nourished"></img>
      </div>

      <div class = "homePromptContainer">
        <Typography variant="body1" class="promptText">
        Do you have an account with us?
        </Typography>
      
        <div class = "homeButtonContainer">
          <Button variant="contained" class="homeButton" disableRipple>Yes</Button>
          <Button variant="contained" class="homeButton" disableRipple>No</Button>
        </div>
      </div>

    </div>
  );
}

export default App;

