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
    const response = await fetch(`${API_.../users/register`, {
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

/**
 * Uploads a document record to a property.
 * @param {object} docData - The document metadata.
 * @param {string} docData.propertyId - The ID of the property.
 * @param {string} docData.fileName - The name of the file.
 * @param {string} docData.docType - The type of the document.
 * @returns {Promise<object>} The response from the backend.
 */
export const uploadDocument = async (docData) => {
  try {
    // In a real app, this would be a multipart/form-data request
    // containing the actual file. Here we just send the metadata.
    const response = await fetch(`${API_BASE_URL}/documents/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(docData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(errorData.message || 'An unknown error occurred.');
    }

    return response.json();
  } catch (error) {
    console.error('Document upload failed:', error);
    throw error;
  }
};

/**
 * Initiates the landlord background check process.
 * @param {string} userId - The ID of the landlord to verify.
 * @returns {Promise<object>} The response from the backend.
 */
export const startLandlordVerification = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/verification/initiate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // In a real app, the userId would likely be sent via an auth token,
      // but we send it in the body for this simulation.
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(errorData.message || 'An unknown error occurred.');
    }

    return response.json();
  } catch (error) {
    console.error('Verification initiation failed:', error);
    throw error;
  }
};

/**
 * Logs in a user.
 * @param {object} credentials - The user's credentials.
 * @param {string} credentials.email - The user's email.
 * @param {string} credentials.password - The user's password.
 * @returns {Promise<object>} The logged-in user object.
 */
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(errorData.message || 'An unknown error occurred.');
    }

    return response.json();
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
