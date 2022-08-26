import React from "react";
import { NavLink } from 'react-router-dom'

function NavBar() {
  

  return (
    <div className = "navBar">
      <ul>
        <li> <NavLink to = '/'>Home</NavLink> </li>
        <li> <NavLink to = '/trains'>Trains</NavLink> </li>
        <li> <NavLink to = '/passengers'>Passengers</NavLink> </li>
        
      </ul>
    </div>
  );
}


export default NavBar;
