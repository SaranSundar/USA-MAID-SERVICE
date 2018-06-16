import React, {Component} from 'react';
import SliderImage from "./SliderImage";

class SliderContainer extends Component {

    constructor(props) {
        super(props);
        let backgrounds = [];
        [1, 2, 3, 4].forEach((item) => {
                backgrounds.push("HomeImages/livingroom" + item + "min.jpg");
            }
        );
        let newBG = backgrounds.map(imgUrl => <SliderImage imgURL={imgUrl} content={this.props.content}/>);
        this.state = {
            bgPos: 0,
            backgrounds: newBG
        };
    }

    componentDidMount() {
        this.timer = setInterval(this.changeBackground, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    changeBackground = () => {
        if (this.state.bgPos + 1 >= this.state.backgrounds.length) {
            this.setState({bgPos: 0});
        } else {
            let currentState = this.state.bgPos;
            this.setState({bgPos: currentState + 1});
        }
    };

    render() {
        return this.state.backgrounds[this.state.bgPos];
    }
}

export default SliderContainer;
