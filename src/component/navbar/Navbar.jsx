import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Link,useNavigate} from "react-router-dom"

function Navbar() {
  const navigate=useNavigate()
  const user = JSON.parse(localStorage.getItem("currentUser"));
  
  const logout=async()=>{
   await localStorage.removeItem('currentUser');

   const response= await axios.get(`${process.env.REACT_APP_BASE_URL}/logout`)
   navigate('/auth')


  }


  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid p-2 align-center">
  <Link to="/" className='navbar-brand ps-3 '>You Tell I do</Link>
  
  <p className='pe-5 mt-3'>{user.userData.username}</p> 
  </div>
  <button className='btn me-3 btn-outline-secondary' onClick={logout}>Logout</button>
</nav>
      
    </>
  )
}

export default Navbar
