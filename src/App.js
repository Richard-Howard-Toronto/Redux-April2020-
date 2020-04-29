import React from 'react';
import './App.css';
import RandomQuote from './RandomQuote';

/*
API Data Custom Hook Exercise
=============================

Make sure you've installed the exercise dependencies with `npm install`!

Start the project development server with `npm start`

Open up and follow the instructions in ./RandomQuote.js to get started!
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Programmer Quotes</h1>
      </header>
      <main>
        <RandomQuote />
      </main>
    </div>
  );
}

export default App;
