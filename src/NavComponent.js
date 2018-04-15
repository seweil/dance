import React, { Component } from "react";
import ReactDOM from "react-dom";

class NavComponent extends Component {
    render() {
        return (
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <a href="#">Home</a>
                        <a href="#/stuff">Stuff</a>
                        <a href="#/contact">Contact</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <i
                        className="fa fa-bars fa-2x"
                        onClick={this.burgerToggle}
                    />
                
                    <div className="narrowLinks">
                        <a href="#" onClick={this.burgerToggle}>
                            Home
                        </a>
                        <br/>
                        <a href="#/stuff" onClick={this.burgerToggle}>
                            Stuff
                        </a>
                        <br/>
                        <a href="#/contact" onClick={this.burgerToggle}>
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        );
    }

    burgerToggle() {
        let linksEl = document.querySelector(".narrowLinks");
        if (linksEl.style.display === "block") {
            linksEl.style.display = "none";
        } else {
            linksEl.style.display = "block";
        }
    }
}

export default NavComponent;
