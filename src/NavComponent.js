import React, { Component } from "react";
import ReactDOM from "react-dom";

class NavComponent extends Component {
    render() {
        return (
            <nav>
                <div className="navWide">
                    <ul >
                        <li><a href="#">Home</a></li>
                        <li><a href="#/stuff">Stuff</a></li>
                        <li><a href="#/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="navNarrow">
                    <i
                        className="fa fa-bars fa-2x"
                        onClick={this.burgerToggle}
                    />

                    <ul className="narrowLinks">
                        <li><a href="#" onClick={this.burgerToggle}>
                            Home
                        </a></li>
                        <br />
                        <li><a href="#/stuff" onClick={this.burgerToggle}>
                            Stuff
                        </a></li>
                        <br />
                        <li><a href="#/contact" onClick={this.burgerToggle}>
                            Contact
                        </a></li>
                    </ul>
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
