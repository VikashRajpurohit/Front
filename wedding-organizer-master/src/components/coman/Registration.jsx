import React from 'react'

const Registration = () => {
  return (  
    <>
<div className="page-content">
  <div className="form-v10-content">
    <form className="form-detail" action="#" method="post" id="myform">
      <div className="form-left">
        <h2>General Infomation</h2>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input type="text" name="first_name" id="first_name" className="input-text" placeholder="First Name" required />
          </div>
          <div className="form-row form-row-2">
            <input type="text" name="last_name" id="last_name" className="input-text" placeholder="Last Name" required />
          </div>
        </div>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input type="email" name="email" id="email" className="input-text" placeholder="abc@gmail.com" required />
          </div>
          <div className="form-row form-row-2">
            <input type="date" name="dob" id="dob" className="input-text" placeholder="25/10/2000" required />
          </div>
        </div>
        <h2>Address</h2>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input type="text" name="Block-no" id="block-no" className="input-text" placeholder="a/21" required />
          </div>
          <div className="form-row form-row-2">
            <input type="text" name="stret" id="stret" className="input-text" placeholder="Line" required />
          </div>
        </div>
        <div className="form-row">
          <input type="number" name="Pincode" className="company" id="Pincode" placeholder="394230" required />
        </div>
        
        <div className="form-row">
          <select name="State">
            <option value="State">State</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Punjab">Punjab</option>
            <option value="UP">UP</option>
          </select>
          <span className="select-btn">
            <i className="zmdi zmdi-chevron-down" />
          </span>
        </div>

        <div className="form-row">
          <select name="City">
            <option value="City">City</option>
            <option value="Surat">Surat</option>
            <option value="Bardoli">Bardoli</option>
            <option value="Vapi">Vapi</option>
          </select>
          <span className="select-btn">
            <i className="zmdi zmdi-chevron-down" />
          </span>
        </div>

      </div>
      <div className="form-right">
        <h2>Contact Details</h2>
        <div className="form-row">
          <input type="phone" name="phone" className="phone" id="phone" placeholder="7874418758" required />
        </div>
        <div className="form-row">
          <input type="number" name="otp" className="otp" id="otp" placeholder="****-***" required />
        </div>
        <h2>Authorization</h2>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input type="email" name="username" className="username" id="username" placeholder="user@gmail.com" required />
          </div>
        </div>
        <div className="form-row">
          <input type="password" name="password" id="password" className="input-text" required  placeholder="*********" />
        </div>
        <div className="form-row">
          <input type="password" name="password" id="password" className="input-text" required  placeholder="*********" />
        </div>
        
        <div className="form-checkbox">
          <label className="container"><p>I do accept the <a href="#" className="text">Terms and Conditions</a> of your site.</p>
            <input type="checkbox" name="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        <div className="form-row-last">
          <input type="submit" name="register" className="register" defaultValue="Register Badge" />
        </div>
      </div>
    </form>
  </div>
</div>
</>
  )
}

export default Registration