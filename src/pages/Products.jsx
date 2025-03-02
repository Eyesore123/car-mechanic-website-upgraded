import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Products() {
  return (
    <>
        <Navbar />
        <div className='text-center header'>Tuoteluettelo</div>
        <div className='textbox text-center'>
        Turbosystems turboahtimet:
        - htx68b1 1350€
        - htx4064 1300€
        - htx pakoputken vpantasarja 55€
        Pakosarjatarvikkeita:
        - T3 laippa 11€
        - T4 laippa 13€

        </div>
        <Footer />
    </>
  )
}
