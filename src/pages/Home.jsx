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
        <div className='text-center header text-4xl m-10'>{t('home.heading1')}
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

          <h3 className='text-center'>Palveluvalikoimaamme kuuluu mm.</h3>
          <div className='listcontainer flex justify-center'>

            <li>Tig-hitsaus (myös alumiini) vanteet yms.</li>
            <li>Pakosarjatarvikkeiden/ pakosarjojen myynti ja valmistus</li>
            <li>Ilmastointihuollot</li>
            <li>Johtosarjojen suunnittelu ja valmistus</li>
            <li>Sorvaus- ja jyrsintyöt, taso-oikaisut yms.</li>
            <li>2wd autojen tehomittaukset ja säädöt sekä viranomaistodistus muutoskatsastusta varten</li>
            <li>Vikadiagnostiikka</li>
            <li>Varaosien myynti</li>
            <li>Trailerikuljetuspalvelut, henkilöautojen nouto/vienti kotipihasta yms.</li>
          </div>
        </div>
        <VideoBackground />
        <Footer />
        <Cookiebanner />
    </div>
  )
}
