import React from "react";
import SignIn from "./Accounts/SignIn";
import {
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar dark expand="md" className="fixed-top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/my-react-project">
                    <span className="fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/game">
                    <span className="fa fa-info fa-lg"></span>Games
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/signup">
                    <span className="fa fa-list fa-lg"></span>Sign Up
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <SignIn
          isModalOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
        />
      </>
    );
  }
}

export default Header;
