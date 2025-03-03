import React from 'react'
import '../../src/Styles.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryImages from '../components/GalleryImages'

export default function Gallery() {
  return (
    <>
    <Navbar />
    <div className='text-center header'>
    Galleria
    </div>
    <div className='textbox text-center'>
      <GalleryImages />
    </div>
    <Footer />
    </>
  )
}
