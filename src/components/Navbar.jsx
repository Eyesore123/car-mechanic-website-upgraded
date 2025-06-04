import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import * as NavbarStyles from './Navbar.module.css'

import Icon from '../../public/images/icon.png'
import InstaIcon from '../assets/insta2.svg'
import TiktokIcon from '../assets/tiktok.png'

import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../context/LanguageContext';


export default function Navbar() {

  const { t } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className={NavbarStyles.navbar}>
        <div className="flex justify-center items-center gap-3 sm:gap-14 md:gap-10 lg:gap-60 p-2 mb-2 w-full">
            <div className='iconcontainer md:mr-40'>
                <Link to="/">
                <button className='cursor-pointer'>
                <img src={Icon} alt="PNP-Power icon" className={NavbarStyles.icon} />
                </button>
                </Link>
            </div>
            <div className="titlecontainer border-1 bottom border-white rounded-lg p-2">
              <div className="buttonscontainer">
              <Link to="/"><button className={NavbarStyles.navbutton}>{t('navbar.nav1')}</button></Link>
              <Link to="/contact"><button className={NavbarStyles.navbutton}>{t('navbar.nav2')}</button></Link>
              <Link to="/galleria"><button className={NavbarStyles.navbutton}>{t('navbar.nav3')}</button></Link>
              <Link to="/products"><button className={NavbarStyles.navbutton}>{t('navbar.nav4')}</button></Link>
              <Link to="/info"><button className={NavbarStyles.navbutton}>{t('navbar.nav5')}</button></Link>
              </div>
            </div>
              <div className="flex flex-col justify-center items-center md:ml-10 md:flex-row">
                <button className='ml-2 mr-2'>
                <a href="https://www.instagram.com/putkinen_/" target="_blank
                " rel="noreferrer">
                  <img src={InstaIcon} alt="Instagram icon" className={NavbarStyles.instaicon} />
                </a>
                </button>

                <button className='ml-2 mr-2'>
                <a href="https://www.tiktok.com/@putkinen__" target="_blank
                " rel="noreferrer">
                  <img src={TiktokIcon} alt="Tiktok icon" className={NavbarStyles.tiktokicon} />
                </a>
                </button>
              
                <button className={NavbarStyles.languagebutton} onClick={() => changeLanguage(language === 'fi' ? 'en' : 'fi')}>
        {language === 'fi' ? 'EN' : 'FI'}
      </button>
          
            </div>

        </div>
    </div>
  )
}
