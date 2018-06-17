import React, {Component} from 'react';
import "./Prices.css"

class Prices extends Component {

    state = {};

    render() {
        return (
            <div className='hero rooms-image'>
                <div className="hero-body container has-text-centered is-overlay">
                    <h1 className="quote">
                        "The most excellent service for the most affordable cost."
                    </h1>
                    <h1 className="quote-subtitle">
                        - Dawn & Tony, Co-Founders.
                    </h1>
                    <div style={{
                        marginTop: "50px",
                        width: "130px",
                        height: "1px",
                        background: "red",
                        position: "relative",
                        left: "44%"
                    }}/>
                </div>
                <div className="icons-three">
                    <div className="child-three">
                        <i className="fas fa-home icons-three-img"/>
                        <h1>How we determine the price</h1>
                    </div>
                    <div className="child-three">
                        <i className="fas fa-dollar-sign icons-three-img"/>
                        <h1>General Price Estimates</h1>
                    </div>
                    <div className="child-three">
                        <i className="fas fa-mobile-alt icons-three-img"/>
                        <h1>Contact Us At Any Time</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prices;
