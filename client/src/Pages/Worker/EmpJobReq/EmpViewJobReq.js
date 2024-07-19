import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import './EmpJobReq.css'
import axiosInstance from '../../Constants/Baseurl';
import EmpViewSingleJobReq from './EmpViewSingleJobReq';


function EmpViewJobReq() {
    const workerid=localStorage.getItem('workerid')
    console.log(workerid);

  const [job, setJob] = useState(['']);
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
      .post('viewAllEmpPostJob')
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
    <>
        
    <div className="workerview-jonreqmaincontainer">
    <div className="workerjobreq-mainbox">
      <div className="workjob-viewalert col-12">
        <div className="worker-shrink">Employer Job Requests</div>
        <div className="row d-flex" style={{ marginTop: "30px" }}>
          {/* <div className="col-12 "> */}

          {job && job.length ? (
            job.map((a) => {
              return (
                <div className="col-3 worker-job-boxinside">
                  <div className="counsellor-dashpic row d-flex">
                    <h6 className='mt-2'><span style={{display:'grid',alignItems:'end'}} class="badge bg-secondary">{a?.jobType}</span></h6>
                    <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Employer Name:</b>
                        </p>
                      </div>
                      <div className='col-5'>
                        <p>
                        <i>{a?.empId?.name}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Employer Mail:</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <i>{a?.empId?.email}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>JobTitle:</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <i>{a?.jobName}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Posted On:</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <i>{new Date(a.date).toLocaleDateString()}</i>
                        </p>
                      </div>
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
                    <EmpViewSingleJobReq close={handleClose} jobId={selectedJobId} refreshJobList={handleRefresh}/>
            </Modal>

  </div>
    </>
  )
}

export default EmpViewJobReq