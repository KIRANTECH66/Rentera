// This is a placeholder hook to simulate a real i18n library like react-i18next.
// It is NOT a production-ready solution.
import en from '../i18n/en.json';
import es from '../i18n/es.json';

const translations = {
  en,
  es,
};

// For this simulation, we'll just use English as the default.
const lang = 'en';
const currentTranslations = translations[lang];

const useTranslation = () => {
  /**
   * A simple translation function placeholder.
   * It navigates a dot-notation key and replaces placeholders.
   * e.g., t('register.successMessage', { email: 'test@test.com' })
   */
  const t = (key, options) => {
    let text = key.split('.').reduce((obj, i) => obj && obj[i], currentTranslations);

    if (!text) {
      return key; // Return the key if no translation is found
    }

    if (options) {
      Object.keys(options).forEach((k) => {
        text = text.replace(`{{${k}}}`, options[k]);
      });
    }

    return text;
  };

  return { t };
};

export default useTranslation;
