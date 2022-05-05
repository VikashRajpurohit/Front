import React, { useState, useEffect ,Component} from 'react'
import axios from "axios"

function ShowService() {
  const [user, setUser] = useState([]);


  const fetchData = () => {
    axios.get("http://localhost:5000/api/serv_mst").then((response) => {

      setUser(response.data);
      
    });}
     
    useEffect(() => {
      fetchData();
    });

  return (	
<section className="ftco-section">
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <h3 className="h5 mb-4 text-center">Show Services</h3>
      <div className="table-wrap">
        <table className="table">
          <thead className="thead-primary">
            <tr>
              <center><th>Service_Name</th></center>

              <th>PerPerson </th>
              <th>Searchable</th>
              <th>Delete</th>
            </tr>

          </thead>
          {user.map((data) => (
          <tbody>
            <tr className="alert" role="alert">
            
             
           
              <td>
                <div className="email">
                <center>
                <h4>{data.servicecategories}</h4>
                  
                  </center>
                </div>
              </td>

              <td>
                <label className="checkbox-wrap checkbox-primary">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark" />
                </label>
              </td>

              <td>
                <label className="checkbox-wrap checkbox-primary">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark" />
                </label>
              </td>

              <td>
                <button type="button" className="btn btn-lg btn-outline-danger ml-3" text="Delete" data-dismiss="delete" aria-label="delete">
                 
                </button>
              </td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </div>
  </div>
</div>
</section>
)
}
export default ShowService