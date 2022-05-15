import axios from "axios"
import React, { useState } from "react"
import swal from "sweetalert";
import Swalfire from "sweetalert2";
const Registration = () => {

  
  axios.defaults.withCredentials=true;
  
  const [ name, setfname ] = useState("")
  const [ contact, setcontact ] = useState("")
  const [ email, setusername ] = useState("")
  const [ product, setprod ] = useState("")
  const [ message, setmessage ] = useState("")


	
  let err= "";  
	async function postName(e) {
    axios.defaults.withCredentials=true;
		e.preventDefault()
		try {
        const res2 = await axios.post("http://localhost:5000/api/sendmail", {
			  name,contact,email,product,message} )
       
        if(res2.status === 210);{
          Swalfire.fire({
            title: "Enquiry Sent",
            icon: "sucess",
            }); }
        } catch (error) {
      err=error;
			console.error(error)
      console.log(error.response.data);
		}
    if (err.match("")){
      console.log("PARTH");
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
                          value={name} onChange={(e) => setfname(e.target.value)} required />
          </div>
        
        </div>
        <div className="form-group">
         
          <div className="form-row form-row-1">
          <input type="phone" name="phone" className="phone" id="phone" pattern="^[6789][0-9]{9}$" placeholder="Contact.no" 
                          value={contact} onChange={(e) => setcontact(e.target.value)} required />
        </div>
        </div>
        <div className="form-group">
       
        <div className="form-row form-row-1"  >
          <input type="email" name="username"  className="username" id="username" pattern="^[a-z\.0-9]{6,30}@.+\..+$" placeholder="Username" 
                          value={email} onChange={(e) => setusername(e.target.value)} required 
          />
          </div>
          
         </div>
     
      </div>
      <div className="form-right">
        <h2>Product Details</h2>
        <div className="form-group">
    
        <div className="form-row form-row-1"  >
          <input type="text" name="pname"  className="username" id="pname" placeholder="Product name" 
                          value={product} onChange={(e) => setprod(e.target.value)} required 
          />
          </div>
       </div>

        <div className="form-group">
    
        <div className="form-row form-row-1"  >
          <input type="text" name="pdetail" className="username" id="pdetail" placeholder="Message" 
                          value={message} onChange={(e) => setmessage(e.target.value)} required 
          />
          </div>
       </div>
        
        
        <div className="form-row-last">
          <center>
          <input type="submit" name="register" style={{width:"250px"}} className="register" defaultValue="Register Badge" />
        </center>
        </div>
      </div>
    </form>
  </div>
</div>
</>
  )
}

export default Registration