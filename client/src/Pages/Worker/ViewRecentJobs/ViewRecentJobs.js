import React from 'react'
import './ViewRecentJobs.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../../Constants/Baseurl';

function ViewRecentJobs() {
    const [recentjobdata,setRecentJobData]=useState("");

    const url = axiosInstance.defaults.url;

    useEffect(()=>{
        axiosInstance.post('/viewAllEmpPostJob')
        .then((res)=>{
            console.log(res,"res");
            if(res.status === 200){
              setRecentJobData(res.data.data)
            }
          })
          .catch((err)=>{
            alert("Failed to fetch user details")
        });
    },[])

  return (
    <>
        <div className="container">
      <div className="bestcandidate-main row mt-3">
        <div className="worker-recentjob-head">
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
                        <img src={`${url}/${data.empId.image?.filename}`}  className='recentjob-userboximage ' alt="image"/>
                    </div>
                    <div className="bestcandidate-userboxhead6 mt-4">
                        <span><h4>{data.jobName}</h4></span>
                    </div>
                    <div className="bestcandidate-userboxhead6">
                        <p>INR {data.jobSalary} {data.jobSalaryType}</p>
                    </div>
                </div>
                
                <div className="col">
                    <div className="col-8 bestcandidate-userboxh5 mt-2">
                        <h5><span class="badge bg-secondary">{data.jobType}</span></h5>
                    </div>
                    <div>
                        <p>
                           Posted On  {new Date(data?.date).toLocaleDateString()}
                        </p>
                        <p>
                        {data.jobDetails}
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
               
        
      </div>
      
    </div> 
    </>
  )
}

export default ViewRecentJobs