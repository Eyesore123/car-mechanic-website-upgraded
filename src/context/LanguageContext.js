import { createContext, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations.json';

i18n.use(initReactI18next).init({
  resources: {
    en: translations.en,
    fi: translations.fi
  },
  lng: 'fi',
  fallbackLng: 'fi'
});

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const { t, i18n } = i18n;

  return (
    <LanguageContext.Provider value={{ t, i18n }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };

// Import LanguageContext to pages and {useTranslation} to both pages and components(footer, navbar, form etc.)
// Deconstruct t and i18n in individual pages and components (like this: "const { t, i18n } = useContext(LanguageContext);")
// import LanguageProvider to App and wrap the App with it
// Use the context like this: "<h1>{t('heading')}</h1>"