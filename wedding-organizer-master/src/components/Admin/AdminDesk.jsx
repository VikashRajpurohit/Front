import React from 'react'
import { Outlet } from 'react-router-dom'
import Auth from '../frontend/Auth'
import AdminBar from './AdminBar'


const AdminDesk = () => {
  return (
    <>
        <Auth/>
    <AdminBar />

    </>
    )
}

export default AdminDesk