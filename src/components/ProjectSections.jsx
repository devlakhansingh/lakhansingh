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
            <img src={nothungclone} alt="" />
          </div>
          <div data-aos="zoom-in" className="project">
            <img src={authscreen} alt="" />
          </div>
          <div data-aos="zoom-in" className="project">
            <img src={ecoomerce} alt="" />
          </div>
          <div data-aos="zoom-in" className="project">
            <img src={crypto} alt="" />
          </div>
        </div>

      </div>
    )
  }

  export default ProjectSections
