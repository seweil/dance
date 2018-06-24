import React, { Component } from "react";
import ReactGA from 'react-ga';
import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
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

var modifyAttribute = (function(selectorList, attribute, value) {
    if (! Array.isArray(selectorList)) {
        selectorList = [selectorList];
    }

    for (var selectorIndex = 0; selectorIndex < selectorList.length; selectorIndex++) {
        var selector = selectorList[selectorIndex];
        var items = document.getElementsByClassName(selector);
        for (var i = 0; i < items.length; i++) {
            items[i].setAttribute(attribute, value);
        }
    }
});

class DanceSchedule extends Component {


    gcaChanged(event) {
        const target = event.target;
        const value = !target.checked;
        console.log("Changed", event, value);

        modifyClassNames(["GCA", "GCA-squeeze"], "hidden", value);
    }

    rangeChanged(values) {
        console.log("Range changed", values);
        var min = values[0];
        var max = values[1];

        modifyClassNames(["MS", "hideWithMS"], "hidden", min > 0);
        modifyClassNames(["Plus", "hideWithPlus"], "hidden", min > 1 || max < 1);

        var spanCount = max - min + 1;
        modifyAttribute("Merged", "colspan", spanCount);
    }

    render() {
        ReactGA.set({ "page": "Schedule"});        
        ReactGA.pageview("/Schedule");

        var marks = { 0: "MS", 1: "Plus", 2: "Adv", 3: "C1", 4: "C2", 5: "C3a", 6: "C3b", 7: "C3b & C4" };
        return (
            <div>
             <div className="CalendarControls">
                <h2>Dance Schedule</h2>
                <div>
                    <input type="checkbox" id="showGca" onChange= {this.gcaChanged} defaultChecked={ true }/>
                    <label htmlFor="showGca">Show GCA</label>
                </div>
                <br/>
                <Range
                    allowCross={ false}
                    min={ 0 }
                    max={ 7 }
                    marks={ marks }
                    defaultValue= { [0, 7] }
                    onChange={ this.rangeChanged }
                />
                <br/><br/>
</div>

                <div dangerouslySetInnerHTML= { {__html: htmlSchedule }} />>

            </div>
        );
    }


}
export default DanceSchedule;
