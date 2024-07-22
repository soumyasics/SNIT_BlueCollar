import React,{useState,useEffect} from 'react'
import { Modal } from 'react-bootstrap';
import axiosInstance from '../../Constants/Baseurl';


function ViewEmpInterviewsList() {
    const workerid=localStorage.getItem('workerid')
    console.log(workerid);
    const [interviewdata,setInterviewData]=useState('');

    useEffect(() => {
        axiosInstance.post(`viewInterviewsByWorkerId/${workerid}`)
            .then((result) => {
                console.log(result);
                setUser(result.data.data);
              })
            .catch((err) => {
                console.log(err);
            });
    }, [workerid]);

  return (
    <>
        <div className="workerview-jonreqmaincontainer">
    <div className="workerjobreq-mainbox">
      <div className="workjob-viewalert col-12">
        <div className="admindash-shrink">Job Requests</div>
        <div style={{display:'flex',marginTop:'-30px',marginLeft:'860px'}}><input
                type='search'
                placeholder="Search "
                className='workernav_2_searchbar'
            />
            <button
            className='workernav_2_searchbtn'
            >
            <svg className='svg_viewjobs' width="20px" height="20px" viewBox="0 0 15 15" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z" stroke="#000000"/>
            </svg>            
            </button>
            </div>
        <div className="row d-flex" style={{ marginTop: "30px" }}>
          {/* <div className="col-12 "> */}

          {paymentstatus && paymentstatus.length ? (
            paymentstatus.map((a) => {
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
                        <b>Customer Mail:</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <i>{a?.customerId?.email}</i>
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
                        <i>{a?.jobid?.jobname}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Payment Amount:</b>
                        </p>
                      </div>
                      <div className='col-5'>
                        <p>
                        <i>{a?.payment}</i>
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
                        <p style={{ color: getStatusColor(a.status) }}>
                        <b>{a?.status}</b>
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

                  {/* <div className="jobreq-viewmore-dashbox">
                    <button type="submit" className="viewmoreadmin-accept" 
                      onClick={() => handleShow(a._id)}                    >
                      View More
                    </button>
                  </div> */}
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

export default ViewEmpInterviewsList