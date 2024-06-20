import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './Pages/Common/Home/Home';

import Login from './Pages/Common/login/Login';
import ForgotPassword from './Pages/Common/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/Common/ResetPassword/ResetPassword';
import User_Register from './Pages/User/Register/User_Register';
import Workerregistration from "./Pages/Worker/Register/Workerregistration"

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


        {/* Worker */}
        <Route path='/worker-register' element={<Workerregistration/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
