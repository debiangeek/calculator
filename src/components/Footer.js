import React, { Component } from 'react';
import '../stylesheets/Footer.css';

class Footer extends Component {
    render() {
        return (
        <div className="container" >
            <div className="footer">
                Copyright 2019
                {" "}
                <a className="footerLink" href="https://mcgowanmedia.tech">Mike McGowan
                </a>
            </div>
        </div>
        );
    }
}

export default Footer;