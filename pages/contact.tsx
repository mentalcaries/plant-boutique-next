import { useState, SyntheticEvent } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('select');
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState([]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email,
        name,
        subject,
        message,
        phone,
        attachment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(name, email, subject, message, phone);
  };

  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <form className="contact__form" onSubmit={handleSubmit}>
        <h2 className="contact__title">Get In Touch!</h2>
        <label htmlFor="name" className="contact__label">
          Name:
        </label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="contact__input"
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="phone" className="contact__label">
          Phone:
        </label>
        <input
          name="phone"
          placeholder="Mobile Number"
          type="text"
          className="contact__input"
          onChange={(event) => setPhone(event.target.value)}
        />

        <label htmlFor="email" className="contact__label">
          Email:
        </label>
        <input
          name="email"
          placeholder="hello@gmail.com"
          type="email"
          className="contact__input"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="questions" className="contact__label">
          Choose a topic:
        </label>
        <select
          name="questions"
          id="questions"
          className="contact__options"
          onChange={(event) => setSubject(event.target.value)}
          defaultValue="select"
        >
          <option value="select" disabled>
            Pick Something
          </option>
          <option value="regular">Order From Our Collection</option>
          <option value="custom">Custom Order: Can you make this?</option>
          <option value="general">General Question</option>
        </select>

        <label htmlFor="query" className="contact__label">
          Question
        </label>
        <textarea
          name="query"
          id="query"
          className="contact__query"
          placeholder="Type your message here"
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>

        {/* <input
          type="file"
          name="attachment"
          id=""
          className="contact__label"
          placeholder="Add a photo"
          multiple accept="image/*"
          onChange={(event) => setAttachment([...event.target.files])}
          value={attachment}
        /> */}

        <input type="submit" name="attachment" className="contact__submit" />
      </form>
    </motion.section>
  );
};

export default Contact;
