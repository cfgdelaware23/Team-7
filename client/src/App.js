import './App.css';
import {Button, Typography} from '@mui/material';
// import '@fontsource/roboto/300.css';
import NavBar from './navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from'./form.js';
import CongratsPage from './Componets/congrats'
import HaveANiceDayPage from './Componets/GoodbyePage';
import FirstNameComponent from './FirstNameComponent';
import HomePage from './HomePage';

function SwitchRoutes() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/congratsPage' element={<CongratsPage/>}/>
        <Route path='/goodbye' element={<HaveANiceDayPage/>}/>
      </Routes>
  )
}
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <SwitchRoutes/>
    </div>
  );
}

export default App;

