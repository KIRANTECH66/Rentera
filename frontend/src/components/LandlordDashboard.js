import React, { useState, useEffect } from 'react';
import useTranslation from '../hooks/useTranslation';
import VerificationStatus from './dashboard/VerificationStatus';
import PropertyList from './dashboard/PropertyList';
import RecentDocuments from './dashboard/RecentDocuments';

// Mock data for simulation until API service is updated
const mockDashboardData = {
  user: {
    email: 'landlord@test.com',
    role: 'landlord',
    isIdentityVerified: false,
    backgroundCheckStatus: 'pending',
  },
  properties: [
    {
      id: 'prop_12345',
      name: 'Sunny Downtown Apartment',
      documents: [{ docId: 'doc_1', fileName: 'lease_2023.pdf', status: 'signed' }],
    },
    {
      id: 'prop_67890',
      name: 'Quiet Suburban House',
      documents: [],
    },
  ],
  stats: {
    propertyCount: 2,
    totalDocuments: 1,
  },
};

const LandlordDashboard = () => {
  const { t } = useTranslation();
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data from the backend
    const fetchDashboardData = async () => {
      try {
        // In a real implementation, we would call an API service function here.
        // const data = await api.getLandlordDashboard(userId);
        setTimeout(() => {
          setDashboardData(mockDashboardData);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <div>{t('dashboard.loading')}</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{t('dashboard.error')}: {error}</div>;
  }

  if (!dashboardData) {
    return null;
  }

  return (
    <div className="dashboard-container">
      <h2>{t('dashboard.title')}</h2>
      <p>{t('dashboard.welcome', { email: dashboardData.user.email })}</p>

      <div className="dashboard-grid">
        <div className="widget">
          <VerificationStatus status={dashboardData.user.backgroundCheckStatus} />
        </div>
        <div className="widget">
          <PropertyList properties={dashboardData.properties} />
        </div>
        <div className="widget">
          <RecentDocuments properties={dashboardData.properties} />
        </div>
        <div className="widget">
          <h4>Stats</h4>
          <p>Properties: {dashboardData.stats.propertyCount}</p>
          <p>Documents: {dashboardData.stats.totalDocuments}</p>
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;
