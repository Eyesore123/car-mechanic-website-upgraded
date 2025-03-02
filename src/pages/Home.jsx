import React from 'react'
import '../../src/Styles.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
        <Navbar />
        <h1 className='text-6xl text-center font-bold mt-16'>PNP-POWER</h1>
        <div className='text-center header text-4xl m-10'>Tervetuloa PNP-Powerin sivuille!</div>
        <Footer />
    </div>
  )
}
