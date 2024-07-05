import React from 'react'
import './Emp_Terms.css'
import emp_terms from '../../../../Assets/emp_terms.png'


function Emp_Terms() {
  return (
    <>
        <section className='mb-5'>
            <img className='empterms_img' src={emp_terms} />
        </section>
    </>
  )
}

export default Emp_Terms