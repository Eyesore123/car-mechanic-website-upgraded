import React from 'react'
import '../../src/Styles.css'
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
      <p className='w-full p-0 m-0'>
      <li className='pt-2'>Niko Putkinen</li>
      <br />    
        <span className='h-0.6'>
          <li className='flex justify-center items-center w-full'>
            {/* <img src={Phone} width={30} className='flex'></img> */}
            {t('contactinfo.phone')}
          </li>
          <li className='listcontainer'>
          040 841 4698
          </li>
        </span>
        <br />
        <span className='h-0.8'>
          <li 
          className='flex justify-center items-center w-full'
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
      <br />
      </p>
    </div>
    <Map />
    <Footer />
    </div>
  )
}
