import React from 'react'
import '../../src/Index.css'
import * as FooterStyles from './Footer.module.css'
import Icon2 from '../../public/icon.png'
import Envelope from '../../src/assets/Envelope.svg'
import Phone from '../../src/assets/Phone.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={FooterStyles.footercontainer}>
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
      <button className='cursor-pointer'>
          <img src={Icon2} alt="PNP-Power icon2" className={FooterStyles.icon2} />
      </button>
      </Link>
          <div className={FooterStyles.footer}>
              <span className='m-2'>
                <li className='list-none flex justify-start items-center gap-4'>
                  <img src={Phone} alt="Phone icon" className={FooterStyles.footericon} />
                  xxx xxxxxxx
                </li>
              </span>

              <span className='m-2'>
                <li className='list-none flex justify-start items-center gap-4'>
                  <img src={Envelope} alt="Envelope icon" className={FooterStyles.footericon} />
                  niko.xxxxxxxx@gmail.com
                </li>
              </span>

          </div>
          <div className={FooterStyles.footer}>
            <span className='m-2'>
              <li id="copyright" className='list-none flex justify-start items-center gap-4 md:w-100'>
              © 2025 Niko Putkinen / PNP-POWER
              </li>
              </span>
              {/* <span className='m-2'>
              <li className='list-none flex justify-start items-center gap-4 md:w-100'>
              Kaikki oikeudet pidätetään
              </li>
            </span> */}
          </div>
    </div>
  )
}
