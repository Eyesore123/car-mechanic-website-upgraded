import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import '../../src/Styles.css'

import { useTranslation } from 'react-i18next';

export default function Contact() {

    const { t } = useTranslation()

  return (
    <>
    <Navbar />
    <div className='text-center header'>{t('contact.contact_heading')}</div>
    <div className='textbox text-center min-h-[55vh]'>
      <Form />
    </div>
    <Footer />
    </>
  )
}
