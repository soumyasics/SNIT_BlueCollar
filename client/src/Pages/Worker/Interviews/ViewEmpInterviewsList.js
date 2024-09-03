import React,{useState,useEffect} from 'react'
import { Modal } from 'react-bootstrap';
import axiosInstance from '../../Constants/Baseurl';
import ViewSingleEmpInterviews from './ViewSingleEmpInterviews';


function ViewEmpInterviewsList() {
    const workerid=localStorage.getItem('workerid')
    console.log(workerid);

    const [data,setData]=useState();

    useEffect(() => {
        axiosInstance.post(`viewInterviewsByWorkerId/${workerid}`)
            .then((result) => {
                console.log(result,'data');
                setData(result.data.data);
              })
            .catch((err) => {
                console.log(err);
            });
    }, [workerid]);

  const [show, setShow] = useState(false);
  const [openRequests, setOpenRequests] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState({ jobId: null, custId: null }); // State for storing selected job and customer IDs

  const [showinterview, setShowInterview] = useState(false);
  const handleCloseInterview = () => setShowInterview(false);
  const handleShowInterview = () => setShowInterview(true);

    const handleRefresh = () => {
      
      setShow(false); // Close the modal after refreshing
    };
  
    const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setSelectedInterview(id);
    setShow(true);
  };


  return (
    <>
        <div className="workerview-jonreqmaincontainer">
    <div className="workerjobreq-mainbox">
      <div className="workjob-viewalert col-12">
        <div className="admindash-shrink">Interviews</div>
        {/* <div style={{display:'flex',marginTop:'-30px',marginLeft:'860px'}}><input
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
            </div> */}
        <div className="row d-flex" style={{ marginTop: "30px" }}>
          {/* <div className="col-12 "> */}

          {data && data.length ? (
            data.slice().reverse().map((a) => {
              
              return (
                <div className="col-3 worker-job-boxinside">
                  <div className="counsellor-dashpic row d-flex">
                    {/* <div style={{display:'flex',alignItems:'end',justifyContent:'end',marginTop:'10px'}}><i><b>On : </b>{a?.interview_date.slice(0,10)}</i></div> */}
                    <div className='row mt-3' >
                    <div className='col'>
                        <p>
                        <b>Interview Date :</b>
                        </p>
                      </div>
                      <div className='col-5'>
                        <p>
                        {a?.interview_date.slice(0,10)}
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <b>Employer Name :</b>
                        </p>
                      </div>
                      <div className='col-5'>
                        <p>
                        {a?.empId?.name}
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Job :</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        {a?.workerId?.workertype}
                        </p>
                      </div>
                     </div> 
                     
                      

                      
                  </div>

                  <div className="jobreq-viewmore-dashbox">
                    <button type="submit" className="viewmoreadmin-accept" 
                      onClick={() => handleShow(a._id)}                    
                      >
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
                    <ViewSingleEmpInterviews close={handleClose} interview_id={selectedInterview} refreshJobList={handleRefresh}/>
            </Modal>

  </div>
    </>
  )
}

export default ViewEmpInterviewsList