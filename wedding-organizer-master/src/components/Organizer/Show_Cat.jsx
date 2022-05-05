import React, { useState, useEffect ,Component} from 'react'
import axios from "axios"
import {Row, Col} from "react-bootstrap";

const Show_Cat = () => {

  const [user, setUser] = useState([]);
  
    const [servicetype,setservicetype] = useState("");
    const [Id,setID] = useState("");

  const deleteContact = (id ,e ) => {
    e.preventDefault()
    alert(id)
    axios.post("http://localhost:5000/api/serv_type/delete",{id})
    .then(res => {
        console.log('deleted!!',res)
        fetchData()

    }).catch(err => console.log(err))
}

const updateUser = async(e) => {
  e.preventDefault();
  let newid = Id
let newname = servicetype
try{
  
  const dept = { "id": newid, "servicetype": newname };
 const res = await axios.post("http://localhost:5000/api/serv_type/updateone", dept);
  console.log(res)
  if(res.status === 200){
    var x = document.getElementById("yu");
    var y = document.getElementById("abc");
    x.style.display = "none";
    y.style.display = "none";
      fetchData()

  }

}
catch(err){
 console.log(err.response.data);

}
}




  function fillupdateform(id,servicetype){
    console.warn(servicetype)
    setservicetype(servicetype)
    setID(id)

  var x = document.getElementById("yu");
  var y = document.getElementById("abc");
  x.style.display = "block";
  y.style.display = "block";
  
 }

  const fetchData = () => {
    axios.get("http://localhost:5000/api/serv_type").then((response) => {

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
                <th><center>Service Domain</center></th>
                <th><center>Service_Name</center></th>
               
                <th><center>Operations</center></th>
              
              </tr>
  
            </thead>
              
            <tbody>

            <tr style={{backgroundColor:"red"}}>
              
              <td>
               
              </td>

              <td>
               
              </td>


              <td>
                <div className="email">
                <center>
                <input type="text" className="form-control" placeholder
               id="yu" name="servicetype" value={servicetype} style={{marginLeft:"10px",display: "none"}} onChange={(e)=>{setservicetype(e.target.value)}} />
                  
                  </center>
                </div>
              </td>
              <td>
                <div className="email">
                <center>
                <button type="button"  onClick={e => updateUser(e)} className="btn btn-lg btn-outline-success ml-2" id = "abc" style={{display: "none"}} text="Update" data-dismiss="update"  aria-label="delete">Done</button>
               
                  </center>
                </div>
              </td>

            </tr>
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
                  <h4>{data.smid.servicecategories}</h4>
                  
                 
           
                    </center>
                  </div>
                </td>
                <td>
                  <div className="email">
                  <center>
                  <h4>{data.servicetype}</h4>
                    
                    </center>
                  </div>
                </td>
                <td>
                  <button type="button"  onClick={(e)=>deleteContact(data._id,e)}className="btn btn-lg btn-outline-danger ml-3" text="Delete" data-dismiss="delete" aria-label="delete">Delete</button>
                  <button type="button"   onClick={()=>{fillupdateform(data._id,data.servicetype);}} className="btn btn-lg btn-outline-success ml-3" text="Update" data-dismiss="update" aria-label="delete">Update</button>
                 
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

export default Show_Cat