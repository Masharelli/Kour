import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

const MainBanner = () => {
    return (
        <div className="main-banner-area">
            <div className="container">
                <div className="banner-area-content">
                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                        <h1>Big Data, AI & ML Consulting!</h1>
                    </ReactWOW>

                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                        <p>Get all kinds of hi-tech decesion making consulting services using Artificial Intelligence and Machine Learning from one umbrella.</p>
                    </ReactWOW>

                    <ReactWOW delay='.1s' animation='fadeInRight'>
                        <div className="banner-btn">
                            <Link href="/contact">
                                <a className="default-btn">
                                    <i className="flaticon-web"></i> 
                                    Work With Us <span></span>
                                </a>
                            </Link>
                        </div>
                    </ReactWOW>

                    <ReactWOW delay='.1s' animation='fadeInUp'>
                        <img src="/img/main-banner/main-pic1.png" alt="image" />
                    </ReactWOW>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;