import React,{Component} from 'react'

import emailjs from 'emailjs-com'



export default class Email extends Component{

    sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail','template_qnhrt9i',e.target,'user_4x8JFBx5bpqK0p8aB3LKG').
        then(result => {
            console.log(result.text)
        }).catch(
            error =>{console.log(error.text)}
        )
        e.target.reset()
    }

    render () {
        return (
            <div style={{height:"740px",backgroundImage:`url('https://getwallpapers.com/wallpaper/full/2/8/1/137884.jpg')`}}>
                <br/>
                <br/>

                <div id="form" >

                    <h3>INQUIRY | CONSULTATION</h3>

                    <p>Have a question? Do not hesitate to leave a message, we will do our best to respond to you in time.</p>

                    <hr />

                    <form onSubmit={this.sendEmail} enctype="multipart/form-data">
                        <div class="row uniform">
                            <div class="6u 12u$(xsmall)">
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div class="6u$ 12u$(xsmall)">
                                <input type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div class="12u$">
                                <div class="select-wrapper">
                                    <select name="category" id="category">
                                        <option value="Unspecified">- Category (optional) -</option>
                                        <option value="Business Law">Employee engagement software</option>
                                        <option value="Trademarks">Integrated rewards marketplace</option>
                                        <option value="Immigration Law">Reward sourcing and fulfillment</option>
                                        <option value="Family Law">Third-party logistics</option>
                                        <option value="Legal Translation">Job Application</option>
                                    </select>
                                </div>
                            </div>

                            <div class="4u$ 12u$(small)">
                                <input type="checkbox" id="priority-high" name="priority" value="high"/>
                                <label for="priority-high">High Priority</label>
                            </div>

                            <div class="12u$">
                                <textarea name="message" id="message" placeholder="Enter your message..." rows="6"></textarea>
                            </div>

                            <div class="12u$">
                                <ul class="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                        </div>
                    </form>

                    <hr />
                </div>

                <footer id="footer">
                    <div class="copyright">
                        <p>Copyright &copy; 2021 <a>KLF GROUP Cor</a>. All rights reserved.</p>
                    </div>
                </footer>

            </div>
        )
    }
}