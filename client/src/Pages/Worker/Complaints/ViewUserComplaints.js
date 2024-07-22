import React,{useState,useEffect} from 'react'
import axiosInstance from '../../Constants/Baseurl';
import './workerComplaints.css'
import { Modal } from 'react-bootstrap';

function ViewUserComplaints() {
    const workerid=localStorage.getItem('workerid')
  console.log(workerid);

  const [data, setData] = useState("");

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
      .post(`/viewComplaintByWorkerId/${workerid}`)
      .then((result) => {
        console.log(result);
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchEmployerRequests();
  }, [workerid]);

  const handleRefresh = () => {
    fetchEmployerRequests();
    setShow(false); // Close the modal after refreshing
  };

  return (
    <>
        <div className="workerview-jonreqmaincontainer">
    <div className="workerjobreq-mainbox">
      <div className="workjob-viewalert col-12">
        <div className="admindash-shrink">Customer Job Requests</div>
        <div className="row d-flex" style={{ marginTop: "30px" }}>
          {/* <div className="col-12 "> */}

          {data && data.length ? (
            data.map((a) => {
              return (
                <div className="col-3 worker-job-boxinside">
                  <div className="counsellor-dashpic row d-flex">
                    <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Customer Name:</b>
                        </p>
                      </div>
                      <div className='col-5'>
                        <p>
                        <i>{a?.customerId?.name}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Suspect Name:</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <i>{a?.suspectName}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Subject:</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <i>{a?.subject}</i>
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
                    {/* <div className="col-10 jobreq-para">
                      <p className='pt-3'>
                      <b>Customer Name:</b>&nbsp; <i>{a?.custid?.name}</i> <br/>
                      <b>Customer Mail:</b>&nbsp;<i>{a?.custid?.email}</i> <br/>
                      <b>JobTitle:</b> 
                        <br />
                      <b></b><span > </span>
                      <br />
                      

                      </p>
                    </div> */}
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
    {/* <Modal show={show} onHide={handleClose} centered>
                    <Jobreqsingle close={handleClose} jobId={selectedJobId} refreshJobList={handleRefresh}/>
            </Modal> */}

  </div>
    </>
  )
}

export default ViewUserComplaints
