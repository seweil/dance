import React, { Component } from "react";
import Image from "./Image";
import floor2 from "./assets/2ndFloor.jpg"
class FloorPlan2 extends Component {
    render() {
        return (
            <div>
                <h2>2nd Floor</h2>
                <Image src={floor2} mode='fit'/>

            </div>
        );
    }
}
export default FloorPlan2;