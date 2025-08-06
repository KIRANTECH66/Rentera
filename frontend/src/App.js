import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import LandlordDashboard from './components/LandlordDashboard';
import './App.css'; // Let's add a little bit of styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Rentera</h1>
      </header>
      <main>
        {/* The auth components would typically be on a separate page/route */}
        <div className="auth-container">
          <div className="auth-form">
            <Register />
          </div>
          <div className="auth-form">
            <Login />
          </div>
        </div>

        <hr className="divider" />

        {/* The main dashboard for a logged-in landlord */}
        <div className="feature-section">
          <LandlordDashboard />
        </div>
      </main>
    </div>
  );
}

export default App;
