import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import "./NavBar.css"

class NavBar extends Component {


    render() {
        return (
            <div className="NavBar card card-1">
                <header>
                    <nav id="menuToggle">
                        <input type="checkbox"/>
                        <span/>
                        <span/>
                        <span/>
                        <ul id="menu">
                            <Link to="/">
                                <li>
                                    <i className="fas fa-truck logo"/>
                                </li>
                            </Link>
                            <NavLink activeClassName={"selected"} exact={true} to="/">
                                <li>HOME</li>
                            </NavLink>
                            <NavLink activeClassName={"selected"} exact={true} to="/">
                                <li>WHAT WE CLEAN</li>
                            </NavLink>
                            <NavLink activeClassName={"selected"} exact={true} to="/">
                                <li>PRICES & SERVICES</li>
                            </NavLink>
                            <div className="rightSide">
                                <NavLink activeClassName={"selected"} exact={true} to="/">
                                    <li>FAQ</li>
                                </NavLink>
                                <NavLink activeClassName={"selected"} exact={true} to="/">
                                    <li>CONTACT US</li>
                                </NavLink>
                            </div>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}


export default NavBar;