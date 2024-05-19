import React from 'react';
import './Navbar.css';
import logo from '../../../Assets/Mask group.png';

function Navbar() {
  return (
    <div className='container-fluid mx-0 p-0'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom navbar-b">
        <a className="navbar-brand  text-light-custom navbar-b mx-5" href="#">Blue Collar Connect</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNav1">
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
                <li className='nav-item btn-group mx-3'>
        
                    <img src={logo} alt='user'/>
                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item nav-link text-dark" href="#">Action</a></li>
                        <li><a className="dropdown-item nav-link text-dark" href="#">Another action</a></li>
                        <li><a className="dropdown-item nav-link text-dark" href="#">Something else here</a></li>
                    </ul>
                
                </li>
                
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar