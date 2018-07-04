import React, { Component } from "react";
import ReactGA from 'react-ga';

import Image1 from "./Image1";
import floor2 from "./assets/2nd floor.jpg"
import floor3 from "./assets/3rd floor.jpg"
import floor2alt from "./assets/2nd floor alternate.jpg"
import floor3alt from "./assets/3rd floor alternate.jpg"

class FloorPlan extends Component {
    render() {
        ReactGA.set({ "page": "Floor Plan"});
        ReactGA.pageview("/FloorPlan");
        return (
            <div>
                <div className="suggestLandscape"><i className="fas fa-sync"></i> This page looks better in landscape <i className="fas fa-sync"></i></div>
                <h2>2nd Floor</h2>
                <Image1 src={floor2} maxWidth="600px"/>
                <hr/>
                <h2>3rd Floor</h2>
                <Image1 src={floor3} maxWidth="500px"/>
                <hr/>
                <h2>Alternate layout - When Grand is set for banquet</h2><br/>
            
                <h2>2nd Floor</h2>
                <Image1 src={floor2alt} maxWidth="600px" />
                <hr />
                <h2>3rd Floor</h2>
                <Image1 src={floor3alt} maxWidth="500px" />
                <hr /></div>
        );
    }
}
export default FloorPlan;