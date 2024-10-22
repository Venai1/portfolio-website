'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation
    const name = form.current?.from_name.value.trim();
    const email = form.current?.from_email.value.trim();
    const message = form.current?.message.value.trim();

    if (!name || !email || !message) {
      window.alert('Please fill in all fields.');
      return;
    }
    
    if (form.current) {
      emailjs
        .sendForm(
          'service_6egjp5s',
          'contact_form',
          form.current,
          'kT74qQM3O2rQ7A0C4'
        )
        .then(
          () => {
            window.alert('Your message has been sent successfully!');
            form.current?.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <div className="relative z-40 flex justify-center items-center min-h-screen bg-transparent px-4">
      <div className="bg-[#00000134] shadow-lg rounded-lg p-6 w-full max-w-lg border border-neutral-700">
        <h2 className="text-5xl lg:text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent pb-5 font-serif">Contact Me</h2>
        <form id = "contact-form"ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div>
            <label className="block text-lg font-medium text-accent">Name</label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 mt-1"
              type="text"
              name="from_name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-accent">Email</label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 mt-1"
              type="email"
              name="from_email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-accent">Message</label>
            <textarea
              className="w-full rounded-md border border-gray-300 px-3 py-2 mt-1"
              name="message"
              placeholder="Enter your message"
            />
          </div>
          <div>
            <input
              className="w-full bg-gradient-to-br from-primary to-accent text-white font-medium py-2 rounded-md cursor-pointer hover:bg-secondary transition"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
