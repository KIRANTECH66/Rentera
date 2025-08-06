import React from 'react';
import useTranslation from '../hooks/useTranslation';

const WelcomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="welcome-container">
      <div className="welcome-hero">
        <h2>{t('welcome.hero.title')}</h2>
        <p>{t('welcome.hero.subtitle')}</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <h3>{t('welcome.renters.title')}</h3>
          <ul>
            <li>{t('welcome.renters.feature1')}</li>
            <li>{t('welcome.renters.feature2')}</li>
            <li>{t('welcome.renters.feature3')}</li>
          </ul>
        </div>
        <div className="feature-card">
          <h3>{t('welcome.landlords.title')}</h3>
          <ul>
            <li>{t('welcome.landlords.feature1')}</li>
            <li>{t('welcome.landlords.feature2')}</li>
            <li>{t('welcome.landlords.feature3')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
