import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-3 col-sm-2">
                        <h5 style={{color: "floralwhite"}}>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/game'>Games</Link></li>
                            <li><Link to='/signup'>Sign Up</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 offset-3 col-sm-4">
                        <h5 style={{color: "floralwhite"}}>These are my social networks</h5>
                        <div>
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/Doesntexis"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/diogenes-fiorezi"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/diiogeneesf/"><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon btn-github" href="https://github.com/DiogenesF"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="mailto:diogenesfiorezi@hotmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p style={{color: "floralwhite"}}>© Diogenes Fiorezi 2019</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;