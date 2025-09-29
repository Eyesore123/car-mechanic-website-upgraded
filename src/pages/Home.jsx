import React from 'react'
import '../../src/Styles.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Cookiebanner from '../components/Cookiebanner'
import ImageCarousel from '../components/ImageCarousel'
import VideoBackground from '../components/Video'
import { useTranslation } from 'react-i18next';

export default function Home() {

  const { t } = useTranslation();

  return (
    <div>
        <Navbar />
        <h1 className='mainheader'>PNP-POWER</h1>
        <div className='text-center header text-4xl mt-6'>{t('home.heading1')}
        </div>
        <div className='textbox text-center'>
          <div className='listcontainer flex justify-center'>
              <p>{t('home.paragraph1')}
              </p>
              <p>
              {t('home.paragraph2')}
              </p>
            </div>
        </div>
        <ImageCarousel />
        <div className='textbox'>

          <h3 className='text-center'>{t('home.heroheader')}</h3>
          <div className='listcontainer flex justify-center mb-14'>

            <li>{t('home.listitem1')}</li>
            <li>{t('home.listitem2')}</li>
            <li>{t('home.listitem3')}</li>
            <li>{t('home.listitem4')}</li>
            <li>{t('home.listitem5')}</li>
            <li>{t('home.listitem6')}</li>
            <li>{t('home.listitem7')}</li>
            <li>{t('home.listitem8')}</li>
            <li>{t('home.listitem9')}</li>
          </div>
        </div>
        <VideoBackground />
        <Footer />
        <Cookiebanner />

    </div>
  )
}
