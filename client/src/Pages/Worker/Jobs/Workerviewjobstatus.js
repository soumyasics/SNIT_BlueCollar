import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Constants/Baseurl';
import { Modal } from 'react-bootstrap';
import "./Workerviewjobstatus.css"

function Workerviewjobstatus() {
    const [job, setJob] = useState([]);
    const url = axiosInstance.defaults.url;
    const workerid=localStorage.getItem("workerid")
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
        .post(`viewReqsbyWorkerid/${workerid}`)
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
                  <div className="counsellor-dashpic row ">
                    <div className='col-5 viewworkdetails'>
                        Work Name
                        </div>
                        <div className='col-7'>
                        : {a?.jobid?.jobname}
                        </div>
                        <div className='col-5 viewworkdetails'>
                        Work Details
                        </div>
                        <div className='col-7'>
                        : {a?.jobid?.workdetails}
                        </div>
                        <div className='col-5 viewworkdetails'>
                        Preffered Date
                        </div>
                        <div className='col-7'>
                        : {a?.workDate}
                        </div>
                        <div className='col-5 viewworkdetails'>
                        Customer Name
                        </div>
                        <div className='col-7'>
                        : {a?.customerId?.name}
                        </div>
                        <div className='col-5 viewworkdetails'>
                        Location
                        </div>
                        <div className='col-7'>
                        : {a?.customerId?.city}
                        </div>
                        <div className='col-5 viewworkdetails'>
                        Contact
                        </div>
                        <div className='col-7'>
                        : {a?.customerId?.phone}
                        </div>

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
    {/* <Modal show={show} onHide={handleClose} centered>
                    <Jobreqsingle close={handleClose} jobId={selectedJobId} refreshJobList={handleRefresh}/>
            </Modal>
 */}
  </div>
  )
}

export default Workerviewjobstatus