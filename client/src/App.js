import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './Pages/Common/Home/Home';
import 'remixicon/fonts/remixicon.css'
import Login from './Pages/Common/login/Login';
import ForgotPassword from './Pages/Common/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/Common/ResetPassword/ResetPassword';
import User_Register from './Pages/User/Register/User_Register';
import Workerregistration from "./Pages/Worker/Register/Workerregistration"
import EmployerRegistration from './Pages/Employer/EmployerRegistration/EmployerRegistration';
import Empdashresenthire from './Pages/Employer/EmployerRegistration/EmpDashboard/Empdashresenthire';
import Hero from './Pages/Common/Hero/Hero';
import Employernav from './Pages/Common/Navbar/Employernav/Employernav';
import Footer from './Pages/Common/Footer/Footer';
import Adminlogin from './Pages/Common/login/Adminlogin';
import AdminSidebar from './Pages/Admin/Dashboard/AdminSidebar';
import Adminmain from './Pages/Admin/Adminmain';
import Adminloginnav from './Pages/Common/Navbar/AdminNav/Adminloginnav';
import Customerhome from './Pages/Common/Home/Customerhome/Customerhome';
import BestCandidate from './Pages/Common/Home/BestCandidate';
import CustomerHomenav from './Pages/Common/Navbar/Customer/CustomerHomenav';
import PostJob from './Pages/User/PostJob';
import WorkerNav from './Pages/Common/Navbar/Worker/WorkerNav';
import Jobreq from './Pages/Worker/Jobreq';
import UserViewprofile from './Pages/User/UserProfile/UserViewprofile';
import Workerviewprofile from './Pages/Worker/Profile/Workerviewprofile';
import Empviewprofile from './Pages/Employer/Profile/Empviewprofile';
import Jobreqsingle from './Pages/Worker/Jobreqsingle';
import Viewjobstatus from './Pages/User/Jobs/Viewjobstatus';

function App() {
  return (
    <div className="container-fluid mx-0 p-0">
    
    <BrowserRouter basename='/blue_collar'>
      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/reset-password/:id' element={<ResetPassword/>} />

        {/* User Routes */}
        <Route path='/user-register' element={<User_Register />} />
        <Route path='/customer-home' element={[<CustomerHomenav/>,<Customerhome/>,<BestCandidate/>,<Footer/>]}/>
        <Route path='/user-viewjobstatus' element={[<CustomerHomenav/>,<Viewjobstatus />,<Footer/>]} />


        {/* Employer */}
        <Route path='/employer-register' element={<EmployerRegistration />}/>
        <Route path='/employer-home' element={[<Employernav/>,<Hero/>,<Empdashresenthire/>,<Footer/>]}/>
        <Route path='/employer-nav' element={<Employernav />}/>


        {/* Worker */}
        <Route path='/worker-register' element={<Workerregistration/>}/>
        <Route path='/worker-home' element={[<WorkerNav/>,<Customerhome/>,<BestCandidate/>,<Footer/>]}/>
        <Route path='/worker-jobreq' element={[<WorkerNav/>,<Jobreq/>]}/>


        {/* Admin */}
        <Route path='/admin-login' element={<Adminlogin />} />
        <Route path='/admin-dashboard' element={[<Adminloginnav/>,<Adminmain data="admin-dashboard"/>]}/>
        <Route path='/admin-workerreq' element={[<Adminloginnav/>,<Adminmain data="admin-workerreq"/>]}/>
        <Route path='/admin-employerreq' element={[<Adminloginnav/>,<Adminmain data="admin-employerreq"/>]}/>
        <Route path='/admin-viewallcust' element={[<Adminloginnav/>,<Adminmain data="admin-viewallcust"/>]}/>
        <Route path='/admin-viewallemp' element={[<Adminloginnav/>,<Adminmain data="admin-viewallemp"/>]}/>
        <Route path='/admin-viewallworker' element={[<Adminloginnav/>,<Adminmain data="admin-viewallworker"/>]}/>

      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
