import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";
import ReactGA from 'react-ga';


import Home from "./Home";
import DanceSchedule from "./danceSchedule";
import Contact from "./Contact";
import FloorPlan from "./Floorplan";

ReactGA.initialize('UA-119866125-1', { "debug": true });
ReactGA.pageview(window.location.pathname + window.location.search);

class Main extends Component {

    render() {

        let allPages = [
            { name: "Home", path: "/", class: Home, exact: true },
            { name: "Schedule", path: "/schedule", class: DanceSchedule },
            { name: "Floor Plan", path: "/floorplan", class: FloorPlan },
            { name: "Contact us", path: "/contact", class: Contact }
        ];
        return (
            <div >
                <HashRouter>
                    <div className="page-container">
                        <nav>
                            <div className="navWide">
                                <ul >
                                    {allPages.map((page) =>
                                        <li key={page.path}>
                                            <NavLink to={page.path} key={page.path}>{page.name}</NavLink>
                                        </li>)}
                                </ul>
                            </div>
                            <div className="navNarrow">
                                <div onClick={this.burgerToggle}>
                                    <i
                                        className="fa fa-bars fa-2x"
                                    />
                                    <span className="navNarrowMenu">Menu</span>
                                </div>
                                <div className="narrowLinks">
                                    <ul>
                                        {allPages.map((page) =>
                                            <li key={page.path}>
                                                <NavLink to={page.path} key={page.path} onClick={this.burgerToggle}>{page.name}</NavLink>
                                            </li>)}
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="content">
                            {allPages.map((page) => <Route exact={page.exact} path={page.path} component={page.class} key={page.path}/>)}
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
