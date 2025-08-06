import React from 'react';
import Register from './components/Register';
import './App.css'; // Let's add a little bit of styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Rentera</h1>
      </header>
      <main>
        <Register />
      </main>
    </div>
  );
}

export default App;
