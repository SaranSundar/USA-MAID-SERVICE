import React, {Component} from 'react';
import "./Prices.css"

class Prices extends Component {

    state = {};

    render() {
        return (
            <div className='hero rooms-image'
                // style={{
                //     backgroundImage: 'url(' + imgUrl + ')',
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center center',
                //     backgroundRepeat: 'no-repeat',
                //     filter: "brightness(80%)",
                //     position: "relative"
                // }}
                 onLoad={console.log("IMAGE LOADED")}>
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
                    </div>
                    <div className="child-three">
                        <i className="fas fa-dollar-sign icons-three-img"/>
                    </div>
                    <div className="child-three">
                        <i className="fas fa-mobile-alt icons-three-img"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prices;
