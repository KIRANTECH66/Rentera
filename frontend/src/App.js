import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import LandlordVerification from './components/LandlordVerification';
import DocumentUploader from './components/DocumentUploader';
import './App.css'; // Let's add a little bit of styling

function App() {
  // Mock property ID for the simulation
  const mockPropertyId = 'prop_1668633600000';

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
        <div className="feature-section">
          <LandlordVerification />
        </div>
        <hr className="divider" />
        <div className="feature-section">
          <DocumentUploader propertyId={mockPropertyId} />
        </div>
      </main>
    </div>
  );
}

export default App;
