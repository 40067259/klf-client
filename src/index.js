import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

//import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,
    document.getElementById('root'))