import React, { useState, useEffect ,Component} from 'react'
import axios from "axios"
import {Row, Col} from "react-bootstrap";

const ShowUSer = () => {
  
    const [user, setUser] = useState([]);
  
    const [servicetype,setservicetype] = useState("");
    const [Id,setID] = useState("");

  const deleteContact = (id ,e ) => {
    e.preventDefault()
    alert(id)
    axios.post("http://localhost:5000/api/users/del",{id})
    .then(res => {
        console.log('deleted!!',res)
        fetchData()

    }).catch(err => console.log(err))
}

const updateUser = async (id,e) => {
  e.preventDefault();

try{
  
  console.log(id)
 const res = await axios.post("http://localhost:5000/api/users/varify", {id});
  console.log(res)

      fetchData();

}
catch(err){
 console.log(err.response.data);

}
}




  
 

  const fetchData = () => {
    axios.get("http://localhost:5000/api/users").then((response) => {

      setUser(response.data);
      
    });}
     
    useEffect(() => {
      fetchData();
    });

    // const viewup = (k) =>{
    //     var x = document.getElementById(k);
    //     x.style.display = "block";
    // }


  return (<section className="ftco-section">
  <div className="container">
    <div className="row">
      <div className="col-md-15">
        <h3 className="h2  text-center">Show Services</h3>
        <div className="table-wrap">
          <table className="table">
            <thead className="thead-primary">
              <tr >
                
                <th><center>Sr.no</center></th>
                <th><center>Name</center></th>
                <th><center>contact</center></th>
               
                <th><center>Email</center></th>
                <th><center>Operations</center></th>
              
              </tr>
  
            </thead>
              
            <tbody>

         {user.map((data,k) => (
            
              <tr key={data._id}>
              
                <td>
                  <div className="email">
                  <center>
                  <h4>{k}</h4>
                    
                    </center>
                  </div>
                </td>

                <td>
                  <div className="email">
                  <center>
                  <h4>{data.fname+" "+data.lname}</h4>
                  
                 
           
                    </center>
                  </div>
                </td>
                <td>
                  <div className="email">
                  <center>
                  <h4>{data.contact}</h4>
                    
                    </center>
                  </div>
                </td>

                <td>
                  <div className="email">
                  <center>
                  <h4>{data.username}</h4>
                    
                    </center>
                  </div>
                </td>

                <td>
                  <button type="button"  onClick={(e)=>deleteContact(data._id,e)}className="btn btn-lg btn-outline-danger ml-3" text="Delete" data-dismiss="delete" aria-label="delete">Reject</button>
                  <button type="button"   onClick={(e)=>updateUser(data._id,e)} className="btn btn-lg btn-outline-success ml-3" text="Update" data-dismiss="update" aria-label="delete">Approve</button>
                 
                </td>
              </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  </div>
  
 
  </section>
 


  )
}

export default ShowUSer