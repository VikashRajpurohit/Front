import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Navbar_2 = () => {
  const the_button = document.querySelector(".js-btn")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close")

document.addEventListener("DOMContentLoaded",() => {
  the_button.addEventListener("click", handleClick)
})

function handleClick(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
}

  return (
    <>
    
    <div class="gradient-text" style={{backgroundImage: "linear-gradient(45deg, #CA4246 16.666%,  #E16541 16.666%,  #E16541 33.333%, #F18F43 33.333%, #F18F43 50%, #8B9862 50%, #8B9862 66.666%, #476098 66.666%, #476098 83.333%, #A7489B 83.333%)"}} >
     
  <div className="container">
    <section className="row top_header pt-3">
      <div className="col-lg-6 buttons ml-auto">
        <p><span className="fa fa-phone" /> +91 7874418758</p>
        <Link className="btn btn-info btn-lg-block w3ls-btn px-sm-4 px-3 text-capitalize mr-sm-2" to="/logout">Logout</Link>
        </div>
    </section>
    <nav className="py-3">
      <div id="logo">
        <h1>
          <Link className="navbar-brand" to="/"> <span className="fa fa-empire" />Wedding <span><span className="line" />Organizer</span>
          </Link>
        </h1>
      </div>
      <label htmlFor="drop" className="toggle"><span className="fa fa-bars" /></label>
      <input type="checkbox" id="drop" />
      <ul className="menu mt-2">
        <li className="mr-lg-3 mr-2 active"><Link to="/">Home</Link></li>
        <li className="mr-lg-3 mr-2"><Link to="/about">About Us</Link></li>
        <li className="mr-lg-3 mr-2"><Link to="/Services">Services</Link></li>
        <li className="mr-lg-3 mr-2"><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
      </ul>
    </nav>
  </div>
</div>

<div class="modal">
   <div class="modal_content">
     <span class="close">&times;</span>
     <p>I'm A Pop Up!!!</p>
   </div>
</div>
</>
  )
}

export default Navbar_2