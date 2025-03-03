import React from 'react'
import { Link } from 'react-router-dom'
import * as NavbarStyles from './Navbar.module.css'

import Icon from '../../public/icon.png'
import InstaIcon from '../assets/insta.png'

export default function Navbar() {
  return (
    <div className={NavbarStyles.navbar}>
        <div className="flex justify-center items-center gap-50 p-2 mb-2 w-full">
            <div className='iconcontainer md:mr-40'>
                <Link to="/">
                <button className='cursor-pointer'>
                <img src={Icon} alt="PNP-Power icon" className={NavbarStyles.icon} />
                </button>
                </Link>
            </div>
            <div className="buttonscontainer">
            <Link to="/"><button className={NavbarStyles.navbutton}>Etusivu</button></Link>
            <Link to="/contact"><button className={NavbarStyles.navbutton}>Yhteydenotto</button></Link>
            <Link to="/galleria"><button className={NavbarStyles.navbutton}>Galleria</button></Link>
            <Link to="/products"><button className={NavbarStyles.navbutton}>Tuotteet</button></Link>
            </div>
            <button>
            <img src={InstaIcon} alt="Instagram icon" className={NavbarStyles.instaicon} />
              <a href="https://www.instagram.com/putkinen_/"></a>
            </button>

        </div>
    </div>
  )
}
