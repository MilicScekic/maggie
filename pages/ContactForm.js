import styles from '@/styles/Main.module.css'
import Image from 'next/image'
import contactdog from '../public/contactdog.svg'
import { useState } from 'react'

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
          name,
          email,
          message,
        };
        fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(data),
        })
          if (name !== '' && email !== '' && message !== '')  {
            setSuccess("Your message was send. Thank you!")
          }else {
            setError("Your message was not send. Try again")
          }   
      };
    return (
        <section className={styles.contact}>
 <form onSubmit={handleSubmit}>
   <label htmlFor="name">Name:</label>
   <input type="text" placeholder="Insert your name" id="name" onChange={e => setName(e.target.value)}/>
   <label htmlFor="email">Email:</label>
   <input type="email" placeholder="Insert your email" id="email" onChange={e => setEmail(e.target.value)}/>
   <label htmlFor="message">Message:</label>
   <textarea id="message" type="text" rows="8" placeholder="Message" onChange={e => setMessage(e.target.value)}/>
   <button type="submit">Send</button>
 </form>
        <div>
 <Image src={contactdog} alt="Contact dog"/>
        </div>
        {success !== '' ? <p className={styles.success}>{success}</p> : error !== '' ? <p className={styles.error}>{error}</p> : ''}    
      </section>
    )
}
