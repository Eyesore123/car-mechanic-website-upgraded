import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Info() {
  return (
    <div>
        <Navbar />
        <div className='text-center header'>
    Yhteystiedot
    </div>
    <div className='textbox text-center'>
      <p>Yhteystiedot</p>
    </div>
        <Footer />
    </div>
  )
}
