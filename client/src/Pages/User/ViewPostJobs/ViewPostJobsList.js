import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Constants/Baseurl';
import './ViewPostJobs.css'

function ViewPostJobsList() {
    const custid = localStorage.getItem("custid");
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewalljobreqs/${custid}`)
      .then((result) => {
        console.log(result);
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [custid]);

  const navigate=useNavigate();

  const navigateToacceptjobreq=(id)=>{
    navigate(`/user-viewjobstatus/${id}`)
  }

  return (
    <div>
        <div className="workerview-jonreqmaincontainer">
      <div className="workerjobreq-mainbox">
        <div className="workjob-viewalert col-12">
          <div className="admindash-shrink">Job Requests</div>
          <div className="row d-flex" style={{ marginTop: "30px" }}>
            {data && data.length ? (
              data.map((a) => (
                <div className="col-3 userview-joblist-boxinside" key={a._id}>
                  <div className="row mt-3">
                    <div className="col-5 userview-head">Job Name</div>
                    <div className="col-7">: {a?.jobname}</div>
                    <div className="col-5 userview-head">Job Details</div>
                    <div className="col-7">: {a?.workdetails.slice(0,10)}...</div>
                    <div className="col-5 userview-head">Job Category</div>
                    <div className="col-7">: {a?.category}</div>
                    <div className="col-5 userview-head">Posted On</div>
                    <div className="col-7">: {a?.date.slice(0,10)}</div>
                    <div className=" viewworkreqacpt">
                        <button type="submit" onClick={()=>navigateToacceptjobreq(a._id)}>View Request</button>
                    </div>
                           
                  </div>
                </div>
              ))
            ) : (
              <div className="viewcounsellor-lottiereqq">No request found</div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ViewPostJobsList