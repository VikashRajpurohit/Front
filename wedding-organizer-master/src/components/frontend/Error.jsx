import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Error = () => {
  return (
    <>
    <div>
      <Navbar/>
  <div className="error_banner py-5">
    <div className="container py-sm-3">
      <div className="d-flex agileinfo-error  flex-column">
        <div className="error_grid">
          <h4>oop's! Error Occured</h4>
          <h5 className="d-flex">404
            <span className="d-flex align-items-center ml-3">Error</span>
          </h5>
          <p>the requested page was not found.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
</>
  )
}

export default Error