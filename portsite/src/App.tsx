import React from 'react';
import batatinha from './assets/batatinha.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={batatinha} className="App-logo" alt="logo" />
        <p>
          Edit Batatinha and save to reload.
        </p>
        <a
          className="App-link"
          href="Learn Batatinha"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Batatinha
        </a>
      </header>
    </div>
  );
}

export default App;
