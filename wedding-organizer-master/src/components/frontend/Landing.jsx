import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
<section className="banner layer" id="home" >
  <div className="container">
    <div className="banner-text">
      <div className="slider-info mb-4">
        <div className="banner-heading">
          <h3>
            Your wedding adventure starts here
          </h3>
        </div>
        <Link to="Contact"> Plan Your Wedding</Link>
      </div>
      {/* To bottom button*/}
      <div className="thim-click-to-bottom">
        <div className="rotate">
          <Link to="Landing" className="scroll">
            <span className="fa fa-angle-double-down" />
          </Link>
        </div>
      </div>
      {/* //To bottom button*/}
    </div>
  </div>
</section>
  )
}

export default Landing