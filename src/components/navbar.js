import React from "react";
import { NavLink } from 'react-router-dom';
import"./nav.css"
function Navbar(){
    const linkStyles = {
        display: "inline-block",
        padding: "12px",
        margin: "0 15px 15px",
        textDecoration: "none",
        color: "white",
      };
    return(
        <nav>
            <div className="links">
                <NavLink exact to={'/'} style={linkStyles}><strong className="nav-link" >Home</strong ></NavLink>
                <NavLink exact to={'/countries'} style={linkStyles}><strong className="nav-link">Countries</strong></NavLink>
                <NavLink exact to={'/graphs'} style={linkStyles}><strong className="nav-link">Graphs</strong></NavLink>
            </div>
        </nav>
    )
}
export default Navbar;

