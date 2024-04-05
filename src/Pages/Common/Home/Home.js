import React from 'react';
import './Home.css';
import mario from '../../../Assets/Ellipse 2.png';
import Navbar from '../Navbar/Navbar';
import Footer  from '../Footer/Footer';
import Hero from '../Hero/Hero';
function Home() {
  return (
    <>
    <Navbar />
    <div className='container-fluid p-0'>
            <Hero/>
          <div className='m-5 text-center'>
              <p className='border-info border-3 border-bottom border-dotted home-subheading'>Popular Category</p>
              <p className='home-para'>Many desktop publishing packages and web page editors</p>
          </div>
          <div className='container-fluid mx-auto text-center'>
              <div class="row">
                  <div class="col-4"><button class="btn btn-light px-5 my-3">Category One</button></div>
                  <div class="col-4"><button class="btn btn-light px-5 my-3">Category One</button></div>
                  <div class="col-4"><button class="btn btn-light px-5 my-3">Category One</button></div>
              </div>
              <div class="row">
                  <div class="col-4"><button class="btn btn-light px-5 my-3">Category One</button></div>
                  <div class="col-4"><button class="btn btn-light px-5 my-3">Category One</button></div>
                  <div class="col-4"><button class="btn btn-warning px-5 my-3">Category Two</button></div>
              </div>
          </div>
          <div className=' m-5 text-center'>
              <p className='border-info border-3 border-bottom border-dotted home-subheading'>Recent Jobs</p>
              <p className='home-para'>Many desktop publishing packages and web page editors</p>
          </div>
          <div className='container-fluid m-auto'>
              <div class="row m-auto">
                  <div class="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col-6 d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                          <div className='col-6 d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'>Location | Country</span><br />
                                  <span className='fs-4 fw-light'>Job Name:</span><br />
                                  <span className='fs-4 fw-light'>Job type:</span><br />
                              </p>
                          </div>
                          <div className='col-6'></div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Apply Now</button>
                          </div>
                      </div>
                  </div>
                  <div class="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col-6 d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                          <div className='col-6 d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'> Location | Country</span><br />
                                  <span className='fs-4 fw-light'> Job Name:</span><br />
                                  <span className='fs-4 fw-light'> Job type:</span><br />
                              </p>
                          </div>
                          <div className='col-6'></div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Apply Now</button>
                          </div>
                      </div>

                  </div>
                  <div class="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col-6 d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                          <div className='col-6 d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'> Location | Country</span><br />
                                  <span className='fs-4 fw-light'> Job Name:</span><br />
                                  <span className='fs-4 fw-light'> Job type:</span><br />
                              </p>
                          </div>
                          <div className='col-6'></div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Apply Now</button>
                          </div>
                      </div>

                  </div>
              </div>
              <div className="row m-auto">
                  <div className="col-4 m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col-6 d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                          <div className='col-6 d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'> Location | Country</span><br />
                                  <span className='fs-4 fw-light'> Job Name:</span><br />
                                  <span className='fs-4 fw-light'> Job type:</span><br />
                              </p>
                          </div>
                          <div className='col-6'></div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Apply Now</button>
                          </div>
                      </div>

                  </div>
                  <div className="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col-6 d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                          <div className='col-6 d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'> Location | Country</span><br />
                                  <span className='fs-4 fw-light'> Job Name:</span><br />
                                  <span className='fs-4 fw-light'> Job type:</span><br />
                              </p>
                          </div>
                          <div className='col-6'></div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Apply Now</button>
                          </div>
                      </div>

                  </div>
                  <div className="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col-6 d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                          <div className='col-6 d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'> Location | Country</span><br />
                                  <span className='fs-4 fw-light'> Job Name:</span><br />
                                  <span className='fs-4 fw-light'> Job type:</span><br />
                              </p>
                          </div>
                          <div className='col-6'></div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Apply Now</button>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          <div className=' m-5 text-center'>
              <p className='border-info border-3 border-bottom border-dotted home-subheading'>How It Work?</p>
              <p className='home-para'>Many desktop publishing packages and web page editors</p>
          </div>
          <div className=' m-5 text-center'>
              <div className='row m-5'>
                  <div className='col'>
                      <h3>Create an Account</h3>
                      <p>
                          It is long established fact reader distracted readable content
                      </p>
                  </div>
                  <div className='col m-auto'>
                      <i className="bi bi-arrow-right fs-1 w-100"></i>
                  </div>
                  <div className='col'>
                      <h3>Find Your Job</h3>
                      <p>
                          It is long established fact reader distracted readable content
                      </p>
                  </div>
                  <div className='col m-auto'>
                      <i className="bi bi-arrow-right fs-1 w-100"></i>
                  </div>
                  <div className='col'>
                      <h3>Apply</h3>
                      <p>
                          It is long established fact reader distracted readable content
                      </p>
                  </div>
              </div>
              <div className='row'>
                  <div className='col'>
                      <button className='btn btn-primary rounded-pill w-25 m-5'>Know More</button>
                  </div>
              </div>
          </div>
          <div className=' m-5 text-center'>
              <p className='border-info border-3 border-bottom border-dotted home-subheading'>Best Candidate</p>
              <p className='home-para'>Many desktop publishing packages and web page editors</p>
          </div>
          <div className='container-fluid m-auto'>
              <div class="row m-auto">
                  <div class="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col-6 d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                          <div className='col-6 d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'>Location | Country</span><br />
                                  <span className='fs-4 fw-light'>Job Name:</span><br />
                                  <span className='fs-4 fw-light'>Job type:</span><br />
                              </p>
                          </div>
                          <div className='col-6'></div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Apply Now</button>
                          </div>
                      </div>
                  </div>
                  <div className="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'> Location | Country</span><br />
                                  <span className='fs-4 fw-light'> Job Name:</span><br />
                                  <span className='fs-4 fw-light'> Job type:</span><br />
                              </p>
                          </div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Request Now</button>
                          </div>
                      </div>
                  </div>
                  <div className="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'> Location | Country</span><br />
                                  <span className='fs-4 fw-light'> Job Name:</span><br />
                                  <span className='fs-4 fw-light'> Job type:</span><br />
                              </p>
                          </div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Request Now</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row m-auto">
                  <div className="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'> Location | Country</span><br />
                                  <span className='fs-4 fw-light'> Job Name:</span><br />
                                  <span className='fs-4 fw-light'> Job type:</span><br />
                              </p>
                          </div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Request Now</button>
                          </div>
                      </div>
                  </div>
                  <div className="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'> Location | Country</span><br />
                                  <span className='fs-4 fw-light'> Job Name:</span><br />
                                  <span className='fs-4 fw-light'> Job type:</span><br />
                              </p>
                          </div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Request Now</button>
                          </div>
                      </div>
                  </div>
                  <div className="col m-3 border rounded border-secondary-subtle p-3">
                      <div className='row '>
                          <div className="col d-flex align-items-center justify-content-center">
                              <img src={mario} alt="mario image" className="img-fluid" />
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col d-flex align-items-center justify-content-center fw-bolder'>
                              15kDay
                          </div>
                      </div>
                      <div className='row'>
                          <div className="col d-flex flex-column align-items-center justify-content-center">
                              <p className="text-center">
                                  <span className='fs-6 fw-bolder'> Location | Country</span><br />
                                  <span className='fs-4 fw-light'> Job Name:</span><br />
                                  <span className='fs-4 fw-light'> Job type:</span><br />
                              </p>
                          </div>
                      </div>
                      <div className='row m-auto'>
                          <div className='col-12 m-auto text-center'>
                              <button type="button" class="btn btn-primary w-100 py-3 mx-auto">Request Now</button>
                          </div>
                      </div>
                  </div>
                  <div className='contanier-fluid m-auto'>
                      <div className='row m-auto'>
                          <div className='col m-auto text-center'>
                              <button className='btn btn-primary rounded-pill w-25 m-5 '>Know More</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
      </>
  )
}

export default Home