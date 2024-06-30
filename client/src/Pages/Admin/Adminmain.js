import React from 'react'
import Adminlogin from '../Common/login/Adminlogin'
import AdminSidebar from './Dashboard/AdminSidebar'
import Workerreq from './Requests/Workerreq'
import Employerreq from './Requests/Employerreq'

function Adminmain({data}) {
  return (
    <div className='d-flex'>
    <AdminSidebar/>
    <div>
    {
        data==="admin-workerreq"?(<Workerreq/>):
        data==="admin-employerreq"?(<Employerreq/>):
        // data==="admin-hprequest"?(<Hprequest/>):
       
        <Adminlogin/>
    }

    </div>

</div>

  )
}

export default Adminmain