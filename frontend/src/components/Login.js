import React, { useState } from 'react';
import useTranslation from '../hooks/useTranslation';

const Login = ({ onLogin }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    // This is where the simulation happens.
    // In a real app, you would call the real API service `loginUser`.
    // Here, we just determine the role from the email for the demo.
    try {
      const role = formData.email.includes('landlord') ? 'landlord' : 'renter';
      onLogin(role);
      // No need to set success message here, as the view will change.
    } catch (err) {
      // This catch block would be for a real API call failure.
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>{t('login.title')}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-email">{t('login.emailLabel')}</label>
          <input
            type="email"
            id="login-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="login-password">{t('login.passwordLabel')}</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? t('login.submittingButton') : t('login.submitButton')}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Login;
