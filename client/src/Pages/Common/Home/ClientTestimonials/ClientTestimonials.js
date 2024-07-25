import React, { useEffect } from 'react'
import './ClientTestimonials.css'
import Maskgroup from '../../../../Assets/Mask group.png' 
import clienttest_star from '../../../../Assets/clienttest_star.png'
import { useState } from 'react'
import axiosInstance from '../../../Constants/Baseurl'
import StarRating from '../../StarRating/StarRating'

function ClientTestimonials() {

    const [reviewsdata,setreviewsData]=useState('');
    const url = axiosInstance.defaults.url;
    

    

    const fetchEmployerRequests = () => {
        axiosInstance
          .post('viewallreviews')
          .then((result) => {
            console.log(result,'reviewsdata');
            setreviewsData(result.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        fetchEmployerRequests();
      }, []);

    

    
    
      
    
  return (
    <>
        <section className='container mb-5'>
        <div className="text-center  ">
          <h4 className="  mt-3  clienttest_mainheading">Clients Testimonials</h4>
          <h2 className="  mt-5  ">What Our Customers Say About Us</h2>
        </div>
        <div className='row row-cols-md-4 mt-5'>
        {
        (reviewsdata.length)>0? ((reviewsdata).slice(0,4)
            .map((a) => {
              return (
        <div className='col mb-5'>
        <div class="clienttest-card mt-5">
            <div class="clienttest-card-image">
                <img className='clienttest_img' src={`${url}/${a?.workerId?.image?.filename}`}/>
                </div>
            <div class="clienttest-name"> {a?.workerId?.name} </div>
            <div class="clienttest-heading mt-4"> March 20,2024
                <p className='mt-4'>{a?.reviews}</p>
                <div class="clienttest-author"> 
                {/* <img src={clienttest_star}/> */}
                <StarRating key={a?._id} rating={a?.workerId?.rating} />
                </div>
            </div>
        </div>
        </div>
        );
    })
  ) : (
    <div className="viewcounsellor-lottiereqq">No request found</div>
  )} 
        
        
        
        
        
        
        
        
        </div>
        </section>
    </>
  )
}

export default ClientTestimonials