import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/LostLink.jpg'
import Dashboard from '../assets/dashboard.jpg'
import { useAuth } from '../hooks'
import './Nav.css'
const NavBar = () => {
 const {user} =useAuth()
  return (
    <>

       <nav id="nav">
            <div id="logo-container">
               <Link to='/'><img className='navlogo' src={Logo} alt='logo'/></Link>
                
            </div>
            
            <ul id="nav-items">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/lostform'>Lost</Link></li>
                <li><Link to='/foundform'>Found</Link></li>
                <li><Link to='/post'>Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <div div="dashboard">
                <Link to={!user?"/login":'/profile'}><img className='navlogo' src={Dashboard} alt='dashboard'/></Link>
                
            </div>
        </nav>
       
        <br/><hr/><br/>
        <section id="home">
            <h2>Welcome to LostLink</h2>
            <p><marquee>Lost something important? Found an item that doesn't belong to you? 
                LostLink is here to help! Our platform connects people who have lost 
                items with those who have found them.</marquee></p>
          </section>
    </>
  )
}

export default NavBar
