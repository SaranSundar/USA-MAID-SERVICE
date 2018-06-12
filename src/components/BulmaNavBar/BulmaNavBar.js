import React, {Component} from "react";
import "./BulmaNavBar.css";
import {Link} from "react-router-dom";

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

class BulmaNavBar extends Component {
    state = {};

    render() {
        return (
            <nav className="navbar is-transparent nav_on_top">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img
                            src="https://bulma.io/images/bulma-logo.png"
                            alt="Bulma: a modern CSS framework based on Flexbox"
                            width="112"
                            height="28"
                        />
                    </a>
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
                        <a className="navbar-item" href="https://bulma.io/">
                            Prices & Services
                        </a>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a
                                        className="bd-tw-button button"
                                        data-social-network="Twitter"
                                        data-social-action="tweet"
                                        data-social-target="http://localhost:4000"
                                        target="_blank"
                                        href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                                    >
                    <span className="icon">
                      <i className="fab fa-twitter"/>
                    </span>
                                        <span>FAQ</span>
                                    </a>
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
        );
    }
}

export default BulmaNavBar;
