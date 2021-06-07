import React from 'react'
import './Header.css'
import Logo from '../images/logo.png'

function HeaderBar() {
    return (
        <nav className="header">
        <div className="logo_div">
        <img className = "Logo" src={Logo} alt=""/>
        </div>
        </nav>
    )
}

export default HeaderBar;
