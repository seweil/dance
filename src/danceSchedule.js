import React, { Component } from "react";
import Image from "./Image";

import danceSchedule from "./assets/schedule.png"
class DanceSchedule extends Component {
    render() {
        return (
             <div>
                <h2>Dance Schedule</h2>
                <Image src={danceSchedule} mode='fit'/>

            </div>
        );
    }
}
export default DanceSchedule;
