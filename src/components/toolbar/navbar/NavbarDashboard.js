import React, { Component } from 'react'
import './Navbar.scss'
import user from "../../../assets/img/profile.svg"
import { Link } from 'react-router-dom'

class NavbarDashboard extends Component {
    render() {
        return (
            <header className={`navbar-header navbar-dashboard ${this.props.customColor}`}>
                <Link to="/">
                    <img src={user} alt="logo" />
                </Link>
            </header>
        )
    }
}

export default NavbarDashboard

