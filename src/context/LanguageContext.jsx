import React, { createContext, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translationsglobal.json'; // Your translation file

// Initialize i18next with the translations you provided

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations.en, // English translations
    },
    fi: {
      translation: translations.fi, // Finnish translations
    },
  },
  lng: 'fi',
  fallbackLng: 'fi',
  interpolation: {
    escapeValue: false,
  },
});

// Create a LanguageContext for managing the language state
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fi'); // Default language set to Finnish

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };





// Import LanguageContext to pages and {useTranslation} to both pages and components(footer, navbar, form etc.)
// Deconstruct t and i18n in individual pages and components (like this: "const { t, i18n } = useContext(LanguageContext);")
// import LanguageProvider to App and wrap the App with it
// Use the context like this: "<h1>{t('heading')}</h1>"