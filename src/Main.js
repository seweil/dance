import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import DanceSchedule from "./danceSchedule";
import Contact from "./Contact";
import FloorPlan2 from "./Floorplan2";
import FloorPlan3 from "./Floorplan3";

class Main extends Component {

    render() {

        let allPages = [
            { name: "Home", path: "/", class: Home, exact: "true" },
            { name: "Schedule", path: "/schedule", class: DanceSchedule },
            { name: "Floor 2", path: "/floorplan2", class: FloorPlan2 },
            { name: "Floor 3", path: "/floorplan3", class: FloorPlan3 },
            { name: "contact!", path: "/contact", class: Contact }
        ];
        return (
            <div >
                <HashRouter>
                    <div className="page-container">
                        <nav>
                            <div className="navWide">
                                <ul >
                                    {allPages.map((page) =>
                                        <li>
                                            <NavLink to={page.path} key={page.path}>{page.name}</NavLink>
                                        </li>)}
                                </ul>
                            </div>
                            <div className="navNarrow">
                                <i
                                    className="fa fa-bars fa-2x"
                                    onClick={this.burgerToggle}
                                />
                                <div className="narrowLinks">
                                    <ul>
                                        {allPages.map((page) =>
                                            <li>
                                                <NavLink to={page.path} key={page.path} onClick={this.burgerToggle}>{page.name}</NavLink>
                                            </li>)}
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="content">
                            {allPages.map((page) => <Route exact={page.exact} path={page.path} component={page.class}/>)}
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }


    burgerToggle() {
        let linksEl = document.querySelector(".narrowLinks");
        linksEl.classList.toggle("show");
    }
}

export default Main;
