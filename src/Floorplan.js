import React, { Component } from "react";
import ReactGA from 'react-ga';

import Image from "./Image";
import floor2 from "./assets/2nd floor.jpg"
import floor3 from "./assets/3rd floor.jpg"

class FloorPlan extends Component {
    render() {
        ReactGA.set({ "page": "Floor Plan"});
        ReactGA.pageview("/FloorPlan");
        return (
            <div>
                <div className="suggestLandscape"><i class="fas fa-sync"></i> This page looks better in landscape <i class="fas fa-sync"></i></div>
                <h2>2nd Floor</h2>
                <Image src={floor2} mode='fit' height={252}/>
                <hr/>
                <h2>3rd Floor</h2>
                <Image src={floor3} mode='fit' height={252}/>
            </div>
        );
    }
}
export default FloorPlan;