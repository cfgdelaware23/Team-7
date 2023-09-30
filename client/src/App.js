import './App.css';
import {Button, Typography} from '@mui/material';
// import '@fontsource/roboto/300.css';
import NavBar from './navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CongratsPage from './components/CongratsPage'
import HaveANiceDayPage from './components/GoodbyePage';
import FormPage from './FormPage';
import HomePage from './HomePage';
import LookupPage from './LookupPage';
import SpotifyWrapped from './SpotifyWrapped';
import GroceryListPage from './GroceryListPage';
import FeedbackPage from './FeedbackPage';


function SwitchRoutes() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/congratsPage' element={<CongratsPage/>}/>
        <Route path='/goodbye' element={<HaveANiceDayPage/>}/>
        <Route path='/formPage' element={<FormPage/>}/>
        <Route path='/lookupPage' element={<LookupPage/>}/>
        <Route path='/SpotifyWrapped' element={<SpotifyWrapped/>}/>
        <Route path='/groceryListPage' element={<GroceryListPage/>}/>
        <Route path='/feedbackpage' element={<FeedbackPage/>}/>
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

