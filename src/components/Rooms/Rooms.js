import React, {Component, Fragment} from 'react';
import "./Rooms.css"

class Rooms extends Component {

    state = {
        bgPos: 1,
        showModal: "",
        imgPath: ""
    };

    showInfo = (num) => {
        this.setState({showModal: "is-active", imgPath: "clean" + num + "min.jpg"})
    };

    closeInfo = () => {
        this.setState({showModal: "", imgPath: ""})
    };

    getList = () => {
        let bedrooms = <ul className="list-style is-overlay">
            <li className="animated fadeInDown">Floors vacuumed</li>
            <li className="animated fadeInDown">Solid surfaces dusted (nightstands, dressers)</li>
            <li className="animated fadeInDown">Mirrors polished</li>
            <li className="animated fadeInDown">Lamps dusted</li>
            <li className="animated fadeInDown">High/low dusting every visit or as needed</li>
            <li className="animated fadeInDown">Ceiling fans dusted every visit or as needed</li>
            <li className="animated fadeInDown">Closets vacuumed</li>
            <li className="animated fadeInDown">Area rugs vacuumed or shaken outside</li>
        </ul>;
        let kitchens = <ul className="list-style is-overlay">
            <li className="animated fadeInDown">Floor vacuumed and mopped with all-purpose cleaner</li>
            <li className="animated fadeInDown">Stove top cleaned of drips or spills</li>
            <li className="animated fadeInDown">Microwave cleaned inside and outside</li>
            <li className="animated fadeInDown">Counters wiped with an all-purpose cleaner (items on counter will be
                moved - not wiped around)
            </li>
            <li className="animated fadeInDown">Appliances to be cleaned (including polishing stainless steel
                refrigerators, dishwashers and ovens)
            </li>
            <li className="animated fadeInDown">Sink cleaned and polished</li>
            <li className="animated fadeInDown">Cabinets spot wiped for spills and drips</li>
            <li className="animated fadeInDown">High/low dusting</li>
        </ul>;
        return kitchens;
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
                        Fast. Efficient. Effective.
                    </h2>
                </div>
                <div className="grid-rooms">
                    <div className="grid-item">
                        <img src="RoomImages/clean2min.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(2)}>Bedroom</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean3min.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(3)}>Living Room</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean4min.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(4)}>Bathroom</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean5min.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(5)}>Kitchen</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean2min.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(2)}>Kitchen</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean2min.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(2)}>Kitchen</button>
                        </div>
                    </div>
                    <div className={"modal " + this.state.showModal}>
                        <div className="modal-background" onClick={this.closeInfo}></div>
                        <div className="modal-content">
                            <p className="image is-4by3">
                                <img className="darken" src={"RoomImages/" + this.state.imgPath} alt="Room Image"/>
                            </p>
                            {this.getList()}
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={this.closeInfo}></button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Rooms;
