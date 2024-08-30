import React from 'react'
import Adminlogin from '../Common/login/Adminlogin'
import AdminSidebar from './Dashboard/AdminSidebar'
import Workerreq from './Requests/Workerreq'
import Employerreq from './Requests/Employerreq'
import Admindashboard from './Dashboard/Admindashboard'
import Viewallcust from './Users/Viewallcust'
import Viewallemp from './Users/Viewallemp'
import Viewallworker from './Users/Viewallworker'
import ViewCustComplaintList from './Complaints/ViewCustComplaintList'
import ViewWorkComplaintList from './Complaints/ViewWorkComplaintList'
import WorkStatus from './Workstatus/WorkStatus'

function Adminmain({data}) {
  return (
    <div className='d-flex'>
    <AdminSidebar/>
    <div>
    {
        data==="admin-workerreq"?(<Workerreq/>):
        data==="admin-employerreq"?(<Employerreq/>):
        data==="admin-dashboard"?(<Admindashboard/>):
        data==="admin-viewallcust"?(<Viewallcust/>):
        data==="admin-viewallemp"?(<Viewallemp/>):
        data==="admin-viewallworker"?(<Viewallworker/>):
        data==="admin-viewall-custcomplaints"?(<ViewCustComplaintList/>):
        data==="admin-viewall-workercomplaints"?(<ViewWorkComplaintList/>):
        data==="admin-viewworkstatus"?(<WorkStatus/>):

        

        <Adminlogin/>
    }

    </div>

</div>

  )
}

export default Adminmain