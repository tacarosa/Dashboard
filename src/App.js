import React, { Component } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss"
import { Switch, Route } from 'react-router-dom';
import onboarding from './page/onboarding/Onboarding';
import Dashboard from './page/dashboard/Dashboard';

class App extends Component {
    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={onboarding} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        )
    }
}

export default App
