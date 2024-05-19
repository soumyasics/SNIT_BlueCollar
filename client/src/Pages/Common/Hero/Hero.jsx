import React from 'react';
import './Hero.css'

function Hero() {
  return (
        <div className='home-hero'>
              <div className='home-hero-heading mx-5 p-5 mb-5'>
                  Get Your Hands Dirty on Your Terms: Find Blue-Collar Jobs Now!
              </div>
              <div className="container text-center">
                  <div className="row">
                      <div className="col mx-2">
                          <div className="input-group mb-3">
                              <input type="text" className="form-control" placeholder="Job Name" aria-label="JobName" aria-describedby="basic-input" />
                          </div>
                      </div>
                      <div className="col mx-2">
                          <div className="input-group">
                              <input type="text" className="form-control" aria-label="Text input dropdown button" placeholder='Category' />
                              <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                              <ul className="dropdown-menu dropdown-menu-end w-100">
                                  <li><a className="dropdown-item" href="#">Category1</a></li>
                                  <li><a className="dropdown-item" href="#">Category2</a></li>
                                  <li><a className="dropdown-item" href="#">Category3</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col mx-2 ">
                          <div className="d-grid gap-2">
                              <button type="button" className="btn btn-warning text-white fs-6">Search Job</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  )
}

export default Hero