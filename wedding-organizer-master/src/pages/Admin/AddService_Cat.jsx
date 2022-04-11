import React from 'react'

const AddService_Cat = () => {
  return (
    <div className='demos'> 
    <div id="login-popup" className="popup-effect" style={{display:"grid",placeItems:"center",margin:"2em auto",padding:"3em 2em",zIndex:"999",backgroundColor:"white"}}>
      <center>
        <div className="popup" >
        <h4 className="modal-title text-uppercase">Add Service_Category</h4>
        <div className="login-form">
          
          <form action="#" method="post" onSubmit="#" className="px-3 pt-3 pb-0">
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Name</label>
              <select name="Service" className="form-control">
              <option value="Service">Service</option>
                <option value="Dance">Dance</option>
                <option value="Mehandi">Mehandi</option>
                <option value="pandit">pandit</option>
              </select>
          
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Category Name</label>
              <input type="text" className="form-control" placeholder name="Service_Category_Name" id="Service_Category_Name" 
               required />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name1" className="col-form-label">Searchable</label>
              <input type="checkbox" style={{marginLeft:"15px"}} placeholder name="Searchable" id="Searchable"
               required />    
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name1" className="col-form-label">Per_Person</label>
              <input type="checkbox" style={{marginLeft:"15px"}} placeholder name="Per_Person" id="Per_Person"
               required />    
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

export default AddService_Cat