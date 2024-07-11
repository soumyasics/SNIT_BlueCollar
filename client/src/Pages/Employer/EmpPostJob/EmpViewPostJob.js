import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import axiosInstance from '../../Constants/Baseurl';
import { useNavigate,useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function EmpViewPostJob({close,jobId}) {
    
    const [postjobdata, setPostJobData] = useState([]);

    const {id}=useParams();
    console.log(jobId,"jobid");

    const fetchEmployerRequests = () => {
        axiosInstance
          .post(`viewEmpPostJobById/${jobId}`)
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
        <div className="empview-postjob-singlemain">
      <div className="empview-postjob-singlebox">
        <Container className="user-info-container">
          <div className=" ri-arrow-go-back-line" onClick={close} />
          <div className="user-profileviewimage">
            {/* <img src={`${url}/${data.custid?.image?.filename}`} width="100px" height="100px" alt="User" /> */}
          </div>
          <Form >
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Job Name
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {postjobdata?.jobName}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Job Type
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {postjobdata?.jobType}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Job Details
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {postjobdata?.jobDetails}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Job Salary
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {postjobdata?.jobSalary}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Job Salary Type
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {postjobdata?.jobSalaryType}
              </Col>
            </Row>

            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
                Posted Date
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
              {new Date(postjobdata?.date).toLocaleDateString()}
              </Col>
            </Row>
            

            <Row className="user-profilebottm-button">
              <Col>
                <Button type="submit" className="user-profilebottm-end">
                  Save
                </Button>
                <Button
                  type="button"
                  className="user-profilebottm-end"
                  onClick={close}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
    </>
  )
}

export default EmpViewPostJob