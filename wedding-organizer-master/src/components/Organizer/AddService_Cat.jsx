import React, { useState, useRef } from "react"
import {useFormik} from 'formik';
import Swalfire from "sweetalert2";
import axios from "axios"

const AddService_Cat = () => {

  let err="";
  let res2 = "";
  const [user, setUser] = useState([]);
  
  const [smid, setsmid] = useState([]);
  const [servicetype, setst] = useState([]);
  
  async function getallist(e) {
    axios.defaults.withCredentials=true;
	
  	e.preventDefault()
    res2 = await axios.get("http://localhost:5000/api/serv_mst");
        console.log(res2.data);
        setUser(res2.data);
		try {}catch(error){}}

  async function postName(e) {
    axios.defaults.withCredentials=true;
	
  	e.preventDefault()
		try {
        const res1 = await axios.post("http://localhost:5000/api/serv_type",{
          smid,servicetype
        });
        if(res1){
          Swalfire.fire({
            icon: "success",
            html: res1 + "abcd",
          });
      }else{
        Swalfire.fire({
          title: "Somthing Wrong!",
          icon: "error",
          html: "Password do not match.",
        });
              }
        } catch (error) {

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
        <h4 className="modal-title text-uppercase">Add Service_Category</h4>
        <div className="login-form">
          
          <form action="#" method="post" onSubmit={postName} className="px-3 pt-3 pb-0">
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Name</label>
              <select name="Service" className="form-control" onClick={getallist}
               value={smid} onChange={(e) => setsmid(e.target.value)}>
              {user.map((data) => (
                <option value={data._id}>{data.servicecategories}</option>
              ))}
              
              </select>
          
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Category Name</label>
              <input type="text" className="form-control" placeholder name="Service_Category_Name" id="Service_Category_Name" 
               value={servicetype} onChange={(e) => setst(e.target.value)} required />
            </div>
            <div className="right-w3l">
              <input type="submit" className="form-control" defaultValue="Save" value="Save"/>
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

export default AddService_Cat