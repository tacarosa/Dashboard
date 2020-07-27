import React, { Component } from 'react'
import './Navbar.scss'
import user from "../../../assets/img/profile.svg"
import { NavDropdown } from "react-bootstrap"

class NavbarDashboard extends Component {

    logout = () => {
        sessionStorage.removeItem("Username")
    }
    render() {
        return (
            <header className={`navbar-header navbar-dashboard ${this.props.customColor}`}>
                
                <NavDropdown 
                    title={
                        <img src={user} alt="logo" />
                    }>
                    <NavDropdown.Item disabled>Admin</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" onClick={()=>this.logout()}>Keluar</NavDropdown.Item>
                </NavDropdown>
            </header>
        )
    }
}

export default NavbarDashboard

