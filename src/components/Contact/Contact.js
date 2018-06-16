import React, {Component} from 'react';
import "./Contact.css"

class Contact extends Component {

    state = {};

    render() {
        return (
            <div className="Contact">
                <div className="spacer">CONTACT US</div>
                <div className="contact-grid">
                    <div>
                        TEXT
                    </div>
                    <div>
                        INPUT
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
