import axios from "axios"

const axiosInstance = axios.create({

    //server api
    // baseURL: 'http://hybrid.srishticampus.in:4026/blue_collar_api/', 

    // baseURL: '', 
  
  //local apis
  
    baseURL: 'http://localhost:4026/blue_collar_api', 
  
    headers: {
      'Content-Type': 'application/json',
    },

     url :"http://localhost:4026",
    //  url:  "http://hybrid.srishticampus.in:4026/"
    


  });
   
  export default axiosInstance