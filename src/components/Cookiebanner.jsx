import React, { useState, useContext } from 'react';
import * as Cookiebannerstyles from './Cookiestyles.module.css';

import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../context/LanguageContext';

export default function Cookiebanner() {
    const { t } = useTranslation();
    const { language, changeLanguage } = useContext(LanguageContext);

  // Initialize state from localStorage or cookie
  const [cookiesAccepted, setCookiesAccepted] = useState(() => {
    return localStorage.getItem('cookiesAccepted') === 'true' || getCookie('cookiesAccepted') === 'true';
});

// Function to accept cookies
function acceptCookies() {
    setCookiesAccepted(true);
    localStorage.setItem('cookiesAccepted', 'true');  // Store in localStorage
    setCookie('cookiesAccepted', 'true', 1);  // Store in cookies
}

// Set cookie function
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Get cookie function
function getCookie(name) {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i];
        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
}

  return (
    <div>
      {cookiesAccepted ? null : (
        <div id="cookiebanner" className={Cookiebannerstyles.cookiediv}>
          <div className={Cookiebannerstyles.bannertext}>
            <div className={Cookiebannerstyles.bannertext}>
              {t('cookiebanner.p1')}
            </div>
            <div className={Cookiebannerstyles.cookiebtnbox}>
              <button className={Cookiebannerstyles.cookiebtn} onClick={acceptCookies}>
                {t('cookiebanner.button')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}