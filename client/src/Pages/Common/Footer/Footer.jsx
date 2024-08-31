import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa';
import './Footer.css';
function Footer() {
    const userId=localStorage.getItem("custid")

  return (
    <footer className='footer'>
    <div className='container-fluid p-0 bg-primary-custom text-white'>
         <div className='row'>
            <div className='col-md-3 m-5'>
           <div><FaBriefcase className="navbar-icon " /> </div> 
            <Link className="text-white text-decoration-none fs-3" to="/">
          
          Blue Collar Connect
        </Link>
        <p className=''>Chat Directly, Hire Instantly</p>
        <p className=''>Trusted by 3.8M+ verified job seekers and 190K+ verified recruiters.</p>
            </div>
            <div className='col-md-3 text-white m-5'>
                <h5 className='fs-3'>Blue Collar</h5>
                <ul className='list-group list-group-flush text-white'>
                    {
                        userId===null?(
                            <li className='list-group-item footer-b '>
                            <Link className='text-white footer-links text-decoration-none' to={'/'}>Home</Link>
                        </li>
    
                        ):(
                            <li className='list-group-item footer-b '>
                            <Link className='text-white footer-links text-decoration-none' to={'/customer-home'}>Home</Link>
                        </li>
    
                        )
                    }
                    {
                        userId===null?(
                            <li className='list-group-item footer-b'>
                            <Link className='text-white footer-links text-decoration-none' to={'/alljobs'}>Jobs</Link>
                        </li>
    
                        ):(
                            <li className='list-group-item footer-b'>
                            <Link className='text-white footer-links text-decoration-none' to={'/user-view-postjob'}>Jobs</Link>
                        </li>
    
                        )
                    }
                    {/* <li className='list-group-item footer-b'>
                        <Link className='text-white footer-links text-decoration-none' to={''}>Gallery</Link>
                    </li> */}
                    {
                        userId===null?(
                            <li className='list-group-item footer-b'>
                            <Link className='text-white footer-links text-decoration-none' to={'/aboutus'}>About Us</Link>
                        </li>
    
                        ):(<></>)
                    }
                    {/* <li className='list-group-item footer-b'>
                        <Link className='text-white footer-links text-decoration-none' to={''}>Contact Us</Link>
                    </li> */}
                </ul>
            </div>
            <div className='col-md-3 text-white m-5'>
                <h5 className='fs-3'>Support</h5>
                <p className='text-decoration-underline'>bluecollarofficial@gmail.com</p>
                <p>For Recruiters</p>
                <p>Schedule a Call</p>
            </div>
         </div>

    </div>
    
    </footer>
  )
}

export default Footer