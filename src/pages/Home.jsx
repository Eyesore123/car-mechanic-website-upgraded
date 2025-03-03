import React from 'react'
import '../../src/Styles.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImageCarousel from '../components/ImageCarousel'

export default function Home() {
  return (
    <div>
        <Navbar />
        <h1 className='mainheader'>PNP-POWER</h1>
        <div className='text-center header text-4xl m-10'>Tervetuloa PNP-Powerin sivuille!
        </div>
        <div className='textbox'>
            <p>PNP-POWER on Rantasalmella sijaitseva, pääasiallisesti race-osiin keskittyvä yritys. Meiltä onnistuu vaihteistojen muutostyöt, pakosarjojen sekä pakosarjojen osien valmistus/myynti, erikoisosien valmistus, 3d-tulostus, jyrsin- ja sorvaustyöt.
            Oikeastaan kaikki mikä liittyy kilpa-autoiluun.
            </p>
            <p>
            Jälleenmyyn Turbosystems-turboahtimia,
            Voimansiirto-osia
            Moottoriosia 
            Fmic.eu tavarat.
            </p>
        </div>
        <ImageCarousel />
        <div className='textbox'>

          <p>Palveluvalikoimaamme kuuluu mm.</p>
          <div className='listcontainer flex justify-center'>
            <li>segfseg</li>
          </div>
        </div>
        <Footer />
    </div>
  )
}
