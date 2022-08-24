import React from "react";
import { NavLink } from 'react-router-dom'

function NavBar() {
  

  return (
    <div>
      <NavLink to = '/'>Home</NavLink>
      <NavLink to = '/flights'>Flights</NavLink>
      <NavLink to = '/passengers'>Passengers</NavLink>
    </div>
  );
}


export default NavBar;
