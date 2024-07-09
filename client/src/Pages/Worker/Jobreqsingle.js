import React, { useEffect, useState } from "react";
import "./Jobreqsingle.css";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import axiosInstance from "../Constants/Baseurl";
import { toast } from "react-toastify";

function Jobreqsingle({ close, jobId,refreshJobList }) {
  const url = axiosInstance.defaults.url;
  const workerid = localStorage.getItem("workerid");
  const [data, setData] = useState({});
  const [worker, setWorker] = useState({
    workerid: workerid,
    workDate:""
  });

  const fetchEmployerRequests = () => {
    axiosInstance
      .post(`viewjobreqsbyid/${jobId}`)
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
  }, []);

  const changefn=((a)=>{
    setWorker({
        ...worker,[a.target.name]:a.target.value
    })
  })
  console.log(worker);
  const submitfn = (e) => {
    e.preventDefault();
    axiosInstance.post(`workeracceptjob/${jobId}`,worker)
    .then((res)=>{
        console.log(res);
        if(res.data.status==200){
            toast.success("Worke Approved Successfully")
            refreshJobList();
        }
    })
    .catch((err)=>{
        console.log(err);
        toast.warn("Something Went Wrong")
    })
  };
  return (
    <div className="jobreq-singlemain">
      <div className="jobreq-singlebox">
        <Container className="user-info-container">
          <div className=" ri-arrow-go-back-line" onClick={close} />
          <div className="user-profileviewimage">
            {/* <img src={`${url}/${data.custid?.image?.filename}`} width="100px" height="100px" alt="User" /> */}
          </div>
          <Form onSubmit={submitfn}>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
                Name
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.custid?.name}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
                Date
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {new Date(data?.date).toLocaleDateString()}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
                Email
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.custid?.email}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
                JobName
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.jobname}
              </Col>
            </Row>

            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
                Work Details
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.workdetails}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
                Phone
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.custid?.phone}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
                Address
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.custid?.housename},{data?.custid?.city},
                {data?.custid?.pincode}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
                Select work Date
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                <input type="date" 
                min={new Date().toISOString().split("T")[0]}
                name="workDate"
                value={worker.workDate}
                onChange={changefn}
                required
                />
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
  );
}

export default Jobreqsingle;
