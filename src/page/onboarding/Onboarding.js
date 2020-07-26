import React, { Component } from 'react'
import './Onboarding.scss'
import NavbarOnboarding from "../../components/toolbar/navbar/NavbarOnboarding"
import onboarding from "../../assets/img/search2.png"
import onboarding2 from "../../assets/img/search3.png"
import eye from "../../assets/img/eye.svg"
import eyeoff from "../../assets/img/eye-closed.svg"

export class Onboarding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            type: "password"
        }
        this.showHide = this.showHide.bind(this);
    }
        
    showHide() {
        this.setState({
          type: this.state.type === "input" ? "password" : "input"
        });
    }

    formComponent = () => {
        return (
            <form>
                <h2>Sign In to Dashboard</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type={this.state.type} 
                        className="form-control" 
                        id="password" 
                        inputMode="tel"
                        required
                    />
                    <span className="password-show" onClick={this.showHide}>
                        <img src={(this.state.type === "input") ? eye : eyeoff} alt="show-password"/>
                    </span>
                </div>
                <div className="btn lupa-password">
                    Lupa Password ?
                </div>
                <button 
                    className="btn btn-dashboard" 
                    onClick={()=>this.props.history.push("/dashboard")}
                    >
                    Sign In
                </button>
            </form>
        )
    }

    render() {
        return (
            <React.Fragment>
                <NavbarOnboarding />
                <div className="onboarding-container">
                    <div className="onboarding-content-wrapper">
                        <div className="content-left">
                            {this.formComponent()}
                        </div>
                        <div className="content-right">
                            <img src={onboarding2} alt="img" className="floating onboard2"/>
                            <img src={onboarding} alt="img" className="floating" style={{animationDelay:"-3s"}}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Onboarding
