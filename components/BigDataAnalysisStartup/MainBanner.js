import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

const MainBanner = () => {
    return (
        <div className="banner-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="banner-wrapper-content">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Managed Analytics and Data Analysis Platform</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!</p>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link href="/about-us">
                                        <a className="default-btn">
                                            <i className="flaticon-right"></i> 
                                            About Us <span></span>
                                        </a>
                                    </Link>
                                    <Link href="/profile-authentication">
                                        <a className="default-btn">
                                            <i className="flaticon-tick"></i> 
                                            Get Started <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="banner-wrapper-animation-image">
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-four/banner-four-shape1.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-four/banner-four-shape2.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-four/banner-four-shape3.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-four/banner-four-shape4.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-four/banner-four-shape5.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src="/img/main-banner/banner-four/banner-four-shape6.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-four/banner-four-shape7.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <img src="/img/main-banner/banner-four/banner-four-shape8.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-four/banner-four-shape9.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-four/banner-four-shape10.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src="/img/main-banner/banner-four/banner-four-main-img.png" alt="image" />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;