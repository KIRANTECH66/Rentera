import React from 'react';
import useTranslation from '../hooks/useTranslation';

const RenterDashboard = ({ user }) => {
  const { t } = useTranslation();

  return (
    <div className="dashboard-container">
      <h2>{t('renterDashboard.title')}</h2>
      <p>{t('dashboard.welcome', { email: user.email })}</p>

      <div className="dashboard-grid">
        <div className="widget">
          <h4>My Lease (Placeholder)</h4>
          <p>You have no active lease.</p>
        </div>
        <div className="widget">
          <h4>Payment History (Placeholder)</h4>
          <p>No payments made.</p>
        </div>
        <div className="widget">
          <h4>Maintenance Requests (Placeholder)</h4>
          <button>Submit New Request</button>
        </div>
      </div>
    </div>
  );
};

export default RenterDashboard;
