import React from 'react'
import {Link} from "react-router-dom"

function LandingPage() {
  return (
    <div className='landing '>
       <div className='row'>
    <div className="col-md-12 my-auto">
        <h2 style={{color:"white",textAlign:"center",fontSize:"120px"}}>You Tell I do</h2>
        <h1 style={{color:"white",textAlign:"center"}}>Math is Fun.</h1>
    </div>
    <div className="col-md-12 landing-btn mt-3">
         <Link to="/auth">
            <button className='btn btn-warning'>Get Started</button>
        </Link>
    </div>
    </div>

     </div>
   

  )
}

export default LandingPage
