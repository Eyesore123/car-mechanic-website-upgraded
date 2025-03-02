import React from 'react'
import '../../src/Index.css'
import * as FooterStyles from './Footer.module.css'
import Icon2 from '../../src/assets/pnp-power_musta.png'

export default function Footer() {
  return (
    <div className={FooterStyles.footercontainer}>
        <img src={Icon2} alt="PNP-Power icon2" className={FooterStyles.icon2} />
        <div className='footer'>Footer</div>
    </div>
  )
}
