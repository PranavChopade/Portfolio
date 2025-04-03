import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Separator from './components/Separator.jsx'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<>
          <Hero />
          <Separator />
          <Projects />
          <Separator />
          <Contact />
          <Separator />
          <Footer />
        </>} />

      </Routes>

    </Router>
  )
}

export default App
