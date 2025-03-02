import React from 'react'
import { Link } from 'react-router-dom'
import * as NavbarStyles from './Navbar.module.css'

import Icon from '../../public/icon.png'

export default function Navbar() {
  return (
    <div className={NavbarStyles.navbar}>
        <div className="flex justify-center items-center gap-14 p-2 mb-2 w-full">
            <div className='iconcontainer md:mr-40'>
                <img src={Icon} alt="PNP-Power icon" className={NavbarStyles.icon} />
            </div>
            <div className="buttonscontainer">
            <Link to="/"><button className={NavbarStyles.navbutton}>Etusivu</button></Link>
            <Link to="/contact"><button className={NavbarStyles.navbutton}>Yhteydenotto</button></Link>
            <Link to="/galleria"><button className={NavbarStyles.navbutton}>Galleria</button></Link>
            <Link to="/products"><button className={NavbarStyles.navbutton}>Tuotteet</button></Link>
            </div>

        </div>
    </div>
  )
}
