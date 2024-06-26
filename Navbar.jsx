import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = (setShowLogin) => {

    const [menu,seteMenu] = useState("menu")

  return (
    <div className='navbar'>
    <img src={assets.logo} alt="" className="logo" />
    <ul className="navbar-menu">
        <Link to='/' onClick={()=>seteMenu("home")} className={menu=="home"?"active":""}>Home</Link>
        <a href='#explore-menu'onClick={()=>seteMenu("menu")} className={menu=="menu"?"active":""}>menu</a>
        <a href='app-download'onClick={()=>seteMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>seteMenu("contact-us")} className={menu=="contact-us"?"active":""}>contact-us</a>
    </ul>
    <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>
    </div>
  )
}

export default Navbar