import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import FloorPlan2 from "./Floorplan2";

class Main extends Component {
    render() {
        return (
            <div >
                <HashRouter>
                    <div className="page-container">
                        <nav>
                            <div className="navWide">
                                <ul >
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                    <li><NavLink to="/floorplan2">Floor 2</NavLink></li>
                                </ul>
                            </div>
                            <div className="navNarrow">
                                <i
                                    className="fa fa-bars fa-2x"
                                    onClick={this.burgerToggle}
                                />
                                <div  className="narrowLinks">
                                <ul>
                                    <li><NavLink to="/" onClick={this.burgerToggle}>Home</NavLink></li>
                                    <li><NavLink to="/stuff" onClick={this.burgerToggle}>Stuff</NavLink></li>
                                    <li><NavLink to="/floorplan2" onClick={this.burgerToggle}>2nd floor</NavLink></li>
                                </ul>
                                </div>
                            </div>
                        </nav>
                        
                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route path="/stuff" component={Stuff} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/floorplan2" component={FloorPlan2} />
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
