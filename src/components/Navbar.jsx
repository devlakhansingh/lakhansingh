import React from 'react'
import { Link } from 'react-router-dom'








const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg   ">
                <div className="container">
                    <Link to={"/"}>
                        <a className="navbar-brand logo  text-white" href="#">Lakhan singh</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                            <Link to={"/skills"}>
                                <li className="nav-item ">
                                    <a className="nav-link    " aria-current="page" href="#">Skills</a>
                                </li>
                            </Link>
                            <Link to={"/about"}>
                                <li className="nav-item">
                                    <a className="nav-link  " href="#">About</a>
                                </li>
                            </Link>
                            <Link to={"/project"}>
                                <li className="nav-item ">
                                    <a className="nav-link  " aria-current="page" href="#">Project</a>
                                </li>
                            </Link>
                            <Link to={"/contact"}>
                                <li className="nav-item">
                                    <a className="nav-link  " href="#">Contact Us</a>
                                </li>
                            </Link>


                        </ul>

                    </div>
                </div>
            </nav>








        </>
    )
}

export default Navbar
