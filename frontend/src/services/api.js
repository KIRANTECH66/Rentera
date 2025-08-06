// This file will centralize API calls.
// In a larger app, this might be split into multiple files (e.g., authService.js, propertyService.js).

const API_BASE_URL = 'http://localhost:3001/api';

/**
 * Registers a new user.
 * @param {object} userData - The user data to register.
 * @param {string} userData.email - The user's email.
 * @param {string} userData.password - The user's password.
 * @param {string} userData.role - The user's role ('landlord' or 'renter').
 * @returns {Promise<object>} The newly created user object.
 */
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Try to parse error message from the backend, or fall back to status text
      const errorData = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(errorData.message || 'An unknown error occurred.');
    }

    return response.json();
  } catch (error) {
    console.error('Registration failed:', error);
    // Re-throw the error so the component can handle it
    throw error;
  }
};

// Future functions like loginUser, getProperties, etc., would go here.
