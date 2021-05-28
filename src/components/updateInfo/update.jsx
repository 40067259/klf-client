import React,{Component} from 'react'
import Axios from 'axios'
import '../login/login.css'

import {URL} from "../constant";
import Login from "../login/login";

export default class Update extends Component{
    state = {
        userName: null,
        password: null,
        phone: null,
        email: null,
        image: null,
        success: null,
        fail: null
    }

    componentDidMount() {
        const url = URL +'/user/getUserInfo'
        const token = localStorage.getItem('myToken')
        const config = { headers: {'token':`${token}` } }
        Axios.get(url,config)
            .then(response => {
                const result = response.data
                console.log('update.....',result)
                if(result === '' || result == null)
                    this.setState({errorMsg:'Sorry,User not authenticated or not have such ad',loading:false})
                else{
                    this.setState({userName:result.name,password:result.password,phone:result.phone,
                     email:result.email,image:result.image})
                }
            })
            .catch(error => {
                this.setState({fail:error.message})
            })
    }

    handleUserName = (e) => {
        const userName = e.target.value
        this.setState({userName})
    }
    handlePassword = (e) => {
        const password = e.target.value
        this.setState({password})
    }
    handleEmail = (e) => {
        const email = e.target.value
        this.setState({email})
    }
    handlePhone = (e) => {
        const phone = e.target.value
        this.setState({phone})
    }
    handleImg = (e) => {
        const image = e.target.files[0];
        this.setState({image})
    }

    postAd = () => {
        const{password,email,phone,image,userName} = this.state
        if(!password || !userName) return
        let params = new FormData()
        params.append("password",password)
        params.append("phone",phone)
        params.append("email",email)
        params.append("image",image)
        params.append("username",userName)

        const token = localStorage.getItem('myToken')
        const url = URL+'/user/update'
        console.log('token from postAd----->',token)
        const config = { headers: { 'Content-Type': 'multipart/form-data','token':`${token}` } }
        Axios.put(url,params,config).
        then( response => {
            const res = response.data
            console.log(res)
            this.setState({success:res,userName: null,password: null,phone: null,
                                email: null,image: null})
        }).catch( error => {
            this.setState({fail:error.message})
        })
    }

    render () {
        const {userName,password,email,phone,image,success,fail} = this.state

        if(success) return <div style={{marginTop:300,display:"flex",justifyContent:"center",alignItems:"center"}}><h1 style={{fontFamily:"fantasy", color:"mediumpurple"}}>{success}</h1></div>
        else if(fail) return <div style={{marginTop:300,display:"flex",justifyContent:"center",alignItems:"center"}}><h1 style={{fontFamily:"monospace", color:"mediumpurple"}}>Post failed</h1></div>
        else if(!userName && !password && !email && !phone) return <div><Login/></div>
        return (
            <div style={{height:"740px",backgroundImage:`url('https://getwallpapers.com/wallpaper/full/d/5/f/138150.jpg')`}}>
                <div className="container" style={{textAlign:"center"}}>
                    <div className="d-flex justify-content-center h-100">
                        <div className="card" style={{height:600, width:500,marginTop:"60px"}}>
                            <div className="card-header">
                                <h3>Edit {userName} profile</h3>
                            </div>
                            <div className="card-body">
                                <div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder={userName}
                                               value = {userName} onChange={this.handleUserName}/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder={password}
                                               value = {password} onChange={this.handlePassword}/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder={email}
                                               value = {email} onChange={this.handleEmail}/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Phone Number"
                                               value = {phone} onChange={this.handlePhone}/>
                                    </div>
                                    <img src={`data:image/jpeg;base64,${image}`} height="70" width="70"
                                         style={{fontSize:"30px",color:"yellowgreen",borderRadius:100}} alt="image changed"/>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="file" className="form-control" placeholder="Item Image"
                                               name = "image" onChange={this.handleImg}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="button" value="Submit" className="btn float-right login_btn" onClick={this.postAd}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}