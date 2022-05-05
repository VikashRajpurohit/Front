import axios from "axios"
import React, { useState } from "react"

const Logout = () => {
 
    
    async function checkcookies (e) {
		e.preventDefault();
        axios.defaults.withCredentials=true;
        await axios.get("http://localhost:5000/api/posts/logout").then((response) => {
          console.log(response.data.id);
    
            localStorage.clear();
          
            if(response.data.id === undefined){
                window.location.href = "/login";
              }

            window.location.href = "/login";
    
         
          

    })}

    window.onload = checkcookies;
    return (
   <></>
  )
}

export default Logout