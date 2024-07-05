import React from 'react'
import './ClientTestimonials.css'
import Maskgroup from '../../../../Assets/Mask group.png' 
import clienttest_star from '../../../../Assets/clienttest_star.png'

function ClientTestimonials() {
    
  return (
    <>
        <section className='container mb-5'>
        <div className="text-center  ">
          <h4 className="  mt-3  clienttest_mainheading">Clients Testimonials</h4>
          <h2 className="  mt-5  ">What Our Customers Say About Us</h2>
        </div>
        <div className='row'>
        <div className='col'>
        <div class="card mt-5">
            <div class="card-image">
                <img className='clienttest_img' src={Maskgroup}/>
                </div>
            <div class="name"> Simoe </div>
            <div class="heading mt-4"> March 20,2024
                <p className='mt-4'>This is an excellent app to find
                                    jobs. Recommended for those 
                                    looking for blue collar jobs.</p>
                <div class="author"> 
                <img src={clienttest_star}/>
                </div>
            </div>
        </div>
        </div>
        </div>
        </section>
    </>
  )
}

export default ClientTestimonials