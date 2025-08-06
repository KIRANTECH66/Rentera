import React, { useState } from 'react';
import { registerUser } from '../services/api';
import useTranslation from '../hooks/useTranslation';

const Register = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'renter', // Default role
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

    try {
      const result = await registerUser(formData);
      setSuccess(t('register.successMessage', { email: result.email }));
      // Clear form on success
      setFormData({ email: '', password: '', role: 'renter' });
    } catch (err) {
      setError(err.message || t('register.errorDefault'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>{t('register.title')}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">{t('register.emailLabel')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">{t('register.passwordLabel')}</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="role">{t('register.roleLabel')}</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="renter">{t('register.renterOption')}</option>
            <option value="landlord">{t('register.landlordOption')}</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? t('register.submittingButton') : t('register.submitButton')}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Register;
