import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import ProjectSections from './components/ProjectSections'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/project' element={<ProjectSections />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>


  )
}

export default App
