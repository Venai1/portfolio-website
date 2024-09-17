'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          form.current,
          'YOUR_PUBLIC_KEY'
        )
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    
    <div className = "relative z-40">
      <form ref={form} onSubmit={sendEmail}>
        <label>
          <h2 className = "text-neutral-800 text-4xl ">Name</h2>
        </label>
        <input className = "rounded-md border border-input bg-background px-3 py-2" type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
