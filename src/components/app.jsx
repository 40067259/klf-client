import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Link,Route,Switch,Redirect} from "react-router-dom";

import Login from './login/login'
import Signup from "./signup/signup";
import Update from "./updateInfo/update";
import Nav from "./nav/nav";
import Logout from "./logout/logout";
import AboutUs from "./aboutUs/aboutUs";
import Email from "./email/email";
import Report from "./report/report";

export default class App extends Component{

    render () {
        return (
            <div>
                <Nav/>
                <Switch>
                    <Route path={'/signup'} component={Signup}></Route>
                    <Route path={'/about'} component={AboutUs}></Route>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/email'} component={Email}></Route>
                    <Route path={'/update'} component={Update}></Route>
                    <Route path={'/logout'} component={Logout}></Route>
                    <Route path={'/report'} component={Report}></Route>
                    {<Redirect to={'/login'}/>}
                </Switch>
            </div>
        )
    }
}