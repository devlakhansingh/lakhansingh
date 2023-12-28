import React, { useEffect } from 'react'
import heromain from "../assets/heromain.mp4"
import lakhanfrontend from "../assets/lakhanfrontend.pdf"
import { BsArrowRight } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'

const HeroSection = () => {

    useEffect(() => {
        AOS.init();
    });

    return (
        <>
            <section>
                <div className="bg-main hero-main ">
                    <div className="container">
                        <div className="row">
                            <div data-aos="zoom-in" className="col-12 col-md-12 col-lg-6  d-flex flex-column justify-content-center align-items-start ">
                                <span className='follow-links'>
                                    <a href="https://www.instagram.com/lakhansinghsisodiya8569/"><FaInstagram /></a>
                                    <a href="https://github.com/devlakhansingh"><FaGithub /></a>
                                    <a href="https://www.linkedin.com/in/lakhan-singh-152446197/"><FaLinkedin /></a>
                                    <a href="https://www.facebook.com/profile.php?id=100035050547900"><FaFacebookSquare /></a>
                                    <a href="https://web.whatsapp.com/"><FaWhatsapp /></a>

                                </span>
                                <h1 className=' text-capitalize fw-bolder hi-lakhan'>Hi I'm <span className='lakhan-name'>Lakhan</span></h1>
                                <div className='hero-first-text'>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <h3 class="animate-charcter"> FrontEnd developer</h3>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <p className='description'>A passionate Frontend Developer specializing in crafting immersive and responsive user interfaces. With a focus on leveraging cutting-edge technologies, my expertise lies in React.js, Redux, Bootstrap, and Material UI</p>
                                <a href={lakhanfrontend} download><button className='hire-btn'>Hire me  <BsArrowRight /></button></a>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 position-relative">
                                <div className="text-center video">
                                    <video className='hero-video-section' loop muted autoPlay src={heromain}></video>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default HeroSection
