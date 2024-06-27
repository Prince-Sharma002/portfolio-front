// components/Contact.js
import React, { useState } from 'react';
import styles from './style.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';


const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    msg: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      await axios.post('http://localhost:5000/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      toast.success('Message sent successfully!');
    }
    catch(e){
      console.log(e);
      toast.error('Something went wrong! Please try again later.');
    }

  };


  

  return (
    <section className={`${styles.section} ${styles.contact}`} data-glow>
      <h2 className={styles.heading}>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          required
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="msg"
          placeholder="Your Message"
          rows="4"
          required
          value={formData.msg}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;