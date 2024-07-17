import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Constants/Baseurl';
import { toast } from 'react-toastify';
import './Reviews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import profileimg from '../../../Assets/add-reviewprofile.png'


function AddReviews({close}) {
    const custid = localStorage.getItem("custid");

    
    const[reviewdata,setReviewData]=useState({
        custid:custid,
        jobname:'',
        workdetails:'',
        rating:'',
        profile:''
        
    })
    console.log(reviewdata,'reviewdata');



    // useEffect(() => {
    //     if (custid) {
    //       axiosInstance .post(`viewcustbyid/${custid}`)
    //         .then((res) => {
    //           console.log(res);
    //           setCust(res.data.data);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     }
    //   }, [custid]);
  
      const changefn=((e)=>{
        setReviewData({
            ...reviewdata,[e.target.name]:e.target.value
        })
      })
      console.log(reviewdata);

      const submitfn=((a)=>{
        a.preventDefault()
        axiosInstance.post(`registerjobreq`,reviewdata)
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

    //   profile image 


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setReviewData((prevState) => ({
              ...prevState,
              profile: reader.result,
            }));
          };
          reader.readAsDataURL(file);
        }
      };

      // ratings

      const [rating, setRating] = useState(0);
      const [hover, setHover] = useState(0);

      const handleClick = (index) => {
        setReviewData((prevState) => ({
            ...prevState,
            rating: index,
          }));
        setRating(index);
      };

  return (
    <>
        <div className='container'>
        <div className=''>
            <div className='addreview-maincontainermainbox'>
                <div className='addreview-maincontainermainboxtop'>
                    Add Review
                </div>
                <div className='container'>
                <div className='row addreview-maininputs'>
                    <form onSubmit={submitfn}>
                    <div className='addreview-starrate mb-3'>
                        <div className="star-rating">
                            {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <button
                                type="button"
                                key={index}
                                className={index <= (hover || rating) ? 'on' : 'off'}
                                onClick={() => handleClick(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                >
                                <span className="star">&#9733;</span>
                                </button>
                            );
                            })}
                        </div>
                        {/* <p>Your rating: {rating}</p> */}
                    
                    <div>
                    <div className="profile-pic-container">
                        <div className="profile-pic-wrapper">
                            <img
                            src={reviewdata.profile || profileimg}
                            alt="Profile"
                            className="profile-pic"
                            />
                            <label htmlFor="profile-pic-upload" className="profile-pic-edit">
                            <FontAwesomeIcon icon={faEdit} />
                            </label>
                            <input
                            id="profile-pic-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className='col-12 '>
                        <p>Worker Name</p>
                    </div>
                    <div className='col-12 postjob-maininputsi'>
                        <input type='text' placeholder='Enter Job Name' name='jobname'  onChange={changefn} required/>
                    </div>
                    <div className='col-12 mt-3'>
                        <p>Review</p>
                    </div>
                    <div className='col-12 addreview-maininputsi'>
                        <textarea type='text' placeholder='Enter Work Details' name='workdetails'  onChange={changefn} required/>
                    </div>
                    <div className='addreview-maininputsbutton'>

                        <button type='submit' >Add</button>
                    </div>
                    </form>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default AddReviews