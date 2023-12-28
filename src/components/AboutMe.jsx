import React, { useEffect } from 'react'
import about3 from "../assets/about3.jpg"
import blob from "../assets/blob.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'

const AboutMe = () => {


    useEffect(() => {
        AOS.init();
    });
    return (
        <>
            <div className="  about-section">
                <div className="text-center">
                    <h1 className='  animate-charcter mt-5'>About Me</h1>
                </div>
                <div className="container">
                    <div className=" about-container row">
                        <div  data-aos="fade-right" className=" container about-left col-12 col-md-12 col-lg-6 mt-5">

                            <img src={about3} alt="" />
                        </div>

                        <div  data-aos="fade-left" className="about-right col-12 col-md-12 col-lg-6 ">

                            <p>Hello there! 👋 I'm Lakhan singh, a passionate React.js developer with a love for creating web applications that not only look great but also deliver exceptional user experiences
                                I specialize in building responsive and interactive web applications using the power of React.js.</p>

                            <p>🚀I've immersed myself in the world of web development, focusing on mastering React.js. This powerful library has become my tool of choice for building dynamic and responsive user interfaces. From crafting elegant components to implementing efficient state management, I am dedicated to creating web solutions that captivate and delight users.</p>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
