import React from 'react';
import ReactWOW from 'react-wow';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="hero-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="hero-banner-content">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Learn Data Science</h1>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>Keeping your skills up to date is essential and learning Data Science including oportunites on Big Data can drive you to become extraordinary professionals.</p>
                            </ReactWOW>
                    
                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link href="/events">
                                        <a className="default-btn">
                                            <i className="flaticon-right"></i> 
                                            Explore Bootcamps <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="hero-banner-animation-image">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <img src="/img/main-banner/banner-three/banner-three-shape1.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src="/img/main-banner/banner-three/banner-three-shape2.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src="/img/main-banner/banner-three/banner-three-shape3.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-three/banner-three-shape4.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <img src="/img/main-banner/banner-three/banner-three-shape5.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-three/banner-three-shape6.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-three/banner-three-shape7.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-three/banner-three-shape8.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-three/banner-three-shape9.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src="/img/main-banner/banner-three/banner-three-shape10.png" alt="image" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src="/img/main-banner/banner-three/banner-three-main-img.png" alt="image" />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape7">
                <img src="/img/shape/vector-shape7.png" alt="image" />
            </div>
    
            <div className="vector-shape8">
                <img src="/img/shape/vector-shape8.png" alt="image" />
            </div>
        </div>
    )
}

export default MainBanner;