import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import '../../src/Styles.css'
export default function Contact() {
  return (
    <>
    <Navbar />
    <div className='text-center header'>Yhteydenotto</div>
    <div className='textbox text-center min-h-[55vh]'>
      <Form />
    </div>
    <Footer />
    </>
  )
}
