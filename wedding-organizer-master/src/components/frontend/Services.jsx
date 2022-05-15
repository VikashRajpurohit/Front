import React, { useState, useEffect ,Component} from 'react'
import axios from "axios"
import {Row, Col, Button, Modal} from "react-bootstrap";
import { MDBCard,MDBCardBody,MDBListGroupItem,MDBListGroup,MDBCardTitle,MDBCardText,MDBCardLink,MDBCardImage } from 'mdb-react-ui-kit';
import Swalfire from "sweetalert2";

function Services() {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);

  const [ name, setfname ] = useState("")
  const [ contact, setcontact ] = useState("")
  const [ email, setusername ] = useState("")
  const [ product, setprod ] = useState("")
  const [ message, setmessage ] = useState("")

  let err = ""

  const handleClose = () => {
	  
	axios.defaults.withCredentials=true;
	
	try {
		if(email===""){
	const res2 = axios.post("http://localhost:5000/api/sendmail", {
		  name,contact,email,product,message} )
   
	if(res2.status === 210);{
	  Swalfire.fire({
		title: "Enquiry Sent",
		icon: "sucess",
		}); }}
	} catch (error) {
  err=error;
		console.error(error)
  console.log(error.response.data);
	}
if (err.match("")){
  console.log("PARTH");
}
	
	
	
	setShow(false)};


  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow(false);



  const fetchData = () => {
	  localStorage.setItem("check","yes");
    axios.get("http://localhost:5000/api/service").then((response) => {

      setUser(response.data);
      
    });}

	const [Id, setID] = useState("");
  
    function selectuser(id) {
      setID(id);
	  setprod(id.sname)
	  setmessage("Details about this product please!")
      console.log(id);
      handleShow();
    }

	
  
     
    useEffect(() => {
      fetchData();
    },[]);

  return (
    <>
    <section class="services py-5">
	
	<div class="container py-md-5">
	<center>
		<h3 class="heading text-capitalize "> Our Services </h3>
		<div 	>
			
		<Row>
                {user.map((userData, k) => (
                  <Col key={k} xs={12} md={4} lg={3} style={{marginBottom:"250px"}}>
					  
				  <div className="bg-img" position='top'>
					 <div class="service-grid1">
					<div style={{border: '1px solid grey',borderRadius: "30px",background:"rgba(190, 190, 190, 0.5)"}}>
					<MDBCardImage position='top'style={{border: '3px solid grey',borderRadius: "30px", padding : '3px'}} width="100" height="300" alt='...' src={`http://localhost:5000/images/${userData.img}`} />
					
					<p style={{fontSize:"20px"}}>{userData.sname}</p>
			 <p style={{fontSize:"12px",color:"rgb(0, 5, 5)" }}>{userData.sdescription}</p>
			 </div>
			 <span class="fa fa-bullhorn" onClick={() => {
            selectuser(userData);
          }}
		   style={{color:"rgb(120, 15, 15)",border: '1px solid grey',marginLeft:"180px",background:"rgba(165, 163, 163, 0.5)"}}></span>
				
				</div>
					   </div>						
					   </Col>
			  
                ))}
            </Row>
	
		{/* <Row>
			<Col key={1} xs={12} md={4} lg={3} style={{marginBottom:"250px"}}>
					  
					  <div className="bg-img" position='top'>
						 <div class="service-grid1">
						<div style={{border: '1px solid grey',borderRadius: "30px",background:"rgba(165, 163, 163, 0.5)"}}>
						<MDBCardImage position='top'style={{border: '3px solid grey',borderRadius: "30px", padding : '3px'}} width="100" height="300" alt='...' src={"images/g2.jpg"} />
						
						<p style={{fontSize:"20px"}}>0userData.sname</p>
				 <p style={{fontSize:"12px",color:"rgb(0, 5, 5)" }}>userData.sdescription</p>
				 </div>
				 <span class="fa fa-bullhorn" style={{color:"rgb(120, 15, 15)",border: '1px solid grey',marginLeft:"180px",background:"rgba(165, 163, 163, 0.5)"}}></span>
					
					</div>
						   </div>
						   </Col>
						   <Col key={2} xs={12} md={4} lg={3} style={{marginBottom:"250px"}}>
				

						     <div className="bg-img" position='top'>
						 <div class="service-grid1">
						<div style={{border: '1px solid grey',borderRadius: "30px",background:"rgba(165, 163, 163, 0.5)"}}>
						<MDBCardImage position='top'style={{border: '3px solid grey',borderRadius: "30px", padding : '3px'}} width="100" height="300" alt='...' src={"images/g2.jpg"} />
						
						<p style={{fontSize:"20px"}}>0userData.sname</p>
				 <p style={{fontSize:"12px",color:"rgb(0, 5, 5)" }}>userData.sdescription</p>
				 </div>
				 <span class="fa fa-bullhorn" style={{color:"rgb(120, 15, 15)",border: '1px solid grey',marginLeft:"180px",background:"rgba(165, 163, 163, 0.5)"}}></span>
					
					</div>
						   </div></Col>						
						  
</Row> */}
		
		<Modal show={show} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Send Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
		<h2>{Id.sname}</h2>
		
        <div className="form-group">
          <div className="form-row form-row-1">
            <input type="text" name="first_name" id="first_name" className="input-text" style={{width:"100%"}} placeholder="First Name" 
                          value={name} onChange={(e) => setfname(e.target.value)} required />
          </div>
        
        </div>
        <div className="form-group">
         
          <div className="form-row form-row-1">
          <input type="phone" name="phone" className="phone" id="phone" pattern="^[6789][0-9]{9}$" style={{width:"100%"}}  placeholder="Contact.no" 
                          value={contact} onChange={(e) => setcontact(e.target.value)} required />
        </div>
        </div>
        <div className="form-group">
       
        <div className="form-row form-row-1"  >
          <input type="email" name="username"  className="username" id="username" pattern="^[a-z\.0-9]{6,30}@.+\..+$" style={{width:"100%"}} placeholder="E-mail" 
                          value={email} onChange={(e) => setusername(e.target.value)} required 
          />
          </div>
          
         </div>

	
      

           </Modal.Body>
        <Modal.Footer>
          
		<Button variant="primary" onClick={handleClose2}>
           Cancel
          </Button>
          <Button onClick={handleClose}>
           Done
          </Button>
        </Modal.Footer>
      </Modal>
 
			
			
		</div>
		</center>
	</div>
</section>

    </>
  )
}

export default Services