import axios from "axios"
import React, { useState } from "react"
import swal from "sweetalert";
import Swalfire from "sweetalert2";

const Login = () => {

  const [ username, setName ] = useState("")
  const [ otp, setotp ] = useState("")


  let err= "";  
	async function postName(e) {
    
  axios.defaults.withCredentials=true;
		e.preventDefault()
		try {
			const res = await axios.post("http://localhost:5000/api/auth", {
				username,otp
      } )
      if(res.status===210){
        console.log(res.data.token)
        localStorage.setItem("token",res.data.token);
        window.location.href = "/OrganizerDesk"; 
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
  


  return (
  <div className='demos'> 
    <div id="login-popup" className="popup-effect" style={{display:"grid",placeItems:"center",margin:"2em auto",padding:"3em 2em",zIndex:"999",backgroundColor:"white"}}>
      <center>
        <div className="popup" >
        <h4 className="modal-title text-uppercase">Login</h4>
        <div className="login-form">
          
          <form action="#" method="post" onSubmit={postName} className="px-3 pt-3 pb-0">
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">User Name</label>
              <input type="email" className="form-control" placeholder name="Name" id="recipient-name" 
              value={username} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-row-last" style={{padding:"unset",margin:"unset",marginLeft:"78%"}}>
          
          <input type="button" name="otp" onClick={callopt} className="btn btn-lg btn-outline-info ml-3"
          id="sotpbutton" defaultValue="send otp" style={{padding:"unset",margin:"6px 0 0 0 ", width:"100px"}} />
          </div>
          
          <input type="text" name="otp"  className="form-control" style={{ display: "none" }} id="otpfeild" placeholder="OTP" 
                          value={otp} onChange={(e) => setotp(e.target.value)} required 
          />
          
          <div className="form-row-last" style={{padding:"unset",margin:"unset",marginLeft:"78%"}}>
            <input type="button" name="otp" onClick={callopt2} className="btn btn-lg btn-outline-info ml-3"
            id="resendotp" defaultValue="Resend otp" style={{display: "none",padding:"unset",margin:"6px 0 0 0 ", width:"100px"}} />
          </div>
          
          
           
                      <div className="right-w3l">
              <input type="submit"  className="form-control" defaultValue="Login" />
            </div>
          </form>
        </div>
        <div className="form-group">
        <a  href="Forgot">Forgot Password</a>
        </div>
      </div>
      </center>
    </div> 
    </div>   
     )
}

export default Login



// class Api extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={apiResponse:""}
//   }

//   callApi(){
//     fetch("http://localhost:5000/api/auth")
//     .then(res => res.text())
//     .then(res => this.setState({apiResponse:res}));
//   }

//   componentWillMount(){
//     this.callApi();
//   }
// }