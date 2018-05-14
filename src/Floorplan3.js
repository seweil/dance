import React, { Component } from "react";
import Image from "./Image";
import floor3 from "./assets/3rdFloor.jpg"
class FloorPlan3 extends Component {
    render() {
        return (
            <div>
                <h2>3rd Floor</h2>
                <Image src={floor3} mode='fit'/>

            </div>
        );
    }
}
export default FloorPlan3;