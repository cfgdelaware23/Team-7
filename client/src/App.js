import './App.css';
import {Button, Typography} from '@mui/material';

import Form from'./form.js';

function App() {
  return (
    //<Navbar/>
    <div className="home">
      <Typography variant="h1">
      Welcome!
      </Typography>


      <Typography variant="body1" type="left">
      Creating a seamless grocery shopping experience, with<br></br>
      <i> personalized pricing.</i>
      </Typography>

      <Typography variant="body1">
      Do you have an account with us?
      </Typography>

      <Button variant="contained" class="homeButton">Yes</Button>
      <Button variant="contained" class="homeButton">No</Button>
    </div>
  );
}

export default App;