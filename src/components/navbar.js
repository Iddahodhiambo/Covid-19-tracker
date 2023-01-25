import React from "react";
import"./nav.css"
import { NavLink } from "react-router-dom"
//import SearchIcon from "@material-ui/icons/search"
function Navbar(){

    return(
    <nav>
        {/*<a></a>*/ }
        <div>
            <ul id="navbar">
    
                <li><NavLink  to="/"className="active"href="index.html">Home</NavLink></li>

                <li><NavLink to="/search"className="active">search</NavLink></li>

                <li><NavLink to="/countries"className="active">countries</NavLink></li>

                <li><NavLink to="/analysis"className="active">analysis</NavLink></li>

            </ul>
        </div>
    </nav>
    )
    
}

export default Navbar;