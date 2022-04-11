import axios from "axios"
import React, { useState } from "react"
import swal from "sweetalert";
import Swalfire from "sweetalert2";

const Login = () => {

  const [ username, setName ] = useState("")
	const [	password, setpass ] = useState("")

  let err= "";  
	async function postName(e) {
		e.preventDefault()
		try {
			const res = await axios.post("http://localhost:5000/api/auth", {
				username,password
      } )
      if(res.status===210){
        Swalfire.fire({
          title: "Successful",
          icon: "success",
          html: res.status,
        });}
        
          Swalfire.fire({
            title: "Somthing Wrong!",
            icon: "error",
            html: "Password do not match.",
          });
              
        
      
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
            <div className="form-group">
              <label htmlFor="recipient-name1" className="col-form-label">Password</label>
              <input type="password" className="form-control" placeholder name="Name" id="recipient-name1"
              value={password} onChange={(e) => setpass(e.target.value)} required />    
            </div>
            <div className="right-w3l">
              <input type="submit" className="form-control" defaultValue="Login" />
            </div>
          </form>
        </div>
        <a className="close" href="#"></a>
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