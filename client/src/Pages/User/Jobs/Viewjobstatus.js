import React, { useEffect, useState } from "react";
import axiosInstance from "../../Constants/Baseurl";
import "./Viewjobstatus.css";

function Viewjobstatus() {
  const custid = localStorage.getItem("custid");
  const [data, setData] = useState([]);

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
                <div className="col-3 userview-job-boxinside" key={a._id}>
                  <div className="row">
                    <div className="col-5 userview-head">Job Name</div>
                    <div className="col-7">: {a?.jobname}</div>
                    <div className="col-5 userview-head">Job Details</div>
                    <div className="col-7">: {a?.workdetails}</div>
                    {a.workers && a.workers.length ? (
                      a.workers.map((e, index) => (
                        <div key={index} className="userjob-view-worker">
                          <div className="row">
                            <div className="col-5 userview-head1">Worker Name</div>
                            <div className="col-7">: {e?.workerId?.name}</div>
                            <div className="col-5 userview-head1">Location</div>
                            <div className="col-7">: {e?.workerId?.location}</div>
                            <div className="col-5 userview-head1">Work Date</div>
                            <div className="col-7">: {e?.workDate}</div>
                            <div className="col-5 viewworkreqacpt">
                              <button type="submit">Accept</button>
                            </div>
                            <div className="col-7 viewworkreqrjt">
                              <button type="submit">Reject</button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="viewcounsellor-lottiereqq">
                        No workers Accepted Your Request
                      </div>
                    )}
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
  );
}

export default Viewjobstatus;
