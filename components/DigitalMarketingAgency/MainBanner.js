import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

const MainBanner = () => {
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">Digital Marketing</span>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Digital Agency with Excellence Service</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!</p>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link href="/about-us-two">
                                        <a className="default-btn">
                                            <i className="flaticon-right"></i> 
                                            About Us 
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="banner-wrapper-image">
                                <img src="/img/banner-img3.png" alt="image" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;