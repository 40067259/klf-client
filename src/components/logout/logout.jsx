import React,{Component} from 'react'
import Axios from 'axios'
import PubSub from "pubsub-js";

import {URL} from "../constant";
export default class Logout extends Component{
    state = {
        success: null
    }

    componentDidMount() {
        const url = URL+'/user/logout'
        const token = localStorage.getItem('myToken')
        console.log('token----->',token)
        const config = { headers: {'token':`${token}`}}
        localStorage.setItem('myToken',null)
        PubSub.publish('logout',token)
        Axios.get(url,config)
             .then(response => {
                 const res = response.data
                 const success = res
                 console.log(res,'logout----------------')
                 localStorage.setItem('myToken',null)
                 console.log('token After----->',token)
                 this.setState({success})
             })
    }

    render () {
        const{success} = this.state
        if(success){
            return (
                <div style={{width:1100,height:500,float:'right',marginTop:200}}>
                    <h1 style={{color:'yellow',alignmentBaseline:'central'}}>{success}</h1>
                </div>
            )
        }
       else
            return (
                <div style={{width:1100,height:500,float:'right',marginTop:200}}>
                    <h1 style={{color:'yellowgreen',alignmentBaseline:'central'}}>You have failed to log out</h1>
                </div>
            )
    }
}