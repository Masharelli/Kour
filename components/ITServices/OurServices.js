import React from 'react';

const OurServices = () => {
    return (
        <React.Fragment>
            {/* Service Left Image Style */}
            <div className="about-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <img src="/img/services/service1.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src="/img/star-icon.png" alt="image" /> Services
                                    </span>
                                    
                                    <h2>Cloud Hosting Services</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                    <ul className="about-list mb-0">
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Cloud Databases
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Website Hosting
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            File Storage
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Forex Trading
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            File Backups
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Remote Desktop
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Email Servers
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Hybrid Cloud
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Left Image Style */}

            {/* Service Right Image Style */}
            <div className="our-mission-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src="/img/star-icon.png" alt="image" /> Services
                                    </span>
                                    
                                    <h2>Design & Development</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                    <ul className="our-mission-list mb-0">
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Responsive Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            React Development
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Apps Development
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Laravel Development
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            UX/UI Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            E-commerce Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Web Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Print Ready Design
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-image">
                                <img src="/img/services/service2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Right Image Style */}
        </React.Fragment>
    )
}

export default OurServices;