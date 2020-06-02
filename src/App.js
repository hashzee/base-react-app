import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="overlay">  
      <div className="App">
        <header className="App-header">         
            <div className="fix">
              <h1 className='Greeting'>Welcome Aboard</h1>
            </div>
            <h2>Ready to take off with React </h2>
            <h5>Assignment 2: Zeeshan Hashmi</h5>         
        </header>
        <div className="App-logo">
            <img src={logo} alt='Ready to take off with React Js' />
        </div>          
      </div>
    </div>
  );
}

export default App;
