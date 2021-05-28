import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../nav/img/KLF Group.png'
import PubSub from "pubsub-js";

export default class Nav extends Component{

    state = {
        logged: false,
        username: null
    }
    componentDidMount() {
        PubSub.subscribe('login',(msg,username) => {
            this.setState({
               logged:true,
                username:username
            })
        })
        PubSub.subscribe('logout',(msg,token) => {
            this.setState({
                logged:false,
                username:null
            })
        })
    }

    render () {
        const{logged,username} = this.state
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success static-top">
                    <img src={logo} height="80" alt="no img" />&nbsp;&nbsp;&nbsp;&nbsp;
                    {username && <h4 style={{color:'white',paddingLeft:'100'}}>Welcome,{username}</h4>}
                    <div className="container" style={{float:'left'}}>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={"/about"}>About Us</Link>
                                </li>
                                {
                                  !logged &&  <li className="nav-item active">
                                        <Link className="nav-link" to={"/login"}>Log In</Link>
                                    </li>
                                }

                                <li className="nav-item">
                                    <Link className="nav-link" to={"/signup"}>Sign Up</Link>
                                </li>
                                {
                                  logged && <li className="nav-item" id="logout" >
                                        <Link className="nav-link" to={"/logout"}>Log Out</Link>
                                    </li >
                                }
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="btn btn-outline-dark dropdown-toggle"
                                                data-toggle="dropdown">Client Service</button>
                                        <div className="dropdown-menu">
                                            <div className="dropdown-header">Services</div>
                                            <Link className="dropdown-item" to={"/update"}>Update Your Profile</Link>
                                            <Link className="dropdown-item" to={"/email"}>Contact Us</Link>
                                            <Link className="dropdown-item" to={"/report"}>Get a report</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}