import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Constants/Baseurl';
import { Modal } from 'react-bootstrap';
import './Workerviewjobstatus.css';
import WorkerViewWorkStatus from '../WorkStatus/WorkerViewWorkStatus';

function Workerviewjobstatus() {
  const [job, setJob] = useState([]);
  const workerid = localStorage.getItem('workerid');
  const [show, setShow] = useState(false);
  const [openRequests, setOpenRequests] = useState(false);
  const [selectedJob, setSelectedJob] = useState({ jobId: null, custId: null }); // State for storing selected job and customer IDs

  const [showjobstatus, setShowWorkStatus] = useState(false);
  const handleCloseWorkStatus = () => setShowWorkStatus(false);
  const handleShowWorkStatus = () => setShowWorkStatus(true);

  const fetchEmployerRequests = () => {
    axiosInstance
      .post(`viewApprovedReqsbyWorkerid/${workerid}`)
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

  const handleStatusClick = (jobId, custId) => {
    setSelectedJob({ jobId, custId });
    handleShowWorkStatus();
  };

  return (
    <div className="workerview-jonreqmaincontainer">
      <div className="workerjobreq-mainbox">
        <div className="workjob-viewalert col-12">
          <div className="admindash-shrink">Job Requests</div>
          <div className="row d-flex" style={{ marginTop: '30px' }}>
            {job && job.length ? (
              job.map((a) => {
                const jobid = a?.jobid?._id;
                const custId = a?.customerId?._id;
                return (
                  <div key={jobid} className="col-3 worker-job-boxinside pt-3">
                    <div className="counsellor-dashpic row">
                      <div className="col-5 viewworkdetails">Work Name</div>
                      <div className="col-7">: {a?.jobid?.jobname}</div>
                      <div className="col-5 viewworkdetails">Work Details</div>
                      <div className="col-7">: {a?.jobid?.workdetails.slice(0, 15)}...</div>
                      <div className="col-5 viewworkdetails">Preferred Date</div>
                      <div className="col-7">: {a?.workDate}</div>
                      <div className="col-5 viewworkdetails">Customer Name</div>
                      <div className="col-7">: {a?.customerId?.name}</div>
                      <div className="col-5 viewworkdetails">Location</div>
                      <div className="col-7">: {a?.customerId?.city}</div>
                      <div className="col-5 viewworkdetails">Contact</div>
                      <div className="col-7">: {a?.customerId?.phone}</div>
                    </div>
                    <div className="mb-4 mt-3" style={{ textAlign: 'center' }}>
                      <button
                        type="submit"
                        className="viewmoreadmin-accept"
                        onClick={() => handleStatusClick(jobid, custId)}
                      >
                        Complete
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
      <Modal show={showjobstatus} onHide={handleCloseWorkStatus}>
        <div>
          <WorkerViewWorkStatus close={handleCloseWorkStatus} jobId={selectedJob.jobId} custId={selectedJob.custId} />
        </div>
      </Modal>
    </div>
  );
}

export default Workerviewjobstatus;
