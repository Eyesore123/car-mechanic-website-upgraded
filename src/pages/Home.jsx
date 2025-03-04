import React from 'react'
import '../../src/Styles.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImageCarousel from '../components/ImageCarousel'
import VideoBackground from '../components/Video'

export default function Home() {
  return (
    <div>
        <Navbar />
        <h1 className='mainheader'>PNP-POWER</h1>
        <div className='text-center header text-4xl m-10'>Tervetuloa PNP-Powerin sivuille!
        </div>
        <div className='textbox text-center'>
          <div className='listcontainer flex justify-center'>
              <p>PNP-POWER on Rantasalmella sijaitseva, pääasiallisesti race-osiin keskittyvä yritys. Meiltä onnistuu vaihteistojen muutostyöt, pakosarjojen sekä pakosarjojen osien valmistus/myynti, erikoisosien valmistus, 3d-tulostus, jyrsin- ja sorvaustyöt.
              Oikeastaan kaikki mikä liittyy kilpa-autoiluun.
              </p>
              <p>
              Jälleenmyymme Turbosystems-turboahtimia,
              voimansiirto-osia,
              moottoriosia ja renkaita.
              </p>
            </div>
        </div>
        <ImageCarousel />
        <div className='textbox'>

          <h3 className='text-center'>Palveluvalikoimaamme kuuluu mm.</h3>
          <div className='listcontainer flex justify-center'>

            <li>Tig-hitsaus (myös alumiini) vanteet yms.</li>
            <li>Pakosarjatarvikkeiden/ pakosarjojen myynti ja valmistus</li>
            <li>Turbosystems-ahtimien jälleenmyynti (uusi!)</li>
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
    </div>
  )
}
