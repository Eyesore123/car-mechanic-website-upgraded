import React from 'react'
import '../../src/Styles.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
        <Navbar />
        <h1 className='text-6xl'>PNP-POWER</h1>
        <Footer />
    </div>
  )
}
