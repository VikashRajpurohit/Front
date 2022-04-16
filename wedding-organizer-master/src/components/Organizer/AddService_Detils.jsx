import React, { useState,   Component ,useRef } from "react"
import {useFormik} from 'formik';
import Swalfire from "sweetalert2";
import axios from "axios"


const AddService_Detils = () => {

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
    res2 = await axios.get("http://localhost:5000/api/serv_mst");
     
        setUser(res2.data);
        sets_mid(smid);
		try {}catch(error){}}

  async function getallist2(e) {
    e.preventDefault()
    console.log(stid)
     res1 = await axios.post("http://localhost:5000/api/serv_type/getss",
        {s_mid});
          setUser2(res1.data);
      try {}catch(error){}}
  
      async function postName(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('stid', stid);
        formData.append('sname', sname);
        formData.append('img', img);
        formData.append('sfees', sfees);
        formData.append('slocation', slocation);
        formData.append('sdescription', sdescription);
        
        
        
        try {
             res3 = await axios.post("http://localhost:5000/api/service",formData);
            if(res3){
              Swalfire.fire({
                icon: "success",
                html:  "abcd",
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
    <div className='demos'> 
    <div id="login-popup" className="popup-effect" style={{display:"grid",placeItems:"center",margin:"2em auto",padding:"3em 2em",zIndex:"999",backgroundColor:"white"}}>
      <center>
        <div className="popup" >
        <h4 className="modal-title text-uppercase">Add Service_Category</h4>
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
              <label htmlFor="recipient-name" className="col-form-label">Service Type </label>
              <select name="Service" className="form-control" onClick={getallist2}
               value={stid} onChange={(e) => setstid(e.target.value)}>
              {user2.map((data) => (
                <option value={data._id}>{data.servicetype}</option>
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
              <label htmlFor="recipient-name" className="col-form-label">Service Fees</label>
              <input type="number" className="form-control" placeholder name="Service Fees" id="Service_Fees" 
                value={sfees} onChange={(e) => setsfees(e.target.value)}required />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Location</label>
              <input type="text" className="form-control" placeholder name="Service Location" id="Service_Location" 
                value={slocation} onChange={(e) => setsloc(e.target.value)}required />
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
      </center>
    </div> 
    </div>
  )

}

export default AddService_Detils