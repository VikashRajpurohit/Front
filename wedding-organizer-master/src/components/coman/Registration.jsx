import axios from "axios"
import React, { useState } from "react"


const Registration = () => {
  axios.defaults.withCredentials=true;
  
  const [ fname, setfname ] = useState("")
  const [ lname, setlname ] = useState("")
  const [ contact, setcontact ] = useState("")
  const [ d_o_b, setd_o_b ] = useState("")
  const [ address_street, setaddresss ] = useState("")
  const [ address_landmark, setaddressl ] = useState("")
  const [ address_pincode, setaddressp ] = useState("")
  const [ password, setpassword ] = useState("")
  const [ username, setusername ] = useState("")
  const [ otp, setotp ] = useState("")


	
  let err= "";  
	async function postName(e) {
		e.preventDefault()
		try {
			await axios.post("http://localhost:5000/api/users", {
				otp,fname,lname,contact,address_street,address_landmark,address_pincode,d_o_b,password,username} )
		} catch (error) {
      err=error;
			console.error(error)
      console.log(error.response.data);
		}
    if (err.match("")){
      console.log("PARTH");
    }
	}

  function callopt(){
  axios.defaults.withCredentials=true;
    const res = axios.post("http://localhost:5000/api/otp", {username});
    console.log(res);
  }

  return (  

    <>
<div className="page-content">
  <div className="form-v10-content">
    <form className="form-detail" action="#" onSubmit={postName} method="post" id="myform">
      <div className="form-left">
        <h2>General Infomation</h2>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input type="text" name="first_name" id="first_name" className="input-text" placeholder="First Name" 
                          value={fname} onChange={(e) => setfname(e.target.value)} required />
          </div>
          <div className="form-row form-row-2">
            <input type="text" name="last_name" id="last_name" className="input-text" placeholder="Last Name" 
              value={lname} onChange={(e) => setlname(e.target.value)} required />
          </div>
        </div>
        <div className="form-group">
          <div className="form-row form-row-1">
          <input type="date" name="dob" id="dob" className="input-text"  
               value={d_o_b} onChange={(e) => setd_o_b(e.target.value)} required />
          </div>
          <div className="form-row form-row-2">
          <input type="phone" name="phone" className="phone" id="phone" placeholder="Contact.no" 
                          value={contact} onChange={(e) => setcontact(e.target.value)} required />
        </div>
        
         </div>
        <h2>Address</h2>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input type="text" name="Block-no" id="block-no" className="input-text" placeholder="Block.no/Floor" 
                            value={address_street} onChange={(e) => setaddresss(e.target.value)} required />
                            
          </div>
          <div className="form-row form-row-2">
            <input type="text" name="stret" id="stret" className="input-text" placeholder="Street/Landmark" 
                            value={address_landmark} onChange={(e) => setaddressl(e.target.value)} required />
          </div>
        </div>
        <div className="form-row">
          <input type="number" name="Pincode" className="company" id="Pincode" placeholder="Pincode" 
                          value={address_pincode} onChange={(e) => setaddressp(e.target.value)} required />
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
        <h2>Authentication Details</h2>
        <div className="form-row form-row-1"  >
          <input type="email" name="username"  className="username" id="username" placeholder="Username" 
                          value={username} onChange={(e) => setusername(e.target.value)} required 
          />
          <div className="form-row-last" style={{padding:"unset",margin:"unset",marginLeft:"78%"}}>
          <input type="button" name="otp" onClick={callopt}className="register" defaultValue="send otp" style={{padding:"unset",margin:"6px 0 0 0 ", width:"100px"}} />
          </div>
          
          
          <input type="text" name="otp"  className="otp" id="otp" placeholder="OTP" 
                          value={otp} onChange={(e) => setotp(e.target.value)} required 
          />
          
        </div>
        <div className="form-row">
          <input type="password" name="password" id="password" className="input-text" required  placeholder="Password" />
        </div>
        <div className="form-row">
          <input type="password" name="password" id="password" className="input-text" placeholder="Conform Password" 
                          value={password} onChange={(e) => setpassword(e.target.value)} required />
          
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