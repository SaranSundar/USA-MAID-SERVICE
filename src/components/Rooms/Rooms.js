import React, {Component, Fragment} from 'react';
import "./Rooms.css"

class Rooms extends Component {

    state = {
        bgPos: 1
    };

    render() {
        let imgUrl = "RoomImages/clean" + this.state.bgPos + "min.jpeg";
        return (
            <Fragment>
                <div className='hero rooms-image'
                     style={{
                         backgroundImage: 'url(' + imgUrl + ')',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center center',
                         backgroundRepeat: 'no-repeat',
                         filter: "brightness(80%)",
                         position: "absolute"
                     }}
                     onLoad={console.log("IMAGE LOADED")}>
                </div>
                <div className="hero-body container has-text-centered is-overlay" style={{paddingTop: "100px"}}>
                    <h1 className="title is-size-1-desktop has-text-white">
                        WHAT WE CLEAN
                    </h1>
                    <h2 className="subtitle is-size-2-desktop has-text-white">
                        Fast, Efficient, Effective
                    </h2>
                </div>
                <div className="grid-rooms">
                    <div className="grid-item">
                        <img src="RoomImages/clean2min.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button>VIEW BEDROOM</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean3min.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button>Living Room</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean4min.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button>Bathroom</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean5min.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button>Kitchen</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Rooms;
