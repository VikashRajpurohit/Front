import React, { useState, useEffect ,Component} from 'react'
import axios from "axios"

import {Row, Col} from "react-bootstrap";

function Services() {
  const [user, setUser] = useState([]);


  const fetchData = () => {
    axios.get("http://localhost:5000/api/serv_mst").then((response) => {

      setUser(response.data);
      
    });}
     
    useEffect(() => {
      fetchData();
    });

  return (
    <>
    <section class="services py-5">
	
	<div class="container py-md-5">
	<center>
		<h3 class="heading text-capitalize mb-lg-5 mb-4"> Our Services </h3>
		<div 	>
			
		<Row>
                {user.map((userData, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                      <div class="service-grid1">
					<span class="fa fa-globe"></span>
					<h4 class="my-3">{userData.servicecategories}</h4>
					<p>{userData.description}</p>
						</div>
								
                            
                    </Col>
                ))}
            </Row>

		
				
			
			
		</div>
		</center>
	</div>
</section>

<section class="subscribe text-center bg-light py-5">
	<div class="container p-sm-3">
		<h3 class="heading mb-2"> Subscribe Newsletter </h3>
		<p class="mb-5">Signup and recieve 15% on your First Plan.</p>
		<form action="#" method="post">
			<input class="form-control" type="email" placeholder="Your Email Address" name="Subscribe" required="" />
			<button class="btn1">
				<span class="fa fa-paper-plane"></span>
			</button>
		</form>
	</div>
</section>


    </>
  )
}

export default Services