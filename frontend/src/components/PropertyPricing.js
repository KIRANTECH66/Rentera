import React from 'react';
import useTranslation from '../hooks/useTranslation';
import { formatCurrency } from '../utils/currencyFormatter';

const PropertyPricing = ({ pricing }) => {
  const { t } = useTranslation();

  if (!pricing || pricing.length === 0) {
    return <p>{t('pricing.notAvailable')}</p>;
  }

  return (
    <div className="pricing-container">
      <h4>{t('pricing.title')}</h4>
      <ul className="pricing-list">
        {pricing.map((option, index) => (
          <li key={index} className="pricing-option">
            <span className="price">
              {formatCurrency(option.price, option.currency)}
            </span>
            <span className="duration">
              / {t(`pricing.duration.${option.duration}`)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyPricing;
