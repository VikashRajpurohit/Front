import React, { useState, useEffect ,Component} from 'react'
import axios from "axios"

const Auth = () => {
  

    async function checkcookies (e) {
		e.preventDefault();
        axios.defaults.withCredentials=true;
       await axios.get("http://localhost:5000/api/posts").then((response) => {
          console.log(response.data.id);
        //   if(response.data.role === "O"){
        //     window.location.href = "/OrganizerDesk";
        //   }
        //   if(response.data.role === "A"){
        //     window.location.href = "/AdminDesk";
        //   }
           if(response.data.id === undefined){
            window.location.href = "/login";
          }

    })}

    window.onload = checkcookies;



    return (
        <></>
    // <div>auth</div>
  )
}

export default Auth