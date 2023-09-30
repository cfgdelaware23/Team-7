import './App.css';
// import '@fontsource/roboto/300.css';
import NavBar from './navbar';
import {  Route, Routes } from 'react-router-dom';


import CongratsPage from './components/CongratsPage'
import HaveANiceDayPage from './components/GoodbyePage';
import FormPage from './FormPage';
import HomePage from './HomePage';
import LookupPage from './LookupPage';
import SpotifyWrapped from './SpotifyWrapped';
import GroceryListPage from './GroceryListPage';
import FeedbackPage from './FeedbackPage';
import SendEmail from './SendEmail';
import BoughtItems from './FeedbackPage';

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
        <Route path='/sendEmail' element={<SendEmail/>}/>
        <Route path='/FeedbackPage' element={<BoughtItems/>}/>

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

