import React, {Component, Fragment} from "react";
import "./BulmaNavBar.css";
import {Link} from "react-router-dom";

document.addEventListener("DOMContentLoaded", function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener("click", function () {
                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
});

class BulmaNavBar extends Component {
    state = {
        showModal: ""
    };

    showInfo = () => {
        console.log("ACtiVE NOW");
        this.setState({showModal: "is-active"});
    };

    closeInfo = () => {
        this.setState({showModal: ""});
    };

    render() {
        return (
            <Fragment>
                <nav className="navbar is-transparent nav_on_top">
                    <div className="navbar-brand">
                        <button
                            className="navbar-item logo-truck"
                            onClick={() => this.showInfo()}
                        >
                            <i className="fas fa-truck" style={{fontSize: "40px"}}/>
                        </button>
                        <div
                            className="navbar-burger burger"
                            data-target="navbarExampleTransparentExample"
                        >
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/">
                                Home
                            </Link>
                            <Link className="navbar-item" to="/rooms">
                                What We Clean
                            </Link>
                            <Link className="navbar-item" to="/prices">
                                Prices & Services
                            </Link>
                        </div>

                        <div className=" navbar-end">
                            <div className=" navbar-item">
                                <div className=" field is-grouped">
                                    <p className=" control">
                                        <Link
                                            className=" bd-tw-button button"
                                            to="/faq"
                                        >
                      <span className="icon">
                        <i className="fab fa-twitter"/>
                      </span>
                                            <span>FAQ</span>
                                        </Link>
                                    </p>
                                    <p className="control">
                                        <a
                                            className="button is-primary"
                                            href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip"
                                        >
                      <span className="icon">
                        <i className="fas fa-download"/>
                      </span>
                                            <span>Contact</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={"modal " + this.state.showModal}>
                    <div className="modal-background" onClick={this.closeInfo}/>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Service Locations</p>
                        </header>
                        <section className="modal-card-body">
                            <p className="image is-4by3">
                                <img src={"HomeImages/maps.png"} alt="Room Image"/>
                            </p>
                            <p className="areas">
                                Areas currently serviced include Newport Beach, Irvine, Lake
                                Forest, Mission Viejo, Laguna Hills, Laguna Beach and San Luis
                                Obispo.
                            </p>
                        </section>
                    </div>
                    <button
                        className="modal-close is-large"
                        aria-label="close"
                        onClick={this.closeInfo}
                    />
                </div>
            </Fragment>
        );
    }
}

export default BulmaNavBar;
