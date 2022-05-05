import React from 'react'

const RestPassword = () => {
  return (
    <div className='demos' style={{display:"grid",placeItems:"center",marginLeft:"25em auto",padding:"3em 2em",zIndex:"999",backgroundColor:"white"}}> 
    <div id="login-popup" className="popup-effect" style={{display:"grid",placeItems:"center",zIndex:"999",backgroundColor:"white"}}>
      <center>
        <div className="popup" >
        <h4 className="modal-title text-uppercase">Add Service</h4>
        <div className="login-form">
          
          <form action="#" method="post" onSubmit={postName} className="px-3 pt-3 pb-0">
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Name</label>
              <input type="text" className="form-control" placeholder name="Service-Name" id="Service-name" 
               value={servicecategories} onChange={(e) => setsc(e.target.value)}
               required  />
               {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name1" className="col-form-label">Searchable</label>
              <input type="checkbox" style={{marginLeft:"15px"}} value={searchable}
             ref={checkboxRef1}
              placeholder name="Searchable" id="Searchable"
              />    
            </div>
            <div className="right-w3l">
              <input type="submit" className="form-control" defaultValue="Save" />
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

export default RestPassword