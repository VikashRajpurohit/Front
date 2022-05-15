import React, { useState, useEffect ,Component} from 'react'
import axios from "axios"
import {Row, Col, Button, Modal} from "react-bootstrap";

import { MDBCard,MDBCardBody,MDBListGroupItem,MDBListGroup,MDBCardTitle,MDBCardText,MDBCardLink,MDBCardImage } from 'mdb-react-ui-kit';

const ShowService_Detils = () => {

  const [user, setUser] = useState([]);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const fetchData = () => {
    axios.get("http://localhost:5000/api/service").then((response) => {

      setUser(response.data);
      
    });}
     
    const [Id, setID] = useState("");
  
    function selectuser(id) {
      setID(id);

      console.log(id);
      handleShow();
    }

    useEffect(() => {
      fetchData();
    });

    const handleUpdate = async (e) => {
      e.preventDefault();
    };
  return (  
    
     <form onSubmit={(e) => handleUpdate(e)} method="post">
   
    
    <center>
  <section class="services py-1">
	
	          <div class="container py-md-1">
           
                
	            	<h3 class="heading text-capitalize mb-lg-4 mb-4"> Our Services </h3>
	              	<div 	>
			
	                	<Row>
                   
    {user.map((data) => (
       
          <MDBCard style={{ width: '19rem', margin: '13px' }} >  
          
      <MDBCardImage position='top'style={{border: '3px solid grey',borderRadius: "30px", padding : '3px', marginTop: '10px'}} width="100" height="300" alt='...' src={`http://localhost:5000/images/${data.img}`} />
      <center>
      <MDBCardBody>
        <MDBCardTitle>{data.sname}</MDBCardTitle>
       
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem style={{height:"40px"}}>Fees : {data.sfees}</MDBListGroupItem>
        <MDBListGroupItem style={{height:"40px"}}>Location  : {data.slocation}</MDBListGroupItem>
         </MDBListGroup>


      <MDBCardBody>




       <input type="submit" className="form-control" defaultValue="Details" onClick={() => {
            selectuser(data);
          }}
           value="Details"/>
       
       </MDBCardBody>
      </center>
    </MDBCard>
     ))}
     </Row>
	
</div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Id.sname}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        {Id.sdescription.map((data2,k) => (
            <p>Feature {k+1} :{data2}</p>
        ))}
           </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
           Done
          </Button>
        </Modal.Footer>
      </Modal>
 

</div>
</section>
</center>
</form>
  )
}

export default ShowService_Detils