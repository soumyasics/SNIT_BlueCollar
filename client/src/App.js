import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './Pages/Common/Home/Home';

import User_Register from './Pages/User/register/User_Register';
import User_Login from './Pages/User/login/User_Login';

function App() {
  return (
    <div className="container-fluid mx-0 p-0">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/user-login' element={<User_Login />} />
        <Route path='/user-register' element={<User_Register />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
