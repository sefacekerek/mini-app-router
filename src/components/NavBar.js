import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutUs">About</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/members">Members</NavLink>
    </nav>
  )
}
