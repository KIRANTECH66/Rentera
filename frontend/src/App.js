import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import LandlordVerification from './components/LandlordVerification';
import './App.css'; // Let's add a little bit of styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Rentera</h1>
      </header>
      <main>
        <div className="auth-container">
          <div className="auth-form">
            <Register />
          </div>
          <div className="auth-form">
            <Login />
          </div>
        </div>
        <hr className="divider" />
        <div className="verification-section">
          <LandlordVerification />
        </div>
      </main>
    </div>
  );
}

export default App;
