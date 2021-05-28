import React,{Component} from 'react'
import Axios from 'axios'

import {URL} from "../constant";

export default class Report extends Component{
    state = {
        reports: [],
        errorMsg:null
    }

    componentDidMount() {
        const token = localStorage.getItem('myToken')
        const config = { headers: {'token':`${token}` } }
        const url = URL+"/user/report"

        Axios.get(url,config)
            .then(response => {
                const result = response.data
                if(result === '' || result == null || result == undefined){
                    this.setState({errorMsg:'Sorry,User not authenticated or no data'})
                    console.log('No data...')
                }
                else{
                    const reports = result.map(report => {
                        return {userName: report.user_name,activityName: report.activity_name, amount: report.amount,
                            firstOccurrence:report.first_occurrence,lastOccurrence:report.last_occurrence}
                    })
                    this.setState({reports})
                }
            })
            .catch(error => {
                this.setState({errorMsg:error.message})
            })
    }

    render () {
        const {reports,errorMsg} = this.state
        if(errorMsg) return <div style={{width:1100,height:500,float:'right',marginTop:200}}>
            <h1 style={{color:'red',alignmentBaseline:'central',fontSize:40}}>{errorMsg}</h1></div>
        else
        return (
            <div style={{background:"lightblue",height:"740px"}}>
                <table className="table table-bordered" style={{color:"red"}}>
                    <tr style={{fontSize:"20px"}}>
                        <th>user_name</th>
                        <th>activity_name</th>
                        <th>amount</th>
                        <th>first_occurrence</th>
                        <th>last_occurrence</th>
                    </tr>

                    {reports.map((report, index) => (
                        <tr data-index={index}>
                            <td>{report.userName}</td>
                            <td>{report.activityName}</td>
                            <td>{report.amount}</td>
                            <td>{report.firstOccurrence}</td>
                            <td>{report.lastOccurrence}</td>
                        </tr>
                    ))}

                </table>

            </div>
        )
    }
}