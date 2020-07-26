import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Sidebar.scss"
import logo from "../../../assets/img/logo2.svg"
import menu from "../../../assets/img/menu.svg"
import home from "../../../assets/img/home.svg"
import team from "../../../assets/img/team.svg"
import gear from "../../../assets/img/gear.svg"

class Sidebar extends Component {

    // Component Rendered
    sidebarMenuList = () => {
        let {minimize} = this.props
        return (
            <ul className="sidebar-menu-list">
                <li>
                    <NavLink
                        to="/dashboard/peserta"
                        activeClassName="sidebar-menu-link-active"
                        className="sidebar-menu-link"
                        isActive={(match, location) => {
                            if (location.pathname === "/dashboard" || location.pathname === "/dashboard/peserta") {
                                return true
                            }
                        }}
                    >
                    <img src={team} alt="team" />
                    
                    
                    {(minimize) ? "" : "Peserta" }
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/history"
                        activeClassName="sidebar-menu-link-active"
                        className="sidebar-menu-link"
                    >
                    <img src={gear} alt="gear" />
                    
                    {(minimize) ? "" : "History" }
                    </NavLink>
                </li>
            </ul>
        )
    }
    
    render() {
        let {minimize} = this.props
        return (
            <div className={`sidebar-container ${(minimize)? "minimize" : ""}  ${this.props.customColor}` }>
                <div className="sidebar-header">
                    {
                        (minimize) ? "" :
                        <Link to="/dashboard">
                            <img src={logo} alt="logo" />
                        </Link> 
                    }
                    <button 
                        className="btn btn-menu"
                        onClick={this.props.handleClickMinimize}>
                        <img src={menu} alt="menu" />
                    </button>
                </div>
                <div className={`tag-dashboard ${(minimize)? "minimize" : ""}`}>
                    <img src={home} alt="menu" />
                    {(minimize) ? "" : "Dashboard" }
                </div>
                <hr />
                {this.sidebarMenuList()}
            </div>
        )
    }
}

export default Sidebar
