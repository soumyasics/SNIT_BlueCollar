import React, { useEffect, useState } from "react";
import "../Requests/Workerreq.css";
import img from "../../../Assets/rectangeimage.png";
import axiosInstance from "../../Constants/Baseurl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Workerreq() {
  const [worker, setWorker] = useState([]);
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
      .post("viewworkerreq")
      .then((result) => {
        console.log(result);
        setWorker(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchEmployerRequests();
  }, []);

  const approvefn = (id) => {
      axiosInstance.post(`approveworkerid/${id}`)
          .then((res) => {
              console.log('Employer approved:', res);
              toast.success("Approved Successfully")
              fetchEmployerRequests();
          })
          .catch((err) => {
              console.log('Error approving employer:', err);
          });
  };

  const rejectfn = (id) => {
      axiosInstance.post(`rejectworkerbyid/${id}`)
          .then((res) => {
              console.log('Employer approved:', res);
              toast.success("Request Rejected")
              fetchEmployerRequests();
          })
          .catch((err) => {
              console.log('Error approving employer:', err);
          });
  };

  return (
    <div className="col-9">
      <div className="workerreq-mainbox">
        <div className="admindash-viewalert col-12">
          <div className="admindash-shrink">Worker Requests</div>
          <div className="row d-flex" style={{ marginTop: "30px" }}>
            {/* <div className="col-12 "> */}

            {worker && worker.length ? (
              worker.map((a) => {
                return (
                  <div className="col-3 admin-alert-boxinside">
                    <div className="counsellor-dashpic row d-flex">
                      <div className="col-2">
                        <img src={`${url}/${a?.image?.filename}`} alt="image icon" className="avatar" />
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="col-8 workerreq-para">
                        <p>
                        {a?.name}
                        <br />
                          Worker Id: {a?._id.slice(0, 12)}
                          <br />
                          {a?.contact}

                          <br />
                          {a?.location}

                        </p>
                      </div>
                    </div>

                    <div className="viewmore-dashbox">
                      <button type="submit" className="viewmoreadmin-accept" onClick={() => approvefn(a?._id)}>
                        Accept
                      </button>
                      <button type="submit" className="viewmoreadmin-reject" onClick={() => rejectfn(a?._id)}>
                        Reject
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
    </div>
  );
}

export default Workerreq;
