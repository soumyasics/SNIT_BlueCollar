import React from 'react';
import './Navbar.css';
import logo from '../../../Assets/Mask group.png';
import { Link } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa'; 

function Navbar() {
  return (
    <div className='container-fluid mx-0 p-0'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom navbar-b px-5">
        <Link className="navbar-brand text-light-custom navbar-brand-text d-flex flex-column align-items-center" to="/">
          <FaBriefcase className="navbar-icon mb-1 align-self-start" /> 
          Blue Collar Connect
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav1">
          <ul className="navbar-nav ms-auto me-5 navbar-links">
            <li className="nav-item m-1">
              <Link className="nav-link text-light-custom" to="#">Home</Link>
            </li>
            <li className="nav-item m-1">
              <Link className="nav-link text-light-custom" to="#">About Us</Link>
            </li>
            <li className="nav-item m-1">
              <Link className="nav-link text-light-custom" to="#">Gallery</Link>
            </li>
            <li className="nav-item m-1">
              <Link className="nav-link text-light-custom" to="#">Jobs</Link>
            </li>
            <li className="nav-item m-1">
              <Link className="nav-link text-light-custom" to="#">Contact Us</Link>
            </li>
            <li className='nav-item dropdown m-1'>
              <Link className="nav-link dropdown-toggle text-light-custom d-flex align-items-center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={logo} alt='user' className="me-2"/>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/user-register">Customer Registration</Link></li>
                <li><Link className="dropdown-item" to="#">Worker Registration</Link></li>
                <li><Link className="dropdown-item" to="#">Employer Registration</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
