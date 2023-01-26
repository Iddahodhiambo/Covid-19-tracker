import React from "react";
import"./Navbar.css"
 
function Navbar(){
    return(
    <nav>
        {/*<a></a>*/ }
        <div>
            <ul id="navbar">
    
                <li><a className="active"href="index.html">Home</a></li>

                <li><a href="index.html">Search</a></li>

                <li><a href="index.html">countries</a></li>
            </ul>
        </div>
    </nav>
    )
    
}

export default Navbar;