import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ContactData } from '../utils/types';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '868-',
      subject: 'select',
      message: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        phone: '868-',
        subject: '',
        message: '',
      });
    }
  }, [formState, reset]);

  const submitEmail = async (data: ContactData) => {
    const { name, email, phone, subject, message } = data;

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message,
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
      <form className="contact__form" onSubmit={handleSubmit(submitEmail)}>
        <h2 className="contact__title">Get In Touch!</h2>
        <label htmlFor="name" className="contact__label">
          Name:
        </label>

        <input
          {...register('name', {
            required: 'Name cannot be empty',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters',
            },
            maxLength: 30,
          })}
          className="contact__input"
        />
        <p className="contact__error">{errors.name?.message}</p>

        <label htmlFor="phone" className="contact__label">
          Phone:
        </label>
        <input
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /[0-9]{3}-?[0-9]{3}-?[0-9]{4}/,
              message: 'Invalid phone number',
            },
          })}
          className="contact__input"
        />
        <p className="contact__error">{errors.phone?.message}</p>

        <label htmlFor="email" className="contact__label">
          Email:
        </label>
        <input
          {...register('email', {
            required: 'Email address is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid Email address' },
          })}
          className="contact__input"
        />
        <p className="contact__error">{errors.email?.message}</p>

        <label htmlFor="questions" className="contact__label">
          Choose a topic:
        </label>
        <select
          {...register('subject')}
          name="questions"
          id="questions"
          className="contact__options"
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
          {...register('message', {
            required: 'Message cannot be empty',
            minLength: { value: 10, message: 'Message too short' },
          })}
          id="message"
          className="contact__query"
          placeholder="Type your message here"
        ></textarea>
        <p className="contact__error">{errors.message?.message}</p>

        <input type="submit" name="attachment" className="contact__submit" />
      </form>
    </motion.section>
  );
};

export default Contact;
