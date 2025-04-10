import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }


    const userId = "67d95bf25bd7a8a283986dd8"
    const userMessage = {
      name: name,
      email: email,
      message: message
    }
    try {
      const response = await axios.post(`/api/users`, userMessage)
      console.log(response.data);
      toast.success("Message Received")

    } catch (error) {
      console.error('Error registering user:', error.response?.data || error.message);
      toast.error("Failed to send message. Try again later.");

    }

    setName("")
    setEmail("")
    setMessage("")

  }
  return (
    <section id='contact'
      className='bg-[#0d1825] scroll-mt-15 flex flex-col justify-start items-center
       text-white'>

      <h1 className='text-center text-3xl md:text-5xl font-extrabold text-blue-500 mb-5'>Join Us</h1>

      <form onSubmit={handleFormSubmit} className='flex flex-col gap-6 w-[260px] md:w-[500px] bg-[#0f1b28] p-8 rounded-2xl border border-cyan-500 shadow-md shadow-cyan-500/20'>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Your Name..'
          className='w-full p-3 border-b-2 border-cyan-400 focus:outline-none focus:border-blue-400  placeholder-gray-400' />

        <input type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          className='w-full p-3 bg-transparent border-b-2 border-cyan-400 focus:outline-none focus:border-blue-500 placeholder-gray-400' />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Enter your message'
          className='w-full p-3 bg-transparent border-b-2 border-cyan-400 focus:outline-none focus:border-blue-500 placeholder-gray-400'>
        </textarea>

        <button
          type='submit'
          className='mt-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600  hover:scale-105 rounded-lg text-white font-medium  transition-all duration-300 tracking-wider '>
          🚀 Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
