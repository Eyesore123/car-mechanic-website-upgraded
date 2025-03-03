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
        <h3>Turbosystems-turboahtimet:</h3>
          <p>
            <li>htx68b1 1350€</li>
            <li>htx4064 1300€</li>
            <li>htx pakoputken vpantasarja 55€</li>
            </p>
        <h3>Pakosarjatarvikkeet:</h3>
        <p>
          <li>T3 laippa 11€</li>
          <li>T4 laippa 13€</li>
        </p>
        <h3>Ilmastointihuollot</h3>
          <p>
            <li>Sis. 200g kylmäainetta (r134a)&nbsp;45€</li>
            <li>Sis. 50g kylmäainetta (r123yf)60€</li>

          </p>
        </div>
        <Footer />
    </>
  )
}
