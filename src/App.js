//import logo from './logo.svg';
import './App.css';
//import './Apps.css';
//import { useState } from 'react';
import React from 'react';
import SignInForm from './signinpage';
//import BackgroundImage from "./background/abstract-blue-background-simple-design-for-your-website-free-vector.jpg";

function App() {

  return (
    
    <div className='App'>
    <div className="App-header background-container"></div>
      <div className='signInContent'>
        <div className='label'>
        <div className='emailInput'></div>
        <div className='passwordInput'></div>
          <SignInForm />
      </div>
     </div>
    </div>
  );
}


export default App;
