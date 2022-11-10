import './Contact.css';
import { motion } from 'framer-motion'

function Contact() {
  return (
    <motion.section
      className="contact"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.5}}}
      exit={{opacity: 0, transition: {duration: 0.3}}}
    >
      <form action="" className="contact__form">
        <h2 className="contact__title">Get In Touch!</h2>
        <label htmlFor="name" className="contact__label">
          Name:
        </label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="contact__options"
        />

        <label htmlFor="phone" className="contact__label">
          Phone:
        </label>
        <input
          name="phone"
          placeholder="Mobile Number"
          type="text"
          className="contact__options"
        />

        <label htmlFor="email" className="contact__label">
          Email:
        </label>
        <input
          name="email"
          placeholder="hello@gmail.com"
          type="email"
          className="contact__options"
        />

        <label htmlFor="questions" className="contact__label">
          Choose a topic:
        </label>
        <select name="questions" id="questions" className="contact__options">
          <option value="select" disabled selected>
            Pick Something
          </option>
          <option value="general">General Question</option>
          <option value="regular">Order From Our Collection</option>
          <option value="custom">Custom Order: Can you make this?</option>
        </select>

        <label htmlFor="query" className="contact__label">
          Question
        </label>
        <textarea
          name="query"
          id="query"
          className="contact__query"
          placeholder="Type your message here"
        ></textarea>

        <input type="submit" className="contact__submit" />
      </form>
    </motion.section>
  );
}

export default Contact;
