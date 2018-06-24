import React, { Component } from "react";
import ReactGA from 'react-ga';
import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import './generatedStyles.css';
import htmlSchedule from "./html/Schedule.html";

var modifyClassNames = (function (selectorList, className, add) {
    if (!Array.isArray(selectorList)) {
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

var modifyAttribute = (function (selectorList, attribute, value) {
    if (!Array.isArray(selectorList)) {
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
    rangeKey = "range";
    gcaKey = "showGca"
    specialtyKey = "showSpecialty";

    constructor(props) {
        super(props);

         // Defaults
         var min = 1;
         var max = 7;
         var showGca = true;
         var showSpecialty = true;
 
         // Read saved values
         if (localStorage) {
             var savedRangeString = localStorage.getItem(this.rangeKey);
             if (savedRangeString) {
                 var savedRange = JSON.parse(savedRangeString);
                 if (savedRange && savedRange.min && savedRange.max) {
                     min = savedRange.min;
                     max = savedRange.max;
                 }
             }
 
             var savedShowGcaString = localStorage.getItem(this.gcaKey);
             if (savedShowGcaString) {
                 var savedShowGca = JSON.parse(savedShowGcaString);
                 showGca = !!savedShowGca;
             }

             var savedShowSpecialtyString = localStorage.getItem(this.specialtyKey);
             if (savedShowSpecialtyString) {
                 var savedShowSpecialty = JSON.parse(savedShowSpecialtyString);
                 showSpecialty = !!savedShowSpecialty;
             }
         }
        this.state = {
            showGca,
            showSpecialty,
            min,
            max
        }
    }

    gcaChanged(event) {
        const show = event.target.checked;
        console.log("Changed GCA", show);
        this.updateGca(show);
    }

    updateGca(show) {
        modifyClassNames(["GCA", "GCA-squeeze"], "hidden", !show);
        localStorage.setItem(this.gcaKey, JSON.stringify(show));
    }

    specialtyChanged(event) {
        const show = event.target.checked;
        console.log("Changed specialty", show);
        this.updateSpecialty(show);
    }

    updateSpecialty(show) {
        modifyClassNames(["Specialty", "hideWithSpecialty"], "hidden", !show);
        localStorage.setItem(this.specialtyKey, JSON.stringify(show));
    }

    rangeChanged(values) {
        console.log("Range changed", values);
        var min = values[0];
        var max = values[1];

        modifyClassNames(["MS", "hideWithMS"], "hidden", min > 1);
        modifyClassNames(["Plus", "hideWithPlus"], "hidden", min > 2 || max < 2);
        modifyClassNames(["Adv", "hideWithAdv"], "hidden", min > 3 || max < 3);
        modifyClassNames(["C1", "hideWithC1"], "hidden", min > 4 || max < 4);
        modifyClassNames(["C2", "hideWithC2"], "hidden", min > 5 || max < 5);
        modifyClassNames(["C3a", "hideWithC3a"], "hidden", min > 6 || max < 6);
        modifyClassNames(["C3b", "hideWithC3b", "C4"], "hidden", min > 7 || max < 7);

        var spanCount = max - min + 1;
        modifyAttribute("Merged", "colspan", spanCount);

        localStorage.setItem(this.rangeKey, JSON.stringify({ min, max }));
    }


    componentDidMount() {
        // Update display
        this.rangeChanged([this.state.min, this.state.max]);
        this.updateGca(this.state.showGca);
        this.updateSpecialty(this.state.showSpecialty);
    }

    render() {
        ReactGA.set({ "page": "Schedule" });
        ReactGA.pageview("/Schedule");

        var marks = { 1: "MS", 2: "Plus", 3: "Adv", 4: "C1", 5: "C2", 6: "C3a", 7: "C3b+" };
        return (
            <div>
                <div className="CalendarControls">
                    <h2>Dance Schedule</h2>
                    <span>
                        <input type="checkbox" id="showGca" onChange={this.gcaChanged.bind(this)} defaultChecked={this.state.showGca} />
                        <label htmlFor="showGca">Show GCA</label>
                    </span>
                    &nbsp;&nbsp;&nbsp;
                <span>
                        <input type="checkbox" id="showSpecialty" onChange={this.specialtyChanged.bind(this)} defaultChecked={this.state.showSpecialty} />
                        <label htmlFor="showSpecialty">Show Specialty</label>
                    </span>
                    <br />
                    <div className="rangeContainer">
                        <Range
                            allowCross={false}
                            min={1}
                            max={7}
                            marks={marks}
                            defaultValue={[this.state.min, this.state.max]}
                            onChange={this.rangeChanged}
                        />
                    </div>
                    <br /><br />
                </div>

                <div dangerouslySetInnerHTML={{ __html: htmlSchedule }} />>

            </div>
        );
    }


}
export default DanceSchedule;
