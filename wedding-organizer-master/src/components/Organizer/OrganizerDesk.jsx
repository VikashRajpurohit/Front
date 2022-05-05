import React from 'react'
import { Outlet } from 'react-router-dom'
import Auth from '../frontend/Auth'
import OrganizerBar from './OrganizerBar'

const OrganizerDesk = () => {
  return (
    <>
    <Auth/>
    <OrganizerBar />
    </>
  )
}

export default OrganizerDesk