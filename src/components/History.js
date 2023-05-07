import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function History() {
  return (
    <>
      <div>History</div>
      <nav className="main-nav" >
        <NavLink to="company">Our Company</NavLink>
        <NavLink to="team">Team</NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
