import React from 'react'

const Footer = () => {
  return (
  <footer>
    <div className="container py-5">
      <div className="row footer-gap">
        <div className="col-lg-4 col-sm-6">
          <h3 className="text-capitalize mb-3">Address</h3>
          <address className="mb-0">
            <p className><span className="fa fa-map-marker" /> 2466H 5th floor jalaram , <br /> Adajan, Surat City..</p>
            <p><span className="fa fa-clock-o" /> Timings : 10 a.m to 6 p.m</p>
            <p><span className="fa fa-phone" /> +91 7874418758</p>
            <p><span className="fa fa-envelope-open" /> <a href="mailto:weddingorganizer@gmail.com">weddingorganizer@gmail.com</a></p>
          </address>
        </div>
 
        <div className="col-lg-3 offset-lg-1 col-sm-6 mt-lg-0 mt-sm-5 mt-4">
          <h3 className="text-capitalize mb-3"> Follow us</h3>
          <p className="mb-4">Follow us on social media</p>
          <ul className="social mt-lg-0 mt-3">
            <li className="mr-1"><a href="#"><span className="fa fa-facebook" /></a></li>
            <li className="mr-1"><a href="#"><span className="fa fa-twitter" /></a></li>
            <li className="mr-1"><a href="#"><span className="fa fa-google-plus" /></a></li>
            <li className><a href="#"><span className="fa fa-linkedin" /></a></li>
            <li className="mr-1"><a href="#"><span className="fa fa-rss" /></a></li>
          </ul>
        </div>
      </div>
    </div>
    
  </footer>
  )
}

export default Footer