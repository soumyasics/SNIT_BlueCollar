import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Admindashboard.css";
import icon from "../../../Assets/overview.png";
import applic from "../../../Assets/application.png";
import jobs from "../../../Assets/jobs.png";
import growth from "../../../Assets/growth.png";
import info from "../../../Assets/info.png";
import usr1 from "../../../Assets/uer1.png";
import usr2 from "../../../Assets/uer2.png";
import usr3 from "../../../Assets/uer3.png";

import axiosInstance from '../../Constants/Baseurl';

function Admindashboard() {
  const [cust, setCust] = useState([]);
  const [worker, setWorker] = useState([]);
  const [employer, setEmployer] = useState([]);
  const [emppendingreq, setEmppendingreq] = useState([]);
  const [workerpendingreq, setWorkerpendingreq] = useState([]);

  useEffect(() => {
    axiosInstance.post(`viewallcust`)
      .then((result) => {
        console.log(result);
        setCust(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance.post(`viewallworker`)
      .then((result) => {
        console.log(result);
        setWorker(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance.post(`viewallemployer`)
      .then((result) => {
        console.log(result);
        setEmployer(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance.post(`viewemployerpendingreq`)
      .then((result) => {
        console.log(result);
        setEmppendingreq(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance.post(`viewworkerpendingreq`)
      .then((result) => {
        console.log(result);
        setWorkerpendingreq(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userCount = cust.length;
  const jobSeekerCount = worker.length;
  const employerCount = employer.length;

  //  percentages for illustration
  const userPercentage = (userCount / 2000) * 100; // Adjust the denominator to reflect total possible users
  const jobSeekerPercentage = (jobSeekerCount / 2000) * 100; // Adjust the denominator to reflect total possible job seekers
  const employerPercentage = (employerCount / 10000) * 100; // Adjust the denominator to reflect total possible employers

  const data = [
    { name: 'Mon', Employers: emppendingreq.length, Workers: workerpendingreq.length },
   
  ];

  return (
    <div className='col-9 '>
      <div className='container'>
        <div className='admindash-main'>
          <img src={icon} alt="Overview Icon" /> Admin OverView
        </div>
        <div className='d-flex'>
          <div className='col-4 admin-dash-usercount'>
            <CircularProgressbar
              value={userPercentage}
              text={`${userCount}Users`}
              className='ariel-class1'
            />
          </div>
          <div className='col-4 admin-dash-usercount'>
            <CircularProgressbar
              value={jobSeekerPercentage}
              text={`${jobSeekerCount} Worker`}
              className='ariel-class1'
            />
          </div>
          <div className='col-4 admin-dash-usercount'>
            <CircularProgressbar
              value={employerPercentage}
              text={`${employerCount} Hired`}
              className='ariel-class1'
            />
          </div>
        </div>
        <div className='row ' style={{width:"900px"}}>
          <div className='col-3 admin-dash-functionbox'>
            <div className='admin-dash-functioncount1 d-flex'>
              <div className='col-3 admin-dash-function1image'>
                <img src={applic} alt="Application" />
              </div>
              <div className='col-6 admin-dash-function1content'>
                <p>68 Application</p>
              </div>
            </div>
          </div>
          <div className='col-3 admin-dash-functionbox'>
            <div className='admin-dash-functioncount2 d-flex'>
              <div className='col-3 admin-dash-function1image'>
                <img src={jobs} alt="Jobs" />
              </div>
              <div className='col-6 admin-dash-function1content'>
                <p>68 <br/>New Jobs</p>
              </div>
            </div>
          </div>
          <div className='col-3 admin-dash-functionbox4'>
            <div className='admin-dash-functioncount3 d-flex'>
              <div className='col-3 admin-dash-function1image'>
                <img src={growth} alt="Growth" />
              </div>
              <div className='col-6 admin-dash-function1content'>
                <p>68 <br/>Growth</p>
              </div>
            </div>
          </div>
          <div className='col-3 admin-dash-functionbox'>
            <div className='admin-dash-functioncount4 d-flex'>
              <div className='col-3 admin-dash-function1image'>
                <img src={info} alt="Info" />
              </div>
              <div className='col-6 admin-dash-function1content'>
                <p>68 <br/>Recruitments</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row admindash-seconfboxuserrow'>
          <div className='col-4 '>
            <div className='admindash-seconfboxuser'>
              <img src={usr1} alt='Customer' />
              Customer
            </div>
          </div>
          <div className='col-4 '>
            <div className='admindash-seconfboxuser'>
              <img src={usr2} alt='Employer' />
              Employer
            </div>
          </div>
          <div className='col-4 '>
            <div className='admindash-seconfboxuser'>
              <img src={usr3} alt='Worker' />
              Worker
            </div>
          </div>
        </div>
        <div className='row'>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Employers" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Workers" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Admindashboard;
