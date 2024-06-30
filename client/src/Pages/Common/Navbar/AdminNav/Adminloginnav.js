import React from 'react'
import logo from '../../../../Assets/Mask group.png';
import { Link } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa'; 
// import axiosInstance from '../../Constants/Baseurl';


function Adminloginnav() {
  return (
    <div className='container-fluid mx-0 p-0'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom navbar-b px-5">
      <Link className="navbar-brand text-light-custom navbar-brand-text d-flex flex-column align-items-center" to="/">
        <FaBriefcase className="navbar-icon mb-1 align-self-start" /> 
        Blue Collar Connect
      </Link>
      </nav>
      </div>

  )
}

export default Adminloginnav