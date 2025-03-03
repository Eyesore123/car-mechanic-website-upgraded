import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../../src/Styles.css'
import './Products.module.css'
export default function Products() {
  return (
    <>
        <Navbar />
        <div className='text-center header'>Tuoteluettelo ja hinnasto</div>
        <div className='textbox text-center'>
          <p className='!-mt-14 '>
          <h3>Turbosystems-turboahtimet:</h3>
            <li>htx68b1 1350€</li>
            <li>htx4064 1300€</li>
            <li>htx pakoputken vpantasarja 55€</li>
          <h3>Pakosarjatarvikkeet:</h3>
          <li>T3 laippa 11€</li>
          <li>T4 laippa 13€</li>
          </p>
        </div>
        <Footer />
    </>
  )
}
