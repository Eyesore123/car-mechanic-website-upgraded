import React from 'react'
import '../../src/Styles.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryImages from '../components/GalleryImages'

import { useTranslation } from 'react-i18next';

export default function Gallery() {

  const { t } = useTranslation();

  return (
    <>
    <Navbar />
    <div className='text-center header'>
    {t('gallery.gallery_heading')}
    </div>
    <div className='textbox text-center'>
      <GalleryImages />
    </div>
    <Footer />
    </>
  )
}