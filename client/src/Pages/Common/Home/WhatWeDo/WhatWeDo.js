import React from 'react'
import './WhatWeDo.css'
import whatwedo from '../../../../Assets/whatwedo.png'


function WhatWeDo() {
  return (
    <>
        <section className='container  mb-5'>
            <div className='whatwedo_sec'>
        <div className="text-center  pt-5">
          <h4 className="  mt-3  whatwedo_mainheading">What We Do</h4>
        </div>
        <div className='row  p-4'>
            <div className='col '>
                <img src={whatwedo} className='whatwedo_coverimg'/>
            </div>
            <div className='col mt-5 pe-5'>
                <p className='whatwedo_txt'>
                    We are specialists in bridging the gaps between blue collar job vacancies and seekers. We nurture a vast database of competent blue collar job seekers bestowing the best info to credible recruiters. Our application will assist candidates in searching for the best paying blue collar jobs. It will also assist employers in hiring the best workforce for a multitude of sectors.
                </p>
            </div>
        </div>
        </div>
        </section>


    </>
  )
}

export default WhatWeDo