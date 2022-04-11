import React from 'react'
import {useFormik} from 'formik';
import * as yup from 'yup';

const AddService  =  ()  =>  { 

  const formik=useFormik({

    initialValues:{

      Name:''

    },

    validationSchema: yup.object({

      Name: yup.string()

        .max(20, 'Name should not exceed 20 Characters')

        .required('Please Enter Service Name'),
    }),

    onSubmit:values=>{

      alert(JSON.stringify(values));

    }

  });

  return (
    <div className='demos'> 
    <div id="login-popup" className="popup-effect" style={{display:"grid",placeItems:"center",margin:"2em auto",padding:"3em 2em",zIndex:"999",backgroundColor:"white"}}>
      <center>
        <div className="popup" >
        <h4 className="modal-title text-uppercase">Add Service</h4>
        <div className="login-form">
          
          <form action="#" method="post" onSubmit="#" className="px-3 pt-3 pb-0">
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Service Name</label>
              <input type="text" className="form-control" placeholder name="Service-Name" id="Service-name" 
               required {...formik.getFieldProps("Name")} />
               {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name1" className="col-form-label">Searchable</label>
              <input type="checkbox" style={{marginLeft:"15px"}} placeholder name="Searchable" id="Searchable"
              />    
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name1" className="col-form-label">Per_Person</label>
              <input type="checkbox" style={{marginLeft:"15px"}} placeholder name="Per_Person" id="Per_Person"
               />    
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
export default AddService