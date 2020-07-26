import React, { Component } from 'react'
import './Navbar.scss'
import logo from "../../../assets/img/logo.svg"
import { Link } from 'react-router-dom'

class NavbarOnboarding extends Component {
    render() {
        return (
            <header className="navbar-header">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </header>
        )
    }
}

export default NavbarOnboarding
