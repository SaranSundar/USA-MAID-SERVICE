import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import BulmaNavBar from "./BulmaNavBar/BulmaNavBar";
import Rooms from "./Rooms/Rooms";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BulmaNavBar/>
                <Switch>
                    <Route path="/rooms" exact component={Rooms}/>
                    <Route path="/" exact component={Home}/>
                    <Redirect to="/"/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;