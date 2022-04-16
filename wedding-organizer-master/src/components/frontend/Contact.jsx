import React from 'react'

const Contact = () => {
  return (
      <>
<div>
  <section className="contact py-5">
    <div className="container py-sm-3">
      <h3 className="heading text-capitalize mb-lg-5 mb-4"> Contact Us </h3>
      <div className="address row">
        <div className="col-md-4 address-grid">
          <div className="address-info">
            <div className="address-left text-center">
              <span className="fa fa-map-marker" />
            </div>
            <div className="address-right text-center">
              <h6 className="ad-info text-uppercase mb-2">Address</h6>
              <p> 2466H 5th floor jalaram , Adajan, Surat City.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 address-grid">
          <div className="address-info">
            <div className="address-left text-center">
              <span className="fa fa-envelope" />
            </div>
            <div className="address-right text-center">
              <h6 className="ad-info text-uppercase mb-2">Email</h6>
              <a href="mailto:information@example.com"> weddingorganizer@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 address-grid">
          <div className="address-info">
            <div className="address-left text-center">
              <span className="fa fa-phone" />
            </div>
            <div className="address-right text-center">
              <h6 className="ad-info text-uppercase mb-2">Phone</h6>
              <p>+91  7874418758</p>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-6 mt-lg-0 mt-5">
          <div className="bg-img">
            <div className="contact-layer">
              <h3 className="mb-3">Dont hesitate to contact us for any kind of information</h3>
              <p><i className="fas mr-2 fa-mobile-alt" /> +91 7874418758</p>
            </div>
          </div>
        </div>
      </div>
  </section>
</div>
</>
  )
}

export default Contact