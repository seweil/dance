import React, { Component } from "react";
import ReactGA from 'react-ga';

import Image from "./Image";
import floor3 from "./assets/3rdFloor.jpg"
class FloorPlan3 extends Component {
    render() {
        ReactGA.set({ "page": "Floor Plan 3"});
        ReactGA.pageview("/FloorPlan3");
        return (
            <div>
                <h2>3rd Floor</h2>
                <Image src={floor3} mode='fit'/>

            </div>
        );
    }
}
export default FloorPlan3;