import axios from "axios"
import React, { useState } from "react"
import swal from "sweetalert";
import Swalfire from "sweetalert2";
const Registration = () => {

  
  axios.defaults.withCredentials=true;
  const  role = "O";
  const [ fname, setfname ] = useState("")
  const [ lname, setlname ] = useState("")
  const [ contact, setcontact ] = useState("")
  const [ d_o_b, setd_o_b ] = useState("")
  const [ address_street, setaddresss ] = useState("")
  const [ address_landmark, setaddressl ] = useState("")
  const [ address_pincode, setaddressp ] = useState("")
  const [ address_city, setaddressc ] = useState("")
  const [ address_state, setaddresst ] = useState("")
  const [ password, setpassword ] = useState("")
  const [ cpassword, setcpassword ] = useState("")
  const [ username, setusername ] = useState("")
  const [ otp, setotp ] = useState("")

	
  let err= "";  
	async function postName(e) {
    axios.defaults.withCredentials=true;
		e.preventDefault()
		try {
      if(password.match(cpassword)||cpassword.match(password)){
        
        const res2 = await axios.post("http://localhost:5000/api/users", {
				role,otp,fname,lname,contact,address_street,address_landmark,address_pincode,address_city,address_state,d_o_b,password,username} )
       
        if(res2.status === 210);{
          window.location.href = "/login";
        }
      
    
      }else{
        Swalfire.fire({
          title: "Somthing Wrong!",
          icon: "error",
          html: "Password do not match.",
        });
              }
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

    var x = document.getElementById("otpfeild");
    var z = document.getElementById("sotpbutton");
    var a = document.getElementById("resendotp");
    // eslint-disable-next-line
    if (x.style.display === "none") {
      x.style.display = "block";
    }else{
      x.style.display = "none";
    } 

    if (z.style.display === "none") {
      z.style.display = "block";
    }else{
      z.style.display = "none";
    } 
    if (a.style.display === "none") {
      a.style.display = "block";
    }else{
      a.style.display = "none";
    } 
  
    console.log(res);
  }

  function callopt2(){

    axios.defaults.withCredentials=true;
    
    axios.post("http://localhost:5000/api/otp", {username});
  }

  
 
  	async function getadata(e) {
      e.preventDefault()
      try {  
   
    const res = await axios.post("http://localhost:5000/api/users/pincode", {address_pincode});
    
    var x = document.getElementById("state");
    var z = document.getElementById("city");
   
    x.value=res.data.state
    z.value=res.data.city
        setaddresst(res.data.state);
        setaddressc(res.data.city)
    
   
    console.log("abc");
    console.log();
      }catch(err){
        
      }
   
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
          <input type="date" name="dob" id="dob" className="input-text" max={2005}
               value={d_o_b} onChange={(e) => setd_o_b(e.target.value)} required />
          </div>
          <div className="form-row form-row-2">
          <input type="phone" name="phone" className="phone" id="phone" pattern="^[6789][0-9]{9}$" placeholder="Contact.no" 
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
        
                          <div className="form-group">
          <div className="form-row form-row-1">
          <input type="text"  name="State" id="state" onClick={getadata}/>
         
          </div>

          <div className="form-row form-row-2">
          <input type="text"  name="city" id="city" onClick={getadata}/>
         
        </div>
      </div>
       

      </div>
      <div className="form-right">
        <h2>Authentication Details</h2>
        <div className="form-row form-row-1"  >
          <input type="email" name="username"  className="username" id="username" pattern="^[a-z\.0-9]{6,30}@.+\..+$" placeholder="Username" 
                          value={username} onChange={(e) => setusername(e.target.value)} required 
          />
          <div className="form-row-last" style={{padding:"unset",margin:"unset",marginLeft:"78%"}}>
          
          <input type="button" name="otp" onClick={callopt}className="register"
          id="sotpbutton" defaultValue="send otp" style={{padding:"unset",margin:"6px 0 0 0 ", width:"100px"}} />
          </div>
          
          <input type="text" name="otp"  className="otp" style={{ display: "none" }} id="otpfeild" placeholder="OTP" 
                          value={otp} onChange={(e) => setotp(e.target.value)} required 
          />
          
          <div className="form-row-last" style={{padding:"unset",margin:"unset",marginLeft:"78%"}}>
            <input type="button" name="otp" onClick={callopt2} className="register"
            id="resendotp" defaultValue="Resend otp" style={{display: "none",padding:"unset",margin:"6px 0 0 0 ", width:"100px"}} />
          </div>
          
          
        </div>
        <div className="form-row">
          <input type="password" name="password" id="password" className="input-text"
          value={cpassword} onChange={(e) => setcpassword(e.target.value)} required  placeholder="Password" />
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
          <input type="submit" name="register" style={{width:"250px",margin:"15px 0px 50px 90px"}} className="register" defaultValue="Register Badge" />
        </div>
      </div>
    </form>
  </div>
</div>
</>
  )
}

export default Registration