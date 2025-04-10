import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../../src/Styles.css'

import { useTranslation } from 'react-i18next';
export default function Products() {

  const { t } = useTranslation();

  return (
    <>
        <Navbar />
        <div className='text-center header'>{t('product.heading')}</div>
        <div className='textbox text-center'>
        <h3>{t('product.header4')}</h3>
          <p className='listcontainer p-0 m-0'>
            <li>{t('product.li8')}</li>
            <li>{t('product.li9')}</li>
          </p>
        <h3>{t('product.header1')}</h3>
          <p className='listcontainer p-0 m-0'>
            <li>htx4268b1 1350€</li>
            <li>htx4064b1 1300€</li>
            <li>{t('product.li3')}</li>
            </p>
        <h3>{t('product.header2')}</h3>
        <p className='listcontainer p-0 m-0'>
          <li>{t('product.li4')}</li>
          <li>{t('product.li5')}</li>
        </p>
        <h3>{t('product.header3')}</h3>
          <p className='listcontainer p-0 m-0'>
            <li>{t('product.li6')}</li>
            <li>{t('product.li7')}</li>
          </p>
        </div>
        <Footer />
    </>
  )
}
