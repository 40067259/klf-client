import React,{Component} from 'react'

export default class AboutUs extends Component{

    render () {
        return (
            <div style={{height:"740px",backgroundImage:`url('https://getwallpapers.com/wallpaper/full/a/d/0/137969.jpg')`}}>
                <br/><br/><br/><br/><br/><br/>
                <h2 style={{color:"yellow",marginLeft:"400px"}}>
                    The KLF Group is a Canadian company specializing in software<br/>
                    development and logistics for employee recognition and customer<br/>
                    loyalty programs. KLF’s suite of services help companies implement,<br/>
                    improve, and reduce the cost of operating their reward programs.<br/>
                    Services include:<br/><br/>
                </h2>
                <p style={{color:"blue",fontSize:"24px",marginLeft:"400px",fontFamily:"fantasy"}}>
                    Employee engagement software. Integrated rewards marketplace.<br/> Reward sourcing and fulfillment. Third-party logistics.
                </p>
                <br/><br/><br/><br/><br/>
                <footer id="footer">
                    <div className="copyright" style={{color:"darkblue"}}>
                        <p>Copyright &copy; 2021 <a>KLF GROUP Corp</a>. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        )
    }
}