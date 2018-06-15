import React, {Component, Fragment} from 'react';
import "./Rooms.css"

class Rooms extends Component {

    state = {
        bgPos: 0,
        showModal: "",
        imgPath: "",
        width: 0, height: 0
    };

    updateWindowDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    showInfo = (num) => {
        this.setState({showModal: "is-active", imgPath: "clean" + num + ".jpg", bgPos: num})
    };

    closeInfo = () => {
        this.setState({showModal: "", imgPath: "", bgPos: 0})
    };

    getList = () => {
        let shouldOverlay = this.state.width > 660 ? "is-overlay" : "";
        shouldOverlay = "list-style " + shouldOverlay;
        let bedrooms = <ul className={shouldOverlay}>
            <li className="animated fadeInDown">Floors vacuumed</li>
            <li className="animated fadeInDown">Solid surfaces dusted (nightstands, dressers)</li>
            <li className="animated fadeInDown">Mirrors polished</li>
            <li className="animated fadeInDown">Lamps dusted</li>
            <li className="animated fadeInDown">High/low dusting every visit or as needed</li>
            <li className="animated fadeInDown">Ceiling fans dusted every visit or as needed</li>
            <li className="animated fadeInDown">Closets vacuumed</li>
            <li className="animated fadeInDown">Area rugs vacuumed or shaken outside</li>
        </ul>;
        let kitchens = <ul className={shouldOverlay}>
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
        let family_rooms = <ul className={shouldOverlay}>
            <li className="animated fadeInDown">Floors vacuumed</li>
            <li className="animated fadeInDown">Hardwood floors cleaned with hardwood floor cleaner</li>
            <li className="animated fadeInDown">All Furniture dusted</li>
            <li className="animated fadeInDown">High/low dusting every other visit or as needed</li>
            <li className="animated fadeInDown">All molding dusted every other visit or as needed</li>
            <li className="animated fadeInDown">Windows trim and sills dusted</li>
            <li className="animated fadeInDown">Ceiling fans and hanging light fixtures dusted</li>
            <li className="animated fadeInDown">Blinds dusted with vacuum or swiffer as needed</li>
            <li className="animated fadeInDown">Glass panes cleaned (puppy nose prints and little people finger
                prints)
            </li>
            <li className="animated fadeInDown">Area rugs vacuumed or shaken outside</li>
        </ul>;
        let bathrooms = <ul className={shouldOverlay}>
            <li className="animated fadeInDown">Floors vacuumed and mopped</li>
            <li className="animated fadeInDown">Shower stalls cleaned with soap residue remover, disinfected and any
                mold spots treated
            </li>
            <li className="animated fadeInDown">Shower doors cleaned and polished</li>
            <li className="animated fadeInDown">Tubs disinfected and soap residue removed</li>
            <li className="animated fadeInDown">Toilets disinfected - cleaned inside & outside</li>
            <li className="animated fadeInDown">Vanities disinfected</li>
            <li className="animated fadeInDown">Plumbing fixtures wiped down</li>
            <li className="animated fadeInDown">Mirrors polished</li>
            <li className="animated fadeInDown">Baseboards, Cabinets fronts, wall switches, and door knobs damp wiped
                with disinfectant
            </li>
            <li className="animated fadeInDown">Light fixtures wiped down and shined</li>
        </ul>;
        if (this.state.bgPos === 2 || this.state.bgPos === 3) {
            return bedrooms;
        }
        else if (this.state.bgPos === 6) {
            return family_rooms;
        }
        else if (this.state.bgPos === 4) {
            return kitchens;
        }
        else if (this.state.bgPos === 1) {
            return bathrooms;
        }
        else if (this.state.bgPos === 5) {
            return family_rooms;
        }
        return bathrooms;
    };

    render() {
        let imgUrl = "RoomImages/bgclean.jpeg";
        return (
            <Fragment>
                <div className='hero rooms-image'
                     style={{
                         backgroundImage: 'url(' + imgUrl + ')',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center center',
                         backgroundRepeat: 'no-repeat'
                     }}
                >
                </div>
                <div className="has-text-centered is-overlay center-child">
                    <h1 className="title is-size-1-desktop has-text-white">
                        WHAT WE CLEAN
                    </h1>
                    <h2 className="subtitle is-size-2-desktop has-text-white">
                        Fast. Efficient. Effective.
                    </h2>
                </div>

                <div className="grid-rooms">
                    <div className="grid-item">
                        <img src="RoomImages/clean2.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(2)}>Bedroom</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean5.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(5)}>Living Room</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean1.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(1)}>Bathroom</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean4.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(4)}>Kitchen</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean6.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(6)}>Study Room</button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src="RoomImages/clean3.jpg"/>
                        <div className="item__overlay colorWhite">
                            <button onClick={() => this.showInfo(3)}>Closets</button>
                        </div>
                    </div>
                    <div className={"modal " + this.state.showModal}>
                        <div className="modal-background" onClick={this.closeInfo}/>
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <p className="modal-card-title">What We Clean</p>
                            </header>
                            <section className="modal-card-body">
                                <div className="image is-4by3">
                                    <img className="darken" src={"RoomImages/" + this.state.imgPath} alt="Room Image"/>
                                    {this.getList()}
                                </div>

                            </section>
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={this.closeInfo}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Rooms;
