
import axios from "axios";
import React from "react";
import { useState } from "react";
import Swalfire from "sweetalert";

const Forgot = () => {

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");

  console.log(id, name); // 55 test null

  const [fromData, setFormData] = useState({
    email: "",
  });

  const { email } = fromData;

  const onChange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });

  let save = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
    };
    try {
      console.log(newUser);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(newUser);
      console.log(body);
      const res = await axios.post("http://localhost:5000/api/forgotpassword", body, config);
      // console.log(res);

      // console.log("Hellos");
      if (res.status === 200) {
        Swalfire({
          title: "Forget Password Link Send To Your Email!",
          icon: "success",
        });

        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("Userid="))
          .split("=")[1];

        const cookieValue2 = document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          .split("=")[1];

        console.log(cookieValue);
        console.log(cookieValue2);

        window.location.href = "/changepassword";
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };


    

  return (
    <div className='demos'> 
    <div id="login-popup" className="popup-effect" style={{display:"grid",placeItems:"center",margin:"2em auto",padding:"3em 2em",zIndex:"999",backgroundColor:"white"}}>
      
        <div className="popup" >
        <h4 className="modal-title text-uppercase">Forgot Password</h4>
        <div className="login-form">
          
        <form action="#" method="post" onSubmit={save} className="px-3 pt-3 pb-0">
          <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">User Name</label>
              <input type="Text" className="form-control" placeholder name="email" onChange={(e) => onChange(e)}required />
          </div>
            
          <div className="form-group" style={{padding:"unset",margin:"unset",marginLeft:"78%"}}>
            <input type="submit" name="submit"  className="register"  value="submit"
            style={{padding:"unset",margin:"6px 0 0 0 ", width:"100px"}} />
          </div>
          </form>
        </div>
        <a className="close" href="#"></a>
      </div>
    </div> 
    </div>
  )
}



export default Forgot

