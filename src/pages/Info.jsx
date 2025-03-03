import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Phone from '../assets/Phone.svg'

export default function Info() {
  return (
    <div>
        <Navbar />
        <div className='text-center header'>
    Yhteystiedot
    </div>
    <div className='textbox text-center min-h-[55vh]'>
      <p className='w-full'>
      <li>Niko Putkinen</li>
      <br />    
        <span>
          <li className='flex justify-center gap-4 items-center'>
            {/* <img src={Phone} width={30} className='flex'></img> */}
            Puhelin:
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
            Osoite:
          </li>
        </span>
        <li>Kankaisentie 127</li>
        <li>58900 Rantasalmi</li>
      <br />
      <li>Y-tunnus: 3320795-6 </li>
      </p>
    </div>
        <Footer />
    </div>
  )
}
