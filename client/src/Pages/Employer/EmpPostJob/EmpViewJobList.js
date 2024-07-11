import React,{useState,useEffect} from 'react'
import './EmpViewJobList.css'
import axiosInstance from '../../Constants/Baseurl';
import { Modal } from 'react-bootstrap';
import circleimg4 from '../../../Assets/circleimg4.png'
import {useNavigate} from 'react-router-dom'
import EmpViewPostJob from './EmpViewPostJob';

function EmpViewJobList() {
  const navigate =useNavigate();

  const [employerid, setId]= useState(localStorage.getItem("employer"));

  useEffect(()=>{
    if(localStorage.getItem("token")== null && localStorage.getItem("employer") == null ){
      navigate("/");
    }
  },[navigate]);

  const [postjobdata, setPostJobData] = useState([]);
  const url = axiosInstance.defaults.url;
  const [show, setShow] = useState(false);
  const [openRequests, setOpenRequests] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);//for passing _id as prop

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setSelectedJobId(id);
    setShow(true);
  };

  const handleRefresh = () => {
    fetchEmployerRequests();
    setShow(false); // Close the modal after refreshing
  };

  const fetchEmployerRequests = () => {
    axiosInstance
      .post(`viewEmpPostJobByEmpid/${employerid}`)
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
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="col-8">
                      <table>
                        <tr>
                          <th>Job Name  </th>
                          <th className=''>:</th>
                          <td className=''><label> {a?.jobName}</label></td>
                        </tr>
                        <tr>
                          <th>Job Type  </th>
                          <th>:</th>
                          <td className=''><label> {a?.jobType}</label></td>
                        </tr>
                        <tr>
                          <th>Job Salary  </th>
                          <th>:</th>
                          <td className=''><label> {a?.jobSalary}</label></td>
                        </tr>

                        
                        
                      </table>
                    </div>
                  </div>

                  <div className="jobreq-viewmore-dashbox">
                    <button type="submit" className="empviewpostjob-accept" 
 onClick={() => handleShow(a._id)}                    >
                      View More
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
                    <EmpViewPostJob close={handleClose} jobId={selectedJobId} refreshJobList={handleRefresh}/>
            </Modal>

  </div>
    </>
  )
}

export default EmpViewJobList