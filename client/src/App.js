import './App.css';
import {Button, Typography} from '@mui/material';
// import '@fontsource/roboto/300.css';
import NavBar from './navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from'./form.js';
import FormPage from './FormPage';
import HomePage from './HomePage';

function SwitchRoutes() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/formPage' element={<FormPage/>}/>
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

