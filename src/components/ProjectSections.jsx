import React, { useEffect } from 'react'
import nothungclone from "../assets/nothungclone.png"
import authscreen from "../assets/authscreen.png"
import ecoomerce from "../assets/ecoomerce.png"
import crypto from "../assets/crypto.png"
import AOS from 'aos';
import 'aos/dist/aos.css'




const ProjectSections = () => {


  useEffect(() => {
    AOS.init();
  });

  return (
    <div className='project-section '>
      <div className="text-center">
        <h1 className='  animate-charcter mt-5'>My Latest Projects</h1>
      </div>
      <div className=" project-head container d-flex flex-wrap justify-content-between align-items-center mt-5 ">
        <div data-aos="zoom-in" className="project" >
          <a href="http://nothingclonehtml.vercel.app/" target="_blank" rel="noopener noreferrer">


            <img src={nothungclone} alt="" />
          </a>
        </div>
        <div data-aos="zoom-in" className="project">
          <a href="http://authentication-react-one.vercel.app/login" target="_blank" rel="noopener noreferrer">
            <img src={authscreen} alt="" />
          </a>
        </div>
        <div data-aos="zoom-in" className="project">
          <a href="http://e-commerce-app-cyan-three.vercel.app/home" target="_blank" rel="noopener noreferrer">

            <img src={ecoomerce} alt="" />
          </a>
        </div>
        <div data-aos="zoom-in" className="project">
          <a href="http://crypto-app-react-lilac.vercel.app/" target="_blank" rel="noopener noreferrer">

            <img src={crypto} alt="" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default ProjectSections
