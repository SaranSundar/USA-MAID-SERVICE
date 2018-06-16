import React, {Component} from 'react';
import "./Contact.css"

class Contact extends Component {

    state = {
        load: ""
    };

    //
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.load === "is-loading" && this.state.load === "") {
    //         setTimeout(alert("Your message has been sent."), 50);
    //     }
    // }


    sendEmail = () => {
        if (this.name.value === null || this.name.value === "" || this.email.value === null || this.email.value === "" || this.subject.value === null || this.subject.value === "" || this.message.value === null || this.message.value === "") {
            alert("One or more fields is empty. Please fill them all in.");
            return;
        }
        this.setState({load: "is-loading"});
        const templateParams = {
            name_field: this.name.value,
            email_field: this.email.value,
            subject_field: this.subject.value,
            message_field: this.message.value
        };
        console.log(templateParams);

        window.emailjs.send('default_service', 'template_lpksar1u', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.name.value = "";
                this.message.value = "Your message has been sent.";
                this.subject.value = "";
                this.email.value = "";
                this.setState({load: ""});
            }, (error) => {
                console.log('FAILED...', error);
                this.name.value = "";
                this.message.value = "Sorry there seems to have been an error, please try again later or give us a call!";
                this.subject.value = "";
                this.email.value = "";
                this.setState({load: ""});
            });
    };


    render() {
        return (
            <div className="Contact">
                <div className="contact-spacer">CONTACT &nbsp;US</div>
                <div className="contact-container">
                    <div className="contact-grid card-1">
                        <div>
                            <div className="contact-title">
                                USA HOME CLEANING SERVICES
                            </div>
                            <div className="contact-subtitle">
                                21695 Superior Lane
                                <br/>
                                Lake Forest, CA 92630
                                <br/>
                                Tel: 949-205-0993
                                <p className="areas-p">
                                    Areas currently serviced include <br/>Newport Beach, Irvine, Lake Forest, <br/>Mission
                                    Viejo,
                                    Laguna Hills, <br/>Laguna Beach and <br/>San Luis Obispo.</p>
                            </div>
                        </div>
                        <div className="contact-rightside">
                            <input className="name-field" placeholder="Name" ref={(x) => {
                                this.name = x;
                            }}/>
                            <input className="name-field" placeholder="Email" ref={(x) => {
                                this.email = x;
                            }}/>
                            <input className="name-field" placeholder="Subject" ref={(x) => {
                                this.subject = x;
                            }}/>
                            <textarea className="name-field" placeholder="Message" ref={(x) => {
                                this.message = x;
                            }}/>
                            <div className="contact-button">
                                <button className={"button is-primary " + this.state.load}
                                        onClick={this.sendEmail}>SEND
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
