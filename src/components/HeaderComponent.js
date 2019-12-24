import React from "react";
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper">
                <ul>
                    <li className="space"><Link to="/"><h5>Home</h5></Link></li>
                    <li className="space"><Link to="/game"><h5>Game</h5></Link></li>
                    <li className="space"><a href="/signin"><h5>Sign In</h5></a></li>
                    <li className="space"><a href="/signup"><h5>Sign Up</h5></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;