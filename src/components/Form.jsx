import React, { useContext } from 'react'
import * as Formstyles from './Form.module.css'

import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../context/LanguageContext';
export default function Form() {

    const { t } = useTranslation();
    const { language, changeLanguage } = useContext(LanguageContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
          const response = await fetch(event.target.action, {
            method: event.target.method,
            body: formData,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          });
          if (response.ok) {
            console.log('Form data sent successfully');
            document.getElementById('message-sent').style.display = 'block';
          } else {
            console.error('Error sending form data');
          }
        } catch (error) {
          console.error('Error sending form data:', error);
        }
      };

  return (
    <div>
    <h3>Ota yhteyttä</h3>
      <form action="https://formspree.io/f/xeoqdklk" className={Formstyles.form} method="POST" onSubmit={handleSubmit}>
        <label className={Formstyles.label} htmlFor="name">Nimi:</label>
        <input type="text" id="name" className={Formstyles.centered} name="name" required />

        <label className={Formstyles.label} htmlFor="email">Sähköpostiosoite:</label>
        <input type="email" id="email" className={Formstyles.centered} name="email" required />

        <label className={Formstyles.label} htmlFor="message">Viesti:</label>
        <textarea id="message" className={Formstyles.centered + " " + Formstyles.textarea} name="message" required></textarea>

        <button type="submit" className={Formstyles.submitbtn}>Lähetä viesti</button>

        <div id="message-sent" className={Formstyles.msgsent} style={{ display: "none" }}>
          <p>Viestisi on lähetetty onnistuneesti! Vastaamme mahdollisimman pian.</p>
        </div>
      </form>
    </div>
  )
}
