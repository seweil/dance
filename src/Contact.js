import React, { Component } from "react";
import ReactGA from 'react-ga';

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

            </div>
        );
    }
}
export default Contact;
