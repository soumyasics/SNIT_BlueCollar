import React from 'react'
import './RecentJobOpen.css'
import img from "../../../../Assets/recent_job.png";
import { useState } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../../../Constants/Baseurl';
function RecentJobOpen() {
    const [recentjobdata,setRecentJobData]=useState("");

    useEffect(()=>{
        axiosInstance.post('/viewjobreqs')
        .then((res)=>{
            console.log(res,"res");
            if(res.status === 200){
              setRecentJobData(res.data.data)
            }
          })
          .catch((err)=>{
            alert.error("Failed to fetch user details")
        });
    },[])
  return (
    <>
       <div className="container">
      <div className="bestcandidate-main row">
        <div className="recentjob-head">
          <p>Recent Job Openings</p>
        </div>
        
        <div class="row row-cols-1 mx-3 row-cols-md-2 g-4 p-3">
        {
        (recentjobdata.length)>0?((recentjobdata).map((data) => {
          return(
            <div className="col mb-5 ">
              <div className="row recentjob-userbox ">
                <div className="col ">
                    <div >
                        <img src={img} className='recentjob-userboximage ' alt="image"/>
                    </div>
                    <div className="bestcandidate-userboxhead6 mt-4">
                        <span><h4>{data.jobname}</h4></span>
                    </div>
                    <div className="bestcandidate-userboxhead6">
                        <p>INR 15000 / Month</p>
                    </div>
                </div>
                
                <div className="col">
                    <div className="col-8 bestcandidate-userboxh5 mt-2">
                        <h5><span class="badge bg-secondary">Full Time</span></h5>
                    </div>
                    <div>
                        <p>
                            {data.custid.city},{data.custid.housename}
                        </p>
                        <p>
                        {data.custid.email}
                        </p>
                    </div>
                    <div className="col-4 recentjob-userbutton">
                        <button type="submit">Apply Now</button>
                    </div>
                </div>
              </div>
            </div>
            )
        })):(<h3>No Records Required</h3>)
        }     
            
            
        </div>
               
        <div className="bestcandidate-userboxbutton mt-4">
            <button type="submit">ViewMore</button>
        </div>
      </div>
      <div className="">
        <div className="bestcandidate-userbottommain">
            <p>Want better recommendations ? Turn on your location & We will show Ads nearby.</p>
            <div className="bestcandidate-userbottonbtm">
            <div>Turn On Location</div>
        </div>

        </div>
      </div>
    </div> 
    </>
  )
}

export default RecentJobOpen