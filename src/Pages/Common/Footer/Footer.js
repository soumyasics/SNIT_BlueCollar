import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div className='container-fluid p-0 bg-primary'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom  footer-b p-0">
        <a className="navbar-brand  text-light-custom  mx-5" href="#">Blue Collar Connect</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarNav1">
            <ul className="navbar-nav ml-auto ms-auto navbar-links">
                <li className="nav-item active">
                    <a className="nav-link text-light-custom mx-3" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light-custom mx-3" href="#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light-custom mx-3" href="#">Gallery</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light-custom mx-3" href="#">Jobs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light-custom mx-3" href="#">Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Footer