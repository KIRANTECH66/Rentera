import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import LandlordDashboard from './components/LandlordDashboard';
import RenterDashboard from './components/RenterDashboard';
import WelcomePage from './components/WelcomePage';
import * as authService from './services/authService';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check for a user session when the app loads
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleLogin = (role) => {
    authService.loginAs(role);
    setCurrentUser(authService.getCurrentUser());
  };

  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
  };

  const LoggedOutView = () => (
    <>
      <div className="auth-container">
        <div className="auth-form">
          <Register />
        </div>
        <div className="auth-form">
          <Login onLogin={handleLogin} />
        </div>
      </div>
      <hr className="divider" />
      <WelcomePage />
    </>
  );

  const renderDashboard = () => {
    if (!currentUser) return null;

    switch (currentUser.role) {
      case 'landlord':
        return <LandlordDashboard user={currentUser} />;
      case 'renter':
        return <RenterDashboard user={currentUser} />;
      default:
        return <p>Unknown user role.</p>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Rentera</h1>
        <div className="auth-controls">
          {currentUser && (
            <>
              <span>{currentUser.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </header>
      <main>
        {currentUser ? renderDashboard() : <LoggedOutView />}
      </main>
    </div>
  );
}

export default App;
