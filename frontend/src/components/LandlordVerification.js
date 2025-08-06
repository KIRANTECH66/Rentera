import React, { useState } from 'react';
import useTranslation from '../hooks/useTranslation';
import { startLandlordVerification } from '../services/api';

// This component simulates the start of a landlord verification flow.
const LandlordVerification = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleInitiateCheck = async () => {
    setStatus('loading');
    setMessage('');

    // In a real app, this user ID would come from the logged-in user's state.
    const mockUserId = '123'; // Using a placeholder ID for the simulation.

    try {
      const result = await startLandlordVerification(mockUserId);
      setStatus('success');
      setMessage(result.message);
    } catch (err) {
      setStatus('error');
      setMessage(err.message);
    }
  };

  return (
    <div className="verification-container">
      <h3>{t('verification.title')}</h3>
      <p>{t('verification.description')}</p>
      <ul>
        <li>{t('verification.check.identity')}</li>
        <li>{t('verification.check.criminal')}</li>
        <li>{t('verification.check.watchlist')}</li>
      </ul>
      <p>{t('verification.consent')}</p>
      <button onClick={handleInitiateCheck} disabled={status === 'loading'}>
        {status === 'loading' ? t('verification.button.loading') : t('verification.button.start')}
      </button>
      {message && (
        <p style={{ color: status === 'success' ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default LandlordVerification;
