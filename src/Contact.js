import React, { Component } from "react";
import ReactGA from 'react-ga';

import Image from "./Image";
import logo512 from "./assets/favicon-512.png";
import logo192 from "./assets/favicon-192.png";

class Contact extends Component {
    render() {
        ReactGA.set({ "page": "Contact us"});
        ReactGA.pageview("/Contact");
        return (
            <div>
                <h2>Questions, concerns, or suggestions?</h2>
                <p>
                    Contact us here
                </p>
                <Image src={logo192} mode='fit'/>
                <Image src={logo512} mode='fit'/>
            </div>
        );
    }
}
export default Contact;
