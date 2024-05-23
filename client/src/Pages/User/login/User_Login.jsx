import React from 'react';
import './User_Login.css';
import Hero from '../../Common/Hero/Hero';
import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer/Footer';

function User_Login() {
  return (
    <>
    <Navbar/>
    <div className='container-fluid user-register-bg bg-pic'>
    <h1 className="user-register-heading text-center m-5">Sign In</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 m-5">
            <form>
              <div className="mb-3">
                <label
                  for="exampleInputEmail1"
                  className="form-label user-register-label my-2"
                >
                  Username
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
              </div>
              <div className="mb-4">
                <label
                  for="exampleInputPassword1"
                  className="form-label user-register-label my-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1" />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
  <a className="user-register-label text-decoration-none my-2" href="#">
    Reset Password
  </a>
  <a className="user-register-label text-decoration-none my-2" href="#">
    Sign Up
  </a>
</div>

              <div className="align-items-center justify-content-center d-flex">
                <a
                  href=""
                  className="btn w-25  py-2 fs-4 mb-4 rounded-2 btn-primary user-register-button text-white"
                >
                  Sign In <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <g clip-path="url(#clip0_3_212)">
    <path d="M10.5216 9.27079L8.31929 11.4731M13.1643 11.9135L10.962 14.1158M9.64066 18.9609C7.43838 21.1631 5.23609 20.7227 3.47426 18.9609C1.71243 17.199 1.27197 14.9967 3.47426 12.7944L6.117 10.1517L12.2834 16.3181L9.64066 18.9609ZM13.1643 3.10439C15.3666 0.902098 17.5689 1.34256 19.3316 3.10439C21.0943 4.86621 21.533 7.0685 19.3316 9.27079L16.6889 11.9135L10.5216 5.74713L13.1643 3.10439Z" stroke="white" stroke-width="1.0842"/>
  </g>
  <defs>
    <clipPath id="clip0_3_212">
      <rect width="21.142" height="21.142" fill="white" transform="translate(0.831543 0.461609)"/>
    </clipPath>
  </defs>
</svg>
                </a>
              </div>

              {/* <div className="d-flex align-items-center justify-content-center">
                <p className="fs-5 mb-0 fw-bold">
                  <a
                    className="fw-bold ms-2 text-decoration-none user-login-label"
                    href=""
                  >
                    {" "}
                    Create an User account
                  </a>
                </p>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/></>
  )
}

export default User_Login