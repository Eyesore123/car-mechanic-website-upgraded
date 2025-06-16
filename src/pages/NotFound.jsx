import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h1 className='mainheader'>{t('notFound.heading')}</h1>
      <div className='text-center header text-4xl mt-6 min-h-[55vh] p-8'>{t('notFound.message')}</div>
      <Footer />
    </div>
  )
}