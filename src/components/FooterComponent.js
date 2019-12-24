import React from "react";

function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">My contact</h5>
                        <p className="grey-text text-lighten-4">These are the links to my social networks</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/Doesntexis"><i class="fa fa-facebook-official fa-3x"></i></a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/DiogenesF/"><i class="fa fa-github-square fa-3x"></i></a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/diogenes-fiorezi"><i class="fa fa-linkedin-square fa-3x"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © Diogenes Fiorezi 2019
                </div>
            </div>
        </footer>
    );
}

export default Footer;