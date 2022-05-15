import React, { Component, useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel' 
import per from "./t2.jpg"
import per2 from "./t1.jpg"
import axios from "axios"
import style2 from "./style2.css";

const  Custdesk = () => {

  const [user, setUser] = useState([]);

  function fetchData(e) {
  
    axios.defaults.withCredentials=true;


    axios.get("http://localhost:5000/api/package").then((response) => {
 setUser(response.data);
    console.log(response.data)
  


  });}

    useEffect(() => {
      fetchData();
    });

 
    return (
      <>
  <div>  
                        
                           <div className='container-fluid'> 
                           <center>

                          <Carousel interval={2000} keyboard={false} style={{'width':"900px",'marginTop':"20px",'borderBlockStyle':"hidden"}}>  
                    
                      
                         
                         
                           {user.map((userData, k) => (
              
                           <Carousel.Item style={{height:"350px"}}>  
                           <div class="d-md-flex testimony-29101 align-items-stretch">
                      <div class="image"><img src={per2} alt="Image" class="img-fluid"/></div>
                      
              <div class="text">
                <blockquote>
                  <p  style={{fontSize:"30px"}}>Package.name : {userData.pname}</p>
                  <p  style={{fontSize:"20px"}}>Discount : {userData.discount}</p>
                  <p  style={{fontSize:"20px"}}>Price : {userData.price}</p>
                </blockquote>
              </div>
            </div>   
                                   </Carousel.Item  >    ))} 
 
                                          </Carousel>  
                                          </center> 



                                          <center>

<Carousel interval={2000} keyboard={false}  style={{'width':"100%",'marginTop':"20px",'borderBlockStyle':"hidden"}}>  




 {user.map((userData, k) => (

 <Carousel.Item style={{height:"500px", width:"100%"}}>  
 
 <div class="row">
      <div class="col-4">
        
   <details style={{maginTop:"10px",arginLeft:"100px"}}>
    <summary style={{fontSize:"30px"}}>More About Package</summary>
    <p style={{fontSize:"25px"}}>Services</p>
    {userData.sid.map((d2, k) => (
    <p style={{fontSize:"20px"}}>{d2.sname}</p>
    ))}
  </details>
      </div>
     
      <div class="col-4">
        
        <details style={{marginTop:"10px",marginLeft:"30px"}}>
         <summary style={{fontSize:"30px"}}>Locate your Destination</summary>
         
  
        <iframe style={{width:"300px",height:"280px",marginBottom:"30px" , marginLeft:"30px"}}
  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAGs5rhpqWpP9VstMqmtYVFtXjohwdGivA&q=${userData.location},Seattle+WA`}>
   </iframe>
       </details>
           </div>

           <div class="col-4">
        
        <details style={{marginTop:"10px"}}>
         <summary style={{fontSize:"30px"}}>More About Provider</summary>
         <p style={{fontSize:"20px"}}>Vikash Rajpurohit</p>
         <p style={{fontSize:"20px"}}>Owner of this package</p>
       </details>
           </div>
          

    </div>
    

         </Carousel.Item  >    ))} 

                </Carousel>  
                </center> 

                                  </div> 
   
                          </div>
      </>
    )
  
}

export default Custdesk