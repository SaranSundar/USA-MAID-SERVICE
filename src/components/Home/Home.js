import React, {Component} from 'react';
import "./Home.css"

class Home extends Component {

    state = {
        bgPos: 1
    };

    componentDidMount() {
        setInterval(this.changeBackground, 3000);
    }

    changeBackground = () => {
        let backgrounds = 4;
        if (this.state.bgPos + 1 > backgrounds) {
            this.setState({bgPos: 1});
        }
        else {
            let currentState = this.state.bgPos;
            this.setState({bgPos: currentState + 1});
        }
    };


    render() {
        let imgUrl = "HomeImages/livingroom" + this.state.bgPos + "min.jpg";
        return (
            <div className='hero-image darken-overlay'
                 style={{
                     backgroundImage: 'url(' + imgUrl + ')',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center center',
                     backgroundRepeat: 'no-repeat',
                 }}
                 onLoad={console.log("IMAGE LOADED")}>
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
            </div>

        );
    }
}

export default Home;
