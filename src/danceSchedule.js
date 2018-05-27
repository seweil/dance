import React, { Component } from "react";
import Image from "./Image";
import ReactGA from 'react-ga';


import danceSchedule from "./assets/schedule.png"
class DanceSchedule extends Component {
    render() {
        ReactGA.set({ "page": "Schedule"});        
        ReactGA.pageview("/Schedule");
        
        return (
             <div>
                <h2>Dance Schedule</h2>
                <Image src={danceSchedule} mode='fit'/>

            </div>
        );
    }
}
export default DanceSchedule;
