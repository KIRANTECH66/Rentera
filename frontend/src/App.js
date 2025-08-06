import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import LandlordVerification from './components/LandlordVerification';
import DocumentUploader from './components/DocumentUploader';
import PropertyPricing from './components/PropertyPricing';
import './App.css'; // Let's add a little bit of styling

function App() {
  // Mock property object for the simulation
  const mockProperty = {
    id: 'prop_12345',
    name: 'Sunny Downtown Apartment',
    pricing: [
      { duration: 'monthly', price: 220000, currency: 'USD' },
      { duration: 'yearly', price: 2400000, currency: 'USD' },
      { duration: 'weekly', price: 70000, currency: 'USD' },
    ],
  };

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
          <div className="property-card">
            <h3>{mockProperty.name}</h3>
            <PropertyPricing pricing={mockProperty.pricing} />
            <DocumentUploader propertyId={mockProperty.id} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
