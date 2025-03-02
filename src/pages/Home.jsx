import React from 'react'
import '../../src/Styles.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImageCarousel from '../components/ImageCarousel'

export default function Home() {
  return (
    <div>
        <Navbar />
        <h1 className='text-6xl text-center font-bold mt-30 pt-30'>PNP-POWER</h1>
        <div className='text-center header text-4xl m-10'>Tervetuloa PNP-Powerin sivuille!
        </div>
        <div className='textbox'>
            <p>PnP-PoWeR on Rantasalmella sijaitseva, pääasiallisesti race-osiin keskittyvä yritys. Meiltä onnistuu vaihteistojen muutostyöt,pakosarjojen sekä pakosarjojen osien valmistus/myynti, erikoisosien valmistus, 3d tulostus, jyrsin- ja sorvaistyöt.
            Oikeastaan kaikki mikä liittyy kilpa-autoiluun.
            </p>
            <p>
            Jälleenmyyn turbosystems turboahtimet,
            Voimansiirto-osat
            Moottoriosat 
            Fmic.eu tavarat.
            </p>
        </div>
        <ImageCarousel />
        <Footer />
    </div>
  )
}
