import React, { useEffect, useState } from "react";
import img from "../../../Assets/profilecircle.png";
import axiosInstance from "../../Constants/Baseurl";
import "./Viewjobstatus.css"

function Viewjobstatus() {
  const custid = localStorage.getItem("custid");
  const [data, setData] = useState([]);
  const url = axiosInstance.defaults.url;

  useEffect(() => {
    axiosInstance
      .post(`viewjobreqsbyuserid/${custid}`)
      .then((result) => {
        console.log(result);
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [custid]);

  return (
    <div className="workerview-jonreqmaincontainer">
      <div className="workerjobreq-mainbox">
        <div className="workjob-viewalert col-12">
          <div className="admindash-shrink">Job Requests</div>
          <div className="row d-flex" style={{ marginTop: "30px" }}>
            {data && data.length ? (
              data.map((a) => (
                <div className="col-3 worker-job-boxinside" key={a._id}>
                  <div className="counsellor-dashpic row d-flex">
                    <div className="col-2">
                    {a.jobreqstatus === "accepted" ? (
                      <img
                        src={`${url}/${a?.workerid?.image?.filename}`}
                        alt="image icon"
                        className="avatar"
                      />
                    ):("")}
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="col-8 jobreq-para">
                      {/* {a.jobreqstatus === "accepted" ? ( */}
                        <p>
                          <span className="jobstatus-text">Job Title:</span> {a?.jobname}
                          <br />
                          <span className="jobstatus-text"> Worker Name: </span>{a?.workerid?.name}
                          <br />
                          <span className="jobstatus-text">Work Date:</span> {a?.workdate}
                          <br />
                          <span className="jobstatus-text">Email:</span> {a?.workerid?.email}
                          <br />
                          <span className="jobstatus-text">Phone:</span> {a?.workerid?.contact}
                        </p>
                      {/* ) : ( */}
                        <p>                        <span className="jobstatus-text">Job Title:</span>   {a?.jobname}<br/>

                          <p style={{color:"red"}}>The request will be accepted shortly.</p>  </p>
                      {/* )} */}
                    </div>
                  </div>
{/* 
                  <div className="jobreq-viewmore-dashbox">
                    <button
                      type="submit"
                      className="viewmoreadmin-accept"
                      // onClick={() => handleShow(a._id)}
                    >
                      View More
                    </button> */}
                  {/* </div> */}
                </div>
              ))
            ) : (
              <div className="viewcounsellor-lottiereqq">No request found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewjobstatus;
