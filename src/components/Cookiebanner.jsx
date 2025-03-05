import React, { useState, useContext } from 'react';
import * as Cookiebannerstyles from './Cookiestyles.module.css';

import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../context/LanguageContext';

export default function Cookiebanner() {
    const { t } = useTranslation();
    const { language, changeLanguage } = useContext(LanguageContext);
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

  function acceptCookies() {
    setCookiesAccepted(true);
    localStorage.setItem('cookiesAccepted', 'true');
    // Set the cookie to expire after 24 hours (1 day)
    setCookie('cookiesAccepted', 'true', 1);
  }

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
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