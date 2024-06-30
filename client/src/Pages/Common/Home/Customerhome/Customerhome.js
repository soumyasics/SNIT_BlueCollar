import React from "react";
import "./Customerhome.css";
import img from "../../../../Assets/profilecircle.png";
import img2 from "../../../../Assets/circleimage.jpg";
import img3 from "../../../../Assets/circleimg2.png";
import img4 from "../../../../Assets/circleimg4.png";

function Customerhome() {
  return (
    <>
    <div className="container" style={{marginTop:"30px"}}>
      <div className="row customerhome-main">
        <div className="col-12 d-flex">
          <div className="col-6 pb-3">
            <div className="d-flex">
              <div className="customerhome-boxfirst">
                <div className="customerhome-boxfirstrow ">
                  <div className="col-3 customerhome-boxfirstrowimg1">
                    <img src={img} alt="image" />
                  </div>
                  <div className="col-3 customerhome-boxfirstrowimg2">
                    <img src={img2} alt="image" />
                  </div>
                  <div className="col-3 customerhome-boxfirstrowimg3">
                    <img src={img3} alt="image" />
                  </div>
                </div>
              </div>
              <div>
                <div className="customerimdside-box1">
                  <span>3069</span>
                  <br />
                  Jobs posted
                </div>
                <div className="customerimdside-box2">
                  <span>969</span>
                  <br />
                  Job Fulfiled
                </div>
                <div className="customerimdside-box3">
                  <span>1008</span>
                  <br />
                  Job Seelers
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 pb-3 custhome-secondcolmain">
            <p>
              The most promising <br/>application for{" "}
              <span> Blue collar job<br/> Seeker</span> to find Blue Collar jobs
            </p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Customerhome;
