import React,{useState,useEffect} from 'react'
import { Modal } from 'react-bootstrap';
import Jobreqsingle from '../Jobreqsingle';
import axiosInstance from '../../Constants/Baseurl';

function PaymentsList() {
    const workerid=localStorage.getItem('workerid')
  console.log(workerid);

  const [user, setUser] = useState("");

  useEffect(() => {
    axiosInstance.post(`viewworkerbyid/${workerid}`)
        .then((result) => {
            console.log(result);
            setUser(result.data.data);
          })
        .catch((err) => {
            console.log(err);
        });
}, [workerid]);

  const category=user.workertype

  console.log(category,'category');
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
      .post(`/viewjobreqs/${category}`)
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
  }, [category]);


  const handleRefresh = () => {
    fetchEmployerRequests();
    setShow(false); // Close the modal after refreshing
  };


  return (
    <>
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
                    <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Customer Name:</b>
                        </p>
                      </div>
                      <div className='col-5'>
                        <p>
                        <i>{a?.custid?.name}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Customer Mail:</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <i>{a?.custid?.email}</i>
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
                        <i>{a?.jobname}</i>
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
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Payment Status:</b>
                        </p>
                      </div>
                      <div className='col-5'>
                        <p style={{color:'green'}}>
                        <b>Completed</b>
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
    <Modal show={show} onHide={handleClose} centered>
                    <Jobreqsingle close={handleClose} jobId={selectedJobId} refreshJobList={handleRefresh}/>
            </Modal>

  </div>
    </>
  )
}

export default PaymentsList