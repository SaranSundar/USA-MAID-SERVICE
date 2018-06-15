import React, {Component} from "react";
import "./Home.css";
import SliderContainer from "../SliderImage/SliderContainer";

class Home extends Component {


    render() {
        let content = (
            <div className="is-overlay">
        <span className="hero-text container has-text-centered">
          <p className="title has-text-white is-size-2-desktop animated fadeInDownBig">
            USA HOME CLEANING SERVICES
          </p>
          <p className="title has-text-white is-size-3-desktop animated fadeInUpBig">
            Cleaning Homes Since 1993
          </p>
        </span>
            </div>
        );
        return <SliderContainer content={content}/>
    }
}

export default Home;
