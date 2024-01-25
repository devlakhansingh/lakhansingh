import React, { useEffect } from 'react'
import react from "../assets/react.svg"
import csslogo from "../assets/csslogo.png"
import bootLogo from "../assets/bootLogo.png"
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
    });

    return (
        <>


            <section className='skill-section  '>
                <div className="text-center">
                    <h1 className='  animate-charcter'>My Skills</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <a href="http://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer">
                                        <div className="card-img">
                                            <img src={htmllogo} alt="" />
                                        </div>
                                    </a>
                                    <h6 class="card-subtitle  mb-2  mt-3">Html</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-12  col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <a href="http://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">

                                        <div className="card-img">

                                            <img src={csslogo} alt="" />
                                        </div>
                                    </a>
                                    <h6 class="card-subtitle mb-2 mt-3 ">Css</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <a href="http://getbootstrap.com/docs/4.0/utilities/position/" target="_blank" rel="noopener noreferrer">
                                        <div className="card-img">
                                            <img src={bootLogo} alt="" />
                                        </div>
                                    </a>
                                    <h6 class="card-subtitle mt-3">Bootstraps</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <a href="http://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                        <div className="card-img">
                                            <img src={jslogo1} alt="" />
                                        </div>
                                    </a>
                                    <h6 class="card-subtitle mt-3">JavaScript</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <a href="http://react.dev" target="_blank" rel="noopener noreferrer">
                                        <div className="card-img">
                                            <img src={react} alt="" />
                                        </div>
                                    </a>
                                    <h6 class="card-subtitle mt-3">React.js</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div data-aos="zoom-in-down" class="card skill-card" >
                                <div class="card-body text-center">
                                    <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
                                        <div className="card-img">
                                            <img src={mui1} alt="" />
                                        </div>
                                    </a>
                                    <h6 class="card-subtitle mt-3">Material ui</h6>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="  col-12 col-md-12 col-lg-4">
                                <div data-aos="zoom-in-down" class="card skill-card" >
                                    <div class="card-body text-center">
                                        <a href="http://redux.js.org/" target="_blank" rel="noopener noreferrer">
                                            <div className="card-img">
                                                <img src={reduxlogo} alt="" />
                                            </div>
                                        </a>
                                        <h6 class="card-subtitle mt-3">Redux</h6>

                                    </div>
                                </div>
                            </div>
                            <div className="  col-12 col-md-12 col-lg-4">
                                <div data-aos="zoom-in-down" class="card skill-card" >
                                    <div class="card-body text-center">
                                        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                                            <div className="card-img">
                                                <img src={tailwindlogo} alt="" />
                                            </div>
                                        </a>
                                        <h6 class="card-subtitle mt-3">Tailwind Css</h6>

                                    </div>
                                </div>
                            </div>
                            <div className="  col-12 col-md-12 col-lg-4">
                                <div data-aos="zoom-in-down" class="card skill-card" >
                                    <div class="card-body text-center">
                                        <a href="http://tray.io/blog/what-is-an-api-integration-for-non-technical-people" target="_blank" rel="noopener noreferrer">
                                            <div className="card-img">
                                                <img src={api} alt="" />
                                            </div>
                                        </a>
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
