import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import '../Assets/Scss/ContactForm.scss'

export default function ContactForm() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        'service_3n73oks',
        'template_271dt2s',
        {
          nom: nom,
          email: email,
          sujet: sujet,
          message: message,
        },
        'service_3n73oks'
      );

      if (response.status === 200) {
        alert('Email envoyé avec succès!');
        setNom('');
        setEmail('');
        setSujet('');
        setMessage('');
      } else {
        alert('Erreur lors de l\'envoi de l\'email.');
      }
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l\'envoi de l\'email.');
    }
  };

  return (
    <form id='contact' onSubmit={handleSubmit} className='contactForm'>
      <label className='contactFormLabel'>
        Name:
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      </label>
      <label className='contactFormLabel'>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className='contactFormLabel'>
        Object:
        <input type="text" value={sujet} onChange={(e) => setSujet(e.target.value)} />
      </label>
      <label className='contactFormLabel'>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}