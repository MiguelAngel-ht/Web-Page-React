import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      message: message
    };
    // aquí puedes enviar los datos a través de una API o a un correo electrónico específico
    console.log(data);
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
