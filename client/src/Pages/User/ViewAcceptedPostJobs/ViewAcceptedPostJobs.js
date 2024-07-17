import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Constants/Baseurl';
import './ViewAcceptedPostJobs.css'

function ViewAcceptedPostJobs() {
    const custid = localStorage.getItem("custid");
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewApprovedReqsbycustomerId/${custid}`)
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
        <div className="workerview-jonreqmaincontainer" style={{minHeight:'80vh'}}>
      <div className="workerjobreq-mainbox mb-5">
        <div className="workjob-viewalert col-12">
          <div className="admindash-shrink">Job Requests</div>
          <div className="row d-flex" style={{ marginTop: "10px" }}>
            {data && data.length ? (
              data.map((a) => (
                <div className="col-3 userview-joblist-boxinside" key={a._id}>
                  <div className="row mt-3">
                    <div className="col-5 userview-head">Job Name</div>
                    <div className="col-7">: {a?.jobid?.jobname}</div>
                    <div className="col-5 userview-head">Posted On</div>
                    <div className="col-7">: {a?.jobid?.date.slice(0,10)}</div>
                    <div className="col-5 userview-head">Worker Name</div>
                    <div className="col-7">: {a?.workerId?.name}</div>
                    <div className="col-5 userview-head">Worker No</div>
                    <div className="col-7">: {a?.workerId?.contact}</div>
                    <div className="col-5 userview-head">Work Date</div>
                    <div className="col-7">: {a?.workDate}</div>
                    {/* <div className=" viewworkreqacpt  mb-4">
                        <button type="submit" onClick={()=>navigateToacceptjobreq(a._id)}>View Request</button>
                    </div> */}
                           
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

export default ViewAcceptedPostJobs