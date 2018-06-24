import React, { Component } from "react";
import ReactGA from 'react-ga';

import './generatedStyles.css';
import htmlSchedule from "./html/Schedule.html";

var modifyClassNames = (function(selectorList, className, add) {
    if (! Array.isArray(selectorList)) {
        selectorList = [selectorList];
    }

    for (var selectorIndex = 0; selectorIndex < selectorList.length; selectorIndex++) {
        var selector = selectorList[selectorIndex];
        var items = document.getElementsByClassName(selector);
        for (var i = 0; i < items.length; i++) {
            if (add) {
                items[i].classList.add(className);
            } else {
                items[i].classList.remove(className);
            }
        }
    }
});

class DanceSchedule extends Component {


    gcaChanged(event) {
        const target = event.target;
        const value = !target.checked;
        console.log("Changed", event, value);

        modifyClassNames(["GCA", "GCA-squeeze"], "hidden", value);
        // modifyClassNames("GCA-squeeze", "hidden", value);
/*
        var selects = document.getElementsByClassName("GCA");
        for(var i =0, il = selects.length;i<il;i++){
           selects[i].className += " hidden";
        }

        var selects = document.getElementsByClassName("GCA-squeeze");
        for(var i =0, il = selects.length;i<il;i++){
           selects[i].className += " hidden";
        }
        */
    }

    render() {
        ReactGA.set({ "page": "Schedule"});        
        ReactGA.pageview("/Schedule");
        
        return (
             <div>
                <h2>Dance Schedule</h2>
                <div>
                    <input type="checkbox" id="showGca" onChange= {this.gcaChanged} defaultChecked={ true }/>
                    <label htmlFor="showGca">Show GCA</label>
                </div>

                <div dangerouslySetInnerHTML= { {__html: htmlSchedule }} />>

            </div>
        );
    }


}
export default DanceSchedule;
