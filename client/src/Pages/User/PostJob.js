import React, { useEffect, useState } from 'react'
import "./Postjob.css"
import axiosInstance from '../Constants/Baseurl';
import { toast } from 'react-toastify';

function PostJob({close}) {
    const custid = localStorage.getItem("custid");
    const [cust, setCust] = useState({});
    const[data,setData]=useState({
        custid:custid,
        jobname:'',
        workdetails:'',
        
    })

    useEffect(() => {
        if (custid) {
          axiosInstance .post(`viewcustbyid/${custid}`)
            .then((res) => {
              console.log(res);
              setCust(res.data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }, [custid]);
  
      const changefn=((e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
      })
      console.log(data);

      const submitfn=((a)=>{
        a.preventDefault()
        axiosInstance.post(`registerjobreq`,data)
        .then((res)=>{
            console.log(res);
            if(res.data.status==200){
                toast.success("Request Submitted")
                close()
            }
            else{
                toast.warn("Something Went Wrong")
            }
        })
        .catch((err)=>{
            console.log(err);
        })
      })

  return (
    <div className='container'>
        <div className='postjob-maincontainer'>
            <div className='postjob-maincontainermainbox'>
                <div className='postjob-maincontainermainboxtop'>
                    Post Job
                </div>
                <div className='container'>
                <div className='row postjob-maininputs'>
                    <form onSubmit={submitfn}>
                    <div className='col-12 '>
                        <p>Job Name</p>
                    </div>
                    <div className='col-12 postjob-maininputsi'>
                        <input type='text' placeholder='Enter Job Name' name='jobname' value={data.jobname} onChange={changefn} required/>
                    </div>
                    <div className='col-12'>
                        <p>Work Detais</p>
                    </div>
                    <div className='col-12 postjob-maininputsi'>
                        <textarea type='text' placeholder='Enter Work Details' name='workdetails' value={data.workdetails} onChange={changefn} required/>
                    </div>
                    <div className='postjob-maininputsbutton'>

                        <button type='submit' >Post</button>
                    </div>
                    </form>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default PostJob