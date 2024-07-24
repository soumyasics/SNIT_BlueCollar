import React,{useState} from 'react'
import './AcceptJobStatus.css'
import ViewEmpInterviewsList from './Interviews/ViewEmpInterviewsList';
import Workerviewjobstatus from './Jobs/Workerviewjobstatus';
import WorkerViewWorkStatus from './WorkStatus/WorkerViewWorkStatus';

function AcceptJobStatus() {
    const [view, setView] = useState('user');
  return (
    <>
        <div className="">
    
      <div className="">
        <div className='' style={{display:'flex',marginTop:'15px',marginLeft:'90px'}}>
        <button className='workeracceptjobstatus_empbtn ' onClick={() => setView('user')}>User Status</button>
        <button className='workeracceptjobstatus_empbtn mx-3' onClick={() => setView('employer')}>Interviews Status</button>
      </div>
        {/* <div style={{display:'flex',marginTop:'-30px',marginLeft:'860px'}}><input
                type='search'
                placeholder="Search "
                className='workernav_2_searchbar'
            />
            <button
            className='workernav_2_searchbtn'
            >
            <svg className='svg_viewjobs' width="20px" height="20px" viewBox="0 0 15 15" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z" stroke="#000000"/>
            </svg>            
            </button>
            </div> */}
            <div>
        {view === 'user' ? <Workerviewjobstatus /> : <ViewEmpInterviewsList/>}
      </div>
      </div>

    
    {/* <Modal show={show} onHide={handleClose} centered>
                    <Jobreqsingle close={handleClose} jobId={selectedJobId} refreshJobList={handleRefresh}/>
            </Modal> */}

  </div>
    </>
  )
}

export default AcceptJobStatus