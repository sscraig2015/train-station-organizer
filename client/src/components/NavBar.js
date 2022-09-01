import React from "react";
import { NavLink } from 'react-router-dom'

function NavBar({user}) {
  

  if (user) {
    return (
      <div className = "navBar">
        <ul>
          <li> <NavLink to = '/'>Home</NavLink> </li>
          <li> <NavLink to = '/trains'>Trains</NavLink> </li>  
          <li> <NavLink to = '/myProfile'>My Tickets</NavLink></li>     
        </ul>
      </div>
    )
  } else {
    return (
    <div className = "navBar">
      <ul>
        <li> <NavLink to = '/'>Home</NavLink> </li>
        <li> <NavLink to = '/trains'>Trains</NavLink> </li>       
      </ul>
    </div>
  );
  }
  
}


export default NavBar;
