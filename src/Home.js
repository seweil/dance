import React, { Component } from "react";
import ReactGA from 'react-ga';

import Image from "./Image";
import iosShare from "./assets/iosShare.png";
import iosAdd from "./assets/iosAdd.png";
import iosConfirm from "./assets/iosConfirm.png";

// import Image from "./Image";
// import logo from "./assets/favicon-192.png";
class Home extends Component {
    render() {
        ReactGA.set({ "page": "Home"});
        ReactGA.pageview("/Home");
        
        return (
            <div>
                <h2>Welcome to Circle Back to Seattle!</h2>
                <h3>Fast facts</h3>
                <ul>
                    <li>
                        <b>Hotel</b><br/>
                        <a href="http://www.sheratonseattle.com/">Sheraton Seattle Hotel</a>
                        <br/>
                        <a href="https://www.google.com/maps/place/Sheraton+Seattle+Hotel/@47.6110957,-122.3360236,17z/data=!3m1!4b1!4m7!3m6!1s0x54906ab45f555241:0xd56f6e55dd269b72!5m1!1s2018-07-08!8m2!3d47.6110921!4d-122.333835">
                            1400 6th Ave, Seattle, WA 98101
                        </a>
                        <br/>
                        Phone:  206-292-9500 
                    </li>
                    <li>
                        <b>Caller school</b><br />
                           Sat June 30 - Wed July 4 
                    </li>
                    <li>
                        <b>Trails End Dance</b> with Ett McAtee and Bill Eyler<br/>
                        Wed July 4, 7-10pm
                    </li>
                    <li>
                        <b>Square Dancing</b><br/>
                        Thurs July 5 - Sat July 7
                    </li>
                    <b>Fun Badge Tour</b><br/>
                    Sun July 8 - be there!
                </ul>
                <br/>

                <h3>Install this as an app</h3>
                <ul>
                    <li>
                        <b>iPhone &amp; iPad</b><br/>
                        Touch the share icon and choose Add to Home Screen<br/>
                        <Image src={iosShare} height={85} className="imageTips" />
                        <Image src={iosAdd} height={300} className="imageTips" />
                        <Image src={iosConfirm} height={300} className="imageTips" />
                    </li>
                    <li>
                        <b>Android</b><br/>
                        Touch the overflow button (three vertial dots) and choose Add to Home Screen
                    </li>
                </ul>
                <br/><br/>
                <span className="finePrint"><p>Updated: Tue Jun 26 21:56:48 DST 2018</p></span>                
            </div>
        );
    }
}

export default Home;
