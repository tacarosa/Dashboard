import React, { Component } from 'react'
import './Onboarding.scss'
import NavbarOnboarding from "../../components/toolbar/navbar/NavbarOnboarding"
import onboarding from "../../assets/img/search2.png"
import onboarding2 from "../../assets/img/search3.png"
import eye from "../../assets/img/eye.svg"
import eyeoff from "../../assets/img/eye-closed.svg"
import store, { history } from "../../store"
import { connect } from "react-redux"
import { setUserLogin } from "../../Reducers/UserRedusers"
import { Alert } from 'react-bootstrap'

export class Onboarding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            type: "password",
            username : "",
            password : "",
            showError : false
        }
        this.showHide = this.showHide.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidUpdate(){
        if(this.props.data_login.status === "berhasil"){
            history.push("/dashboard")
        }
    }

    formValidate = () => {
        let { username, password } = this.state
        if(username !== "" && password !== ""){
            return true
        }
        else {
            return false
        }
    }

    handleLogin(e) {
        e.preventDefault();

        if(this.formValidate()){
            store.dispatch(setUserLogin(this.state.username, this.state.password))
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.id] : e.target.value,
            showError : false
        })
    }
        
    showHide() {
        this.setState({
          type: this.state.type === "input" ? "password" : "input"
        });
    }

    alertComponent = () => {
        if(this.props.data_login.status === "gagal") {
            return (
                <Alert variant="danger">
                    Username atau password salah
                </Alert>
            )
        }
    }

    formComponent = () => {
        return (
            <form>
                <h2>Sign In to Dashboard</h2>
                {this.alertComponent()}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="ketik: admin"
                        onChange={this.handleChange}
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
                        placeholder="Ketik: 123456"
                        onChange={this.handleChange}
                        required
                    />
                    <span className="password-show" onClick={this.showHide}>
                        <img src={(this.state.type === "input") ? eye : eyeoff} alt="eye"/>
                    </span>
                </div>
                <div className="btn lupa-password">
                    Lupa Password ?
                </div>
                <button 
                    type="submit"
                    className="btn btn-dashboard" 
                    onClick={this.handleLogin}
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

function mapStateToProps(state) {
    return {
        id_token: state.user.id_token,
        data_login: state.user.data_login,
    };
  }

export default connect(mapStateToProps)(Onboarding);
