import axios from "axios"
import React, { useState, useRef } from "react"
import {useFormik} from 'formik';
import * as yup from 'yup';
import Swalfire from "sweetalert2";

const AddService  =  ()  =>  { 

  const checkboxRef1 = useRef();
  const checkboxRef2 = useRef();


  const [servicecategories,setsc]=useState("");
  let searchable,perperson;
  let err="";

  async function postName(e) {
  	e.preventDefault()
		try {
      if(checkboxRef1.current.checked){perperson="1"}else{perperson="0"}
      if(checkboxRef2.current.checked){searchable="1"}else{searchable="0"}
        const res2 = await axios.post("http://localhost:5000/api/serv_mst", {
          servicecategories,perperson,searchable});
        if(res2){
          Swalfire.fire({
            icon: "success",
            html: servicecategories + "abcd",
          });
      }else{
        Swalfire.fire({
          title: "Somthing Wrong!",
          icon: "error",
          html: "Password do not match.",
        });
              }
        } catch (error) {

		}
    if (err.match("")){
      console.log("PARTH");
      if(checkboxRef1.current.checked)
      

      console.log(checkboxRef2.current.checked);
    }
	}



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
            <div className="form-group">
              <label htmlFor="recipient-name1" className="col-form-label">Per_Person</label>
              <input type="checkbox" style={{marginLeft:"15px"}} placeholder name="Per_Person" id="Per_Person"
                value={perperson} ref={checkboxRef2}
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
export default AddService