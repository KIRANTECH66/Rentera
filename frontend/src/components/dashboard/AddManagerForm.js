import React, { useState } from 'react';
import useTranslation from '../../hooks/useTranslation';

const AddManagerForm = ({ landlordId }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      // In a later step, this will call an API service function.
      // await api.addManager({ landlordId, managerEmail: email });
      console.log(`Simulating invite to ${email} for landlord ${landlordId}`);

      setTimeout(() => { // Simulate network delay
        setStatus('success');
        setMessage(`An invitation has been sent to ${email}.`);
        setEmail('');
      }, 1000);

    } catch (err) {
      setStatus('error');
      setMessage(err.message);
    }
  };

  return (
    <div>
      <h4>{t('team.addManager.title')}</h4>
      <form onSubmit={handleSubmit}>
        <p>{t('team.addManager.description')}</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('team.addManager.placeholder')}
          required
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? t('team.addManager.button.loading') : t('team.addManager.button.submit')}
        </button>
      </form>
      {message && (
        <p style={{ color: status === 'success' ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default AddManagerForm;
