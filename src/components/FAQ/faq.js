import React, {Component} from 'react';
import "./faq.css"

class faq extends Component {

    state = {};

    render() {
        return (
            <div className="background is-primary">
                <div className="spacer">FAQ</div>
                <div className="card-grid">
                    <div className="card card-1">
                        <h1 className="title-text-card">Do I need to be present on my house cleaning date?</h1>
                        <h1 className="subtitle-text-card">No you do not. Many customers chose not to be home. As long
                            as you have provided us a key, which is stored in a secure location, you do not need to be
                            home.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">How do you handle pets?</h1>
                        <h1 className="subtitle-text-card">We work well with them. If your pet is overly active you may
                            choose to crate your pet or put it in a spare bathroom. Just leave instructions with us and
                            we will gladly work around your pet. And with your permission we even give them a treat
                            before the cleaning to set them at ease.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">What forms of payment do you accept?</h1>
                        <h1 className="subtitle-text-card">We accept personal checks, Visa, Master Card and Discover. If
                            you pay by check leave it on the kitchen table the day of your service. If you have provided
                            us with a credit card we will charge you the day of your service.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">Can I Change my appointment date?</h1>
                        <h1 className="subtitle-text-card">Yes. Depending on availability you may change your
                            appointment date. Just give us a call and we will adjust your schedule. We do request a 48
                            hour notice.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">What is your refer a friend program?</h1>
                        <h1 className="subtitle-text-card">Refer a friend to our service and you will receive a $25
                            credit on your account. Simply call the office and we will take care of the rest.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">How many people will clean my home?</h1>
                        <h1 className="subtitle-text-card">We work most often in teams of 2, and occasionally 3 or 4 if
                            the need is there.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">Do I need to provide anything (eg: cleaning products)?</h1>
                        <h1 className="subtitle-text-card">No. Our teams will arrive with all the equipment and supplies
                            they need to do the job. If you want a particular cleaning solution used (eg: a special wood
                            floor cleaner), you can provide it. We will note this in your work order and use the
                            requested product. But, our supplies and solutions are professional strength and chosen for
                            their effectiveness.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">Do I need to do anything before the team arrives?</h1>
                        <h1 className="subtitle-text-card">Any organization of items would be helpful. This way, our
                            teams can focus on scrubbing, sanitizing, cleaning. They will organize items to some degree
                            to get to the job of cleaning. However, we’ve encountered floors full of toys, etc., and
                            this add substantially to the time to clean the house.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">Do I need to leave a tip?</h1>
                        <h1 className="subtitle-text-card">No, recurring customers do not leave a tip.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">When are your arrival times?</h1>
                        <h1 className="subtitle-text-card">We will provide you with an arrival window which will
                            generally be: 8-8:30, 10-12, 12-2, and 2-4. We know your time is important and pride
                            ourselves on being on time.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">What intervals can I arrange for recurring service?</h1>
                        <h1 className="subtitle-text-card">We have maid service intervals of every week, every 2,3, or 4
                            weeks. Biweekly (every other week) is by far the most common interval our customers choose,
                            followed by monthly and weekly.</h1>
                    </div>
                    <div className="card card-1">
                        <h1 className="title-text-card">Do you have contracts?</h1>
                        <h1 className="subtitle-text-card">No. You can cancel any time. We just ask for 48 hours notice
                            of cancellation. We expect to earn your business with every clean and we have a very high
                            customer retention rate. Our goal is to have you become a happy customer for years, not
                            months.</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default faq;
