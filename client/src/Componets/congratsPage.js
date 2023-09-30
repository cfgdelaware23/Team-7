import React from 'react';
import CongratsPage from './congrats';

function SwitchRoutes() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
  )
}

function CongratsDisplay() {
  
    return (
      <div>
        <h1>Displaying Congrats Page</h1>
        <CongratsPage onSignUp={() => console.log('Back to Home clicked')} />
      </div>
    );
  }
  
  export default CongratsDisplay;
  