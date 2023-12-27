
import './App.css';

import React from 'react';
import SignInForm from './signinpage';

function App() {

  return (
    
    <div className='App'>
    <div className="App-header background-container"></div>
      <div className='signInContent'>
        <div className='label'>
        <div className='signInForm'>
        <SignInForm />
        </div>
      </div>
     </div>
    </div>
  );
}


export default App;
