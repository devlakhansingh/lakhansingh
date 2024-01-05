import React from 'react'
import HeroSection from '../components/HeroSection'
import Skills from '../components/Skills'
import ProjectSections from '../components/ProjectSections'
import Contact from '../components/Contact'
import AboutMe from '../components/AboutMe'

const Home = () => {
    return (
        <>
            <HeroSection />
            <Skills />
            <ProjectSections />
            <AboutMe />
            <Contact />
        </>
    )
}

export default Home
