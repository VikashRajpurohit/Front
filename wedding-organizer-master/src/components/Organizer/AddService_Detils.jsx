import React, { useState,   Component ,useRef, useEffect } from "react"
import {useFormik} from 'formik';
import Swalfire from "sweetalert2";
import axios from "axios"


const AddService_Detils = () => {

  
 
  const [servicecategories, setst] = useState([]);
  const [description, setds] = useState([]);
  
  
  async function addserv(e) {
    axios.defaults.withCredentials=true;
	
  	e.preventDefault()
		try {
        const res1 = await axios.post("http://localhost:5000/api/serv_mst",{
          servicecategories,description
        }, { headers: {"x-auth-token" : localStorage.getItem('token')} });
        if(res1){
          Swalfire.fire({
            icon: "Success",
            html:  "Added Successfully",
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


  const [user, setUser] = useState([]);
  const [user2, setUser2] = useState([]);
  const [smid, setsmid] = useState([]);
  const [s_mid, sets_mid] = useState([]);
  const [stid, setstid] = useState([]);
  const [sname, setsname] = useState([]);
  const [sfees, setsfees] = useState([]);
  const [slocation, setsloc] = useState([]);
  const [sdescription, setsdes] = useState([]);
  const [img, setimg] = useState([]);
  
  let err = "";
  let res1 = "";
  let res2 = "";
  let res3 = "";

  async function getallist(e) {
  	e.preventDefault()
    
    axios.defaults.withCredentials=true;
    res2 = await axios.get("http://localhost:5000/api/serv_mst",{ headers: {"x-auth-token" : localStorage.getItem('token')} });
     
        setUser(res2.data);
        setstid(smid);
        console.log(smid)
        
       
		try {}catch(error){}}

      async function postName(e) {
        
    axios.defaults.withCredentials=true;
        e.preventDefault()
        const formData = new FormData();
        formData.append('stid', stid);
        formData.append('sname', sname);
        formData.append('img', img);
        formData.append('sdescription', sdescription);
        
        console.log(stid)
        
        try {
             res3 = await axios.post("http://localhost:5000/api/service",formData,{ headers: {"x-auth-token" : localStorage.getItem('token')} });
             if(res3){
              Swalfire.fire({
                icon: "Success",
                html:  "Added Successfully",
              });
          }else{
            Swalfire.fire({
              title: img,
              icon: "error",
              html: "Password do not match.",
            });
            console.log(img);     
          }
            } catch (error) {
    
        }
        if (err.match("")){
    
         
      }
      }


      const forimg = (e) => {
        const img = e.target.files[0]; // accessing file
         
        setimg(img); //
      }

  return (
    <center>
    <div className='demos'> 
    <div id="login-popup" className="popup-effect">
     
        <div  >
        <h4 className="modal-title text-uppercase">Add Service_Category</h4>
        
        <form action="#" method="post" onSubmit={addserv} className="px-3 pt-3 pb-0">
        
        <div className="form-group">
          <label htmlFor="recipient-name" className="col-form-label">Service Category Name</label>
          <input type="text" className="form-control" placeholder name="Service_Category_Name" id="Service_Category_Name" 
           value={servicecategories} onChange={(e) => setst(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="recipient-name" className="col-form-label">Service Category Name</label>
          <input type="text" className="form-control" placeholder name="Service_Category_Name" id="Service_Category_Name" 
           value={description} onChange={(e) => setds(e.target.value)} required />
        </div>
        <div className="right-w3l">
          <input type="submit" className="form-control" defaultValue="Save" value="Save"/>
        </div>
      </form>
          
        

        <div className="login-form">

        <form action="#" method="post" onSubmit={postName} className="px-3 pt-3 pb-0">
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Type </label>
              <select name="Service" className="form-control" onClick={getallist}
               value={smid} onChange={(e) => setsmid(e.target.value)}>
              {user.map((data) => (
                <option value={data._id}>{data.servicecategories}</option>
              ))}
              </select>
            </div>
           
          <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Name</label>
              <input type="text" className="form-control" placeholder name="Service_Name" id="Service_Name" 
                value={sname} onChange={(e) => setsname(e.target.value)}required />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Details</label>
              <input type="text" className="form-control" placeholder name="Service Details" id="Service_Details" 
               value={sdescription} onChange={(e) => setsdes(e.target.value)}/>
            </div>
            
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Image</label>
             
              <input type="file" onChange={forimg}className="form-control"  id="image" 
               required  multiple accept="image/*"/>
            
            </div>
            <div className="right-w3l">
              <input type="submit" className="form-control" defaultValue="Save" value="Save"/>
            </div>
          </form>
        </div>
        <a className="close" href="#"></a>
      </div>
    </div> 
    </div>
    </center>
  )

}

export default AddService_Detils