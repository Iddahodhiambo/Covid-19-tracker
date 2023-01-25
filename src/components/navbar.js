import React from "react";
import"./nav.css"
 
function Navbar(){
    return(
    <nav>
        {/*<a></a>*/ }
        <div>
            <ul id="navbar">
    
                <li><a className="active"href="index.html">Home</a></li>

                <li><a href="index.html">search</a></li>

                <li><a href="index.html">countries</a></li>
            </ul>
        </div>
    </nav>
    )
    
}

export default Navbar;