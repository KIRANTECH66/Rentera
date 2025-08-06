// This is a mock authentication service to simulate user sessions.
// It uses sessionStorage to persist the "logged-in" user across reloads.

const MOCK_LANDLORD = {
  id: 'user_landlord_123',
  email: 'landlord.demo@rentara.com',
  role: 'landlord',
  // other details...
};

const MOCK_RENTER = {
  id: 'user_renter_456',
  email: 'renter.demo@rentara.com',
  role: 'renter',
  // other details...
};

const USER_SESSION_KEY = 'rentara_user_session';

export const loginAs = (role) => {
  logout(); // Clear any previous session
  if (role === 'landlord') {
    sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(MOCK_LANDLORD));
  } else if (role === 'renter') {
    sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(MOCK_RENTER));
  }
};

export const logout = () => {
  sessionStorage.removeItem(USER_SESSION_KEY);
};

export const getCurrentUser = () => {
  try {
    const user = sessionStorage.getItem(USER_SESSION_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error parsing user session data:', error);
    return null;
  }
};

export const isLoggedIn = () => {
  return getCurrentUser() !== null;
};
