import React from 'react'
import Sect1 from '../sections-Admin/sect1/Sect1'
import Sect2 from '../sections-Admin/sect2/Sect2'
import { Link } from 'react-router'

const Admin = () => {
  return (
    <div>
        <h1 style={{padding:"3rem 0"}}>Welcme Admin Panel</h1>
        <Link to="/" style={{textDecoration:"none",color:"black",fontSize:"25px",padding:"2rem 0"}}>Go To Main Page</Link>
        <Sect1/>
        <Sect2/>
    </div>
  )
}

export default Admin