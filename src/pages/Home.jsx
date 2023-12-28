import React from 'react'
import HeroSection from '../components/HeroSection'
import Skills from '../components/Skills'
import ProjectSections from '../components/ProjectSections'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <>
            <HeroSection />
            <Skills />
            <ProjectSections />
            <Contact />
        </>
    )
}

export default Home
