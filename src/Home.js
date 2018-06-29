import React, { Component } from "react";
import ReactGA from 'react-ga';

import Image1 from "./Image1";
import iosShare from "./assets/iosShare.png";
import iosAdd from "./assets/iosAdd.png";
import iosConfirm from "./assets/iosConfirm.png";
import android1 from "./assets/android1.png";
import android2 from "./assets/android2.png";

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
                { this.installInstructions() }
               
                <br/>

               <h2>Feedback?</h2>
               Let us know what you like or would suggest future conventions do differently<br/>
               Send an email to <a target="_top"  rel="noopener noreferrer" href="mailto: cbts.talk@gmail.com"> cbts.talk@gmail.com</a>

                <br/>
                <br/>
                <br/>
                <span className="finePrint"><p>Updated: Thu Jun 28 22:42:22 DST 2018</p></span>
                <span className="finePrint"><p>Details: { navigator.platform } { window.navigator.userAgent } </p></span>  
            </div>
        );
    }

    installInstructions() {
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test( userAgent );
        }
        // Detects if device is in standalone mode
        const isInStandaloneModeIos = () => ('standalone' in window.navigator) && (window.navigator.standalone);
         
        if (isIos() && !isInStandaloneModeIos()) {
        return <div>
            <h3>Install this web site as an app</h3><br/>
            <b>iPhone &amp; iPad</b><br/>
            <ul>
            <li>Make sure this page is open in Safari (the default web browser)</li>
            <li>Touch the share icon and choose Add to Home Screen<br/></li>
            </ul>
            <Image1 src={iosShare} className="imageTips" /><br/>
            <Image1 src={iosAdd} className="imageTips" /><br/>
            <Image1 src={iosConfirm} className="imageTips" />
        </div>
        }

        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

        var isInStandaloneAndroid = window.matchMedia('(display-mode: standalone)').matches;
        
        if (isAndroid && !isInStandaloneAndroid) {
            return <div>
                <h3>Install this web site as an app</h3><br/>
                <b>Android</b><br/>
                <ul>
                    <li>Make sure this page is open in Chrome (the default web browser)</li>
                    <li>Touch the overflow button (three vertical dots) and choose Add to Home Screen</li>
                </ul>
                <Image1 src={android1} maxWidth="200px" className="imageTips" /><br/>
                <Image1 src={android2} maxWidth="200px" className="imageTips" />
            </div>
            }
    }
}

export default Home;
