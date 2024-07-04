import React, { useEffect, useState } from 'react'
import "./Jobreq.css"
import axiosInstance from '../Constants/Baseurl';
import { Modal } from 'react-bootstrap';
import Jobreqsingle from './Jobreqsingle';

function Jobreq() {

  const [job, setJob] = useState([]);
  const url = axiosInstance.defaults.url;
  const [show, setShow] = useState(false);
  const [openRequests, setOpenRequests] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);//for passing _id as prop

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setSelectedJobId(id);
    setShow(true);
  };

  const fetchEmployerRequests = () => {
    axiosInstance
      .post("viewjobreqs")
      .then((result) => {
        console.log(result);
        setJob(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchEmployerRequests();
  }, []);


  const handleRefresh = () => {
    fetchEmployerRequests();
    setShow(false); // Close the modal after refreshing
  };



  return (
    <div className="workerview-jonreqmaincontainer">
    <div className="workerjobreq-mainbox">
      <div className="workjob-viewalert col-12">
        <div className="admindash-shrink">Job Requests</div>
        <div className="row d-flex" style={{ marginTop: "30px" }}>
          {/* <div className="col-12 "> */}

          {job && job.length ? (
            job.map((a) => {
              return (
                <div className="col-3 worker-job-boxinside">
                  <div className="counsellor-dashpic row d-flex">
                    <div className="col-2">
                      <img src={`${url}/${a?.custid?.image?.filename}`} alt="image icon" className="avatar" />
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="col-8 jobreq-para">
                      <p>
                      {a?.custid?.name} <br/>Date:<span > {new Date(a.date).toLocaleDateString()}</span>
                      <br />
                      Job Title: {a?.jobname}
                        <br />

                      </p>
                    </div>
                  </div>

                  <div className="jobreq-viewmore-dashbox">
                    <button type="submit" className="viewmoreadmin-accept" 
 onClick={() => handleShow(a._id)}                    >
                      View More
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="viewcounsellor-lottiereqq">No request found</div>
          )} 
        </div>
      </div>

    </div>
    <Modal show={show} onHide={handleClose} centered>
                    <Jobreqsingle close={handleClose} jobId={selectedJobId} refreshJobList={handleRefresh}/>
            </Modal>

  </div>

  )
}

export default Jobreq