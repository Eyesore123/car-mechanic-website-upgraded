import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as NavbarStyles from './Navbar.module.css'

import Icon from '../../public/icon.png'
import InstaIcon from '../assets/insta.png'
import TiktokIcon from '../assets/tiktok.png'
import translations from '../../translations.json'

export default function Navbar() {

    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (event) => {
      setLanguage(language === 'en' ? 'fi' : 'en');
    };

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
              <Link to="/"><button className={NavbarStyles.navbutton}>Etusivu</button></Link>
              <Link to="/contact"><button className={NavbarStyles.navbutton}>Yhteydenotto</button></Link>
              <Link to="/galleria"><button className={NavbarStyles.navbutton}>Galleria</button></Link>
              <Link to="/products"><button className={NavbarStyles.navbutton}>Tuotteet</button></Link>
              <Link to="/info"><button className={NavbarStyles.navbutton}>Yhteystiedot</button></Link>
              </div>
            </div>
              <div className="md:ml-10 md:flex md:items-center">
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
              
                {/* <button className={NavbarStyles.languagebutton} onClick={handleLanguageChange}>
                {translations[language].language}
                </button> */}
          
            </div>

        </div>
    </div>
  )
}
