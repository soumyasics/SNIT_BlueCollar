import React, { useEffect, useState } from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import "../Customer/Customerhomenav.css";
import { Link } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../../Constants/Baseurl';

function WorkerNav() {
    const [show, setShow] = useState(false);
    const [openRequests, setOpenRequests] = useState(false);
    const navigate = useNavigate();
    const [worker,setWorker]=useState({})
    const workerid=localStorage.getItem("workerid")
    const url = axiosInstance.defaults.url;


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if(workerid===null){
            navigate('/login');  
        }
      if (workerid) {
        axiosInstance.post(`viewworkerbyid/${workerid}`)
          .then((res) => {
            console.log(res);
            setWorker(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [workerid]);

    return (
        <div className='container-fluid mx-0 p-0'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom navbar-b px-5">
                <Link className="navbar-brand text-light-custom navbar-brand-text d-flex flex-column align-items-center" to="#">
                    <FaBriefcase className="navbar-icon mb-1 align-self-start" /> 
                    Blue Collar Connect
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav1">
                    <ul className="navbar-nav ms-auto me-5 navbar-links">
                        <li className="nav-item m-1">
                            <Dropdown>
                                <Dropdown.Toggle variant="link" className="nav-link text-light-custom" id="dropdown-requests">
                                    Requests
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="#">Job Requests</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="nav-item m-1">
                            <Link className="nav-link text-light-custom" to="#">Job History</Link>
                        </li>
                        <li className="nav-item m-1">
                            <Link className="nav-link text-light-custom" to="#">Payments</Link>
                        </li>
                        <li className="nav-item m-1">
                            <Link className="nav-link text-light-custom" to="#">Reviews</Link>
                        </li>
                        <li className="nav-item m-1">
                            <Link className="nav-link text-light-custom" to="#">Complaints</Link>
                        </li>
                        <li className='nav-item dropdown m-1'>
                            <Dropdown align="end">
                                <Dropdown.Toggle variant="link" id="dropdown-basic">
                                    <img 
                                    src={`${url}/${worker?.image?.filename}`}
                                    alt="Manage Requests" className="navbar-imgicon" width="70px" height="70px" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => { localStorage.removeItem("custid"); navigate('/login'); }}>
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default WorkerNav;
