import React,{useState,useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import './RequestJob.css'
import { Modal } from 'react-bootstrap';
import axiosInstance from '../../Constants/Baseurl';
import ScheduleInterview from '../ScheduleInterview/ScheduleInterview';



function WorkerReqJob() {
    const navigate =useNavigate();

  const [employerid, setId]= useState(localStorage.getItem("employer"));

  useEffect(()=>{
    if(localStorage.getItem("token")== null && localStorage.getItem("employer") == null ){
      navigate("/");
    }
  },[navigate]);

  const [postjobdata, setPostJobData] = useState([]);
  const [show, setShow] = useState(false);
  const [openRequests, setOpenRequests] = useState(false);
  const [selectedWorkerId, setSelectedWorkerid] = useState(null);//for passing _id as prop

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setSelectedWorkerid(id);
    setShow(true);
  };

  const handleRefresh = () => {
    fetchEmployerRequests();
    setShow(false); // Close the modal after refreshing
  };

  const {jobid}=useParams();
  console.log(jobid,'jobid');

  const fetchEmployerRequests = () => {
    axiosInstance
      .post(`viewEmpJobReqsbyJobid/${jobid}`)
      .then((result) => {
        console.log(result);
        setPostJobData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchEmployerRequests();
  }, []);

  const navigateToWorkReqJob=()=>{
    
  }
  return (
    <>
        <div className="empview-postjobmaincontainer">
    <div className="container empviewpostjob-mainbox">
      <div className="empviewpostjob-viewalert ">
        <div className="empviewpostjob-shrink">Job Requests</div>
        <div className="row  row-cols-1 row-cols-md-4 g-4" style={{ marginTop: "30px" }}>
          {/* <div className="col-12 "> */}

          {postjobdata && postjobdata.length ? (
            postjobdata.map((a) => {
              return (
                <div className="col-3 empviewpostjob-boxinside">
                  <div className="empviewpostjob-dashpic row ">
                  <h6 className='mt-2'><span style={{display:'grid',alignItems:'end'}} 
                  class="badge bg-secondary">{a.jobid?.jobName}</span></h6>
                  <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Worker Name:</b>
                        </p>
                      </div>
                      <div className='col-5'>
                        <p>
                        <i>{a?.workerId?.name}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col-6'>
                        <p>
                        <b>Worker Type:</b>
                        </p>
                      </div>
                      <div className='col-6'>
                        <p>
                        <i>{a?.workerId?.workertype}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Worker Email:</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <i>{a?.workerId?.email}</i>
                        </p>
                      </div>
                     </div> 
                     
                     <div className='row mt-3'>
                      <div className='col-6'>
                        <p>
                        <b>Worker Address:</b>
                        </p>
                      </div>
                      <div className='col-5'>
                        <p style={{textAlign:'justify'}}>
                        <i>{a?.workerId?.address},{a?.workerId?.location},{a?.workerId?.state}</i>
                        </p>
                      </div>
                     </div> 
                  </div>

                  <div className="jobreq-viewmore-dashbox">
                    <button type="submit" className="empviewpostjob-accept" 
 onClick={() => handleShow(a?.workerId?._id)}                    >
                      Schedule Interview
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="viewcounsellor-lottiereqq">Nothing found</div>
          )} 
        </div>
      </div>
    </div>
    <Modal show={show} onHide={handleClose} centered>
                    <ScheduleInterview close={handleClose} workerId={selectedWorkerId} refreshJobList={handleRefresh}/>
            </Modal>

  </div>
    </>
  )
}

export default WorkerReqJob