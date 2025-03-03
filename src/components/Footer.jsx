import React from 'react'
import '../../src/Index.css'
import * as FooterStyles from './Footer.module.css'
import Icon2 from '../../src/assets/pnp-power_musta.png'
import Envelope from '../../src/assets/Envelope.svg'
import Phone from '../../src/assets/Phone.svg'

export default function Footer() {
  return (
    <div className={FooterStyles.footercontainer}>
        <img src={Icon2} alt="PNP-Power icon2" className={FooterStyles.icon2} />
        <div className='footer'>
            <span className='m-2'>
              <li className='list-none flex justify-start items-center gap-6 font-bold'>
                <img src={Phone} alt="Phone icon" className={FooterStyles.footericon} />
                xxx xxxxxxx
              </li>
            </span>
            <span className='m-2'>
              <li className='list-none flex justify-start items-center gap-6 font-bold'>
                <img src={Envelope} alt="Envelope icon" className={FooterStyles.footericon} />
                niko.xxxxxxxx@gmail.com
              </li>
            </span>
          </div>
    </div>
  )
}
