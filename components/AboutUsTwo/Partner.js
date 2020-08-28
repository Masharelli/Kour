import React from 'react';
import ReactWOW from 'react-wow';

const Partner = () => {
    return (
        <div className="partner-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <img src="/img/partner/partner1.png" alt="image" />
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.2s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <img src="/img/partner/partner2.png" alt="image" />
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.3s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src="/img/partner/partner3.png" alt="image" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.4s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src="/img/partner/partner4.png" alt="image" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.5s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src="/img/partner/partner5.png" alt="image" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.6s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src="/img/partner/partner6.png" alt="image" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>

            <div className="divider white-color"></div>
        </div>
    )
}

export default Partner;