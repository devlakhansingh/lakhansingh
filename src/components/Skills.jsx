import React, { useEffect } from 'react'
import react from "../assets/react.svg"
import csslogo from "../assets/csslogo.png"
import bootstraplogo from "../assets/bootstraplogo.png"
import htmllogo from "../assets/htmllogo.png"
import jslogo1 from "../assets/jslogo1.png"
import mui1 from "../assets/mui1.png"

import reduxlogo from "../assets/reduxlogo.png"
import tailwindlogo from "../assets/tailwindlogo.png"
import api from "../assets/api.png"
import AOS from 'aos';
import 'aos/dist/aos.css'


const Skills = () => {
    useEffect(() => {
        AOS.init();
    } );

  return (
    <>
      
      <section className='skill-section '>
                <div className="text-center">
                    <h1 className='  animate-charcter'>My Skills</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <div className="card-img">
                                        <img src={htmllogo} alt="" />
                                    </div>
                                    <h6 class="card-subtitle  mb-2  mt-3">Html</h6>

                                </div>
                            </div>
                        </div>
                        <div  className="col-12  col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <div className="card-img">
                                        <img src={csslogo} alt="" />
                                    </div>
                                    <h6 class="card-subtitle mb-2 mt-3 ">Css</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <div className="card-img">
                                        <img src={bootstraplogo} alt="" />
                                    </div>
                                    <h6 class="card-subtitle mt-3">Bootstraps</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <div className="card-img">
                                        <img src={jslogo1} alt="" />
                                    </div>
                                    <h6 class="card-subtitle mt-3">JavaScript</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <div className="card-img">
                                        <img src={react} alt="" />
                                    </div>
                                    <h6 class="card-subtitle mt-3">React.js</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <div className="card-img">
                                        <img src={mui1} alt="" />
                                    </div>
                                    <h6 class="card-subtitle mt-3">Material ui</h6>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="  col-12 col-md-12 col-lg-4">
                                <div data-aos="zoom-in-down" class="card skill-card" >
                                    <div class="card-body text-center">
                                        <div className="card-img">
                                            <img src={reduxlogo} alt="" />
                                        </div>
                                        <h6 class="card-subtitle mt-3">Redux</h6>

                                    </div>
                                </div>
                            </div>
                            <div className="  col-12 col-md-12 col-lg-4">
                                <div data-aos="zoom-in-down" class="card skill-card" >
                                    <div class="card-body text-center">
                                        <div className="card-img">
                                            <img src={tailwindlogo} alt="" />
                                        </div>
                                        <h6 class="card-subtitle mt-3">Tailwind Css</h6>

                                    </div>
                                </div>
                            </div>
                            <div className="  col-12 col-md-12 col-lg-4">
                                <div data-aos="zoom-in-down" class="card skill-card" >
                                    <div class="card-body text-center">
                                        <div className="card-img">
                                            <img src={api} alt="" />
                                        </div>
                                        <h6 class="card-subtitle mt-3">Api Integration</h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
    </>
  )
}

export default Skills
