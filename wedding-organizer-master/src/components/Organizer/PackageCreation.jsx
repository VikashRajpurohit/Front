import React, { useState,   Component ,useRef } from "react"
import {useFormik} from 'formik';
import Swalfire from "sweetalert2";
import axios from "axios"
import {Row, Col, Button, Modal} from "react-bootstrap";

import { MDBCard,MDBCardBody,MDBListGroupItem,MDBListGroup,MDBCardTitle,MDBCardText,MDBCardLink,MDBCardImage } from 'mdb-react-ui-kit';


const PackageCreation = () => {

  const [pname, setpname] = useState([]);
  const [no_guest, setno_guest] = useState([]);
  const [discount, setdiscount] = useState([]);
  
  const [location, setlocation] = useState([]);
  let sid = []
  let sid2 = []
  
  const [user, setUser] = useState([]);
  
  

  let res1 = "";

  
      async function postName(e) {
        
        axios.defaults.withCredentials=true;
        e.preventDefault()
         res1 = await axios.post("http://localhost:5000/api/package",{pname,no_guest,discount,location,sid})
         console.log(res1)

      }

      function fetchData(){
        axios.get("http://localhost:5000/api/service").then((response) => {
    
          setUser(response.data);
        
        }); }

        
        function selectuser(id) {
          
            sid2.push(id)

            sid = Array.from(new Set(sid2))
              
          console.log(sid);
       
        }
    
        
       

      

  return (
    <center>
    <div className='demos'> 
    <div id="login-popup" className="popup-effect">
     
        <div className="popup" >
        <h4 className="modal-title text-uppercase">Add Service_Category</h4>
        <div className="login-form">

       
          
        <form action="#" method="post" onSubmit={postName} className="px-3 pt-3 pb-0">

        <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">product name</label>
              <input type="text" className="form-control" placeholder name="product_name" id="product_name" 
                value={pname} onChange={(e) => setpname(e.target.value)}required />
            </div>
          
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">no_guest</label>
              <input type="text" className="form-control" placeholder name="no_guest" id="no_guest" 
                value={no_guest} onChange={(e) => setno_guest(e.target.value)}required />
            </div>
           
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">discount</label>
              <input type="text" className="form-control" placeholder name="discount" id="discount" 
                value={discount} onChange={(e) => setdiscount(e.target.value)}required />
            </div>

            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Location</label>
              <input type="text" className="form-control" placeholder name="discount" id="discount" 
                value={location
                } onChange={(e) => setlocation(e.target.value)}required />
            </div>

            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label" >sid </label> <br/>
          
            <input type="button" name="btnclick" onClick={fetchData} value="Add Services" className="btn btn-info"/>  

            <Row style={{display: "block"}}>
                   
                   {user.map((data) => (
                      
                         <MDBCard style={{ width: '19rem', margin: '13px' }} >  
                         
                     <MDBCardImage position='top'style={{border: '3px solid grey',borderRadius: "30px", padding : '3px', marginTop: '10px'}} width="100" height="300" alt='...' src={`http://localhost:5000/images/${data.img}`} />
                     <center>
                     <MDBCardBody>
                       <MDBCardTitle>{data.sname}</MDBCardTitle>
                      
                     </MDBCardBody>
                     <MDBListGroup flush>
    
                       <MDBListGroupItem style={{height:"30px"}}>Fees : {data.sfees}</MDBListGroupItem>
                       <MDBListGroupItem style={{height:"20px"}}>Location  : {data.slocation}</MDBListGroupItem>
                        </MDBListGroup>
               
               
                     <MDBCardBody>
               
                      <input type="button" className="form-control" defaultValue="Add" onClick={() => {
                           selectuser(data._id);
                         }}
                          value="Add"/>
                      
                      </MDBCardBody>
                     </center>
                   </MDBCard>
                    ))}
                    </Row>
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

export default PackageCreation