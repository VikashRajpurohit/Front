import React from 'react'
import { useLocation } from 'react-router-dom'


const Detail_Services = () => {
    function Profile () {
        const location = useLocation()
        const { from } = location.state
        console.log(from);
    }
  return (
    <div>Detail_Services</div>
  )
}

export default Detail_Services