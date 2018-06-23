import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class SliderContainer extends Component {

    render() {
        return(
            <Carousel style={styles} showStatus={false} autoPlay={true} showArrows={false} interval={10000} infiniteLoop={true} showIndicators={false} showThumbs={false} transitionTime={1200} stopOnHover={false}>
                <div>
                    <img src="HomeImages/livingroom1min.jpg" />
                </div>
                <div>
                    <img src="HomeImages/livingroom2min.jpg" />
                </div>
                <div>
                    <img src="HomeImages/livingroom3min.jpg" />
                </div>
                <div>
                    <img src="HomeImages/livingroom4min.jpg" />
                </div>
            </Carousel>
        )
    }
}

export default SliderContainer;
