import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Separator from "./Separator"
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('All fields are required!');
      return;
    }

    const userMessage = {
      name,
      email,
      message,
    };

    setLoading(true);

    try {
      const response = await axios.post(`${baseUrl}/api/contact`, userMessage);

      console.log(response.data);
      toast.success('🎉 Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error.response?.data || error.message);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <>
      <section
        id="contact"
        className="bg-[#0d1825] relative flex flex-col items-center justify-center px-5 py-16 text-white"
      >
        {/* Decorative Background Glows */}
        <div className="absolute w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full top-0 left-[1%] animate-pulse pointer-events-none"></div>

        <div className="absolute w-80 h-80 bg-purple-600/20 blur-3xl rounded-full bottom-[-10%] right-[2%] animate-pulse pointer-events-none"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-7 text-center tracking-wider">
          Message Me
        </h1>

        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-6 w-full max-w-[500px] bg-[#0f1b28] p-8 rounded-2xl border border-cyan-500 shadow-lg shadow-cyan-500/30 mb-2"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="👤 Your Name"
            className="w-full p-3 text-white bg-transparent border-b-2 border-cyan-400 placeholder-gray-400
          focus:outline-none focus:border-blue-400 transition-colors duration-300"
            autoComplete="off"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="📧 Your Email"
            className="w-full p-3 text-white bg-transparent border-b-2 border-cyan-400 placeholder-gray-400
          focus:outline-none focus:border-blue-400 transition-colors duration-300"
            autoComplete="off"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="✍️ Your Message"
            rows={2}
            className="w-full p-3 text-white bg-transparent border-b-2 border-cyan-400 placeholder-gray-400
          focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 py-3 rounded-lg font-semibold tracking-wide text-white transition-transform duration-300
          ${loading
                ? 'bg-cyan-700 cursor-not-allowed opacity-70'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105'
              }`}
          >
            {loading ? 'Sending...' : '🚀 Send Message'}
          </button>
        </form>
        <Separator currentSectionId="contact" />
      </section>
    </>
  );

};

export default Contact;
