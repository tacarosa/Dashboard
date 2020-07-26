import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import NavbarDashboard from '../../components/toolbar/navbar/NavbarDashboard'
import './Dashboard.scss'
import theme from "../../assets/img/theme.svg"
import Sidebar from '../../components/toolbar/sidebar/Sidebar'
import TabelPeserta from '../../components/TabelPeserta/TabelPeserta'
import History from '../../components/history/History'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             customColor : 'blue',
             colorPicker : false,
             link : "peserta",
             minimize : false
        }
        this.handleChangeTheme = this.handleChangeTheme.bind(this);
        this.showColorPicker = this.showColorPicker.bind(this);
        this.handleClickMinimize = this.handleClickMinimize.bind(this)
    }

    handleClickMinimize() {
        this.setState({
            minimize: !this.state.minimize
        });
    }

    handleClickSidebarLink = ({link}) => {
        this.setState({
            link : link
        })
    }

    showColorPicker() {
        this.setState({colorPicker:!this.state.colorPicker});
    }

    handleChangeTheme = (color) => {
        this.setState({
            customColor: color,
            colorPicker : false
        });
    }

    // Component Rendered
    colorPickerList = () => {
        if(this.state.colorPicker){
            return (
                <React.Fragment>
                    <button 
                        className="btn btn-theme-list colorfull"
                        onClick={()=>this.handleChangeTheme("colorfull")}
                        >
                    </button>
                    <button 
                        className="btn btn-theme-list dark"
                        onClick={()=>this.handleChangeTheme("dark")}
                        >
                    </button>
                    <button 
                        className="btn btn-theme-list blue"
                        onClick={()=>this.handleChangeTheme("blue")}
                        >
                    </button>
                </React.Fragment>
            )
        }
    }

    switchView = () => {
        let { customColor } = this.state

        return (
            <div className={(this.state.minimize) ? "minimize" : ""} id="dashboard-container">
                <div className={`dashboard-content-header ${customColor}`}>
                    <h3>
                        {(window.location.pathname !== "/dashboard/history") ? "Daftar Peserta" : "History"}
                    </h3>
                </div>
                <Switch>
                    <Route exact path="/dashboard" component={() => <TabelPeserta customColor={customColor} />} />
                    <Route path="/dashboard/peserta" component={() => <TabelPeserta customColor={customColor} />} />
                    <Route path="/dashboard/history" component={() => <History customColor={customColor} />} />
                </Switch>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Sidebar 
                    customColor={this.state.customColor}
                    minimize={this.state.minimize}
                    handleClickMinimize={this.handleClickMinimize}
                />
                <NavbarDashboard 
                    customColor={this.state.customColor}
                />
                
                {this.switchView()}
                
                <div className="btn-theme-wrapper">
                    <button className="btn btn-theme" onClick={this.showColorPicker}>
                        <img src={theme} alt="theme" />
                    </button>
                    {this.colorPickerList()}
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard
