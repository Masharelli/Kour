import React from 'react';
import ReactWOW from 'react-wow';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="it-services-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Secure IT Solutions Services</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            <i className="flaticon-right"></i> 
                                            Get Started <span></span>
                                        </a> 
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="main-banner-image">
                                <img src="/img/banner-img1.png" alt="image" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;