import React from 'react'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">

        <div className="navitem">

            <img src={require('../Assets/Profile_pic.jpg')} alt='Profile Pic' />

        </div>

        <div className="navitem links">

            <div className="link">01. History</div>

            <div className="link">02. Team</div>

        </div>

    </div>
  )
}

export default Navbar