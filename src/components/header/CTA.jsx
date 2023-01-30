import React from 'react'
import resume from '../../assets/Gautam_Sapre_Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={resume} className='btn' target='_blank' >Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CTA