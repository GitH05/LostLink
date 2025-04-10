import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const IndexPage = () => {
  return (
    <div>
       <header className="container">
        <Link to="/"><h1>LostLink</h1></Link>
        <p>Reunite Found Treasures With Their Owners</p>
      
        <NavBar/>
        <Outlet/>
        </header>
    </div>
  )
}

export default IndexPage
