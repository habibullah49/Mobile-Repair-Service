import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                    <div className="the-heading-part py-4 d-flex align-content-end flex-wrap">
                        <h1>Mobile Repair</h1>
                        <p>Mobile phone repair technicians run tests to assess the mobile phones' functionality, install and update phone software, troubleshoot wiring problems, and replace damaged parts and components such as batteries, LCD screens, keypads, buttons</p><br />
                        <button className="edit">Show Our Service</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;