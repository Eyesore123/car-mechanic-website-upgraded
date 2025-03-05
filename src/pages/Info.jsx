import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Map from '../components/Map'
// import Phone from '../assets/Phone.svg'

import { useTranslation } from 'react-i18next';

export default function Info() {

  const { t } = useTranslation();

  return (
    <div>
        <Navbar />
        <div className='text-center header'>
    {t('info.info_heading')}
    </div>
    <div className='textbox text-center min-h-[55vh] -mb-8'>
      <p className='w-full'>
      <li>Niko Putkinen</li>
      <br />    
        <span>
          <li className='flex justify-center gap-4 items-center'>
            {/* <img src={Phone} width={30} className='flex'></img> */}
            {t('contactinfo.phone')}
          </li>
          <li>
          040 841 4698
          </li>
        </span>
        <br />
        <span>
          <li 
          className='flex justify-center gap-4 items-center'
          >
            {/* <img src={Phone} width={30} className='flex'></img> */}
            {t('contactinfo.address')}
          </li>
        </span>
        <li>Kankaisentie 127</li>
        <li>58900 Rantasalmi</li>
      <br />
      <li>{t('contactinfo.y-tunnus') + " "} 
      3320795-6 </li>
      </p>
    </div>
    {/* <Map /> */}
    <Footer />
    </div>
  )
}
