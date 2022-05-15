import React, { useEffect } from 'react'
import Logout from '../frontend/Logout'

const Ologout = () => {
  useEffect(() => {
    window.location.href = "../";
  },[]);
  return (
    <Logout/>
      )
}

export default Ologout