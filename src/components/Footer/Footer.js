import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <> 
    <div className='container fluid'>
      
    <div className="line2"></div>
      <div className='row d-flex justify-content-between mt-2'>
        
        <div className='col-md-6 ms-2'>
       <p className='copy_text'> © 2023 Surge. All rights reserved.</p>
        </div>
        <div className='col-md-1'>
            <div className='d-flex justify-content-between'>
<div className='circle'><i class="fa-brands fa-discord"></i></div>
<div  className='circle'><i class="fa-brands fa-twitter"></i></div>
<div  className='circle'><i class="fa-brands fa-instagram"></i></div>
            </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default Footer
