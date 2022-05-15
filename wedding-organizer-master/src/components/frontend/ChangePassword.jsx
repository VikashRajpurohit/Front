import axios from "axios";
import React from "react";
import { useState } from "react";
import Swalfire from "sweetalert";


const ChangePassword = () => {
 
        const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");

  console.log(id, name); // 55 test null

 
 
  const [password, setFormData] = useState("");

    const newuser={
        password,
    };

    console.log(newuser);
  
  let save = async (e) => {
    e.preventDefault();
    console.log(password)
    const res = await axios.post(
      "http://localhost:5000/api/forgotpassword/" + id + "/" + name,
      newuser
    );
  
    if (res.status === 200) {
      Swalfire({
        title: "Forget Password Link Send To Your Email!",
        icon: "success",
      });}

    // console.log(res.data(password));
    console.warn(res);
      
    const newUser = {
      password,
    };
    try {
      console.log(newUser);
      const body = JSON.stringify(newUser);
      console.log(body);
      const config = {
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
    
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <>
 
        <div className="popup" >
        <h4 className="modal-title text-uppercase">Create Password</h4>
        <div className="login-form">
        <form method="post" onSubmit={save} className="px-3 pt-3 pb-0">
          <div className="field">
            <input
              type="password"
              name="password"
              value={password}
              className="form-control" placeholder 
              //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
              onChange={(e) => setFormData(e.target.value)}
              required
            />
             </div>

            
          <div className="form-group" style={{padding:"unset",margin:"unset",marginLeft:"50%"}}>
          <input type="submit" name="submit" value="submit" 
            style={{padding:"unset",margin:"6px 0 50px 0 ", width:"100px" }} />
          </div>
        </form></div></div>
      
    </>
  );
};

export default ChangePassword;