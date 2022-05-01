import React from 'react'
import Resume from '../../assets/resume_ratchaneegorn_web.pdf'
import CV from '../../assets/Web_dev_resume.jpg'

const Download = () => {
  return (
    <div className='downloadContainer'>
        <a href={Resume} download className='btn'>Download</a>
        <a href="#contact" className='btn-primary'>Contact me</a>
        
    </div>
  )
}

export default Download;
