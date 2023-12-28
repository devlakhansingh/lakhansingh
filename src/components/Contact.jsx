import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import AOS from 'aos';
import 'aos/dist/aos.css'


const Contact = () => {

    useEffect(() => {
        AOS.init();
    });

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_zheaspy', 'template_gyjdffb', form.current, 'gchC-DPIIV_1XR7T_')
        .then((result) => {
            console.log(result.text);
        },
        alert("Email send succdsufully")
        
        , (error) => {
            console.log(error.text);
        });
    }

    return (
        <>
            <div className="contact-page">
                <div className="text-center">
                    <h1 className='  animate-charcter mt-5'>Contact Us</h1>
                </div>
                <div className="container mt-5 ">

                    <div className="row">
                        <div  data-aos="zoom-out" className="col-md-6">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input name='from_name' type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input name='from_email' type="email" className="form-control" id="email" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea name='message' className="form-control" id="message" rows="4" placeholder="Type your message here"></textarea>
                                </div>
                                <a><button type='submit' className='hire-btn'>Submit  </button></a>
                            </form>
                        </div>
                        <div  data-aos="zoom-out" className="col-md-6 contact-details "><br />
                            <h4 className='bold'>Contact Information</h4>
                            <p><strong className='bold'>Email:</strong>   lakhansinghsisodiya8569@gmail.com</p><br />
                            <p><strong className='bold'>Phone:</strong> 8770692495</p><br />
                            <p><strong className='bold'>Address:</strong> 049/9 Nehru nagar,indore</p><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
