import React from "react";

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Search </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Saved">Saved</a>
                </li>
                
                </ul>
            </div>
        </nav>
    )
}

export default Nav;