import React,{useState} from 'react'
import { FaEdit } from "react-icons/fa";
import Navbar from '../../Common/Navbar/Navbar';
import WorkerNav2 from '../../Common/Navbar/Worker/WorkerNav2';
import './WorkerWorkStatus.css'
import axiosInstance from '../../Constants/Baseurl';

function WorkerEditWorkStatus() {
    const workerid = localStorage.getItem("workerid");

    const [image, setImage] = useState(null);
    const [errorcover, setErrorCover] = useState(null);
    const [isChecked, setIsChecked] = useState('incomplete');

    
    console.log(isChecked,'ischeck');

    const [workstatusdata,setWorkStatusData]=useState({
        jobname:"",
        workdetails:"",
        workstatus:"incompleted",
        profile:""
    })

    const [errors, setErrors] = useState({
        jobname:"",
        workdetails:"",
        workstatus:"",
        profile:""
    });

    const handleCheckboxChange = (event) => {
        const workstatus=event.target.checked ? 'completed' : 'incomplete';
        setIsChecked(workstatus)
        setWorkStatusData(prevState => ({
            ...prevState,
            workstatus: workstatus
        }));
        
    };

const handleChange = (event) => {
const { name, value } = event.target;
setWorkStatusData((prevData) => ({
  ...prevData,
  [name]: value,
}));
setErrors((prevErrors) => ({
  ...prevErrors,
  [name]: "",
}));
};

console.log(workstatusdata,'workstatusdata');

    const handleFileCoverChange = (profile) => {
        if (!profile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
          const error = "Only upload JPG JPEG PNG GIF file type ";
          setErrorCover(error);
          return;
        }
        setImage(URL.createObjectURL(profile));
        setErrorCover(null);
        setWorkStatusData({ ...workstatusdata, profile });
      };
      console.log(workstatusdata.profile,'pic');

      const validateForm = () => {
        const newErrors = {};

        if (!workstatusdata.jobname) newErrors.jobname = "Job name is required";
        if (!workstatusdata.workdetails) newErrors.workdetails = "Worker details is required";
        if (!workstatusdata.workstatus) newErrors.workstatus = "Work Status is required";


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const updatedData = new FormData();
        updatedData.append('jobname', workstatusdata.jobname);
        updatedData.append('workdetails', workstatusdata.workdetails);
        updatedData.append('workstatus', workstatusdata.workstatus);
        

        axiosInstance.post(`.../${workerid}`, updatedData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((result) => {
                console.log(result);
                if (result.data.status === 200) {
                    setWorkStatusData(result.data.data);
                    window.location.reload()
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
  return (
    <>
        <Navbar/>
        <WorkerNav2/>
        <div class="editworkstatus-modal-container">
	<article class="">
		<header class="editworkstatus-modal-container-header">
			<span class="editworkstatus-modal-container-title">
				Update Work Status
			</span>
			
		</header>
		<section class="editworkstatus-modal-container-body ">
        <form onClick={(e)=>{handleSubmit(e);}}>
          <div>
          <div className='col editworkstatus-profileedit'>
                <div className='editworkstatus-profileeditbtn'>
                <FaEdit
                        className="editworkstatus-img-icon"
                        onClick={() =>
                          document.getElementById("picture").click()
                        }
                      />
                        <input
                        type="file"
                        style={{ display: "none" }}
                        name="picture"
                        onChange={(event) => {
                          handleFileCoverChange(event.target.files[0]);
                        }}
                        id="picture"
                      />
                        
                    </div>
                <div className='editworkstatus-profileimage-div'>
                        <img className='editworkstatus-profileimage' src={image}  />
                    </div>
                    
                </div>
            <div className='row'>
                <div className='col'>
                    <div className='mt-3'>
                        <label className='editworkstatus-label'>Job Name</label>
                    </div>
                    <div className='mt-2'>
                    <input 
                        name='jobname'
                        type='text'
                        
                        className='editworkstatus-inputtext'
                        onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='mt-3'>
                        <label className='editworkstatus-label'>Work Details</label>
                    </div>
                    <div className='mt-2'>
                    <textarea 
                        type='text'
                        name='workdetails'
                        
                        className='editworkstatus-workdetails'
                        onChange={handleChange}
                        />
                    </div>
                </div>
            </div >
            <label className='editworkstatus-label'>Work Status</label>
            <div className='editworkstatus-chechk-div'> 
            <div class="editworkstatus-checkbox-apple">
                
            <input class="editworkstatus-yep" id="check-apple" 
            checked={isChecked === 'completed'}
            onChange={handleCheckboxChange}
            type="checkbox"
            />
            <label className='px-4'  for="check-apple">Completed</label>
            </div>
            </div>  
          </div>
          <div className='editworkstatus-update-btn-div'>
          <button class="editworkstatus-button is-primary" style={{background:'#3D9AE0'}}>Update</button>
          </div>
        </form>
		</section>
		
	</article>
        </div>
    </>
  )
}

export default WorkerEditWorkStatus