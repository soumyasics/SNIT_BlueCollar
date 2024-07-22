import React,{useState,useEffect} from 'react'
import './AdminComplaints.css'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Constants/Baseurl';

function ViewWorkComplaintList() {
    const [work, setWork] = useState([]);
    const url = axiosInstance.defaults.url;
    const adminid=localStorage.getItem("adminid")
    console.log(localStorage.getItem("adminid"));
    const navigate=useNavigate()
  
    useEffect(()=>{
      if(adminid==null){
        navigate("/admin-login")
      }
    },[])
  
    const fetchEmployerRequests = () => {
      axiosInstance
        .post("viewallworkercomplaintsinadmin")
        .then((result) => {
          console.log(result);
          setWork(result.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      fetchEmployerRequests();
    }, []);

    const navigateToViewCust=(id)=>{
        navigate(`/admin-viewcust/${id}`)
    }
  return (
    <>
       <div className="col-9">
    <div className="admin-complaint-mainbox">
      <div className="admindash-viewalert col-12">
        <div className="admindash-shrink">Worker Complaints</div>
        <div className="row d-flex" style={{ marginTop: "30px" }}>
          {/* <div className="col-12 "> */}

         {work && work.length ? (
            work.map((a) => {
              return ( 
                <div className="col admin-alert-boxinside">
                  <div className="admin-viewcustcomplaint row ">
                  {/* <h6 className='mt-2'><span style={{display:'grid',alignItems:'end'}} class="badge bg-secondary">{a?.jobid?.jobType}</span></h6> */}
                    <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>Complainer name:</b>
                        </p>
                      </div>
                      <div className='col-5'>
                        <p>
                        <i>{a?.workerId?.name}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col-7'>
                        <p>
                        <b>complaint against User Type :</b>
                        </p>
                      </div>
                      <div className='col-3'>
                        <p>
                        <i>{a?.against}</i>
                        </p>
                      </div>
                     </div> 
                     
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>complaint against :</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <i>{a?.customerId?.name}</i>
                        </p>
                      </div>
                     </div> 
                     <div className='row mt-3'>
                      <div className='col'>
                        <p>
                        <b>complaint Desription  :</b>
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                        <i>{a?.subject}</i>
                        </p>
                      </div>
                     </div> 
                  </div>

                  <div className="admin-complait-foot">
                    {/* <button type="submit" className="viewuseradmin-view" onClick={() => navigateToViewCust(a?._id)}>
                      View
                    </button> */}
                    {/* <button type="submit" className="viewmoreadmin-reject" 
                    onClick={() => rejectfn(a?._id)}
                    >
                      Remove
                    </button> */}
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
  </div> 
    </>
  )
}

export default ViewWorkComplaintList